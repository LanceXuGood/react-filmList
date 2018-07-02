import http from '../http';
/**
 *
 * @param {Object} params
 */
export const getDouBanFilmList = (params) => {
  return http.get('v2/movie/in_theaters', {
    ...params
  });
};

/**
 *
 * @param {String} id
 * @param {Object} params
 */
export const getDouBanFilmDetail = (id, params) => {
  return http.get(`/movie/subject/${id}`, {
    ...params
  });
};
