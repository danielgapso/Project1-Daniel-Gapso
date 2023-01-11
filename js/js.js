var myTasks=[];//an array to hold the addNote function note objects

const addNote = () => { //a function to collect and save the note objects created
    var note = new Object(); //an object to sum together all the recived values
    note.taskWrite = document.getElementById("taskWrite").value;//the recived text box text
    note.taskDate = document.getElementById("taskDate").value;//the recived date
    note.taskTime = document.getElementById("taskTime").value;//the recived time
    myTasks.push(note);//adds the object to the array
    makeTable();//calls the make table function

    document.getElementById("myForm").reset();//resets the form as soon as all the data is collected and the user pressed submit
};
const makeTable = () => {//a function that holds the recived values and mapping each one
    var data = "";//a string of the recived values
    myTasks.map((item) => {//mapping every recived value and write them down
      data += `
               
                <p>${item.taskWrite}</p>
                <p>${item.taskDate}</p>
                <p>${item.taskTime}</p>
                
           `;
    });
   document.getElementById("mySticky").innerHTML =data;//writes down the recived values
};