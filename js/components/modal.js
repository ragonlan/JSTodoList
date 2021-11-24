import Alert from './alert.js';

export default class modal {
    constructor() {
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.btn = document.getElementById('modal-btn');
        this.completed = document.getElementById('modal-completed');
        this.todo = null;
        this.alert = new Alert('modal-alert');
    }

    setValues(todo){
        // $('#modal').modal('toggle');
        this.todo = todo;
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.completed.checked = todo.completed;
    }

    onClick(callback){
        this.btn.onclick = () => {
            if (!this.title.value || ! this.description.value){
                this.alert.show('Title and description are required');
                return;
            }

            this.alert.hide();

            $('#modal').modal('toggle');

            callback(this.todo.id, {
                title: this.title.value,
                description:  this.description.value,
                completed:  this.completed.checked,
            })

        }
    }
}