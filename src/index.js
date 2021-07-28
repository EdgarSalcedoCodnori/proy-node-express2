//  IMPORTAR DEPENDENCXIAS DEL CORE DE NODE
//IMPORTAR DEPENDENCIAS O PAQUETES DE TERCEROS (NPM)
//1

import express from 'express'


//IMPORTYAR O MODULOS LOCALES
//5
import rutas from "./routes"


//CONFIGURAR PAQUETES
//2
let app=express()
//  ARCHIVOS ESTATICOS (CSS,JS,IMG)

//DECLARAR VARIABLES AUXILIARES
//3 //alt+124 sale || 

const PORT= process.env.PORT || 3000
app.set("puerto",PORT)
//CONFIGURAR EL MOTOR DE PLANTILLAS

//CONFIGURAR PETICINES DEL CLIENTE(req.body parse)


//RUTAS
//6
app.use("",rutas)
//levantar servidor
//4
app.listen(app.get("puerto"), () => {
    console.log(`SERVIDOR LEVANTADO en http://127.0.0.1: ${app.get('puerto')}`);
});




//vamos subir proyecto disploy..jerukko
