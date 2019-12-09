var cont=0;

class Nota{
    constructor(text,hora,dia,id){
        this.texto = text;
        this.hora=hora;
        this.dia=dia;
        this.id=id;
        this.tag=document.createElement("div");
        this.tag.setAttribute("width", 200);
        this.tag.setAttribute("height", 200);
        this.tag.setAttribute("class",this.id);
        this.tag.innerHTML="<p>"+this.dia+"&nbsp;&nbsp;"+this.hora+"<br/>"+"<br/>"+this.texto+"</p>";
        document.getElementById("conte").appendChild(this.tag);
    }
}

function añadir(){
    var d = new Date();
    var fecha=d.getDate() + "/" + (d.getMonth() +1) + "/" + d.getFullYear()
    var hora=d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    var nota=new Nota(document.getElementById("intro").value,hora,fecha,cont);
    cont++;
    document.getElementById("intro").value="";
    return nota;
}


document.getElementById("button").onclick=añadir;



function mover(){
    var mousePosition;
var offset = [0,0];
var isDown = false;

var div = document.getElementsByClassName("0")[0];

div.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);
}

