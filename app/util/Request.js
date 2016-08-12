import 'fetch';

class Request {

  isUrlValid(url) {
    return true;
  }

  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  _parseJSON(response) {
    return response.json();
  }

  postJSON(url, data) {
    if (!_isUrlValid(url)) {
      return undefined;
    }

    let postJSONData = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    };

    return fetch(url, postJSONData)
      .then(_checkStatus)
      .then(_parseJSON)
      .then((json) => console.log(json));
  }
}

export default Request;
