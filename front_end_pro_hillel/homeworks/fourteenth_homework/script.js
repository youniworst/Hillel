'use strict';

class TodoApp {
    constructor() {
        this.todoList = [];
    }
    add(item) {
        if (item.isPinned == true) {
            this.todoList.unshift(item)
            console.log(todoApp.todoList)
            return
        }
        this.todoList.push(item)
        console.log(todoApp.todoList)
        if (item.canExpire == true) {
            setTimeout(() => {
                this.remove(item.id)
                console.log(this.todoList)
            }, item.delay)
        }
    }
    remove(id) {
        if (typeof id != 'number') return
        let index = this.todoList.findIndex((element) => element.id == id)
        if (index == -1) return
        this.todoList.splice(index, 1)
    }
    clear() {
        this.todoList.length = 0
    }
}
class TodoItem {
    constructor({
        name,
        id,
        createdDate
    }) {
        this.name = name;
        this.id = id;
        this.createdDate = createdDate
    }
    updateName(name) {
        this.name = name
    }
    static randomId() {
        let rand = 0 + Math.random() * (100 + 1 - 0);
        return Math.floor(rand);
    }
    static date() {
        let date = new Date()
        return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
}
class PinnedTodoItem extends TodoItem {
    isPinned = true
}
class ExpireTodoItem extends TodoItem {
    canExpire = true
    constructor(obj, delay) {
        super(obj)
        this.delay = delay
    }
}

let todoApp = new TodoApp()

todoApp.add(new TodoItem({
    name: 'toDoItem',
    id: TodoItem.randomId(),
    createdDate: TodoItem.date(),
}))
todoApp.add(new TodoItem({
    name: 'toDoItem',
    id: TodoItem.randomId(),
    createdDate: TodoItem.date(),
}))

todoApp.add(new PinnedTodoItem({
    name: 'PinedToDoItem',
    id: TodoItem.randomId(),
    createdDate: TodoItem.date(),
}))

todoApp.add(new ExpireTodoItem({
    name: 'ExpireToDoItem',
    id: TodoItem.randomId(),
    createdDate: TodoItem.date(),
}, 1000))