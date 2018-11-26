var dosdecartes=[1,1,2,2,3,3,4,4,6,6,7,7];
var carteflip=[0,0,0,0,0,0,0,0,0,0,0,0];
var paire=[];
var nbrpaire=0;

var imagecarte=document.getElementById('tapis').getElementsByTagName("img");

for (var i=0;i<imagecarte.length;i++){

    imagecarte[i].CarteNo=i;
    imagecarte[i].onclick=function () {
        ProgrammeJeux(this .CarteNo);
        
    }

}


initialgame();
function affichecarte(CarteNo) {

    switch (carteflip[CarteNo]) {
        case 0:
            imagecarte[CarteNo].src="Dos_de_carte_WoD8.png";
            break;
        case 1:
            imagecarte[CarteNo].src="dragon"+dosdecartes[CarteNo]+".png";
            console.log('test');
            break;
        case -1:
            imagecarte[CarteNo].style.visibility="hidden";
            break;
        
    }
}

function initialgame() {
    for (var s=dosdecartes.length-1;s>=1;s--){
        var hasard=Math.floor(Math.random()*(s+1));
        var savecard=dosdecartes[s];
        dosdecartes[s]=dosdecartes[hasard];
        dosdecartes[hasard]=savecard;


    }
    
}
function ProgrammeJeux(CarteNo) {
    if (paire.length<2){
        if (carteflip[CarteNo]== 0){
            carteflip[CarteNo]= 1;
            paire.push(CarteNo);
            affichecarte(CarteNo);

        }
if (paire.length==2){
    var nouveauetat=0;
    if (dosdecartes[paire[0]]==dosdecartes[paire[1]]){
        nouveauetat=-1;
        nbrpaire++

    }
    carteflip[paire[0]]=nouveauetat;
    carteflip[paire[1]]=nouveauetat;

    setTimeout(function () {
        affichecarte(paire[0]);
        affichecarte(paire[1]);
        paire=[];

    },1000)

}}};
function myfunction() {
    setTimeout(function () {
        alert('fin')

    },5000);}



