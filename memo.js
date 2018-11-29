//array
var dosdecartes=[1,1,2,2,3,3,4,4,6,6,7,7];
var carteflip=[0,0,0,0,0,0,0,0,0,0,0,0];
var paire=[];
var nbrpaire=0;



//card on the board
var imagecarte=document.getElementById('tapis').getElementsByTagName("img");
var seconde = document.getElementById("sec");
var inputseconde = document.getElementById("input2").value;

var minute = document.getElementById("min");
var inputminute = document.getElementById("input1").value;
var temps;



//loop for on click card
score();
for (var i=0;i<imagecarte.length;i++){

    imagecarte[i].CarteNo=i;
    imagecarte[i].onclick=function () {
        ProgrammeJeux(this .CarteNo);
        
    }

}




//differente statut for flip card if return card if is not same image
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
//random place for card
function initialgame() {
    for (var s=dosdecartes.length-1;s>=1;s--){
        var hasard=Math.floor(Math.random()*(s+1));
        var savecard=dosdecartes[s];
        dosdecartes[s]=dosdecartes[hasard];
        dosdecartes[hasard]=savecard;


    }
    
}




//function for pair card and banish this is true
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
        nbrpaire++;
score()

    }
    carteflip[paire[0]]=nouveauetat;
    carteflip[paire[1]]=nouveauetat;

    setTimeout(function () {
        affichecarte(paire[0]);
        affichecarte(paire[1]);
        paire=[];

    },1000)

}}}
//hidden timer
function myfunction() {
document.location.reload();
    setTimeout(function () {
        alert('fin du game bande de cons')

    },30000);}
    if (nbrpaire>=6){
        alert("fin de partie")
    }


//timer
var countDown = function() {


    inputseconde--;

    minute.innerHTML=inputminute;
    seconde.innerHTML= inputseconde;






    if (inputseconde==0 && inputminute!=0){

        inputseconde=59;
        minute.innerHTML = inputminute--;
    }

    if (inputseconde==0 && inputminute==0){

        alert('fini');
        stopCountDown();
        document.location.reload();

    }


    temps=setTimeout(countDown,1000);

};


var stopCountDown = function() {

    clearTimeout(temps);

    console.log(inputseconde);


};
document.getElementById("valider").addEventListener("click", function() {

    inputseconde = document.getElementById("input2").value;

    inputminute = document.getElementById("input1").value;


    clearTimeout(temps);

    countDown();

});


var countDown = function() {


    inputseconde--;

    minute.innerHTML=inputminute;
    seconde.innerHTML= inputseconde;






    if (inputseconde==0 && inputminute!=0){

        inputseconde=59;
        minute.innerHTML = inputminute--;
    }

    if (inputseconde==0 && inputminute==0){

        alert('fini');
        stopCountDown();
        document.location.reload();

    }


    temps=setTimeout(countDown,1000);

};


var stopCountDown = function() {

    clearTimeout(temps);

    console.log(inputseconde);


};


//input pause
var stopButton = document.getElementById("pause");

stopButton.addEventListener("click", stopCountDown);


document.getElementById("play").addEventListener("click",function()
{

    countDown();

});
//score
function score() {

    if (nbrpaire==1){
       document.getElementById("score").innerHTML ="bravo tu a gagner";
        document.getElementById("score").style.display="block";
        document.getElementById("tapis").style.display="none";
    }

}
