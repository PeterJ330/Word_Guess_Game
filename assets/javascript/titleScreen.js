//  ===== Sets up inital webpage view =======
function titleOut(){
    $("#ready").css({'opacity' : 0.00});
};

function titleIn(){
    $("#ready").css({'opacity' : 1.00});
}

function titleFlash(){
    setTimeout(titleOut, 500)
    setTimeout(titleIn, 1000)
}

$(document).ready(function(){
    setInterval(function(){
       titleFlash();
    },1000)
    });
