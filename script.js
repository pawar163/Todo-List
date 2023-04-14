document.querySelector('#add').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Plase enter your task first!!!")
    }else{
        document.querySelector('#tasks').innerHTML += `
        <div class = "task">
        <span id = "taskname">
        ${document.querySelector('#newtask input').value}
        </span>

        <button class="delete">
        <i class = "far fa-trash-alt"></i>
        </button>
        </div>

        <button class="edit>
        <i class = "far fa-trash-alt"></i>
        </button>
        `;

        //delete button
        var current_task =document.querySelectorAll(".delete");
        for(var i=0;i<current_task.length;i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
