//como me recomienda express
//para las rutas en vase a routin


import express from "express"
let router=express.Routes()

//RUTAS DE PAGINA WEB
router.get("/",function(req,res){
    res.send("saludos humanos");
})

router.get("/acercade",function(req,res){
    res.send("Acerca de nostros--EDGAR SALCEDO");
})


module.exports =router