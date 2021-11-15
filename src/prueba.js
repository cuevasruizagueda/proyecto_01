db.cuerpos.deleteMany({})
db.cuerpos.insertMany([
{
        nombre: "jupiter",
        temperaturaGC: -121.15,
        gravedad: 24.79,
        zonahabitable: false,
        tipo: {
                Categoria: "planeta",
                estado: "gaseoso" 
        },
        descripcion:{
                dia: 0.41,
                campomagnetico: true, 
                dis_ua: 5.20, 
                edadMA: 4603, 
                nSatelites: 60, 
                satelites: ["Europa", "Ganimedes", "Io", "Calisto", "Amaltea", "Himalia", "Carm", "MaS"]
        },
        componentesQuimicos: {
                atmosfera: ["co2", "n2", "ar" ],
                superficie: ["ch4", "nh3", "h2o", "c2h6"] 
        }
},
{
    nombre:"saturno",
    temperaturaGC:  -130.15,
    gravedad: 10.44,
    zonahabitable: false,
tipo:{
    Categoria:"planeta",
    estado: "gaseoso" 
},
descripcion:{     
    dia: 0.45,
    campomagnetico: true , 
    dis_ua:  9.54 , 
    edadMA: 4503 , 
    nSatelites: 82, 
    satelites: ["Titan", "Encelado", "Mimas", "Tetis", "Dione", "Japeto", "Pan", "Hiperion", "MAS"]
},     
componentesQuimicos:{     
    atmosfera: ["h", "he "] ,
    superficie: ["ch4", "nh3", "h2h", "c2h6"] 
}
},

{
    nombre: "urano", 
    temperaturaGC: -121.15,
    gravedad: 8.85,
    zonahabitable: false,

tipo:{

    Categoria: "planeta",
    estado: "gaseoso"
},

descripcion:{

    dia: 0.72,
    campomagnetico: true, 
    dis_ua:  19.22, 
    edadMA: 4503, 
    nSatelites: 27, 
    satelites: ["Umbriel", "Titania", "Miranda", "Oberón", "Ariel", "Puck", "Cresida", "MAS"]
},
    
componentesQuimicos:{
    
    atmosfera: ["co2", "n2", "ar"] ,
    superficie: ["ch4", "nh3", "h2o", "c2h6"]
}
},

{
    nombre:"neptuno", 
    temperaturaGC:  -182,
    gravedad: 11.15,
    zonahabitable: false,
    
tipo:{
    
    Categoria: "planeta",
    estado: "gaseoso" 
},

descripcion:{

    dia: 0.67,
    campomagnetico: true, 
    dis_ua:  30.06, 
    edadMA: 4503, 
    nSatelites: 14, 
    satelites: ["Triton" , "Nereida", "Talasa", "Proteo", "Despina", "Neso", "Galatea", "Halimede", "Laomedeia","Larisa", "Sao" ]
},
    
componentesQuimicos:{
    
    atmosfera:[ "h", "he" ],
    superficie: ["ch4", "nh3", "c2h6"] 
}
}
]
)