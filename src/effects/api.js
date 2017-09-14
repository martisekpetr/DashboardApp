export const getDashboard = () => fetch(`http://localhost:3002/`)
  .then(response => response.json());

export const getNote = (id) => fetch(`http://localhost:3002/note/${id}/`)
  .then(response => response.json());


