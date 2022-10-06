# Application Web JustStreamIt - fonctionnement du site
L’objectif est de récupérer les données des films depuis une API en local à l’aide de requêtes ajax et de les afficher sur une interface web.
Il faudra filtrer les données en fonction de critères que sont les catégorie et le score Imdb. 
L'image du film est affichée dans la liste des films selon leurs scores. 

L'interface comporte 4 catégories. 
   - La première catégorie est une catégorie à part, puisque ce sont les films les mieux notés toutes catégories confondues.
      pour cette catégorie qui comporte tous les films de la base de donnée, le meilleur film est extrait et affiché seul.
      les 7 films suivants sont affichées dans la liste des films toutes catégories.
   - Les 3 autres catégories choisies sont aventure, histoire et animation, avec les films les mieux notés.
Les films sont affichés par 7. 
Des flèches permettent de faire des requêtes pour tous les films de chaque catégorie dans la base de donnéeS.

L'utilisateur peut cliquer sur n'importe quelle image du film. Lorsque l'utilisateur clique sur un film, une requête fetch spécifique au film est effectuée à partir de l'adresse url du film.
Cette nouvelle requête permet de récupérer les données du film et de les afficher dans une fenetre modal.
Contenu de la fenêtre :
- L’image de la pochette du film
- Le Titre du film
- Le genre complet du film
- Sa date de sortie
- Son Rated
- Son score Imdb
- Son réalisateur
- La liste des acteurs
- Sa durée
- Le pays d’origine
- Le résultat au Box Office
- Le résumé du film

Un bouton permet de refermer la fenêtre. Un bouton accueil permet de recharger la page url, et de revenir à la situation au moment du chargement de la page.
Un bouton permet d'ouvrir une page url qui permettra de visualiser la bande annonce.

# La première étape avant l'utilisation de l'application consiste à installer l'API en local et démarrer le serveur.
# OCMovies-API: API de test fournissant des informations sur des films

## Installation
Cette API exécutable localement peut être installée en suivant les étapes décrites ci-dessous. L'usage de pipenv est recommandé, mais des instuctions utilisant venv et pip sont également fournies plus bas. Si pipenv n'est pas encore installé sur votre ordinateur, vous trouverez des instuctions d'installation détaillées [sur cette page](docs/pipenv/installation-fr.md).
### Installation et exécution de l'application avec pipenv
1. Cloner ce dépôt de code à l'aide de la commande `$ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git` (vous pouvez également télécharger le code [en temps qu'archive zip](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR/archive/refs/heads/master.zip))
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande `$ cd ocmovies-api-fr`
3. Installez les dépendances du projet à l'aide de la commande `pipenv install` 
4. Créer et alimenter la base de données à l'aide de la commande `pipenv run python manage.py create_db`
5. Démarrer le serveur avec `pipenv run python manage.py runserver`
Lorsque le serveur fonctionne, après l'étape 5 de la procédure, l'API OCMovies peut être interrogée à partir des points d'entrée commençant par l'url de base [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/). Le point d'entrée principal permettant de consulter les films est [http://localhost:8000/api/v1/titles](http://localhost:8000/api/v1/titles/). Si vous accédez à cette url depuis un navigateur,ce dernier vous présentera une interface naviguable servant de documentation et de laboratoire d'expériementation. Vous trouvez également une documentation plus formelle en bas de ce README.
Les étapes 1 à 4 ne sont requises que pout l'installation initiale. Pour les lancements ultérieurs du serveur de l'API, il suffit d'exécuter l'étape 5 à partir du répertoire racine du projet.

### Installation et exécution de l'application sans pipenv (avec venv et pip)

1. Cloner ce dépôt de code à l'aide de la commande `$ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git` (vous pouvez également télécharger le code [en temps qu'archive zip](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR/archive/refs/heads/master.zip))
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande `$ cd ocmovies-api-fr`
3. Créer un environnement virtuel pour le projet avec `$ python -m venv env` sous windows ou `$ python3 -m venv env` sous macos ou linux.
4. Activez l'environnement virtuel avec `$ env\Scripts\activate` sous windows ou `$ source env/bin/activate` sous macos ou linux.
5. Installez les dépendances du projet avec la commande `$ pip install -r requirements.txt`
6. Créer et alimenter la base de données avec la commande `$ python manage.py create_db`
7. Démarrer le serveur avec `$ python manage.py runserver`

Lorsque le serveur fonctionne, après l'étape 7 de la procédure, l'API OCMovies peut être interrogée à partir des points d'entrée commençant par l'url de base [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/). Le point d'entrée principal permettant de consulter les films est [http://localhost:8000/api/v1/titles](http://localhost:8000/api/v1/titles/). Si vous accédez à cette url depuis un navigateur,ce dernier vous présentera une interface naviguable servant de documentation et de laboratoire d'expériementation. Vous trouvez également une documentation plus formelle en bas de ce README.

Les étapes 1 à 6 ne sont requises que pout l'installation initiale. Pour les lancements ultérieurs du serveur de l'API, il suffit d'exécuter les étapes 4 et 7 à partir du répertoire racine du projet.

## Installation de l'application Web JustStreamIt
L'application a été testée sous W3C, et ne présente pas d'erreur en ce qui concerne les fichier HTML et CSS.

Une fois l'application récupérée sur github, et le serveur de l'API lancée, il suffit d'ouvrir le fichier index.html dans un navigateur de votre choix.