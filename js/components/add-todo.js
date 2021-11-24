import Alert from './alert.js';

export default class AddTodo {
    constructor(){
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');

        this.alert = new Alert('alert');
    }
    onClick(callback){
        this.btn.onclick = () => {
            if (this.title.value === '' || this.description.value === '') {
                // alert.classList.remove('d-none');
                // alert.innerText = 'Title and description are required';
                // console.error('incorrecto');
                this.alert.show('Title and description are required');
            } else{
                this.alert.hide();
                callback(this.title.value, this.description.value);
            }
        }
    }
}