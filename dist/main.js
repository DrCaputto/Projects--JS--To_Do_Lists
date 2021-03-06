/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM/header.js":
/*!***************************!*\
  !*** ./src/DOM/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = document.createElement('header');\n\nconst h1 = document.createElement('h1');\nh1.textContent = 'TODO LIST';\n\nheader.appendChild(h1);\n\nconst addTaskBtn = document.createElement('button');\naddTaskBtn.type = 'button';\naddTaskBtn.textContent = 'Add task';\naddTaskBtn.id = 'add-task-btn';\n\naddTaskBtn.addEventListener('click', () => {\n  const modal = document.querySelector('#task-modal');\n  modal.classList.remove('hide');\n});\n\nheader.appendChild(addTaskBtn);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://to_do_lists/./src/DOM/header.js?");

/***/ }),

/***/ "./src/DOM/main.js":
/*!*************************!*\
  !*** ./src/DOM/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst main = document.createElement('main');\n\nconst h2 = document.createElement('h2');\nh2.textContent = 'DEFAULT';\nh2.id = 'current-project';\nmain.appendChild(h2);\n\nconst tasksDiv = document.createElement('div');\ntasksDiv.className = 'tasks';\nmain.appendChild(tasksDiv);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n//# sourceURL=webpack://to_do_lists/./src/DOM/main.js?");

/***/ }),

/***/ "./src/DOM/project-modal.js":
/*!**********************************!*\
  !*** ./src/DOM/project-modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst projectModal = document.createElement('div');\nprojectModal.classList = 'modal hide';\nprojectModal.id = 'project-modal';\nprojectModal.innerHTML = `\n  <div class=\"modal-content\">\n    <form id=\"project-form\">\n      <label>\n        Title\n        <input\n          type=\"text\"\n          placeholder=\"Title\"\n          name=\"title\"\n          required\n        >\n      </label>\n      <button type=\"submit\" id=\"submit-project\">\n        Add Project\n      </button>\n    </form>\n  </div>\n  `\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModal);\n\n//# sourceURL=webpack://to_do_lists/./src/DOM/project-modal.js?");

/***/ }),

/***/ "./src/DOM/sidebar.js":
/*!****************************!*\
  !*** ./src/DOM/sidebar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-modal */ \"./src/DOM/project-modal.js\");\n\n\nconst sidebar = document.createElement('div');\nsidebar.className = 'sidebar';\n\nsidebar.appendChild(_project_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nconst h2 = document.createElement('h2');\nh2.textContent = 'PROJECTS';\nsidebar.appendChild(h2);\n\nconst addProjectBtn = document.createElement('button');\naddProjectBtn.type = 'button';\naddProjectBtn.id = 'add-project-btn';\naddProjectBtn.innerText = 'Add Project';\naddProjectBtn.addEventListener('click', () => {\n  _project_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].classList.remove('hide');\n});\nsidebar.appendChild(addProjectBtn);\n\nconst projectList = document.createElement(\"ul\");\nprojectList.className = \"project-list\";\n\nsidebar.appendChild(projectList);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);\n\n//# sourceURL=webpack://to_do_lists/./src/DOM/sidebar.js?");

/***/ }),

/***/ "./src/DOM/task-modal.js":
/*!*******************************!*\
  !*** ./src/DOM/task-modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst taskModal = document.createElement('div');\ntaskModal.classList = 'modal hide';\ntaskModal.id = 'task-modal';\ntaskModal.innerHTML = `\n  <div class=\"modal-content\">\n    <form id=\"task-form\">\n      <label>\n        Title\n        <input\n          type=\"text\"\n          placeholder=\"Title\"\n          name=\"title\"\n          required\n        >\n      </label>\n      <label>\n        Description\n        <textarea\n          placeholder=\"Description\"\n          name=\"description\"\n        ></textarea>\n      </label>\n      <label>\n       Due date\n        <input\n          type=\"date\"\n          name=\"dueDate\"\n          required\n        >\n      </label>\n      <label>\n      Priority\n        <select name=\"priority\">\n          <option value=\"high\">\n            High\n          </option>\n          <option value=\"medium\">\n            Medium\n          </option>\n          <option value=\"low\">\n            Low\n          </option>\n        </select>\n      </label>\n      <button type=\"submit\" id=\"submit-task\">\n        Add Task\n      </button>\n    </form>\n  </div>\n  `\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskModal);\n\n//# sourceURL=webpack://to_do_lists/./src/DOM/task-modal.js?");

/***/ }),

