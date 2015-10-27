/********************* Algorithmie ***********************/

/* declaration des fonctions et variable */
// tableau des unitées en lettre
// tableau des dixaines en lettre
// tableau des centaines en lettre
// tableau des rangs
var tableauUnitees = tableauDixaines = tableauCentaines = [], tableauRang = {};

tableauUnitees.push("zéro");
tableauUnitees.push("un");
tableauUnitees.push("deux");
tableauUnitees.push("trois");
tableauUnitees.push("quatre");
tableauUnitees.push("cinq");
tableauUnitees.push("six");
tableauUnitees.push("sept");
tableauUnitees.push("huit");
tableauUnitees.push("neuf");

tableauDixaines.push("");
tableauDixaines.push("dix");
tableauDixaines.push("vingt");
tableauDixaines.push("trente");
tableauDixaines.push("quarante");
tableauDixaines.push("cinquante");
tableauDixaines.push("soixante");
tableauDixaines.push("soixante-dix");
tableauDixaines.push("quatre-vingt");
tableauDixaines.push("quatre-vingt-dix");

tableauCentaines.push("");
tableauCentaines.push("cent");
tableauCentaines.push("deux-cent");
tableauCentaines.push("trois-cent");
tableauCentaines.push("quatre-cent");
tableauCentaines.push("cinq-cent");
tableauCentaines.push("six-cent");
tableauCentaines.push("sept-cent");
tableauCentaines.push("huit-cent");
tableauCentaines.push("neuf-cent");

tableauRang[1]= tableauUnitees;
tableauRang[10]=tableauDixaines;
tableauRang[100]=tableauCentaines;

// Déclaration de la fonction récupérant un rang Précis
function recuperationDuRang(nb, nbSelectionRang){
    //algorithme de recupération de rang
    var chiffreDuRang = nb % nbSelectionRang;
    if(typeof chiffreDuRang === "undefined" )
        chiffreDuRang = 0   
    return chiffreDuRang;
}

// Déclaration de la fonction transformant un rang en lettre
function conversionRangVersTexte(nb, nbSelectionRang){
    //le nombre est transmis à la fonction permettant de récupérant un rang Précis
    var chiffre = recuperationDuRang(nb,nbSelectionRang);
    //utilisation du tableau en inserant l'index pour récupéré l'item exacte de traduction
    var chiffreVersLettre = tableauRang[nbSelectionRang][chiffre];
    //retour de la valeur
    return chiffreVersLettre;
}
    


// déclaration de la fonction exécutant la conversion en lettre

    //Séparation des centaines
    //les centaines sont transmise à la fonction de conversion des centaines

    //Séparation des dizaines
    //les dizaines sont transmise à la fonction de conversion des dizaines

    //Séparation des unités
    //les unités sont transmise à la fonction de conversion des unités

    // Reconnection des Centaines, dizaines, unités

    // renvoie de la valeur


/* exécution du programme */


// l'utilisateur doit entre un nombre en 0 et 999

    // le nombre est transmis à la fonction exécutant la conversion en lettre

    // affichage du nombre en toutes lettres