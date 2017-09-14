import { createSelector } from 'reselect';

const getDashboardId = state => state.dashboard.id;
// const getNoteId = state => state.dashboard.noteId;

const getEntities = state => state.entities;

const getDashboards = createSelector(getEntities, entities => entities.dashboards);
const getNotes = createSelector(getEntities, entities => entities.notes);
const getUsers = createSelector(getEntities, entities => entities.users);


export const getDashboard = createSelector(
  getDashboardId,
  getDashboards,
  getNotes,
  getUsers,
  (id, dashboards, notes, users) =>
    dashboards && {
      ...dashboards[id],
      notes: dashboards[id].notes.map(noteId => ({
        ...notes[noteId],
        author: users[notes[noteId].author].name,
      }))
    }
);

// export const getNote = createSelector(getNoteId, getNotes, (id, notes) => notes && notes[id]);