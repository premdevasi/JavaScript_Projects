document.addEventListener('DOMContentLoaded', function(){
    const input  = document.getElementById('add-input');
    const add = document.getElementById('add');
    const taskList = document.getElementById('task-list');

    add.addEventListener('click', function(){
        let inputValue = input.value.trim();
        if(inputValue !== ""){
          const taskItem = document.createElement('div');
          taskItem.classList.add('output-cont');
          taskItem.innerHTML = `
          <button class="complete"><i class="fa fa-check"></i></button>
          <p>${inputValue}</p>
          <button class="delete"><i class="fa-solid fa-xmark"></i></button>
          `;

          taskList.appendChild(taskItem);
          input.value = "";

          taskItem.querySelector('.complete').addEventListener('click', function(){
            this.parentElement.querySelector('p').style.textDecoration = 'line-through';
            this.parentElement.querySelector('p').style.color = 'gray';
          });

          taskItem.querySelector('.delete').addEventListener('click', function(){
            this.parentElement.remove();
          });
        }
    })
});
