let dicDroits = require('../enum/droit.enum');

let toolsDroits = {

    // Les droits sont des nombres premiers, on peut les "coder" et "decoder" comme on le souhaite
    // Permet de ne pas avoir plusieurs ligne dans la bdd, facilite les requetes
    // Prend en parametre un tableau de droits et retourne le nombre encode
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

    

    // getDroits : function (result) {
    //     // de type idDroit, idUser, idSpecialite
    //     let droit = toolsDroits.decodeDroit(result[0].idDroit);
    //     let droitsFinal = [];
        
        
    //     // On regarde si l'utlisteur possede le droit
    //     // si oui on met true 
    //     Object.keys(dicDroits).forEach(function(key) {
            
    //         droitsFinal.push({idDroit : dicDroits[key], estAcquis : droit.includes(dicDroits[key]), 
    //         intitule : key});
         
    //     });

    //     return droitsFinal;
    // },

    // Vérifie si un utilisateur possede un droit passe en argument
    // possedeDroit: function (idDroit, codeDroit) {
    //     console.log ("Decode");
        
    //     console.log (this.decodeDroit(1155));
    //     return this.decodeDroit(codeDroit).includes(idDroit);
    // },



    getUndoDroit : function (droit) {
        if (droit < 1 ) {
            return  1;
        } else {
            return droit -1;
        }
    },

    // Renvoie les droits acquis par l'utilisateur en fonction de son niveau de droit
    getDroits : function (droit) {
        // Si le user n'est pas inscrit dans cette matière et n'a aucun droit
        let droitsFinal = [];
        if (!droit) {
             // Les droits sont en niveau. S'il a le droit 2 il possede les 1 ET 2 à part le droit 0 (banni)
             Object.keys(dicDroits).forEach(function(key) {
            
                droitsFinal.push({idDroit : dicDroits[key],
                    // Possede un droit supérieur et n'est pas banni ou possede le droit le banni
                    estAcquis : false, 
                    intitule : key});
            });

        } else {
            // Les droits sont en niveau. S'il a le droit 2 il possede les 1 ET 2 à part le droit 0 (banni)
            Object.keys(dicDroits).forEach(function(key) {
            
                droitsFinal.push({idDroit : dicDroits[key],
                    // Possede un droit supérieur et n'est pas banni ou possede le droit le banni
                    estAcquis : ((dicDroits[key] <= droit && dicDroits[key] != 0) || (droit == 0 && dicDroits[key] == 0) ), 
                intitule : key});
            });
           
        }
        return droitsFinal;
        
    },
    possedeDroit () {
        
    }
}

module.exports = toolsDroits;