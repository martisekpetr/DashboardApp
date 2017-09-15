const express = require('express');
const cors = require('cors');



const PORT = 3002;

const dashboard = {
  id: 1,
  name: 'Dashboard name',
  notes: [
    {
      id: 1,
      title: 'Note 1',
      text: 'Pol, a bene caesium, secundus zeta! Cedriums messis in emeritis revalia! Caesiums sunt zetas de superbus turpis. Nunquam promissio abaculus.',
      author: {
        id: 1,
        name: 'John',
        email: 'John@bla.com'
      }
    },

    {
      id: 2,
      title: 'Note 2',
      text: 'Emeritis impositios ducunt ad nix. Ortum sensim ducunt ad salvus saga.Valebat, assimilatio, et vigil. Torquiss crescere in virundum!',
      author: {
        id: 3,
        name: 'Paul',
        email: 'paul@bla.com'
      }
    },
    {
      id: 3,
      title: 'Note 3',
      text: 'Cum acipenser cantare, omnes glutenes transferre salvus, fortis omniaes. Calceuss trabem, tanquam fidelis fuga.',
      author: {
        id: 12,
        name: 'Peter',
        email: 'peter@bla.com'
      }
    }
  ]
};



const server = express();
server.use(cors());



const getArticle = (id) => {
  return dashboard.notes.find(note => note.id === Number(id));
};


server.get('/', (req, res) => {
  console.log(`Received message. Sending ${JSON.stringify(dashboard)}`);
  res.status(200).json(dashboard);
});


server.get('/note/:id/', (req, res) => {
  const articleId = req.params.id;

  console.log(`Received message: ${articleId}. Sending ${JSON.stringify(getArticle(articleId))}`);
  res.status(200).json(getArticle(articleId));
});


server.put("/create/", function(request, response) {
  console.log(request.body); //This prints the JSON document received (if it is a JSON document)
});

server.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}...`));
