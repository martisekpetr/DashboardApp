export const getDashboard = () => fetch(`http://localhost:3002/`)
  .then(response => response.json());

export const getNote = (id) => fetch(`http://localhost:3002/note/${id}/`)
  .then(response => response.json());

export const saveNote = (note) => fetch(`http://localhost:3002/create/`, {
  method: 'put',
  body: JSON.stringify(note),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}).then(response => response.json());


