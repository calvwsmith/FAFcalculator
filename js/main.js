var ele = document.getElementById("para");
ele.onclick = myFunction()
function myFunction() {
    var ele = document.getElementById("para");
    if (ele.style.display === "none"){
        ele.style.display = "block";
    }
    else {
        ele.style.display = "none";
    }
}