
// let userToDoData = document.querySelector('.todo-data');
fetch('https://jsonplaceholder.typicode.com/todos')
.then( response => response.json())
.then( data => toDoData(data));

function toDoData(data) {
    let rowTable = `
        <tr>
            <th>User Id</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
        </tr>
    `
    for(var i=0; i<data.length; i++) {
        rowTable += `
        <tr>
            <td>${data[i].userId}</td>
            <td>${data[i].id}</td>
            <td>${data[i].title}</td>
            <td class="completed">${data[i].completed}</td>
        </tr>
        `
    }
  let mainTable = document.getElementById('main-table').innerHTML = rowTable;

}