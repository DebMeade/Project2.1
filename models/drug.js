var orm = require("../config/orm.js");

var drugs = {

    all: function(cb){
        orm.all("drugs", function(res){
            cb(res);
        });
    },

}

var contacts = {

    all: function(cb){
        orm.all("contacts", function(res){
            cb(res);
        });
    }

}

var inventory = {

    all: function(cb){
        orm.all("inventory", function(res){
            cb(res);
        });
    }

}


module.exports = {
    drugs: drugs, 
    contacts: contacts,
    inventory: inventory,
}

