const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function donnees_modale(categorie,numero_film){
  var modal_titre = "titre du film dans java script pour test";
  index_cat = 2
  index = 0
  
  document.getElementById("id_mod_titre").innerText = (modal_titre );
  
  index_cat = 0
  index = 0
  img_modal = liste_films[index_cat][numero_film]["image_url"]
  fonction_inser_img("id_mod_img", img_modal);  
  toggleModal()
}  

  function toggleModal(){
  modalContainer.classList.toggle("active")
}

