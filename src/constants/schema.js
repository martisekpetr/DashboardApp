import { schema } from 'normalizr';

const user = new schema.Entity('users', {}, {
  idAttribute: 'email',
});

export const note = new schema.Entity('notes', {
  author: user,
});

export const dashboard = new schema.Entity('dashboards',{
  notes : [ note ],
});