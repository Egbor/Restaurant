window.onload = function () {

    alert("sosi");
    let input = document.getElementById("sosi");
    let button = document.querySelector(".button");

    button.disabled = true; //setting button state to disabled

    input.addEventListener("keypress", stateHandle);

    function stateHandle() {
        alert("aaaa sosi")
        if (document.querySelector(".input").value === "") {
            button.disabled = true; //button remains disabled
        } else {
            button.disabled = false; //button is enabled
        }
    }
}