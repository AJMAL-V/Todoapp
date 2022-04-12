console.log("file have been connected");

let form = document.getElementById("form");
let inputText = document.getElementById("input-text");
let formSubmitBtn = document.getElementById("form-submit-Btn");

let contentDiv = document.getElementById("content-div");
let todo_list= document.getElementById("todo-div");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});


function rendercard(message,time){
  let card = document.createElement("div");
  card.className = "todo-item";
  let contentWrapper = document.createElement("div");
  let heading = document.createElement("h3");
  heading.innerHTML = message;
  
  let timeStamp = document.createElement("p");
  timeStamp.innerHTML =time;
    
  contentWrapper.appendChild(heading);
  contentWrapper.appendChild(timeStamp);
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash";
  
  let createIcon = document.createElement("i");
  createIcon.className = "fas fa-pen";
  ///////

/////////
  createIcon.addEventListener("click", function () {
    let newInput = document.createElement("input");
    let saveIcon = document.createElement("i");
    saveIcon.className = "fas fa-check";
    heading.parentNode.replaceChild(newInput, heading);
    newInput.value = heading.innerHTML;
    createIcon.parentNode.replaceChild(saveIcon, createIcon);
    saveIcon.addEventListener("click", function () {
      if (newInput.value === "") {
        alert("please enter the value");
        return;
      }
      heading.innerHTML = newInput.value;
      newInput.parentNode.replaceChild(heading, newInput);
      saveIcon.parentNode.replaceChild(createIcon, saveIcon);
      let updatetime = new Date();
      timeStamp.innerHTML =
        updatetime.getDate() +
        "-" +
        (parseInt(updatetime.getMonth()) + 1) +
        "-" +
        updatetime.getFullYear() +
        " " +
        updatetime.getHours() +
        ":" +
        updatetime.getMinutes() +
        ":" +
        updatetime.getSeconds();
    });
  });

  deleteIcon.addEventListener("click", function () {
  
  card.remove();
})
    
  

  card.appendChild(contentWrapper);
  card.appendChild(createIcon);
  card.appendChild(deleteIcon);

  todo_list.appendChild(card);

  inputText.value = "";
 
}

formSubmitBtn.addEventListener("click", function (e) {
  if (inputText.value === "") {
    alert("plese enter the proper value in the bbox");
    return;
  }
  else{
    let currentTime = new Date();
    let time =currentTime.getDate() +
      "-" +
      (parseInt(currentTime.getMonth()) + 1) +
      "-" +
      currentTime.getFullYear() +
      " " +
      currentTime.getHours() +
      ":" +
      currentTime.getMinutes() +
      ":" +
      currentTime.getSeconds();
  
    rendercard(inputText.value,time);

  }

});