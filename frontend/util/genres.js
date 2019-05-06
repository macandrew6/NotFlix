export const fetchGenres = () => (
  $.ajax({
    method: 'GET',
    url: '/api/genres'
  })
);