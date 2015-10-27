/********************* Algorithmie ***********************/

/* declaration des fonctions et variable */
// tableau des unitées en lettre
// tableau des dixaines en lettre
// tableau des centaines en lettre
// tableau des rangs
var tableauUnitees = [],
    tableauDixaines = [],
    tableauCentaines = [],
    objetRang = {},
    objetCorrectifNombre = {},
    number = -1;

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

objetRang[1] = tableauUnitees;
objetRang[2] = tableauDixaines;
objetRang[3] = tableauCentaines;

objetCorrectifNombre["dix-un"] = "onze";
objetCorrectifNombre["dix-deux"] = "douze";
objetCorrectifNombre["dix-trois"] = "treize";
objetCorrectifNombre["dix-quatre"] = "quatorze";
objetCorrectifNombre["dix-cinq"] = "quinze";
objetCorrectifNombre["dix-six"] = "seize";

objetCorrectifNombre["dix-zéro"] = tableauDixaines[1];
objetCorrectifNombre["vingt-zéro"] = tableauDixaines[2];
objetCorrectifNombre["trente-zéro"] = tableauDixaines[3];
objetCorrectifNombre["quarante-zéro"] = tableauDixaines[4];
objetCorrectifNombre["cinquante-zéro"] = tableauDixaines[5];
objetCorrectifNombre["soixante-zéro"] = tableauDixaines[6];
objetCorrectifNombre["soixante-dix-zéro"] = tableauDixaines[7];
objetCorrectifNombre["quatre-vingt-zéro"] = tableauDixaines[8];
objetCorrectifNombre["quatre-vingt-dix-zéro"] = tableauDixaines[9];


//déclaration de le fonction de correction de génération des chiffres en texte
function remplaceErreurDeLangue(texte, tableau) {

    for (var chaineAtester in tableau) {
        if (texte.indexOf(chaineAtester) !== -1)
            texte = texte.replace(chaineAtester, tableau[chaineAtester]);
    }
    return texte;

}

// Déclaration de la fonction récupérant un rang Précis
function recuperationDuRang(nb, nbSelectionRang) {
    //algorithme de recupération de rang
    var chiffreVersString = nb.toString().split("").reverse();
    var chiffreDuRangEnString = chiffreVersString[nbSelectionRang - 1];
    var chiffreDuRang = parseInt(chiffreDuRangEnString);
    if (isNaN(chiffreDuRang))
        chiffreDuRang = 0
    return chiffreDuRang;
}

// Déclaration de la fonction transformant un rang en lettre
function conversionRangVersTexte(nb, nbSelectionRang) {
    //le nombre est transmis à la fonction permettant de récupérant un rang Précis
    var chiffre = recuperationDuRang(nb, nbSelectionRang);
    //utilisation du tableau en inserant l'index pour récupéré l'item exacte de traduction
    var chiffreVersLettre = objetRang[nbSelectionRang][chiffre];
        //retour de la valeur
    return chiffreVersLettre;
}


// déclaration de la fonction exécutant la conversion en lettre
function conversionNombreEnlettre(nb) {
    //Séparation des centaines
    //les centaines sont transmise à la fonction de conversion des centaines
    centainesNumberToText = conversionRangVersTexte(number, 3);
    //Séparation des dizaines
    //les dizaines sont transmise à la fonction de conversion des dizaines
    dizainesNumberToText = conversionRangVersTexte(number, 2);
    //Séparation des unités
    //les unités sont transmise à la fonction de conversion des unités
    unitesNumberToText = conversionRangVersTexte(number, 1);
    // Reconnection des Centaines, dizaines, unités
    var textFinal = "";
    
    if (centainesNumberToText === "" && dizainesNumberToText === "" )
        textFinal = unitesNumberToText;
    else if (centainesNumberToText === "" )        
        textFinal = dizainesNumberToText + "-" + unitesNumberToText;
    else
        textFinal = centainesNumberToText + "-" + dizainesNumberToText + "-" + unitesNumberToText;
    // renvoie de la valeur
    return remplaceErreurDeLangue(textFinal, objetCorrectifNombre);
}

/* exécution du programme */
while (!isNaN(number)) {
    // l'utilisateur doit entre un nombre en 0 et 999
    number = parseInt(prompt('Entrer un nombre entre 0 et 999'));
    // le nombre est transmis à la fonction exécutant la conversion en lettre
    var numberVersText = conversionNombreEnlettre(number)
        // affichage du nombre en toutes lettres
    console.log(numberVersText);
}