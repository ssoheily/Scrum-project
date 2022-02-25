let $ = document;
let inputEle = $.querySelector("input");
let btn_add = $.querySelector(".btn_add");
let baskLog_Ele = $.querySelector(".main-whiteBoard__backlog");
let toDo_Ele = $.querySelector(".main-whiteBoard__toDo");
let modal = $.querySelector(".boxModal");
let container = $.querySelector(".container");
let btn_yes = $.querySelector(".btn_yes");
let btn_no = $.querySelector(".btn_no");

btn_add.addEventListener("click", putInBacklog);
let new_div;
let elementPlace;
function putInBacklog() {
  let text_inputEle = inputEle.value;
  let arrayObjectWithValue=createArrayObject(text_inputEle);
   setValuelocaleStorage(arrayObjectWithValue);
  new_div = $.createElement("div");
  new_div.className = "ele_add";
  new_div.innerText = text_inputEle;
  /* aktive DragAble item Div  and add id */
  new_div.draggable = "true";
  new_div.id = "newEle";
  baskLog_Ele.appendChild(new_div);
  inputEle.value = "";
  dragStarto(new_div);
  /* right click to remvove item */
//   new_div.addEventListener("contextmenu", removeItem);
}
let ArrayObj = [];
function createArrayObject(text) {
  obj = {
    id: ArrayObj.length +1,
    toDoItem: text
  };
  return obj;
}
function setValuelocaleStorage(arrayLocalStorage) {
  let JsonFromLocalStorage = JSON.stringify(arrayLocalStorage);
  localStorage.setItem("objItem",JsonFromLocalStorage);
}
function getValueLocalStorage(selectedItemText){
   let arrayFromLocalStorage=JSON.parse(arrayLocalStorage);
   let itemIndexSelected=arrayFromLocalStorage.findIndex((item)=>{
      item.toDoItem = selectedItemText;
   }
   )
   return itemIndexSelected;
}

// function removeItem() {
//    getValueLocalStorage();
//    showModal();
//  }
 function showModal() {
   // boxModal
   modal.style.display = "block";
   container.style.filter = "blur(10px)";
   // btn_yes.addEventListener("click",(event)=>{
 
   // });
   // btn_no.addEventListener("click",noRemove);
 }

 


function dragStarto(new_div) {
  new_div.ondragstart = (event) => {
    event.dataTransfer.setData("elemID", event.target.id);
  };
}

function dropHandler(event) {
  let targetId = event.dataTransfer.getData("elemID");
  let targetElem = $.getElementById(targetId);
  // event.target = this saule
  event.target.appendChild(targetElem);
  //   event.target.nextSibling.appendChild(targetElem);
}
// // enable drop in element with ondragover
function dragOverHandler(event) {
  //   /* now run ondrop function  line18*/
  event.preventDefault();
}

