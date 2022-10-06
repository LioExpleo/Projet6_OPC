
function fonction_creat_img5() {
      //créer une image
      monImage = document.createElement('img');
      //afficher la source
      monImage.src = "img10.jpg";
      //afficher l'image dans la page html
      var div_id = document.getElementById("id_img_10");
      div_id.innerHTML='';
      div_id.appendChild(monImage);
      }

/*
function fonction_parse_json() {
  const json = '{"json1":"contenu json1", "json2":666}';
  console.log ("rrr");
  const obj_json = JSON.parse(json);
  console.log(obj_json.json1);
  console.log(obj_json.json2);
  const obj_jsonx = '{"json1":"json pour test", "json2":777}';
  const const_obj_json2 = JSON.parse(obj_jsonx);
  console.log(const_obj_json2.json1);
  console.log(const_obj_json2.json2);
}

document
  .getElementById("id_btn_parse")
  .addEventListener("click", fonction_parse_json);
*/
function fonction_inser_img(balise_image_destination, origine_image) {
  //balise_image_destination = "id_img_test2"
  //origine_image = "https://m.media-amazon.com/images/M/MV5BNDEyYTA5OWEtYjNiYS00MGZlLThjYzEtMTc1Zjk2NDRmZmYxXkEyXkFqcGdeQXVyNzIwNTQyMw@@._V1_UY268_CR1,0,182,268_AL_.jpg"
  //créer une image
  let monImage = document.createElement('img');
  //afficher la source
  monImage.src = origine_image;
  //afficher l'image dans la page html
  var div_id = document.getElementById(balise_image_destination);
  div_id.innerHTML='';

  div_id.append(monImage);
  div_id.appendChild(monImage);
  }  

  function fonction_inser_img2(balise_image_destination, origine_image) {
    //balise_image_destination = "id_img_test2"
    //origine_image = "https://m.media-amazon.com/images/M/MV5BNDEyYTA5OWEtYjNiYS00MGZlLThjYzEtMTc1Zjk2NDRmZmYxXkEyXkFqcGdeQXVyNzIwNTQyMw@@._V1_UY268_CR1,0,182,268_AL_.jpg"
    //créer une image
    let monImage = document.createElement('img');
    //afficher la source
    monImage.src = origine_image;
    //afficher l'image dans la page html
    var div_id = document.getElementById(balise_image_destination);
    //div_id.innerHTML='';
    //div_id.append(monImage);
    div_id.appendChild(monImage);
    }  
  
//const var_next_page = document.getElementById("id_result_next").innerText = (value.next);  
function fonction_test2(){
  document
  .getElementById("id_result_test")
  .innerText = ("var_next_page");
}
  
document
  .getElementById("id_btn_fetch")
  .addEventListener("click", fonction_test);

  document
    .getElementById("id_test_img1")
    .addEventListener("click", fonction_inser_img);



//**************************************************
function fct_script4(){
  fonction_creat_img4();
}

//C'est le onclick dans index.html qui lance la fonction
// <img  id ="image"  src="images/logo_justStreamIt.png" onclick="fct_script4()">Click pour lancer une fonction qui affiche img13</button>
function fonction_creat_img4() {
  //créer une image
  monImage = document.createElement('img');
  //afficher la source
  monImage.src = "img13.jpg";
  //afficher l'image dans la page html
  //var div_id = document.getElementById("id_img_test1");
  var div_id = document.getElementById("id_img_9");
  div_id.innerHTML='';
  div_id.appendChild(monImage);
  }  

//Test fonction insertion img4 insère l'image en position 4
function fonction_creat_img6() {
  //créer une image
  monImage = document.createElement('img');
  //afficher la source
  monImage.src = "img13.jpg";
  var div_id = document.getElementById("id_img_test4");
  div_id.innerHTML='';
  div_id.appendChild(monImage);
  }  


function changeStyle(cat, opacity){
  if (cat == 0){
    var element = document.getElementById("fg_cat2");
    element.style.opacity = 0.1;
  }
  if (cat == 1){
    var element = document.getElementById("fg_cat3");
  element.style.opacity = 0.3;
  }
  if (cat == 2){
    var element = document.getElementById("fg_cat4");
  element.style.opacity = 0.5;
  }
  if (cat == 3){
    var element = document.getElementById("fg_cat5");
  element.style.opacity = 0.8;
  }
  //element.style.display = "none";
}

//Fonction qui met run-cycle à 1. run-cycle n'est à 1 qu'au 1er tour de cycle 
function fct_tour1_prog_en_cours(){
  run_cycle = 1;
}

function fonction_ouvert_page_html(){
  //adresse = "https://www.imdb.com/title/tt1508669/";
  adresse =  imdb_url_play;
  window.open(adresse,"fenetre play","menubar=no, status=no, width=100px");
  //window.location.href=adresse;
  window.location.href=class_film_modal["imbd_url"]
}

function nb_page(){
  let nb
  url_pag = "http://localhost:8000/api/v1/titles/?genre_contains=&page=23&page_size=8&page_size=7&page_size=7&sort_by=-imdb_score"
  nb = fonction_nbr_page(url_pag);
  //document.getElementById("nbre_page").innerText = fonction_nbr_page("http://localhost:8000/api/v1/titles/?genre_contains=&page=4&page_size=8&page_size=7&page_size=7&sort_by=-imdb_score");
  document.getElementById("nbre_page").innerText = (nb);
}

