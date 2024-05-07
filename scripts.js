// @ts-check

import { state, Task } from "./modules/state.js";

window.addEventListener('error', () => {
  document.body.innerHTML = 'Something went very very wrong. Please refresh.'
})

// addTaskToHtml('test')
// updateHtmlTask("test", { })
