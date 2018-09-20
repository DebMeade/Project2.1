var orm = require("../config/orm.js");

var drugs = {

    all: function(cb){
        orm.all("drugs", function(res){
            cb(res);
        });
    },

    create: function(cols, vals, cb){
        orm.create("drugs", cols, vals, function(res){
            cb(res);
        })
    }

    //     all: function(cb){
    //     orm.all("contacts", function(res){
    //         cb(res);
    //     });
    // }

}

var contacts = {

    all: function(cb){
        orm.all("contacts", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.create("contacts", cols, vals, function(res){
            cb(res);
        })
    }

}



//module.exports = drug;
//module.exports = drugContacts;

module.exports = {
    drugs: drugs, 
    contacts: contacts
}
