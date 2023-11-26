/*Marcas reconocidas */
window.addEventListener("load", function(){
      let imagenes = [];
      imagenes[0] = "assets/img/hershey.png";
      imagenes[1] = "assets/img/cat.jpg";
      imagenes[2] = "assets/img/Xiaomi_1.png";

      let indiceImagenes = 0;

      function cambiarImagenes() {
        document.slider.src = imagenes[indiceImagenes];
        if(indiceImagenes < 2){
            indiceImagenes ++;
        }
        else {
            indiceImagenes = 0;
        }
          
      };
         setInterval(cambiarImagenes, 2000);
});


/*Atras y adelante (galeria) */

let num = 1;

function adelante() {
    num++;
    if(num > 4)
       num=1;
       let img = document.getElementById("img");
           img.src= "assets/" + "img/" + "marc0" + num + ".jpg";
}

function atras() {
    num--;
    if(num < 1)
    num = 4;
    let img = document.getElementById("img");
        img.src= "assets/" + "img/" + "marc0" + num + ".jpg";
}


/*Preloader  */

let preloader = document.getElementById("preloader");
         setTimeout(() => {
            preloader.style.transition = "0.5s";
            preloader.style.visibility = "hidden";
         }, 2000);

/*Fotos */

const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference) {
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

function closeImg() {
    fulImgBox.style.display = "none";
}