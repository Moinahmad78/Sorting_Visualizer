//get background color of bar
function getBgColorOfBar() {
    let st = window.getComputedStyle(bars[0]);
    let trans = st.getPropertyValue("background-color");
    return trans;
}

//change background color of bars 
function changeBgColorOfBar(i, color) {
    bars[i].style.backgroundColor = color;
}

//duration for swap
function wait() {
    // console.log("wait",spd);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, spd);
    });
}

//swap bars
function swap(el1, el2, k) {

    return new Promise((resolve) => {

        // swapping two bars(visually)
        el1.style.transform = `translateX(${width * k}px)`;
        el2.style.transform = `translateX(${-width * k}px)`;

        window.requestAnimationFrame(function () {
            setTimeout(() => {
                // document.getElementById('hold_bars').insertBefore(el2, el1);    //change dom(swapping in dom)
                const afterNode2 = el2.nextElementSibling;
                const parent = el2.parentNode;
                //if (false) {
                if (el1 === afterNode2) {
                    parent.insertBefore(el1, el2);
                } else {
                    el1.replaceWith(el2);
                    parent.insertBefore(el1, afterNode2);
                }
                resolve();
            }, spd);
        });
    });

}

//helper function for swapping
async function swapHelper(i, j, k) {
    let temp = 0;
    bars[i].style.transition = `all ${spd}ms ease`;
    bars[j].style.transition = `all ${spd}ms ease`;                                     //add transition to perform visual swapping

    await swap(bars[i], bars[j], k);

    bars[i].style.transform = `translateX(0px)`;
    bars[j].style.transform = `translateX(0px)`;

    bars[i].style.transition = 'none';
    bars[j].style.transition = 'none';

    temp = arr[i];
    arr[i] = arr[j];                                                                    //swap in array
    arr[j] = temp;
}

//Bubble sort function
async function bubbleSort() {
    disableEnable(true);                                                                    //disable all buttons and array size slider  
    sort_name.innerText = "Bubble Sort";
    let flag = true;
    let i = 0;

    let bgcolor = getBgColorOfBar();

    //bubble sort logic
    for (i = 0; i < arr_size - 1; i++) {

        for (let j = 0; j < arr_size - i - 1; j++) {

            changeBgColorOfBar(j, 'red');                                 //change background color of bars to red to show that, on this bars comparison is to be performed
            changeBgColorOfBar(j + 1, 'red');
            await wait();

            if (arr[j] > arr[j + 1]) {
                await swapHelper(j, j + 1, 1);
                await wait();
                flag = false;
            }

            changeBgColorOfBar(j, bgcolor);                        //change background color of bar to previous background color 
            changeBgColorOfBar(j + 1, bgcolor);
        }
        changeBgColorOfBar(arr_size - i - 1, green_clr);                            //change color of sorted bar
        if (flag)
            break;
        else
            flag = true;
    }
    for (let k = 0; k < arr_size - i - 1; k++)
        bars[k].style.backgroundColor = green_clr;
    disableEnable(false);                                                              //enable buttons
    sort_name.innerText = "";
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//get the button which used to perform bubble sort
var bub_sort = document.getElementById("bubble_sort");
bub_sort.addEventListener('click', bubbleSort);                   //start  bubble sorting when button is clicked

//get speed slider
var spslider = document.getElementById('speed');
var spd = 1100 - spslider.value;
spslider.addEventListener('input', () => {
    spd = (1100 - spslider.value);
});