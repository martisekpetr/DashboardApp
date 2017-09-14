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
      text: 'Text....',
      author: {
        id: 1,
        name: 'John',
        email: 'John@bla.com'
      }
    },

    {
      id: 2,
      title: 'Note 2',
      text: 'Text2....',
      author: {
        id: 3,
        name: 'Paul',
        email: 'paul@bla.com'
      }
    },
    {
      id: 3,
      title: 'Note 3',
      text: 'Text3....',
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
  return dashboard.notes.find(note => note.id === id);
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

server.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}...`));
