var orm = require("../config/orm.js");

var drug = {

    all: function(cb){
        orm.all("drugs", function(res){
            cb(res);
        });
    }

}

module.exports = drug;