var connection = require('../db/dbconfig');
var pokemon = {};

pokemon.getAll = function(req, res, next) {
  connection.manyOrNone("SELECT * FROM pokemon;")
    .then(function(result) {
      res.locals.pokemon = result;
      next();
    });
};

pokemon.getByID = function(req, res, next) {
  connection.one("SELECT * FROM pokemon WHERE id = $1", [req.params.id])
    .then(function(result){
      res.locals.selectedPokemon = result;
      next();
    })
}

module.exports = pokemon;