//selection sort function
async function selectionSort(){

    disableEnable(true);                                                                    //disable all buttons and array size slider  
    sort_name.innerText="Selection Sort";
    let min;
   
    let bgcolor = getBgColorOfBar();                                              //get color of bar
    //selection sort logic
    for(let i=0;i<arr_size-1;i++){
        changeBgColorOfBar(i,'red');   
        min=i;
        for(let j=i+1;j<arr_size;j++){

            changeBgColorOfBar(j,'blue');
            await wait();

            if(arr[min]>arr[j]){
                if(min!=i)
                    changeBgColorOfBar(min,bgcolor);
                min=j;
                changeBgColorOfBar(min,'red');

                await wait();
            }
            else
                changeBgColorOfBar(j,bgcolor);
        }
        if(min!=i){
            await swapHelper(i,min,min-i);                        //swapping
            await wait();
        } 
        //console.log(arr);
        changeBgColorOfBar(i,green_clr);                            //change color of sorted bar
        if(min!=i)
            changeBgColorOfBar(min,bgcolor);                      //change color of swapped bar
    }

    changeBgColorOfBar(arr_size-1,green_clr);                            //change color of last sorted bar
    disableEnable(false);                                                              //enable buttons
    sort_name.innerText="";
}







//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//get the button which used to perform selection sort
var select_sort = document.getElementById("select_sort");
select_sort.addEventListener('click', selectionSort);                   //start  selection sorting when button is clicked