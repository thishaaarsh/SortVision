function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  el1.style.height = transform2;
  el2.style.height = transform1;
}

function disableSortingBtn() {
  document.querySelector("#bubbleSortClicked").disabled = true;
  document.querySelector("#insertionSortClicked").disabled = true;
  document.querySelector("#mergeSortClicked").disabled = true;
  document.querySelector("#quickedSortClicked").disabled = true;
  document.querySelector("#selectionSortClicked").disabled = true;
}

function enableSortingBtn() {
  document.querySelector("#bubbleSortClicked").disabled = false;
  document.querySelector("#insertionSortClicked").disabled = false;
  document.querySelector("#mergeSortClicked").disabled = false;
  document.querySelector("#quickedSortClicked").disabled = false;
  document.querySelector("#selectionSortClicked").disabled = false;
}

function desableSizeSlide() {
    document.querySelector("#arr_sz").disabled = true;
}

function enableSizeSlide() {
    document.querySelector("#arr_sz").disabled = false;
}

function desableNewArrayBtn() {
    document.querySelector("#newArray").disabled = true;
}

function enableNewArrayBtn() {
    document.querySelector("#newArray").disabled = false;
}

let delay = 100;
function wait(miliSec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, miliSec);
  });
}

document
  .getElementById("spd")
  .addEventListener("input", function speedhandle() {
    const speed = document.getElementById("spd").value;

    delay = 100 - speed;
  });

function createNewArray(noOfBars = 60) {
  document.querySelectorAll(".divBar").forEach((el) => el.remove());

  const numberArray = [];

  for (let i = 0; i < noOfBars; i++) {
    const randomNumber = Math.floor(Math.random() * 150);
    numberArray.push(randomNumber);
  }

  for (let i = 0; i < numberArray.length; i++) {
    const randomDiv = document.createElement("div");
    randomDiv.classList.add("divBar");
    randomDiv.classList.add("flex-item");
    // randomDiv.innerHTML = numberArray[i];

    randomDiv.style.height = (numberArray[i] * 2.5) + 100 + "px";
    document.getElementById("bars").appendChild(randomDiv);
  }
}

createNewArray();

document
  .getElementById("newArray")
  .addEventListener("click", function newArray() {
    const arr_size = document.getElementById("arr_sz").value;

    createNewArray(arr_size);
  });

document
  .getElementById("arr_sz")
  .addEventListener("input", function newArray() {
    const arr_size = document.getElementById("arr_sz").value;

    createNewArray(arr_size);
  });