/***/ "./src/display-controller.js":
/*!***********************************!*\
  !*** ./src/display-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-controller */ \"./src/project-controller.js\");\n\n\nconst displayController = (() => {\n  const generateProjects = () => {\n    const projectList = document.querySelector('.project-list');\n    projectList.innerHTML = '';\n\n    const projects = _project_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects();\n\n    projects.forEach((p) => {\n      const listItem = document.createElement('li');\n      listItem.className = 'project';\n      listItem.dataset.id = p.id;\n\n      const itemName = document.createElement('span');\n      itemName.textContent = p.name;\n      itemName.addEventListener('click', () => {\n        _project_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setCurrentProject(listItem.dataset.id);\n        const currentProject = document.querySelector('#current-project');\n        currentProject.textContent = _project_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject()\n          .name.toUpperCase();\n        generateTasks();\n      });\n\n      listItem.appendChild(itemName);\n\n      const deleteBtn = document.createElement('button');\n      deleteBtn.type = 'button';\n      deleteBtn.textContent = 'Delete';\n      deleteBtn.addEventListener('click', () => {\n        if (_project_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentIndex() == p.id) {\n          _project_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setCurrentProject(0);\n          generateTasks();\n        }\n        _project_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProjectById(p.id);\n        generateProjects();\n      });\n      listItem.appendChild(deleteBtn);\n\n      projectList.appendChild(listItem);\n    });\n  };\n\n  const generateTasks = () => {\n    const tasksDiv = document.querySelector('.tasks');\n    tasksDiv.innerHTML = '';\n\n    const project = _project_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject();\n    project.tasks.forEach((t, index) => {\n      const task = document.createElement('div');\n      task.className = 'task';\n      task.dataset.index = index;\n\n      const taskInfo = document.createElement('div');\n      taskInfo.className = 'task-info';\n\n      const title = document.createElement('span');\n      title.id = 'task-title';\n      title.textContent = t.title;\n      taskInfo.appendChild(title);\n\n      const dueDate = document.createElement('span');\n      dueDate.textContent = `Due: ${t.dueDate}`;\n      taskInfo.appendChild(dueDate);\n\n      const priority = document.createElement('span');\n      priority.textContent = `Priority: ${t.priority}`;\n      taskInfo.appendChild(priority);\n\n      const completedLabel = document.createElement('label');\n      completedLabel.textContent = 'Completed: ';\n      const completed = document.createElement('input');\n      completed.type = 'checkbox';\n      completed.checked = t.completed;\n\n      completed.addEventListener('click', (e) => {\n        e.stopPropagation();\n        const curTask = _project_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTaskByIndex(index);\n        curTask.toggle();\n        if (curTask.completed) {\n          task.classList.add('completed-task');\n        } else {\n          task.classList.remove('completed-task');\n        }\n      });\n\n      completedLabel.appendChild(completed);\n      taskInfo.appendChild(completedLabel);\n\n      const deleteTaskBtn = document.createElement('button');\n      deleteTaskBtn.type = 'button';\n      deleteTaskBtn.innerText = 'Delete';\n      deleteTaskBtn.addEventListener('click', (e) => {\n        e.stopPropagation();\n        _project_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTaskByIndex(index);\n        generateTasks();\n      });\n\n      taskInfo.appendChild(deleteTaskBtn);\n\n      task.appendChild(taskInfo);\n\n      const taskDescription = document.createElement('div');\n      taskDescription.classList = 'task-description hide';\n      const description = document.createElement('textarea');\n      description.textContent = t.description;\n\n      description.addEventListener('click', (e) => {\n        e.stopPropagation();\n      });\n\n      description.addEventListener('focusout', (e) => {\n        const { value } = e.target;\n        _project_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateTaskDescription(index, value);\n      });\n\n      taskDescription.appendChild(description);\n\n      task.appendChild(taskDescription);\n\n      task.addEventListener('click', () => {\n        taskDescription.classList.toggle('hide');\n      });\n\n      tasksDiv.appendChild(task);\n    });\n\n    const projectTitle = document.querySelector('#current-project');\n    projectTitle.textContent = _project_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject()\n      .name.toUpperCase();\n  };\n\n  return { generateProjects, generateTasks };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n//# sourceURL=webpack://to_do_lists/./src/display-controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DOM_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/header */ \"./src/DOM/header.js\");\n/* harmony import */ var _DOM_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/main */ \"./src/DOM/main.js\");\n/* harmony import */ var _DOM_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM/sidebar */ \"./src/DOM/sidebar.js\");\n/* harmony import */ var _DOM_task_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/task-modal */ \"./src/DOM/task-modal.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-controller */ \"./src/project-controller.js\");\n/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display-controller */ \"./src/display-controller.js\");\n\n\n\n\n\n\n\n\n\ndocument.body.appendChild(_DOM_task_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\ndocument.body.appendChild(_DOM_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ndocument.body.appendChild(_DOM_sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\ndocument.body.appendChild(_DOM_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nconst makeDefaultProjects = () => {\n  _project_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"].createProject('Default');\n  let newTask = new _task__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('Some task', 'Do this task', '2022-02-22', 'high');\n  _project_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addTask(newTask);\n  newTask = new _task__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('Some other task', 'Maybe do this one', '2022-02-23', 'low');\n  _project_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addTask(newTask);\n  _project_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"].createProject('New Project');\n  _project_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"].setCurrentProject(1);\n  newTask = new _task__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('Task in other project', 'Do it if you wanna', '2022-03-03', 'medium');\n  _project_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addTask(newTask);\n  _project_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"].setCurrentProject(0);\n};\n\n_project_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getFromStorage();\nif (_project_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getProjects().length === 0) {\n  makeDefaultProjects();\n} else {\n  _display_controller__WEBPACK_IMPORTED_MODULE_7__[\"default\"].generateProjects();\n}\n_display_controller__WEBPACK_IMPORTED_MODULE_7__[\"default\"].generateTasks();\n\nconst taskForm = _DOM_task_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].querySelector('#task-form');\ntaskForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const values = e.target.elements;\n  const newTask = new _task__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\n    values.title.value,\n    values.description.value,\n    values.dueDate.value,\n    values.priority.value\n  );\n  _project_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addTask(newTask);\n  _DOM_task_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].classList.add('hide');\n  taskForm.reset();\n});\n\nconst projectModal = document.querySelector('#project-modal');\nconst projectForm = document.querySelector('#project-form');\nprojectForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const values = e.target.elements;\n  _project_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"].createProject(values.title.value);\n  projectForm.reset();\n  projectModal.classList.add('hide');\n});\n\n//# sourceURL=webpack://to_do_lists/./src/index.js?");

