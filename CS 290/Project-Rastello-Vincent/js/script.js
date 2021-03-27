$('#myCarousel').bind('slid.bs.carousel', function (e) {
    var index = $(e.target).find(".active").index();
    if(index === 0) {
        document.body.style.backgroundColor = "magenta"
        document.getElementById("tarantula").style.color = "magenta"
    }
    else if (index === 1) {
        document.body.style.backgroundColor = "#177527"
        document.getElementById("tarantula").style.color = "#177527"
    }
    else if (index === 2) {
        document.body.style.backgroundColor = "blue"
        document.getElementById("tarantula").style.color = "blue"
    }
    else if (index === 3) {
        document.body.style.backgroundColor = "#f2c913"
        document.getElementById("tarantula").style.color = "#f2c913"
    }
    else if (index === 4) {
        document.body.style.backgroundColor = "#960606"
        document.getElementById("tarantula").style.color = "#960606"
    }
    else if (index === 5){
        document.body.style.backgroundColor = "orange"
        document.getElementById("tarantula").style.color = "orange"
    }
    else if (index === 6) {
        document.body.style.backgroundColor = "red"
        document.getElementById("tarantula").style.color = "red"
    }
    else {
        document.body.style.backgroundColor = "#053dad"
        document.getElementById("tarantula").style.color = "#053dad"
    }
});


