let run_cycle = 0;

liste_count = [[],[],[],[],[],[],[]];
liste_page_next = [[],[],[],[],[],[],[]];
liste_page_previous = [[],[],[],[],[],[],[]];
global_class_meilleur_film = "";
global_class_meilleur_film_p1 = "";
global_class_meilleur_film_p2 = "";
var class_film = new ClassFilm;

//Fetch de toutes les catégories au raffraichissement HTML
function fct_fetch_onload(){
  fct_tour1_prog_en_cours();
  setTimeout(fonction_fetch_1,10,"http://localhost:8000/api/v1/titles/?genre_contains=&sort_by=-imdb_score",0, 8);
  setTimeout(fonction_fetch_2,400,"http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score",1, 7);
  setTimeout(fonction_fetch_2,700,"http://localhost:8000/api/v1/titles/?genre=History&sort_by=-imdb_score",2, 7);
  setTimeout(fonction_fetch_2,1000,"http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score",3, 7);
  setTimeout(fct_tour1_prog_en_cours,0);
}

run_cycle = run_cycle + 1;



