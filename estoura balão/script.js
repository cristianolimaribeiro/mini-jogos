
function addBola(){
    var bola = document.createElement('div');
    bola.setAttribute('class', 'bola');



    var p1 = Math.floor(Math.random() * 1280);
    var p2 = Math.floor(Math.random() * 500);
    var balao = Math.floor(Math.random() * 3) + 1;
   
    
    if (balao === 1){
        var path = 'bola1.png'
    } else if(balao === 2){
        var path = 'bola2.png'
    }else{
        var path = 'bola3.png'
    }

    bola.setAttribute('style', 'left: ' + p1 + 'px;top:' + p2 + 'px; background-image:'+ 'url('+path+')');
    bola.setAttribute('onclick', 'estourar(this)');


    document.body.appendChild(bola);
}


function estourar(el){
    var audio = new Audio('pop.mp3')
    audio.play();
    document.body.removeChild(el)
}

function iniciar(){
    setInterval(addBola, 1000);
};



