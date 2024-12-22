let num=9;
const inputBox=document.getElementById("inputBox")
const taskField= document.getElementById("taskName")
 
   


addingOfTask=()=>{
    const task= taskField.value;
    const container=document.getElementById("main_container")
    const newEl=document.createElement('div')
    newEl.setAttribute("class", "newTasks")
    container.append(newEl)
    newEl.innerText=task;
    taskField.value=""
    let isUserScrolling=false
    let delBut=document.createElement("button");
    delBut.innerText="X"
    delBut.id="delBut"
    // delBut.style.width="30px"
    // delBut.style.position="relative"
    
delBut.addEventListener("click",( )=>{
       newEl.style.display="none"
    })
    newEl.append(delBut);
   container.addEventListener('scroll',()=>{
    const scrollOffset=container.scrollHeight-container.scrollTop-container.clientHeight
    isUserScrolling=scrollOffset>50
   })
    setInterval(()=>{
        if(!isUserScrolling){
            container.scrollTop=container.scrollHeight
        }
            

        },1000)
    container.scrollIntoView({behavior:"smooth"})
}
function createTask(){
addingOfTask()
num++
}