async function insertionsort() {
  // console.log("In insertion()");

  const ele = document.querySelectorAll(".divBar");
  //   console.log(ele);

  ele[0].style.background = "#82b74b";

  for (let i = 1; i < ele.length; i++) {
    // console.log("In ith loop");

    let j = i - 1;
    let key = ele[i].style.height;

    ele[i].style.background = "#f7786b";

    await wait(delay);

    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      // console.log("In while loop");

      ele[j].style.background = "#f7786b";

      swap(ele[j+1], ele[j]);
      j--;

      await wait(delay);

      for (let k = i; k >= 0; k--) {
        ele[k].style.background = "#82b74b";
      }
    }

    ele[j + 1].style.height = key;

    ele[i].style.background = "#82b74b";
  }
}
document
  .getElementById("insertionSortClicked")
  .addEventListener("click", async function () {
    disableSortingBtn();
    desableSizeSlide();
    desableNewArrayBtn();

    await insertionsort();

    enableSortingBtn();
    enableSizeSlide();
    enableNewArrayBtn();
  });