/***/ }),

/***/ "./src/local-storage-controller.js":
/*!*****************************************!*\
  !*** ./src/local-storage-controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nconst localStorageController = (() => {\n  const unserializeProject = (p) => {\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('');\n    Object.assign(newProject, p);\n    return newProject;\n  };\n\n  const unserializeTask = (t) => {\n    const newTask = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('', '', '', '');\n    Object.assign(newTask, t);\n    return newTask;\n  };\n\n  const getLocalStorage = () => {\n    const local = JSON.parse(localStorage.getItem('myProjects'));\n    if (typeof local !== 'undefined' && local) {\n      let unserialized = local.map((p) => unserializeProject(p));\n      unserialized = unserialized.map((p) => {\n        p.tasks = p.tasks.map((t) => unserializeTask(t));\n        return p;\n      });\n      return unserialized;\n    }\n    return [];\n  };\n\n  const updateLocalStorage = (projects) => {\n    localStorage.setItem('myProjects', JSON.stringify(projects));\n  };\n\n  const clearLocalStorage = () => {\n    localStorage.clear();\n  };\n\n  return { getLocalStorage, updateLocalStorage, clearLocalStorage };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageController);\n\n//# sourceURL=webpack://to_do_lists/./src/local-storage-controller.js?");

/***/ }),

