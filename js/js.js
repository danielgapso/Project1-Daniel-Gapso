var myTasks=[];

const checkForData = () => {
    myTasks=JSON.parse(localStorage.getItem("myData"));
    makeTable();
  };

const makeTable = () => {
    const tableData = document.getElementById("mySticky");
    var toHtml = "";
    myTasks.map((item) => {
        toHtml += `
                
                <p>${item.taskWrite}</p>
                <p>${item.taskDate}</p>
                <p>${item.taskTime}</p> 
           `;
    });
    tableData.innerHTML = toHtml;
};

checkForData();

const addNote = () => { 
    var note = new Object(); 
    note.taskWrite = document.getElementById("taskWrite").value;
    note.taskDate = document.getElementById("taskDate").value;
    note.taskTime = document.getElementById("taskTime").value;
    myTasks.push(note);
    document.getElementById("myForm").reset();
    localStorage.setItem("myData", JSON.stringify(myTasks));
};