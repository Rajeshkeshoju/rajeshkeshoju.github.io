window.onscroll = function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("topBtn").style.display = "block"
    }else{
        document.getElementById("topBtn").style.display = "none"
    }
}


function backToTop(){
    document.body.scrollTop =0 //for Safari
    document.documentElement.scrollTop = 0  //for Chrome, Firefox , Edge
}