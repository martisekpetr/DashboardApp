export const getPreview = (str, count) => {
  return str.split(/\s+/).slice(0,count).join(' ') + '...';
};
