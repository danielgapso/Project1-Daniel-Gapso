var myTasks=[];

const newDate =(taskDate)=>{
  const ilDate=taskDate.split("-");
  return `${ilDate[2]}/${ilDate[1]}/${ilDate[0]}`;
};
const removeNote = (event) => {
  let element = event.target.parentNode;
  element.remove();
  myTasks = myTasks.filter((task)=> task.taskWrite !== element.querySelector('.myWrite').textContent);
  localStorage.setItem("myData", JSON.stringify(myTasks));
};
const checkForData = () => {
  if(localStorage.getItem("myData")){
    myTasks=JSON.parse(localStorage.getItem("myData"));
    insertData ();
   }
  };
  const insertData  = () => {
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
const makeDiv = () => {
  const note = new Object(); 
  note.taskWrite = document.getElementById("taskWrite").value;
  note.taskDate = document.getElementById("taskDate").value;
  note.taskTime = document.getElementById("taskTime").value;
  myTasks.push(note);
  document.getElementById("myForm").reset();
  localStorage.setItem("myData", JSON.stringify(myTasks));
  insertData ();
};