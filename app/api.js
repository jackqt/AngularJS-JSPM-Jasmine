import 'node-fetch';

var getRepoByUser = function(username) {
  let url = `https://api.github.com/users/${username}/repos`;
  return fetch(url).then(response => response.json());
};

export {getRepoByUser};
