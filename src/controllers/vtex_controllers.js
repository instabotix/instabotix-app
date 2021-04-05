const consultaProduto = require("../functions/vtex_actions")



const getProdById = (req, res, next) =>{

    consultaProduto();

}

module.exports = getProdById;