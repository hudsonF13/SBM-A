const body = document.getElementById("body");

const explosion = document.getElementById("explosion");
const coverButtonImg = document.getElementById("coverImageMinuature");
const streatButtonImg = document.getElementById("saoMarcalStreatImage");
const amountPeopleButtonImg = document.getElementById("amountPeopleImage");
const punhoForteFirstButtonImg = document.getElementById("punhoForteFirstImage");

const listImages = ["https://pbs.twimg.com/media/GcDpSxmW0AA1CoQ?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/Gb8x4_8XIAAmCmo?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/Gb6K3iEWYAAmEx_?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/Gb6QXC2WwAA1ekJ?format=jpg&name=large"]

function deathPage () {
    body.style.display = "none";
};

alert("Para melhorar sua experiência, veja esta página em tela cheia ou, es estiver no celular, vira a tela para a horizontal.");

explosion.addEventListener("click", deathPage);