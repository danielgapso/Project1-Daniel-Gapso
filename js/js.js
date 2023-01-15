var myTasks=[];

const checkForData = () => {
    myTasks=JSON.parse(localStorage.getItem("myData"));
    makeTable();
  };

const makeTable = () => {
    const note = new Object(); 
    note.taskWrite = document.getElementById("taskWrite").value;
    note.taskDate = document.getElementById("taskDate").value;
    note.taskTime = document.getElementById("taskTime").value;
    myTasks.push(note);
    document.getElementById("myForm").reset();
    localStorage.setItem("myData", JSON.stringify(myTasks));
    newNoteDate()
    const tableData = document.getElementById("mySticky");
    var toHtml = "";
    myTasks.map((item) => {
        toHtml += `
                <div id="myNote">
                <span class="material-symbols-outlined" onclick="removeNote()" id="deleteButton">close</span>
                <div class="myWrite">${item.taskWrite}</div>
                <div class="myDate">${pretifyDate(item.newNoteDate)}</div>
                <div class="myTime">${item.taskTime}</div> 
                </div>
           `;
    });
    tableData.innerHTML = toHtml;
};
  const removeNote = ()=> {
  const element = document.getElementById("myNote");
  element.remove();
  localStorage.removeItem("myData");
};
const pretifyDate = () => {
   var myDate= new Date(taskDate.value).toLocaleDateString();
   var newDate = myDate.split("/");
   return `${newDate[1]}/${newDate[0]}/${newDate[2]}`;
};
const newNoteDate =document.createElement("div");
newNoteDate.classList.add("date");
newNoteDate.innerHTML = pretifyDate(taskDate);
newNote.element.appendChild(newNoteDate);
