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

    const tableData = document.getElementById("mySticky");
    var toHtml = "";
    myTasks.map((item) => {
        toHtml += `
                <div id="myNote">
                <span class="material-symbols-outlined" onclick="removeNote()" id="deleteButton">close</span>
                <div class="myWrite">${item.taskWrite}</div>
                <div class="myDate">${item.taskDate}</div>
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
