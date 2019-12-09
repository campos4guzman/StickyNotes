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
        this.tag.innerHTML="<p>"+this.dia+"</p>"+"<p>"+this.hora+"</p>"+"<p>"+this.texto+"</p>";
        this.tag.style.backgroundColor="yellow";
        document.getElementById("conte").appendChild(this.tag);
    }
}

function añadir(){
    var d = new Date();
    var fecha=d.getDate() + "/" + (d.getMonth() +1) + "/" + d.getFullYear()
    var hora=d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    var nota=new Nota(document.getElementById("intro").value,hora,fecha,cont);
    cont++;
    return nota;
}


document.getElementById("button").onclick=añadir;






