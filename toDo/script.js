const taskForm = document.getElementById('task-form');
const confirmCloseDialog = document.getElementById('confirm-close-dialog');
const openTaskFormBtn = document.getElementById('open-task-form-btn');
const closeTaskFormBtn = document.getElementById('close-task-form-btn');
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn');
const cancelBtn = document.getElementById('cancel-btn');
const discardBtn = document.getElementById('discard-btn');
const tasksContainer = document.getElementById('tasks-container');
const titleInput = document.getElementById('title-input');
const dateInput = document.getElementById('date-input');
const descriptionInput = document.getElementById('description-input');

//Array general de tareas.
//Si no hay datos en localStore, inicializa a array vacio
const taskData = JSON.parse(localStorage.getItem("data")) || [];
//objeto para la tarea actual que estamos editando
let currentTask = {};

//eliminamos comillas simples, dobles y guión bajo
function removeSpecialChars(string) {
    string = string.replace(/'/g, "");
    string = string.replace(/"/g, "");
    string = string.replace(/_/g, "");
    return string;
}

const addOrUpdateTask = () => {
    //limpiamos de espacios el título para comprobar que hay texto real
    if (!titleInput.value.trim()) {
        alert("Please provide a title");
        return;
    }

    //retorno implicito de la comparación en la funcion de flecha
    //el parámetro "item" es cada uno de los elementos del array taskData
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

    //guardamos los valores del formulario en un objeto
    const taskObj = {
        //el id será el título, pasado a mayusculas, cortado por los espacios y unidos por guión -
        //añadiendo Date.now() que da el numero de milisegundos desde 1-enero-1970
        id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: removeSpecialChars(titleInput.value),
        date: dateInput.value,
        description: removeSpecialChars(descriptionInput.value)
    };
    //si la tarea no existe la añadimos al principio del array
    // si ya existía la modificamos reescribiendola
    if (dataArrIndex === -1) {
        taskData.unshift(taskObj)
    } else {
        taskData[dataArrIndex] = taskObj;
    };

    //guardamos en localStorage
    localStorage.setItem("data", JSON.stringify(taskData));

    //pintamos todas las tareas en pantalla
    updateTaskContainer();
    //reseteamos el formulario
    reset();
}

const updateTaskContainer = () => {
    //limpiamos el HTML antes de repintar todas las tareas
    tasksContainer.innerHTML = "";
    taskData.forEach(({ id, title, date, description }) => {
        tasksContainer.innerHTML += `
            <div class="task" id="${id}">
                <p><strong>Title:</strong>${title}</p>
                <p><strong>Date:</strong>${date}</p>
                <p><strong>Description:</strong>${description}</p>
                <button type="button" class="btn" onclick="editTask(this)" >Edit</button>
                <button type="button" class="btn" onclick="deleteTask(this)" >Delete</button>
            </div>
        `;
    });
}

//edit Task
const editTask = (buttonEl) => {
    //buscamos el indice del array en el que está el elemento que coincide su id
    //con el id del elemento padre del boton editar (la Tarea)
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    //pasamos la tarea encontrada a current Tarea y los valores a los inputs
    currentTask = taskData[dataArrIndex];
    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;
    //actualizamos el texto del boton y mostramos el modal del formulario
    addOrUpdateTaskBtn.innerText = "Update Task";
    taskForm.classList.toggle("hidden");
}

//delete task
const deleteTask = (buttonEl) => {
    //buscamos el indice del array en el que está el elemento que coincide su id
    //con el id del elemento padre del boton eliminar (la Tarea)
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    //eliminamos el elemento del DOM y del array
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    //reescribimos en localStorage
    localStorage.setItem("data", JSON.stringify(taskData));
}

//reset del formulario de añadir tareas
const reset = () => {
    addOrUpdateTaskBtn.innerText = "Add Task";
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
}

//si hay tareas (length 0 ==false) actualizamos al cargar
if (taskData.length) {
    updateTaskContainer();
}

//LISTENERS
openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
});
//muestra el modal de cerrar
closeTaskFormBtn.addEventListener("click", () => {
    //si no hay texto en los inputs la variable será "false"
    //en caso contrario toma el texto del primer input que tenga valor
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;

    //miramos si hubo cambios cuando estamos actualizando tareas
    const formInputValuesUpdated =
        titleInput.value !== currentTask.title ||
        dateInput.value !== currentTask.date ||
        descriptionInput.value !== currentTask.description;
    // si ha ha habido cambio al actualizar o no se escribió tarea nueva, cerramos
    if (formInputsContainValues && formInputValuesUpdated) {
        confirmCloseDialog.showModal();
    } else {
        reset();
    }
});
//cierra el modal pero deja el formulario de entrada de tareas abierto
cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
});
//cierra el modal y oculta el formulario de añadir tareas
discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    taskForm.classList.toggle("hidden");
});
//evento submit del formulario de añadir tareas
taskForm.addEventListener("submit", (e) => {
    //evita la racarga de la pagina, que es el comportamiento normal de submit
    e.preventDefault();
    addOrUpdateTask();
});