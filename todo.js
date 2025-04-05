let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li"); //creating a new list item 
    item.innerText = inp.value;  //giving list item a value from input

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);  // appeding to the list 
    inp.value = ""; //after every Add task click input box gets cleared
});


                                                
ul.addEventListener("click", function(event){   //using event bubbling we are deleting 
    if(event.target.nodeName == "BUTTON"){   //nodeName gives targets name 
        let listItem = event.target.parentElement;  //target gives which element clicked and parentElement gives its parent(i.e li here) which has to be deleted
    listItem.remove();
    console.log("deleted");
    }
});

    









// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement; // parent list item should be deleted to delete
//         par.remove();  // works only for default list items given in the html file. Does not works for Elements created by js 
//     });
// }