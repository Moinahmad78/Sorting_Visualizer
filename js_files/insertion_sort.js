//Insertion Sort
async function insertionSort() {
    disableEnable(true);                                                                    //disable all buttons and array size slider  
    sort_name.innerText = "Insertion Sort";

    changeBgColorOfBar(0, green_clr);                                        //change background color of first bar to green     
    await wait();

    let j = 0;

    for (let i = 1; i < arr_size; i++) {
        j = i;
        if (arr[j] > arr[j - 1]){
            changeBgColorOfBar(j, green_clr);                                     //change background color of bar to green, as the bar is  in sorted order
            await wait();
        }    
        else {
                    while (j > 0 && arr[j] < arr[j - 1]) {
                        changeBgColorOfBar(j, "red");
                        await wait();                                                                //change background color of bars to red to show that, on this bars comparison is to be performed
                        changeBgColorOfBar(j-1, "red");
                        await wait();

                        await swapHelper(j-1, j, 1);                              //swap bars
                        await wait();

                        changeBgColorOfBar(j - 1, green_clr);                      //change background color of bars to green(sorted state)
                        changeBgColorOfBar(j, green_clr);
                        await wait();

                        j--;
                    }
        }
    }

    disableEnable(false);                                                              //enable buttons
    sort_name.innerText = "";
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//get the button which used to perform insertion sort
var insert_sort = document.getElementById("insert_sort");
insert_sort.addEventListener('click', insertionSort);                   //start  insertion sorting when button is clicked