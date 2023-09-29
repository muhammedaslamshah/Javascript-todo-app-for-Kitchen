let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");
// Create an empty array
let arrayList = [];

// step 2
// Add kitchen items
function addkitchenItems() {
  let kitchenInputData = kitchenInput.value;

  // Create DOM elements now
  let li = document.createElement("li");

  let spanEl = document.createElement("span");
  li.appendChild(spanEl);
  spanEl.innerText = kitchenInputData;

  li.style.cssText = "animation-name: slideIn";
  kitchenItemsList.appendChild(li);
  kitchenInput.value = "";
  kitchenInput.focus();
  console.log(li);

  // push Entered values to  arrayList
  arrayList.push(kitchenInputData);

  // console current
  console.log(arrayList);

  // Create Trash button
  let trashBtn = document.createElement("i");
  trashBtn.classList.add("fas", "fa-trash");
  li.appendChild(trashBtn);

  // Create Edit button
  let ediBtn = document.createElement("i");
  ediBtn.classList.add("fas", "fa-edit");
  li.appendChild(ediBtn);
}

// delete kitchen items
function deleteKitchenItem(event) {
  if (event.target.classList[1] === "fa-trash") {
    let item = event.target.parentElement;
    item.classList.add("slideOut");
    item.addEventListener("transitionend", function () {
      item.remove();
    });
  }
}

//   Edit kitchen item
function editKitchenItem(event) {
  if (event.target.classList[1] === "fa-edit") {
    let editedValue = prompt("Please asd new text");
    let item = event.target.parentElement;

    let spanEl = item.querySelector("span");
    spanEl.innerText = editedValue;
  }
}

// Step 1
// Add an event lister to the button
addBtn.addEventListener("click", addkitchenItems);
kitchenItemsList.addEventListener("click", deleteKitchenItem);
kitchenItemsList.addEventListener("click", editKitchenItem);
