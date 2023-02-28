var myTasks = [];//an array to store the tasks

const newDate = (taskDate) => {//a new date function to show the date of the task as dd//mm/yy
  const ilDate = taskDate.split("-");//to split the date by the -
  return `${ilDate[2]}/${ilDate[1]}/${ilDate[0]}`;//return the date as dd/mm/yy
};
const removeNote = (event) => {//an event that happen when the user clicked on the X button on the note to remove the note
  let element = event.target.parentNode;
  let index = Array.from(element.parentNode.children).indexOf(element);
  myTasks.splice(index, 1);
  element.remove();
  localStorage.setItem("myData", JSON.stringify(myTasks));
};
const checkForData = () => {//a function to check for data and store the data in localStorage
  if (localStorage.getItem("myData")) {
    myTasks = JSON.parse(localStorage.getItem("myData"));
    insertData();//invoke insert data function
  }
};
const insertData = () => {//a function that gets the input data from the user and displays the data at the screen
  const divData = document.getElementById("mySticky");
  var toHtml = "";
  myTasks.map((item) => {
    toHtml += `
              <div id="myNote">
              <span class="material-symbols-outlined" onclick="removeNote(event)" id="deleteButton">close</span>
              <textarea readonly class="myWrite">${item.taskWrite}</textarea>
              <div class="myDate">${newDate(item.taskDate)}</div>
              <div class="myTime">${item.taskTime}</div> 
              </div>
         `;
  });
  divData.innerHTML = toHtml;
};
checkForData();
const makeDiv = () => {//a function that gets the input data from the user and adds a note with the data to the array
  const note = new Object();
  note.taskWrite = document.getElementById("taskWrite").value;
  note.taskDate = document.getElementById("taskDate").value;
  note.taskTime = document.getElementById("taskTime").value;
  myTasks.push(note);
  document.getElementById("myForm").reset();
  localStorage.setItem("myData", JSON.stringify(myTasks));
  insertData();
};
