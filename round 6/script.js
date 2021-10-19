
function addMask(){
    var mask = document.createElement('div');
    mask.setAttribute('class', 'mask');

    var p1 = Math.floor(Math.random() * 1280);
    var p2 = Math.floor(Math.random() * 600);
    var mascara = Math.floor(Math.random() * 4) + 1;

    if (mascara === 1){
        var path = 'mask.png'
    } else if(mascara === 2){
        var path = 'mask2.png'
    } else if(mascara === 3){
        var path = 'mask3.png'
    }else{
        var path = 'mask4.png'
    }

    mask.setAttribute('style', 'left: ' + p1 + 'px;top:' + p2 + 'px; background-image:'+ 'url('+path+')');
    mask.setAttribute('onclick', 'estourar(this)');
   

    document.body.appendChild(mask);
}

function estourar(el){
    var audio = new Audio('grito.mp3')
    audio.play();
    document.body.removeChild(el)
}

function iniciar(){
    setInterval(addMask, 500);
};


   
