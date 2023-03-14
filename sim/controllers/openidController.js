// openid controller 

const profileEmail = (req, res) => {
    const response = {};
    response.code = 200;
    response.headers = {
        'Content-Type': 'application/json'
    };
    response.body = {
        "email": makeEmail()
    };

    console.log('Sending response: ')
    console.log(`response.code: ${response.code}`);
    console.log(`response.headers: ${JSON.stringify(response.headers)}`);
    console.log(`response.body: ${JSON.stringify(response.body)}`);
    res.status(response.code).set(response.headers).send(response.body);
}

module.exports = {
    profileEmail
}

const makeEmail = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + "@gmail.com";
}