/***/ "./src/project-controller.js":
/*!***********************************!*\
  !*** ./src/project-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _local_storage_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage-controller */ \"./src/local-storage-controller.js\");\n/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-controller */ \"./src/display-controller.js\");\n\n\n\n\nconst projectController = (() => {\n  let projects = [];\n  let currentProject = 0;\n\n  const getFromStorage = () => {\n    projects = _local_storage_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getLocalStorage();\n    _display_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].generateProjects();\n  };\n\n  const writeToStorage = () => {\n    _local_storage_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateLocalStorage(projects);\n  };\n\n  const createProject = (name) => {\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n    projects.push(newProject);\n    writeToStorage();\n    _display_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].generateProjects();\n    return newProject;\n  };\n\n  const setCurrentProject = (id) => {\n    currentProject = id;\n  };\n\n  const getCurrentProject = () => projects[currentProject];\n\n  const getCurrentIndex = () => currentProject;\n\n  const getTaskByIndex = (index) => projects[currentProject].tasks[index];\n\n  const deleteTaskByIndex = (index) => {\n    projects[currentProject].deleteTask(index);\n    writeToStorage();\n  };\n\n  const deleteProjectById = (id) => {\n    projects.splice(id, 1);\n    writeToStorage();\n  };\n\n  const updateTaskDescription = (index, description) => {\n    projects[currentProject].tasks[index].description = description;\n    writeToStorage();\n  };\n\n  const addTask = (task) => {\n    projects[currentProject].addTask(task);\n    writeToStorage();\n    _display_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].generateTasks();\n  };\n\n  const getProjects = () => projects;\n\n  return {\n    getProjects,\n    setCurrentProject,\n    getCurrentProject,\n    getCurrentIndex,\n    getTaskByIndex,\n    updateTaskDescription,\n    deleteTaskByIndex,\n    deleteProjectById,\n    addTask,\n    getFromStorage,\n    writeToStorage,\n    createProject,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectController);\n\n//# sourceURL=webpack://to_do_lists/./src/project-controller.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n    static counter = 0;\n  \n    constructor(name) {\n      this.id = Project.counter;\n      this.name = name;\n      this.tasks = [];\n      Project.counter++;\n    }\n  \n    addTask(task) {\n      this.tasks.push(task);\n    }\n  \n    deleteTask(index) {\n      this.tasks.splice(index, 1);\n    }\n  \n    get tasks() {\n      return this._tasks;\n    }\n  \n    set tasks(value) {\n      this._tasks = value;\n    }\n  \n    get name() {\n      return this._name;\n    }\n  \n    set name(value) {\n      this._name = value;\n    }\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://to_do_lists/./src/project.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> * {\\n|     box-sizing: border-box;\\n|   }\");\n\n//# sourceURL=webpack://to_do_lists/./src/style.scss?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, dueDate, priority) {\n      this.title = title;\n      this.description = description;\n      this.dueDate = dueDate;\n      this.priority = priority;\n      this.completed = false;\n    }\n  \n    toggle() {\n      this.completed = !this.completed;\n    }\n  \n    get description() {\n      return this._description;\n    }\n  \n    set description(value) {\n      this._description = value;\n    }\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://to_do_lists/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;