# 📌 To-Do List (HTML • CSS • JavaScript)

A clean, accessible To-Do app that demonstrates DOM manipulation, state management, localStorage persistence, and basic UI patterns.

## ✨ Features
- Add, edit, complete, and delete tasks
- Filters: **All / Active / Completed**
- **Clear Completed** in one click
- **Persistent** tasks via `localStorage`
- Accessible labels + polite live region updates
- Keyboard-friendly (Enter to save, Esc to cancel in edit mode)

## 🧠 How It Works (Overview)
- **State** lives in a JS object: `state = { todos: [...], filter: 'all' }`.
- **localStorage** saves `todos` under the key `techin_todos_v1`.
- **Event delegation** on the `<ul>` handles toggling, editing, and deleting in one place.
- **Render** builds the `<li>` items based on the current filter and updates the “items left” count.
- **Security**: user-entered text is escaped to prevent HTML injection.

## 📬 Contribution
Feedback and ideas welcome!
