export const searchMovies = (type = "film") =>{
  if (type === "series") {
    return{
      movie: [
        {
        codice: "a", 
        title: "film 1",
        year: 2000,
        description: "Descrizione film 1",
        image:"n/a",
        novità: false
      },

      {
        codice: "b", 
        title: "film 2",
        year:2000,
        description: "Descrizione film 1",
        image:"n/a",
        novità: false
      },

      {
        codice: "a", 
        title: "film 3",
        year:2000,
        description: "Descrizione film 1",
        image:"n/a",
        novità: false
      }
    ],
    pages: 10,
    currentPage: 1
    }
  } 
   else {
     return{
        movie: [{
            codice: "a", 
            title: "film 1",
            year:2000,
            description: "Descrizione film 1",
            image:"n/a",
            novità: false
          },
          {
            codice: "b",
            title: "film 2",
            year:2000,
            description: "Descrizione film 2",
            image:"n/a",
            novità: false
          },
          {
            codice: "c",
            title: "film 3",
            year:2000,
            description: "Descrizione film 3",
            image:"n/a",
            novità: false
          }],
          pages: 20,
          currentPage:1
    }

};
}