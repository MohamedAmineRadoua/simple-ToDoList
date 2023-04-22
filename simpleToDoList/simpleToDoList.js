function addTask(){
    let task=document.getElementById('task').value;
    if(task === ""){
        alert("entrer un task")
    }
    else{
        // Creat Variable and Element
        let ul=document.createElement('ul')
        let li=document.createElement('li')
        let text=document.createTextNode(task)
        let button=document.createElement('button')
        let text2=document.createTextNode('-')
        let div=document.createElement('div')
        // appendChild
        button.appendChild(text2)
        li.appendChild(text)
        li.appendChild(button)
        ul.appendChild(li)
        div.appendChild(ul)
        document.body.appendChild(div)
        // Remove task and clear input
        button.addEventListener('click',function(){ul.remove()})
        document.getElementById('task').value=""
    }
}