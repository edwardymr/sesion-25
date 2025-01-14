use MusicaVallenata;

db.Canciones.insertOne({
    _id:1,
    titulo: "La gota fria",
    artista: "Carlos Vives",
    autor: "Emiliano Zuleta",
    album: "Clasicos de la provincia",
    anio: 1993,
    genero: "Vallenato",
    duracion: "4:25",
    letra: "Me lleva el o me lo llevo yo ...",
    reproducciones: 1500000
});

db.Canciones.insertMany([
    {
    _id:2,
    titulo: "La gota fria",
    artista: "Carlos Vives",
    autor: "Emiliano Zuleta",
    album: "Clasicos de la provincia",
    anio: 1993,
    genero: "Vallenato",
    duracion: "4:25",
    letra: "Me lleva el o me lo llevo yo ...",
    reproducciones: 1500000
    },
    {
    _id:3,
    titulo: "Obsesion",
    artista: "Jorge Celedon",
    autor: "Ivan Calderon",
    album: "sencillo",
    anio: 2002,
    genero: "Vallenato",
    duracion: "3:40",
    letra: "Ya no comprendo porque ...",
    reproducciones: 2000000    
    }
]);
db.Canciones.find( {anio: 1993} );

db.Canciones.find( { reproducciones: { $gt: 1800000 } } );

db.Canciones.find({genero: "Vallenato", duracion: {$gte: "4:00"}});

db.Canciones.updateOne(
    { _id:1 },
    { $set: { reproducciones: 1600000 } }
)
db.Canciones.find();

db.Canciones.updateMany(
    { genero: "Vallenato" },
    { $inc: { reproducciones: 100000 } }
)
db.Canciones.find();

//db.Canciones.deleteOne({ _id: 1})

//db.Canciones.deleteMany({ artista: "Carlos Vives"})

//db.Canciones.deleteMany({})

//db.Canciones.drop()

db.Canciones.find();