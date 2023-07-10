async function partitionLomuto(ele, l, r){
  // console.log('In partitionLomuto()');

  let i = l - 1;
  // color pivot element
  ele[r].style.background = 'red';
  for(let j = l; j <= r - 1; j++){
      // console.log('In partitionLomuto for j');

      // color current element
      ele[j].style.background = '#f7786b';
    
      await wait(delay);

      if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
          // console.log('In partitionLomuto for j if');

          i++;
          swap(ele[i], ele[j]);

          ele[i].style.background = 'orange';
          if(i != j) ele[j].style.background = 'orange';
        
          await wait(delay);
      }
      else{
          // color if not less than pivot
          ele[j].style.background = 'pink';
      }
  }
  i++; 

  await wait(delay);
  swap(ele[i], ele[r]);
  // console.log(`i = ${i}`, typeof(i));
 
  ele[r].style.background = 'pink';
  ele[i].style.background = 'green';


  await wait(delay);
  
 
  for(let k = 0; k < ele.length; k++){
      if(ele[k].style.background != 'green')
          ele[k].style.background = '#3e4444';
  }

  return i;
}

async function quickSort(ele, l, r){
  // console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
  if(l < r){
      let pivot_index = await partitionLomuto(ele, l, r);
      await quickSort(ele, l, pivot_index - 1);
      await quickSort(ele, pivot_index + 1, r);
  }
  else{
      if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
          ele[r].style.background = 'green';
          ele[l].style.background = 'green';
      }
  }
}

document
  .getElementById("quickedSortClicked")
  .addEventListener("click", async function () {
    const ele = document.querySelectorAll(".divBar");
    const l = 0;
    const r = ele.length - 1;
    disableSortingBtn();
    desableSizeSlide();
    desableNewArrayBtn();
    await quickSort(ele, l, r);

    enableSortingBtn();
    enableSizeSlide();
    enableNewArrayBtn();
    
  });
