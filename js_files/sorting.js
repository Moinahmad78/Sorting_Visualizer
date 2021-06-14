//create bars 
function createBars() {
    arr = [];                                                                                             //reinitialize
    arr_size = arrs.value;                                                                     //define size of array

    var hold_bars = document.getElementById("hold_bars");    //get the div tag in which bar is to be placed
    hold_bars.innerHTML = "";

    width = Math.ceil(hold_bars.offsetWidth / arr_size);            //get width for single bar 
    bar_width = width + "px";

    //create bars with specific style and append
    for (let i = 0; i < arr_size; i++) {

        arr.push(Math.floor(Math.random() * 101) + 10);             //insert integer value in array, to use it as bars height
        //console.log(arr[i]);
        let bar = document.createElement("div");                          //create bar with div tag
        bar.classList.add("stylebar");
        bar.style.height = arr[i] * 3 + "px";                                       //height of bar
        bar.style.width = bar_width;                                                //width of bar
        hold_bars.appendChild(bar);

    }
    bars=hold_bars.childNodes;                                                 //get all generated bars to perform different sorting on it
    
    
}

//Disable all buttons when one of the  button is clicked to perform sorting(status == true) or enable all buttons when sorting is completed(status == false) 
function disableEnable(status) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = status;                       //disable or enable all buttons based on status
            
        }
        arrs.disabled = status;                                    //disable or enable array size range slider based on status
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var arr = [];
var arr_size = 0;
var width = 0;
var bars=[];
var sort_name=document.getElementById('sort_name');   
var green_clr="#00cc00";                                    



//get the input tag having  id="arr_sz"(array size slider)
var arrs = document.querySelector("#arr_sz");
arrs.addEventListener('input', createBars);

createBars(); //called when page is loaded 

//get the button which used to generate new array
var new_array = document.getElementById("new_array");
new_array.addEventListener('click', createBars);                     //generates new array on button clicked

//get all buttons
var buttons = document.getElementsByTagName('button');




