var urlParams = function () {
    var param_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof param_string[pair[0]] === "undefined") {
            param_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
        } else if (typeof param_string[pair[0]] === "string") {
            var arr = [param_string[pair[0]], decodeURIComponent(pair[1])];
            param_string[pair[0]] = arr;
        // If third or later entry with this name
        } else {
            param_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return param_string;
}();

var cat1 = {
  nom: "Fido",
  race: "Bengale",
  price: "15€",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  photo: "http://www.kazeo.com/sites/fr/photos/243/le-bengal-une-histoire-revoltante-pour-les-zoo_2430240-L.jpg",
}

var cat2 = {
  nom: "Minou",
  race: "Siamois",
  price: "125€",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  photo: "http://media.paperblog.fr/i/439/4398606/photos-chats-moches-L-LUBwqq.jpeg",
}

var cat3 = {
  nom: "Lucie",
  race: "Gouttiere",
  price: "1200€",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  photo: "http://static.wamiz.fr/images/animaux/chats/large/maine-coon.jpg",
}

var cat4 = {
  nom: "Damien",
  race: "a poil court",
  price: "2€",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  photo: "https://i.ytimg.com/vi/iksiNh21fP8/hqdefault.jpg",
}

var cat5 = {
  nom: "Alban",
  race: "Angora",
  price: "650€",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  photo: "http://soocurious.com/fr/wp-content/uploads/2015/06/Chat-de-pallas-30.jpg?e07df8",
}

var cat6 = {
  nom: "Jacks",
  race: "Gouttiere",
  price: "15€",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  photo: "http://img1.closermag.fr/var/closermag/storage/images/media/images-des-contenus/insolite/20150625-trop/ce-chat-est-devenu-la-star-du-web/4700459-1-fre-FR/Ce-chat-est-devenu-la-star-du-web_exact1024x768_l.png",
}

var cat7 = {
  nom: "Laeticia",
  race: "Gouttiere",
  price: "1100€",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  photo: "http://img.tel.pmdstatic.net/fit/http.3A.2F.2Fphoto.2Eprogramme-tv.2Enet.2Fupload.2Fslideshow.2Fles-chats-les-plus-mignons-d-internet-8242.2Fcapture-d-ecran-2014-10-24-a-15-31-41-140545.2Epng/1000x700/quality/65/on-commence-par-grumpy-cat-litteralement-chat-grincheux-le-chat-le-plus-connu-de-la-toile.jpg",
}

var cat8 = {
  nom: "Roger",
  race: "Siamois",
  price: "1200€",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  photo: "http://static.wamiz.fr/images/animals/large/kikinou-31294589398.jpg",
}

var cat9 = {
  nom: "Denis",
  race: "à poil court",
  price: "2€",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  photo: "http://soocurious.com/fr/wp-content/uploads/2013/10/voici-lil-bub-le-chat-le-plus-mignon-du-web-qui-vous-fera-fondre-de-tendresseune.jpg",
}

var cat10 = {
  nom: "Jean-Denis",
  race: "Angora",
  price: "650€",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  photo: "http://2.bp.blogspot.com/-CO7kYSSIDhg/VIobpCteuSI/AAAAAAAASJs/vQx-p_KXq-4/s1600/Photo-chats-trop-mignons-roux-7.jpg",
}

var Stock = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10];

function lireParametre() {
  var elementNom = document.getElementById("prenom");
  var elementRace = document.getElementById("catrace");
  var elementDescribe = document.getElementById("descript");
  var elementImage = document.getElementById("image");
  var elementPrice = document.getElementById("catprice");
  var indiceCat = urlParams.paramIndice;
  var cat = Stock[indiceCat];
  elementNom.innerHTML = cat.nom;
  elementRace.innerHTML = cat.race;
  elementDescribe.innerHTML = cat.description;
  elementPrice.innerHTML = cat.price;
  elementImage.src = cat.photo;
}
