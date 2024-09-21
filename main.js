//==================welcome bage========================
$('.main').css("display", " none");
// $('#myModal').css("display", " none");
// $('.container').css("display", " none");

let Users = []
let usernameRef = $("#username");
let passwordRef = $("#password");
let eyeL = $(".eyeball-l");
let eyeR = $(".eyeball-r");
let handL = $(".hand-l");
let handR = $(".hand-r");
let register = $(".register");
let modal = $("#myModal ");

let btn_login = $(".Login_todolist");



register.on("click", () =>{
 $('.container').css("display", " none");
 $('#myModal').css("display", " block");

})




btn_login.on("click", () => {
    
   console.log("4")
    if (usernameRef.val() !== "" && passwordRef.val() !== "") {
        normalEyeStyle();
        normalHandStyle();
        $('.container').css("display", " none");
        $('.main').css("display", " block");
        const user_member = {
            username: `${usernameRef.val()}`,
            password: `${passwordRef.val()}`,
        };
        Users.push(user_member)
        let UserString = JSON.stringify(user_member);
        localStorage.setItem("Users", UserString);
        console.log(Users)
    }

})


$('.log_out').on('click',()=>{
    $('.main').css("display", " none");

    $('.container').css("display", " block");
})



















//=========================todo list page=============================
let tasks = [
    {
        "titel": "reading book",
        "date": "15/5/2025",
        "Isdone": true,
    },
    {
        "titel": "wlaking",
        "date": "4/4/2024",
        "Isdone": false,
    },

    {
        "titel": "watching move",
        "date": "27/11/2024",
        "Isdone": false,
    }

]

function gettaskfromstorge() {
    let reteivedtask = JSON.parse(localStorage.getItem("mytask"))
    // if(reteivedtask==null){
    // tasks=[]
    // }
    // else{
    // tasks=reteivedtask
    // }
    tasks = reteivedtask ?? []
}
gettaskfromstorge()



function fillTask() {

    $('.tasks').html("")
    let index = 0
    for (task of tasks) {

        let content =
            `  <!-- tasks -->
        <div   class="tasks ${task.Isdone ? 'done' : ''}">
                <!-- tasks inf -->
                <div id="task__inf">
                <h2>${task.titel}</h2>
                <div>
                <span>${task.date}</span>
                </div>
                </div>
                <!-- //tasks inf// -->
                     <!-- task action -->
                     <div class="task_action">
                      <button onclick=" deletTask(${index})" class="header_btn"  style="background-color: red"  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: antiquewhite;transform: ;msFilter:;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg></button>
 
                      ${task.Isdone ? `
                      <button onclick=" completeTask(${index})"    class="header_btn"  style="background-color: green"  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: antiquewhite;transform: ;msFilter:;"><path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path></svg></button>


                        `: `
                      <button onclick=" completeTask(${index})"    class="header_btn"  style="background-color: green"  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: antiquewhite;transform: ;msFilter:;"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg></button>
                      `}
                      <button  onclick=" editTask(${index})"  class="header_btn"   style="background-color:  #F3A2BE "  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: antiquewhite;transform: ;msFilter:;"><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg> </button>
                      </div>
                      <!-- //task action //-->
    
        </div>
       <!-- //tasks //-->`
        document.querySelector('.tasks').innerHTML += content
        index++
    }
}
fillTask()
$('.header_btn1 ').on('click', () => {

    const d = new Date()
    let date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " | " + d.getHours() + ":" + d.getMinutes()

    let name = prompt("add new task ")
    let task_object = {
        "titel": name,
        "date": date,
        "Isdone": false,
    }
    tasks.push(task_object)
    storeTasks();
    fillTask()

})



function deletTask(index) {
    let task = tasks[index]
    let isconfirm = confirm("Are you sure you wanna delete" + " " + task.titel)
    if (isconfirm) {
        tasks.splice(index, 1)
        storeTasks();

        fillTask()
    }

}



function editTask(index) {
    let task = tasks[index]
    let newTask = prompt(" write a new title for the task", task.titel)
    task.titel = newTask
    storeTasks();
    fillTask()
}


function completeTask(index) {
    let task = tasks[index]
    if (task.Isdone) {
        task.Isdone = false;
    }
    else {
        task.Isdone = true;
    }

    //يختصر كل الجملة الشرطية الي فوقه بكفي  لحاله
    // task.Isdone=!task.Isdone;

    storeTasks();

    fillTask();

}



//==============storage function =============
function storeTasks() {
    let tasksString = JSON.stringify(tasks)
    localStorage.setItem("mytask", tasksString)

}
