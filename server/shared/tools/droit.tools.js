let dicDroits = require('../enum/droit.enum');

let toolsDroits = {

    // Les droits sont des nombre premiers, on peut les "coder" et "decoder" comme on le souhaite
    // Permet de ne pas avoir plusieurs ligne dans la bdd, facilite les requetes
    // Prend en parametre un tableau de droits et retourne le nombre encodé
    encodeDroit : function decodeDroit (droits) {
        let codeDroit = 1;
        droits.forEach(element => {
            codeDroit *= element;
        });
        return codeDroit;
    },

    // Le dic droit et le dictionnaire de droits
    // Renvoie un tableau avec tout les droits
    decodeDroit : function  (codeDroit) {
        let tabDroit = [];

        // On pourcourt tout les droits et on cherche à savoir s'il peuvent diviser
        Object.keys(dicDroits).forEach(function(key) {
            if (Number.isInteger(codeDroit / dicDroits[key])) {
                tabDroit.push( dicDroits[key]);
                codeDroit = codeDroit / dicDroits[key];
               
            }
        });
        return tabDroit;
    },

    getDroits : function (result) {
        // de type idDroit, idUser, idSpecialite
        let droit = toolsDroits.decodeDroit(result[0].idDroit);
        let droitsFinal = [];
        
        
        // On regarde si l'utlisteur possede le droit
        // si oui on met true 
        Object.keys(dicDroits).forEach(function(key) {
            
            droitsFinal.push({idDroit : dicDroits[key], estAcquis : droit.includes(dicDroits[key]), 
            intitule : key});
         
        });

        return droitsFinal;
    },

    // Vérifie si un utilisateur possede un droit passe en argument
    possedeDroit: function (idDroit, codeDroit) {
        console.log ("Decode");
        
        console.log (this.decodeDroit(1155));
        return this.decodeDroit(codeDroit).includes(idDroit);
    }
}

module.exports = toolsDroits;