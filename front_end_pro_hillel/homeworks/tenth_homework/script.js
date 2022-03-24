"use strict";

const formEl = document.querySelector(".todo-form");
const nameEl = document.querySelector('[name="name"]');
const ownerEl = document.querySelector('[name="owner"]');
const statusEl = document.querySelector('[name="status"]');

const resetEl = document.querySelector('[type ="reset"]')

const tableEl = document.querySelector(".todo-table");
const tableBodyEl = tableEl.querySelector("tbody");

// FORM LISTENERS
formEl.addEventListener("submit", (e) => {
	e.preventDefault();
	const name = nameEl.value;
	const owner = ownerEl.value;
	const status = statusEl.value;

	const nameFieldIsValid = validateField(nameEl, /^[a-zA-Z]/);
	const ownerFieldIsValid = validateField(
		ownerEl,
		/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	);
	const statusFieldIsValid = validateField(statusEl, /^[a-zA-Z]/);

	if (nameFieldIsValid && ownerFieldIsValid && statusFieldIsValid) {
		appendToTable({
			name,
			owner,
			status,
		});
		clearForm();
		createCompleteCounter()
	}
});


formEl.addEventListener("reset", (e) => {
	e.preventDefault();
	clearForm()
});

function clearForm() {
	nameEl.value = '';
	ownerEl.value = '';
	statusEl.value = '';

	nameEl.classList.remove("error");
	ownerEl.classList.remove("error");
	statusEl.classList.remove("error");
}

function isEmpty(value) {
	return value.trim().length === 0;
}

function validateField(el, regex) {
	const value = el.value;
	const result = regex.test(value);
	if (!result) {
		el.classList.add("error");
	} else {
		el.classList.remove("error");
	}
	return result;
}

nameEl.addEventListener("change", (e) => {
	validateField(e.target, /^[a-zA-Z]/);
});

nameEl.addEventListener("blur", (e) => {
	validateField(e.target, /^[a-zA-Z]/);
});

ownerEl.addEventListener("change", (e) => {
	validateField(e.target, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

ownerEl.addEventListener("blur", (e) => {
	validateField(e.target, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

statusEl.addEventListener("blur", (e) => {
	validateField(e.target, /^[a-zA-Z]/);
});

// TABLE

function createTableItem(obj) {
	const trEl = document.createElement("tr");
	Object.entries(obj).forEach(([key, value]) => {
		const tdEl = document.createElement("td");
		tdEl.innerText = value;
		trEl.appendChild(tdEl);
	});
	const removeButtonEl = createRemoveButton();
	trEl.appendChild(removeButtonEl);
	return trEl;
}

function appendToTable(obj) {
	tableBodyEl.appendChild(createTableItem(obj));
}

function createRemoveButton() {
	const tdEl = document.createElement("td");
	const buttonEl = document.createElement("button");
	buttonEl.innerText = "Remove";
	tdEl.appendChild(buttonEl);

	function handleClickRemoveButton(e) {
		buttonEl.removeEventListener("click", handleClickRemoveButton);
		let trEl = buttonEl.closest('tr');
		trEl.remove();
		createCompleteCounter();
	}

	buttonEl.addEventListener("click", handleClickRemoveButton);

	return tdEl;
}

function changeCompleteCounter() {
	let result = 0;
	let trCollection = tableBodyEl.children;
	for (let tr of trCollection) {
		if(tr === document.querySelector('.complete-counter-tr')) continue;   //пропуск кода на итерации,при которой мы попадаем на счетчик
		let tdCollection = tr.children;
		if (tdCollection[2].innerText == 'completed') ++result
	}
	return result
}

function createCompleteCounter() {
	if(document.querySelector('.complete-counter-tr')) {
		document.querySelector('.complete-counter-tr').remove()            //удаление устаревшего счетчика перед созданием нового
	}

	let trEl = document.createElement('tr');
	trEl.classList.add('complete-counter-tr');

	let completeCounterEl = document.createElement('td');
	completeCounterEl.setAttribute('colspan', '4')
	completeCounterEl.innerText = `Completed: ${changeCompleteCounter()}`

	trEl.appendChild(completeCounterEl);
	tableBodyEl.appendChild(trEl);

	if(tableBodyEl.children.length == 1) {
		document.querySelector('.complete-counter-tr').remove()          //удаление счетчика при отсутствии элементов таблицы
	}
}