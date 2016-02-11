var panier = [];
var prixTotalPanier = 0;


function ajouterAuPanier(){
    if (sessionStorage.sauvegardePanier){
        panier = JSON.parse(sessionStorage.sauvegardePanier);
    }

    var catPrenom = document.getElementById('prenom');
    var catPrice = document.getElementById('catprice');
    var catId = document.getElementById('catId');
    var inputQuantite = document.getElementById("inputNumber");
    var inputQuantiteValue = inputQuantite.value;

    var panierItem = {
        id : catId.innerHTML,
        quantite : inputQuantiteValue,
        prix : catPrice.innerHTML,
        prenom : catPrenom.innerHTML
    };

    panier.push(panierItem);
    sessionStorage.setItem("sauvegardePanier",JSON.stringify(panier));

}

function chargementPanier(){
    var listeObjet = JSON.parse(sessionStorage.sauvegardePanier);
    for (var objet = 0; objet < listeObjet.length; objet++) {
        var idChat = listeObjet[objet].id;
        var reference = listeObjet[objet].prenom;
        var quantite = listeObjet[objet].quantite;
        var prix = listeObjet[objet].prix;
        var prixTotal = listeObjet[objet].prix * listeObjet[objet].quantite;
        prixTotalPanier += prixTotal;
        console.log(idChat);
        console.log(reference);
        console.log(quantite);
        console.log(prix);
        console.log(prixTotal);
        console.log(prixTotalPanier);

        var celluleReference = document.getElementById("cellule_reference"+objet);
        var celluleQuantite = document.getElementById("cellule_quantite"+objet);
        var cellulePrixUnitaire = document.getElementById("cellule_prix_unitaire"+objet);
        var cellulePrixTotal = document.getElementById("cellule_prix_total"+objet);
        var cellulePrixTotalPanier = document.getElementById("total_commande");

        celluleReference.innerHTML = reference;
        celluleQuantite.innerHTML = quantite;
        cellulePrixUnitaire.innerHTML = prix;
        cellulePrixTotal.innerHTML = prixTotal;
        cellulePrixTotalPanier.innerHTML = prixTotalPanier;


    }


}
