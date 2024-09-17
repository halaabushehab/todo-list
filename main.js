let tasks=[
{
    "titel":"reading book",
    "date":"15/5/2025",
    "Isdone":false,
},
{
    "titel":"wlaking",
    "date":"4/4/2024",
    "Isdone":false,
},

{
    "titel":"watching move",
    "date":"27/11/2024",
    "Isdone":false,
}

]

function fillTask(){
$('.tasks').html("")
let index=0
for(task of tasks){

    let content=
    `  <!-- tasks -->
        <div   class="tasks">
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
                      <button  class="header_btn"  style="background-color: green"  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: antiquewhite;transform: ;msFilter:;"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button>
                      <button class="header_btn"   style="background-color:  #F3A2BE "  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: antiquewhite;transform: ;msFilter:;"><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg> </button>
                      </div>
                      <!-- //task action //-->
    
        </div>
       <!-- //tasks //-->`
document.querySelector('.tasks').innerHTML+=content
index++
}
}
fillTask()
$('.header_btn1 ').on('click' ,()=>{

    const d = new Date()
    let date =  d.getDate()+"/"+  (d.getMonth()+1)+"/"+d.getFullYear() +" | "+d.getHours()+":"+d.getMinutes()

let name=prompt("add new task ")
let task_object={
    "titel":name,
    "date":date,
    "Isdone":false,
}
tasks.push(task_object)
fillTask()

})



function deletTask(index){
let task=tasks[index]
   let isconfirm= confirm("Are you sure you wanna delete" + " "+task.titel)
   if(isconfirm){
    tasks.splice(index,1)
    fillTask()
   }

}