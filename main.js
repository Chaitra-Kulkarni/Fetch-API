
// let userToDoData = document.querySelector('.todo-data');
fetch('https://jsonplaceholder.typicode.com/todos')
.then( response => response.json())
.then( data => toDoData(data));

function toDoData(data) {
    let rowTable = '';
    for(var i=0; i<data.length; i++) {
        rowTable += `
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td>${data[i].completed}</td>
        </tr>
        `
    }
   
  let todo = document.getElementById('todo').innerHTML = rowTable;
}

