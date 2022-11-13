

function changebackground() {
    const colorelem = document.getElementById("color")
    const colors = document.querySelector('input');
    var colorvalue = colorelem.value
    document.body.style.backgroundColor = colorvalue;
}

function getcolor() {
    const colorelem = document.getElementById("color")
    return colorelem
}




