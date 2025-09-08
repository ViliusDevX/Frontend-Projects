const STORAGE_KEY = "techin_todos_v1";

const state = {
  todos: loadTodos(),
  filter: "all", // 'all' | 'active' | 'completed'
};

function loadTodos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch { return []; }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
}

const $form = document.getElementById("todo-form");
const $input = document.getElementById("todo-input");
const $list = document.getElementById("todo-list");
const $count = document.getElementById("count");
const $clearCompleted = document.getElementById("clear-completed");
const $filterBtns = [...document.querySelectorAll("[data-filter]")];

render();

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = $input.value.trim();
  if (!title) return;
  state.todos.push({ id: crypto.randomUUID(), title, completed: false, createdAt: Date.now() });
  $input.value = "";
  save(); render();
});

$list.addEventListener("click", (e) => {
  const li = e.target.closest("li.todo");
  if (!li) return;
  const id = li.dataset.id;

  if (e.target.matches('input[type="checkbox"]')) {
    const t = state.todos.find(t => t.id === id);
    t.completed = e.target.checked;
    save(); render();
  }

  if (e.target.closest(".icon-delete")) {
    state.todos = state.todos.filter(t => t.id !== id);
    save(); render();
  }

  if (e.target.closest(".icon-edit")) {
    enterEditMode(li, id);
  }

  if (e.target.closest(".icon-save")) {
    const input = li.querySelector(".edit-input");
    const newTitle = input.value.trim();
    if (newTitle) {
      const t = state.todos.find(t => t.id === id);
      t.title = newTitle;
      save(); render();
    } else {
      input.focus();
    }
  }

  if (e.target.closest(".icon-cancel")) render();
});

$list.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.classList.contains("edit-input")) {
    e.preventDefault();
    e.target.closest(".todo").querySelector(".icon-save").click();
  }
  if (e.key === "Escape" && e.target.classList.contains("edit-input")) {
    e.preventDefault(); render();
  }
});

$filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    state.filter = btn.dataset.filter;
    $filterBtns.forEach(b => b.classList.toggle("active", b === btn));
    render();
  });
});

$clearCompleted.addEventListener("click", () => {
  state.todos = state.todos.filter(t => !t.completed);
  save(); render();
});

function render() {
  const filtered = state.todos.filter(t =>
    state.filter === "all" ? true :
    state.filter === "active" ? !t.completed : t.completed
  );

  $list.innerHTML = filtered.map(todoToHTML).join("");
  const left = state.todos.filter(t => !t.completed).length;
  $count.textContent = `${left} item${left !== 1 ? "s" : ""} left`;
}

function todoToHTML(t) {
  return `
    <li class="todo ${t.completed ? "completed" : ""}" data-id="${t.id}">
      <input type="checkbox" ${t.completed ? "checked" : ""} aria-label="Mark complete" />
      <label>${escapeHTML(t.title)}</label>
      <div class="actions">
        <button class="icon-btn icon-edit" aria-label="Edit">Edit</button>
        <button class="icon-btn icon-delete" aria-label="Delete">Delete</button>
      </div>
    </li>
  `;
}

function enterEditMode(li, id) {
  const t = state.todos.find(t => t.id === id);
  li.innerHTML = `
    <input type="checkbox" ${t.completed ? "checked" : ""} disabled />
    <input class="edit-input" value="${escapeAttr(t.title)}" aria-label="Edit task title" />
    <div class="actions">
      <button class="icon-btn icon-save" aria-label="Save">Save</button>
      <button class="icon-btn icon-cancel" aria-label="Cancel">Cancel</button>
    </div>
  `;
  const input = li.querySelector(".edit-input");
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
}

function escapeHTML(s) {
  return s.replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
}
function escapeAttr(s) { return escapeHTML(s); }
