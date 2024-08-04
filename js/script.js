let input= document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);/* The Array.from() method returns an array from any object with a length property.*/
arr.forEach( button => {
    button.addEventListener('click', (e) =>{       
// addEventListener set up the function that will be call whenever the specified event is deliveverd to the target
        if(e.target.innerHTML == '='){
            // `e.target` refers to the event target of a user interaction, typically within an event handler function.
            // The innerHTML property returns the current HTML source of the document, including all changes that have been made since the page was loaded.
            string = eval(string); 
            /*eval(string) allow us to execute a string of code*/
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string ="";
            input.value = string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string
                .length-1);
            input.value=string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})