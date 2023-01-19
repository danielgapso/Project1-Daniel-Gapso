var myTasks=[];

const checkForData = () => {
    myTasks=JSON.parse(localStorage.getItem("myData"));
    makeDiv();
  };

const makeDiv = () => {
    const note = new Object(); 
    note.taskWrite = document.getElementById("taskWrite").value;
    note.taskDate = document.getElementById("taskDate").value;
    note.taskTime = document.getElementById("taskTime").value;
    myTasks.push(note);
    document.getElementById("myForm").reset();
    localStorage.setItem("myData", JSON.stringify(myTasks));

    const divData = document.getElementById("mySticky");
    var toHtml = "";
    myTasks.map((item) => {
        toHtml += `
                <div id="myNote">
                <span class="material-symbols-outlined" onclick="removeNote()" id="deleteButton">close</span>
                <div class="myWrite">${item.taskWrite}</div>
                <div class="myDate">${newDate(item.taskDate)}</div>
                <div class="myTime">${item.taskTime}</div> 
                </div>
           `;
    });
    divData.innerHTML = toHtml;
};
  const removeNote = ()=> {
  const element = document.getElementById("myNote");
  element.remove();
  localStorage.removeItem("myData");
};
const newDate =(taskDate)=>{
  const ilDate=taskDate.split("-");
  return `${ilDate[2]}/${ilDate[1]}/${ilDate[0]}`;
};
