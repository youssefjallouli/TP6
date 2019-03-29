// coéquipier # 1: César Rodriguez
// coéquipier # 2: Youssef Jallouli
/**
 * Cette fonction permet à l'utilisateur
 * d'initialiser une histoire
 * 
 * @param {string} n: mot transmise par l'utilisateur 
 */

var creerHistoire = function (n) {

    var i= 1;
    var phrase =prompt("Entrez une phrase!") ;
    var tab1 = phrase.split(' ');

    var Avant_A_derniere= tab1[tab1.length-3];
    var Avant_derniere= tab1[tab1.length-3];
    var Dernière= tab1[tab1.length-3];

    var three_last_words = Avant_A_derniere+" "+Avant_derniere+" "+ Dernière;

    //print(AAdernière+ " " +Aderniere+ " " +dernière);
};
/* */
var histoire = creerHistoire(/* n */);
    print(histoire);