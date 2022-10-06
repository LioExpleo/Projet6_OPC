class ClassFilm{
  constructor(
    id_film,
    url_film,
    imbd_url,
    title,
    year,
    imbd_score,
    vote,
    image_url,
    directors,
    actors,
    writers,
    genres,
    liste_films,
  ) 
  {
    this.id_film = id_film;
    this.url_film = url_film;
    this.imbd_url = imbd_url;
    this.title = title;
    this.year = year;
    this.imbd_score = imbd_score;
    this.vote = vote;
    this.image_url = image_url;
    this.directors = directors;
    this.actors = actors;
    this.writers = writers;
    this.genres = genres;
    this.liste_films = liste_films;
  }

  creat_liste_films(){
    let liste_element_film=[];
    liste_element_film = [[this.id_film, this.url_film, this.imbd_url, this.title, this.year, this.imbd_score, this.vote, this.image_url, this.directors, this.actors, this.writers, this.genres]
    [this.id_film, this.url_film, this.imbd_url, this.title, this.year, this.imbd_score, this.vote, this.image_url, this.directors, this.actors, this.writers, this.genres]
    [this.id_film, this.url_film, this.imbd_url, this.title, this.year, this.imbd_score, this.vote, this.image_url, this.directors, this.actors, this.writers, this.genres]
    [this.id_film, this.url_film, this.imbd_url, this.title, this.year, this.imbd_score, this.vote, this.image_url, this.directors, this.actors, this.writers, this.genres]
    [this.id_film, this.url_film, this.imbd_url, this.title, this.year, this.imbd_score, this.vote, this.image_url, this.directors, this.actors, this.writers, this.genres]]
    return(liste_element_film);
  }
}

class ClassPage{
  constructor(
    page_count1,
    page_url_next,
    page_url_previous,
  ) 
  {
    this.page_count1 = page_count1;  
    this.page_url_next = page_url_next;
    this.page_url_previous = page_url_previous;
  }
}

class ClassFilmModale{
  constructor(
    title,
    image_url,
    genres,
    date_published,
    avg_vote,
    imbd_score,
    directors,
    actors,
    duration,
    countries,
    worldwide_gross_income,
    descritpion,
    imbd_url
  ) 
  {
    this.title = title;
    this.image_url = image_url;
    this.genres = genres;
    this.date_published = date_published;
    this.avg_vote = avg_vote;
    this.imbd_score = imbd_score;
    this.directors = directors;
    this.actors = actors;
    this.duration = duration;
    this.countries = countries;
    this.worldwide_gross_income = worldwide_gross_income;
    this.genres = genres;
    this.descritpion = descritpion;
    this.imbd_url = imbd_url;
  }
}


