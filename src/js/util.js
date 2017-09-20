const DELETE_KEY_CODE = 8;
const TAB_KEY_CODE = 9;

function isAnAcceptedCharacter(key) {
    return (key > 64 && key < 91) || key === DELETE_KEY_CODE || key === TAB_KEY_CODE;
}

export function restrictCharacters(event) {
    var e = event || window.event;  // get event object
    var key = e.keyCode || e.which; // get key cross-browser

    // if (e. !== "") {
    //     e.returnValue = "";
    // }

    if (!isAnAcceptedCharacter(key)) {
        //Prevent default action, which is inserting character
        if (e.preventDefault) e.preventDefault(); //normal browsers
        e.returnValue = false; //IE
    }
}