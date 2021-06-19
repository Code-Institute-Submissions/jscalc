import { DATAMODEL } from './calc.js'; // imports functions from calc.js
import * as vDom from './assets/viewModel/vDom.js';   // import vDOM functions



/* 
This viewModel will need to fulfil the following functions:
    - Event listener which listens for clicks/input and displays the inputs in a div on the display section
    - Displays multiple inputs in the same div/p element
    - Event listener which listens for the input of an operator button and displays that operator in a separate div or p section.
    - Event listener which listens for the input of an additional operand and inputs that data in a single div 
    - Maintain a string of inputs which will update following every key press
    - Ensure entries are valid mathematical operators (no double operators, only one decimal point, no division by zero etc.) 
 */


const buttonList = Array.from(document.getElementsByTagName('button'));    
document.addEventListener('DOMContentLoaded', () => {
    // console.log(numberButton);

    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener('click', getInput(this.value));
    }
    // getInput
/*
    for (let button in operButton) {
        operButton[button].addEventListener('click', getInput);
    } */

    // numString = "0";

    // console.log(vNode1);
    // console.log(vNode1.tagName);
    // console.log(document.getElementById('app-root'));

    // console.log(initHistVNode);
    // Render VNodes
    // mountVDOM(initHistNode, document.getElementById('appRoot'));
    // mountVDOM(initEqDisp, document.getElementById('appRoot'));
   

});


// END OF DOCUMENT EVENT LISTENER

/* -------------------------------------------------  INPUT HANDLERS ----- */

function getInput(clickInput) {
    /** 
     * @param {string} clickInput 
     * 
     * Retrieves inputs from click events
     * **/

    switch(clickInput) {
        case '=':
            // send to calc.js for processing by function
            break;
        case 'clear':
            DATAMODEL.clearDisplay;
           // PUBSUB.publish();
            break;
        default:
            DATAMODEL.num(clickInput);
            PUBSUB.publish()        // publish change in state
            break;
    }
    
    
 }

 function inputValidator(numInput, Operand) {
     /* 
     Validates inputs - no double operators, no multiple decimals etc.
     Uses regular expressions to evaluate inputs
     Use if/else or case statement before calling upon displayInput()
     */
    const decimalRegex = /\./;
    const numRegex = /\d/;
    const operatorRegex = /\+|\-|\/|\*|\%/;
    // numRegex.test(numString) - test string for
    
 }

/* -------------------------  VIRTUAL DOM: Functions ----------- */



/* ---------------------------- TEST VNODES ---------------- */
/* 

render initial state for calculator - display 0 as single operand

    const initCalc = h('span', {id: operand1}, {text: '0'})

 */



/* ------------------------------------ END OF VIRTUAL DOM ---------------------- */


/* --------------------------------------------- DATA MODEL --------------------- */

/* 

    This is the model that holds the data inputted by the user or the default data when the app is initialised.
    The model needs to do the following:

    - receive inputs from users usually after they have run through an input validator function
    - Transfer those inputs to the Model (calc.js) from processing and solving of equations
    - Return outputs to the view (vDOM) so they cna be displayed by the view
    - Features to be implement:
        - Hold a history of inputs so users can backtrack and undo errors
        - Prepare more complex (i.e. beyond basic arithmetic) inputs for parsing and calculation

    consider using class
        
*/

/* --------------------------------- PUBLISHER/SUBSCRIBER MODEL ------------ */

/*  
The Publisher/Subscriber or Observer Pattern is a way to alert different functions, files or classes of a change in state in a certain function. The functions being alerted as subscribers; the function doing the alerting is the publisher. It is possible to have multiple publishers and multiple subscribers. Most front end frameworls operate a publish/subscribe pattern at some stage. In React, it is known as 'state'.
*/

const PUBSUB = {
    changeNotification: [],
    dataChangeNotification: [],     // list of functions
    subscribe: function(callbackFunction) {
        // subscribes a function to a
        this.changeNotification.push(callbackFunction);
    },
    publish: function() {
        this.changeNotification.forEach((changeNotification) => { changeNotification() });
    },
    subDataChange: function(callbackFunction) {
        this.dataChangeNotification.push(callbackFunction);
    },
    pubDataChange: function(callbackFunction) {
        this.dataChangeNotification.forEach((dataChangeNotification) => { dataChangeNotification(newString)});
    }
}

export {PUBSUB};
