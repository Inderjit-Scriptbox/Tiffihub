async function signUpApi(email,password,promotion_email_opt_out,callback)
{
        // let code;
        var axios = require('axios');
        var data = JSON.stringify({
        "email": email,
        "password": password,
        "promotion_email_opt_out": promotion_email_opt_out
        });

        var config = {
        method: 'post',
        url: 'https://tifinapi.tiffinhub.ca/tiffin_api/signup?',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        await axios(config)
        .then(function (response) {
            console.log("SignUpFuction: ",JSON.parse(response.data));
            console.log("Hello")
        callback(JSON.parse(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });

       
    
}

export default signUpApi;