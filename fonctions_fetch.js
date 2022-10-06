liste_count = [[],[],[],[],[],[],[]];
liste_page_next = [[],[],[],[],[],[],[]];
liste_page_previous = [[],[],[],[],[],[],[]];
url_ok = "";
url_meilleur_film_cat0 = []; liste_url_cat1 = [];  liste_url_cat2 = []; liste_url_cat3 = []; liste_url_cat4 = [];
fetch_en_cours = 0;

function raz_fetch_en_cours(){
  fetch_en_cours = 0;
}

function fonction_fetch_1(url, index_cat, nombre_films) {    
   
    url_new = "";
    url_new = url + "&page_size=" + nombre_films; 
    if (index_cat == 0){
      liste_url_cat1.pop();liste_url_cat1.pop();liste_url_cat1.pop();liste_url_cat1.pop();liste_url_cat1.pop();liste_url_cat1.pop();liste_url_cat1.pop();
    }

    for (let i = 0; i < 10; i++) {
      i=i;
    }

    if (fetch_en_cours == 0){
      fetch_en_cours = 1;
    fetch(url_new)

    .then(function(res) {
      if (res.ok) {
        return res.json();
      }     
    })
    .then(function(value) {
      //Recuperer tous les elements de la page
      liste_count[index_cat] = document.innerText=(value.count)
      liste_page_next[index_cat] = document.innerText = (value.next);
      liste_page_previous[index_cat] = document.innerText = (value.previous);
      
      var class_film = new ClassFilm;
      //creer une liste des 5 films par page avec les 3 premiers elements de la page, et tous les elements des 5 films.
      //categorie = [];
      liste_film= [[class_film],[class_film],[class_film],[class_film],[class_film],[class_film],[class_film],[class_film]];
      liste_films = [liste_film, liste_film,liste_film,liste_film,liste_film,liste_film,liste_film,liste_film]
  
      //Boucle pour recuperer tous les elements des films selon la valeur de l'attribut nombre de films.
      var index = 0;

      while (index < nombre_films){
      liste_films[index_cat][index]["id_film"] = document.innerText = (value.results[index]["id"]);
      liste_films[index_cat][index]["url_film"] = document.innerText = (value.results[index]["url"]);
      liste_films[index_cat][index]["imbd_url"] = document.innerText = (value.results[index]["imdb_url"]);
      liste_films[index_cat][index]["title"] = document.innerText = (value.results[index]["title"]);
      liste_films[index_cat][index]["year"] = document.innerText = (value.results[index]["year"]);
      liste_films[index_cat][index]["imbd_score"] = document.innerText = (value.results[index]["imdb_score"]);
      liste_films[index_cat][index]["vote"] = document.innerText = (value.results[index]["votes"]);
      liste_films[index_cat][index]["image_url"] = document.innerText = (value.results[index]["image_url"]);

      //creation liste url
      if (index_cat == 0 && nombre_films == 8 && index > 0){
        liste_url_cat1.push(liste_films[index_cat][index]["url_film"])
      }
      if (index_cat == 0 && nombre_films == 7){
        liste_url_cat1.push(liste_films[index_cat][index]["url_film"])
      }
      
      //Construction de la balise de destination de l'image et affichage de l'image mais uniquement pour 8 films en supprimant le 1er de la liste
      if (index > 0){
        balise_dest = "img" + (index) +"_cat" + (index_cat+2)
        fonction_inser_img(balise_dest, liste_films[index_cat][index]["image_url"]);          
      }  
  
      class_meilleur_film = new ClassFilm;
      //traitement du meilleur film, memoriser toutes les donnees dans un fichier a part pour les ressortir meme en cas de changement de page
      if (index_cat == 0 && index == 0 && run_cycle == 1){
        balise_dest_meilleur_film = "id_photo_Cat1"
        class_meilleur_film["id_film"] = liste_films[index_cat][index]["id_film"] ;
        class_meilleur_film["url_film"] = liste_films[index_cat][index]["url_film"]
        class_meilleur_film["imbd_url"] = liste_films[index_cat][index]["imbd_url"]
        class_meilleur_film["title"] = liste_films[index_cat][index]["title"]
        class_meilleur_film["year"] = liste_films[index_cat][index]["year"]
        class_meilleur_film["imbd_score"] = liste_films[index_cat][index]["imbd_score"]
        class_meilleur_film["vote"] = liste_films[index_cat][index]["vote"]
        class_meilleur_film["image_url"] = liste_films[index_cat][index]["image_url"]
        imdb_url_play = class_meilleur_film["imbd_url"]

        //creation url du meilleur film ************************************************************
        url_meilleur_film_cat0.push(class_meilleur_film["url_film"]); 

        //fonction_inser_img(balise_dest_meilleur_film, document.getElementById("id_image_url").innerText = (liste_films[0][0]["image_url"]));
        fonction_inser_img(balise_dest_meilleur_film, document.innerText = (liste_films[0][0]["image_url"]));
        document.getElementById("id_titre_cat1").innerText = (class_meilleur_film["title"]);
        global_class_meilleur_film = class_meilleur_film;
        run_cycle = 0;
  
      }
      index = index + 1;
    }

      //ecrire une fonction pour extraire le numero de page et le mettre dans le titre, si plus de precedent, griser le bouton
      page_suiv = fonction_nbr_page(liste_page_next[0]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat2").innerText = ("<< Page precedente " + (page_prec) + "_______________TOUTES CATEGORIE_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat2");

      page_suiv = fonction_nbr_page(liste_page_next[1]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat3").innerText = ("<< Page precedente " + (page_prec) + "_______________CATEGORIE AVENTURES_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat3");

      page_suiv = fonction_nbr_page(liste_page_next[2]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat4").innerText = ("<< Page precedente " + (page_prec) + "_______________CATEGORIE HISTOIRE_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat4");

      page_suiv = fonction_nbr_page(liste_page_next[3]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat5").innerText = ("<< Page precedente " + (page_prec) + "_______________CATEGORIE ANIMATION_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat5");
      setTimeout(raz_fetch_en_cours,1);  
      document.getElementById('fg_cat2').setAttribute("onclick")
    })
    .catch(function(err) {
      console.log(err);
      // Une erreur est survenue
    });
    
  }
}

  liste_film= [[class_film],[class_film],[class_film],[class_film],[class_film],[class_film],[class_film],[class_film]];
  liste_films = [liste_film, liste_film,liste_film,liste_film,liste_film,liste_film,liste_film,liste_film]

  //fonction fetch pour toutes les pages sauf la premiere pour laquelle il faut extraire les donnees de 8 films pour la categorie 0
  function fonction_fetch_2(url, index_cat, nombre_films) {
    
    if (index_cat == 0){
        liste_url_cat1.pop();liste_url_cat1.pop();liste_url_cat1.pop();liste_url_cat1.pop();liste_url_cat1.pop();liste_url_cat1.pop();liste_url_cat1.pop();
      }
    
    if (index_cat == 1){
        liste_url_cat2.pop();liste_url_cat2.pop();liste_url_cat2.pop();liste_url_cat2.pop();liste_url_cat2.pop();liste_url_cat2.pop();liste_url_cat2.pop();
      }
    
    if (index_cat == 2){
        liste_url_cat3.pop();liste_url_cat3.pop();liste_url_cat3.pop();liste_url_cat3.pop();liste_url_cat3.pop();liste_url_cat3.pop();liste_url_cat3.pop();
      }
    
    if (index_cat == 3){ 
        liste_url_cat4.pop();liste_url_cat4.pop();liste_url_cat4.pop();liste_url_cat4.pop();liste_url_cat4.pop();liste_url_cat4.pop();liste_url_cat4.pop();
      }

    url_new = "";
    url_new = url + "&page_size=" + nombre_films; 

    for (let i = 0; i < 10; i++) {
      i=i;
    }

    fetch(url_new)
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }     
    })
    .then(function(value) {
      //var class_page_cat0 = new ClassPage;
      //Recuperer tous les elements de la page
      liste_count[index_cat] = document.innerText=(value.count)
      liste_page_next[index_cat] = document.innerText = (value.next);
      liste_page_previous[index_cat] = document.innerText = (value.previous);
      
      //Boucle pour recuperer tous les elements des films selon la valeur de l'attribut nombre de films.
      var index = 0;
      while (index < nombre_films){
      liste_films[index_cat][index]["id_film"] = document.innerText = (value.results[index]["id"]);
      liste_films[index_cat][index]["url_film"] = document.innerText = (value.results[index]["url"]);
      liste_films[index_cat][index]["imbd_url"] = document.innerText = (value.results[index]["imdb_url"]);
      liste_films[index_cat][index]["title"] = document.innerText = (value.results[index]["title"]);
      liste_films[index_cat][index]["year"] = document.innerText = (value.results[index]["year"]);
      liste_films[index_cat][index]["imbd_score"] = document.innerText = (value.results[index]["imdb_score"]);
      liste_films[index_cat][index]["vote"] = document.innerText = (value.results[index]["votes"]);
      liste_films[index_cat][index]["image_url"] = document.innerText = (value.results[index]["image_url"]);    
      string_url = liste_films[index_cat][index]["image_url"]

      //creation liste url************************************************************
      if (index_cat == 0){
        liste_url_cat1.push(liste_films[index_cat][index]["url_film"])
      }
      if (index_cat == 1){
        liste_url_cat2.push(liste_films[index_cat][index]["url_film"])
      }
      if (index_cat == 2){
        liste_url_cat3.push(liste_films[index_cat][index]["url_film"])
      }
      if (index_cat == 3){
        liste_url_cat4.push(liste_films[index_cat][index]["url_film"])
      }
      
      //Construction de la balise de destination et affichage de l'image
      balise_dest = "img" + (index + 1) +"_cat" + (index_cat+2)
      
      url_ok = fonction_verif_url_exist(string_url)
      img_chrgt = ("img1.jpg")
      fonction_inser_img(balise_dest, img_chrgt);

      if (url_ok == 1) {
        img_chrgt = liste_films[index_cat][index]["image_url"]
        fonction_inser_img(balise_dest, img_chrgt);
      }
      
      //class_meilleur_film = new ClassFilm;
      index = index + 1;
    }
      //Fonction pour extraire le numero de page et le mettre dans le titre, et griser la fleche previous si 1ere page affichee
      page_suiv = fonction_nbr_page(liste_page_next[0]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat2").innerText = ("<< Page precedente " + (page_prec) + "_______________TOUTES CATEGORIE_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat2");

      page_suiv = fonction_nbr_page(liste_page_next[1]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat3").innerText = ("<< Page precedente " + (page_prec) + "_______________CATEGORIE AVENTURES_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat3");
      
      page_suiv = fonction_nbr_page(liste_page_next[2]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat4").innerText = ("<< Page precedente " + (page_prec) + "_______________CATEGORIE HISTOIRE_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat4");

      page_suiv = fonction_nbr_page(liste_page_next[3]); page_prec = page_suiv - 2;
      document.getElementById("titre_cat5").innerText = ("<< Page precedente " + (page_prec) + "_______________CATEGORIE ANIMATION_______________" + " Page suivante >>" +(page_suiv));
      grisag_flech(page_suiv,"fg_cat5");

      document.getElementById("m_title").innerText = (liste_films[0][0]["titre"] );
      //Affichage du titre du meilleur film
      document.getElementById("id2_title").innerText = (liste_films[index_cat][1]["title"]);
    })
    .catch(function(err) {
      console.log(err);
      // Une erreur est survenue
    });
  }

  //fonction pour charger la page suivante avec l'index de la categorie pour aller chercher l'url de la page suivante dans la liste sauvegardee 
  function fonction_next_page_1(cat){
    page_next = "";
    page_next = (liste_page_next[cat]);
    fonction_fetch_1(page_next, cat,7);
  }
  
  function fonction_page_previous_cat0(cat){
    // si la page precedente est 1, il faut faire un fetch initial pour la categorie 0
    page_previous = liste_page_previous[cat];
    num_page_prec_cat0 = fonction_nbr_page(page_previous)
    
    if (num_page_prec_cat0 == "1"){
        fonction_fetch_1(page_previous,cat,8);
     }
     if (num_page_prec_cat0 != "1"){
      fonction_fetch_1(page_previous,cat,8);
   }
  }

  function fonction_previous_page_1(cat){
    page_previous = liste_page_previous[cat]
    fonction_fetch_1(page_previous,cat,7);
  }

    //fonction pour charger la page suivante avec l'index de la categorie pour aller chercher l'url de la page suivante dans la liste sauvegardee 
  function fonction_next_page_2(cat){
    page_next = "";
    page_next = (liste_page_next[cat]);

    setTimeout(fonction_fetch_2,400,page_next,cat, 7);

    //fonction_fetch_2(page_next, cat,7);
    page_suiv = fonction_nbr_page(page_next);
    noirc_flech(cat);
  }
  
  function fonction_previous_page_2(cat){
    
    
    page_previous = liste_page_previous[cat]
    fonction_fetch_2(page_previous,cat,7);
    page_pre = fonction_nbr_page(page_previous);
  }

  function fonction_nbr_page(url){
    let page = "";
    const pos_x = url.indexOf('page=');
    const pos_y = url.indexOf('&page_size');
    debut_num_page = pos_x + 5;
    fin_num_page = pos_y;
    index_pos = debut_num_page;
    while (index_pos < fin_num_page){
        const chars = url.split('');
        page = page + chars[index_pos];
        index_pos = index_pos + 1;
    }
  return(page);
  }

  function grisag_flech(page_suiv,id_flech){
    if (page_suiv == 2){
      var element = document.getElementById(id_flech);
      element.style.opacity = 0.1;
  }
}

  function noirc_flech(cat){
    id_flech ="fg_cat" + (cat+2);
    var element = document.getElementById(id_flech);
    element.style.opacity = 1;
  }

  function fonction_fetch_3(url, index_cat, nombre_films) {
    resultat = "";
    fetch(url)
    .then(function(res) {
      if (res.ok) {
        return res.json();
        resultat = 1;
      }     
    })
    .then(function(value) {
      //recuperer les elements.
      var index = 0;
    }
    )
    .catch(function(err) {
      console.log(err);
      // Une erreur est survenue
    });
  }

  function fonction_verif_url(url){
    let err_url_img = 0;
    let pos_x = url.indexOf("@");
    //let pos_y = url.indexOf("@@");
    if (pos_x == -1) {
      err_url_img = 1;
    }
    return (err_url_img);
  }

  function fonction_verif_url_exist(url){
  // 1. Creer un nouvel objet XMLHttpRequest
  url_ok = 1;
  let xhr = new XMLHttpRequest();
  // 2. Le configure : GET-request pour l'URL /article/.../load
  xhr.open('GET', url, true);
  
  // 3. Envoyer la requete sur le reseau
  xhr.send();
  /*
  // 4. Ceci sera appele apres la reception de la reponse
  xhr.onload = function() {
    if (xhr.status != 200) { // analyse l'etat HTTP de la reponse
      //alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      url_ok = 0;
    } else { // show the result
      alert(`Done, got ${xhr.response.length} bytes`); // response est la reponse du serveur
    }
  };
  /*
  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      alert(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      alert(`Received ${event.loaded} bytes`); // pas de Content-Length
    }
  };
  */
  xhr.onerror = function() {
    alert("-image not found- L'url correspondant a une image recherchee est innexistante");
    //img_chrgt = ("img1.jpg")
    //fonction_inser_img(balise_dest, img_chrgt)
    url_ok = 0;
    //return (url_ok);
  };
  return (url_ok);
  }

  function fonction_fetch_modale(index_cat,num_index_film) {
    if (index_cat == 10){
      url = url_meilleur_film_cat0[num_index_film]   
    }
  
    if (index_cat == 0){
      url = liste_url_cat1[num_index_film]  
    }
   
    if (index_cat == 1){
      url = liste_url_cat2[num_index_film]  
    }
  
    if (index_cat == 2){
      url = liste_url_cat3[num_index_film]  
    }
  
    if (index_cat == 3){
      url = liste_url_cat4[num_index_film]  
    }
  
    var class_film_modal = new ClassFilmModale;
  
    fetch(url)
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }     
    })
    .then(function(value) {
      class_film_modal["title"] = document.getElementById("modalTitle").innerText = (value.title);
      class_film_modal["image_url"] = document.getElementById("id_mod_img").innerText = (value.image_url);
      img_modal = document.innerText = (value.image_url);
      fonction_inser_img("id_mod_img", img_modal); 
  
      class_film_modal["genres"] = document.getElementById("id_m_genre").innerText = (value.genres);
      class_film_modal["date_published"] = document.getElementById("id_m_date").innerText = (value.date_published);
      class_film_modal["rated"] = document.getElementById("id_m_Rated").innerText = (value.rated);
      class_film_modal["imbd_score"] = document.getElementById("id_m_score_imdb").innerText = (value.imdb_score);
      class_film_modal["directors"] = document.getElementById("id_m_realisateur").innerText = (value.directors);
      class_film_modal["actors"] = document.getElementById("id_m_acteurs").innerText = (value.actors);
      class_film_modal["duration"] = document.getElementById("id_m_duree").innerText = (value.duration);
      class_film_modal["countries"] = document.getElementById("id_m_pays").innerText = (value.countries);
      class_film_modal["worldwide_gross_income"] = document.getElementById("id_m_box_office").innerText = (value.worldwide_gross_income);
      class_film_modal["description"] = document.getElementById("id_m_description").innerText = (value.description);
      toggleModal();
    })
    .catch(function(err) {
      console.log(err);
      // Une erreur est survenue
    });
  }
  
  function desable_flech(){
    
    //document.getElementById('fd_cat2').onclick="enabled";
    //x = document.getElementById('fd_cat2')
    //x.disabled = false;
    //document.getElementById('fg_cat2').onclick="disabled";
    //document.getElementById('fd_cat3').onclick="disabled";
    //document.getElementById('fg_cat3').onclick="disabled";
    //document.getElementById('fd_cat4').onclick="disabled";
    //document.getElementById('fg_cat4').onclick="disabled";
    //document.getElementById('fg_cat5').onclick="disabled";
    //document.getElementById('fd_cat5').onclick="disabled";
    
  }
  
  function enable_flech(){
    document.getElementById('fd_cat2').onclick=function(){
      this.onclick = true;
    };

    document.getElementById('fg_cat2').onclick="enabled";
    document.getElementById('fd_cat3').onclick="enabled";
    document.getElementById('fg_cat3').onclick="enabled";
    document.getElementById('fd_cat4').onclick="enabled";
    document.getElementById('fg_cat4').onclick="enabled";
    document.getElementById('fg_cat5').onclick="enabled";
    document.getElementById('fd_cat5').onclick="enabled";
  }
  

