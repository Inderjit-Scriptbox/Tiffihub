async function logInApi(email,password,callback) {
    var axios = require('axios');
    var data = JSON.stringify({
      "email": email,
      "password": password
    });
    
    var config = {
      method: 'post',
      url: 'https://tifinapi.tiffinhub.ca/tiffin_api/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    await axios(config)
    .then(function (response) {

      console.log(JSON.parse(response.data));
      callback(JSON.parse(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}
export default logInApi;