var panier = [];
var prixTotalPanier = 0;


function ajouterAuPanier(){
    if (sessionStorage.sauvegardePanier){
        panier = JSON.parse(sessionStorage.sauvegardePanier);
    }

    var catPrice = document.getElementById('catprice');
    var catId = document.getElementById('catId');
    var inputQuantite = document.getElementById("inputNumber");
    var inputQuantiteValue = inputQuantite.value;

    var panierItem = {
        id : catId.innerHTML,
        quantite : inputQuantiteValue,
        prix : catPrice.innerHTML
    };

    panier.push(panierItem);
    sessionStorage.setItem("sauvegardePanier",JSON.stringify(panier));
    console.log(panierItem.prix);

}

function chargementPanier(){
    var listeObjet = JSON.parse(sessionStorage.sauvegardePanier);
    for (var objet = 0; objet < listeObjet.length; objet++) {
        var reference = listeObjet[objet].id;
        var quantite = listeObjet[objet].quantite;
        var prix = listeObjet[objet].prix;
        var prixTotal = listeObjet[objet].prix * listeObjet[objet].quantite;
        prixTotalPanier += prixTotal;
        console.log(reference);
        console.log(quantite);
        console.log(prix);
        console.log(prixTotal);
        console.log(prixTotalPanier);
    }

    // var celluleQuantite0 = document.getElementById('cellule_quantite0');
    // var celluleQuantite1 = document.getElementById('cellule_quantite1');
    // var celluleQuantite2 = document.getElementById('cellule_quantite2');
    // var celluleQuantite3 = document.getElementById('cellule_quantite3');
    // var celluleQuantite4 = document.getElementById('cellule_quantite4');
    // var celluleQuantite5 = document.getElementById('cellule_quantite5');
    // var celluleQuantite6 = document.getElementById('cellule_quantite6');
    // var celluleQuantite7 = document.getElementById('cellule_quantite7');
    // var celluleQuantite8 = document.getElementById('cellule_quantite8');
    // var celluleQuantite9 = document.getElementById('cellule_quantite9');
    //
    //
    // celluleQuantite0.innerHTML = listeObjet[0].quantite;
    // celluleQuantite1.innerHTML = listeObjet[1].quantite;
    // celluleQuantite2.innerHTML = listeObjet[2].quantite;
    // celluleQuantite3.innerHTML = listeObjet[3].quantite;
    // celluleQuantite4.innerHTML = listeObjet[4].quantite;
    // celluleQuantite5.innerHTML = listeObjet[5].quantite;
    // celluleQuantite6.innerHTML = listeObjet[6].quantite;
    // celluleQuantite7.innerHTML = listeObjet[7].quantite;
    // celluleQuantite8.innerHTML = listeObjet[8].quantite;
    // celluleQuantite9.innerHTML = listeObjet[9].quantite;

}
