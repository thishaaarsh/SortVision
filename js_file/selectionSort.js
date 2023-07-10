async function selectionSort() {
  // console.log("In selection()");

  const ele = document.querySelectorAll(".divBar");
  for (let i = 0; i < ele.length; i++) {
    // console.log("In ith loop");
    let min_index = i;

    ele[i].style.background = "#eca1a6";
    for (let j = i + 1; j < ele.length; j++) {
      // console.log("In jth loop");
      
      ele[j].style.background = "#f7786b";

      await wait(delay);
      
      if (
        parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)
      ) {
        // console.log("In if condition height comparision");
        if (min_index !== i) {

          // new min_index is found so change prev min_index color back to normal
          ele[min_index].style.background = "#3e4444";
        }
        min_index = j;
      } else {

        // if the currnent comparision is more than min_index change is back to normal
        ele[j].style.background = "#3e4444";
      }
    }
    await wait(delay);
    
    swap(ele[min_index], ele[i]);

    // change the min element index back to normal as it is swapped
    ele[min_index].style.background = "#3e4444";
    
    // change the sorted elements color to green
    ele[i].style.background = "#82b74b";
  }
}
document
  .getElementById("selectionSortClicked")
  .addEventListener("click", async function () {
    disableSortingBtn();
    desableSizeSlide();
    desableNewArrayBtn();

    await selectionSort();

    enableSortingBtn();
    enableSizeSlide();
    enableNewArrayBtn();
  });
