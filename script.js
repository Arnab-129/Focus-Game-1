function selectTimer(){
    var select = document.getElementById("select-menu");
    var value = select.value;
    if(value == '25min'){
        document.getElementById("timer-25").classList.remove("d-none");
        document.getElementById("timer-50").classList.add("d-none");
        document.getElementById("timer-90").classList.add("d-none");
        document.getElementById("start").classList.remove("d-none");
    }
    else if(value == '50min'){
        document.getElementById("timer-50").classList.remove("d-none");
        document.getElementById("timer-25").classList.add("d-none");
        document.getElementById("timer-90").classList.add("d-none");
        document.getElementById("start").classList.remove("d-none");
    }
    else if(value == '90min'){
        document.getElementById("timer-90").classList.remove("d-none");
        document.getElementById("timer-50").classList.add("d-none");
        document.getElementById("timer-25").classList.add("d-none");
        document.getElementById("start").classList.remove("d-none");

    }
}