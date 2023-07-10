async function bubbleSort() {
  //   console.log("In Bubble()");
  const ele = document.querySelectorAll(".divBar");
  //   console.log(ele);

  for (let i = 0; i < ele.length - 1; i++) {
    // console.log("In ith loop");

    for (let j = 0; j < ele.length - i - 1; j++) {
      //   console.log("In jth loop");

      ele[j].style.background = "#f7786b";
      ele[j + 1].style.background = "#f7786b";

      await wait(delay);

      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        // console.log("In if condition");

        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = "#3e4444";
      ele[j + 1].style.background = "#3e4444";
    }

    ele[ele.length - 1 - i].style.background = "#82b74b";
  }

  ele[0].style.background = "#82b74b";
}

// bubbleSort();
document.getElementById("bubbleSortClicked").addEventListener("click", async function() {
  disableSortingBtn();
  desableSizeSlide();
  desableNewArrayBtn();

  await bubbleSort();

  enableSortingBtn();
  enableSizeSlide();
  enableNewArrayBtn();
  
});
