var input=document.getElementById("userinput");
var add_button=document.getElementsByClassName("addbutton")[0];
var new_task=document.getElementsByClassName("alltasks")[0];

function CreateListElement(){
    var li=document.createElement("li");
    li.className="temp";
    li.appendChild(document.createTextNode(input.value));
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var span_todotasks=document.createElement("span");
    span_todotasks.className="todotasks";
    span_todotasks.append(checkbox,li);

    var span_buttons=document.createElement("span");
    var edit_button=document.createElement("button");
    edit_button.className="ellipsis";
    edit_button.classList.add("edit");

    var edit_icon=document.createElement("i");
    edit_icon.className="fa-solid fa-pen";
    var edit_text=document.createElement("div");
    edit_text.className="dropdown";
    edit_text.textContent="edit";
    edit_button.append(edit_icon,edit_text);

    var delete_button=document.createElement("button");
    delete_button.className="ellipsis";
    delete_button.classList.add("delete");

    var delete_icon=document.createElement("i");
    delete_icon.className="fa-solid fa-trash";
    var delete_text=document.createElement("div");
    delete_text.className="dropdown";
    delete_text.textContent="delete";
    delete_button.append(delete_icon,delete_text);

    span_buttons.append(edit_button,delete_button);

    var div=document.createElement("div");
    div.className="list";
    div.append(span_todotasks,span_buttons)
    new_task.append(div);
    input.value="";
}

function addList(){
    if(input.value.length>0){
        CreateListElement();
    }
}

add_button.addEventListener("click",addList);

function DeleteListElement(event){
      if(event.target.className==="fa-solid fa-trash"){
        event.target.parentElement.parentElement.parentElement.remove();
      }
    
}

function deleteList(event){
    DeleteListElement(event);
}

new_task.addEventListener("click",deleteList);


function editListElement(event){
    if(event.target.className==="fa-solid fa-pen"){
        var button=event.target.parentElement;
        var div=button.querySelector("div");
        if(div.textContent==="edit"){
            var this_list=button.parentElement.parentElement;
            var span=this_list.getElementsByClassName("todotasks")[0];
            var li=this_list.getElementsByClassName("temp")[0];
            var input=document.createElement("input");
            input.type="text";
            input.value=li.textContent;
            span.insertBefore(input,li);
            li.remove();
            function save(event){
                if(event.keyCode===13){
                    var new_li=document.createElement("li");
                    new_li.className="temp";
                    new_li.appendChild(document.createTextNode(input.value));
                    input.remove();
                    span.append(new_li);
                }
            }
            span.addEventListener("keypress",save);
        }
    }
}

function editList(event){
    editListElement(event);
}

new_task.addEventListener("click",editList);

