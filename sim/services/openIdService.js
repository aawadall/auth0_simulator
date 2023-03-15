// openid service 

const profileEmail = () => {
    const response = {
        "given_name": "John",
        "family_name": "Doe",
        "name": "John Doe",
        "nickname": "jdoe",
        "email": "john.doe@jdoe.com",
        "email_verified": true,
        "sub": "1234567890",
        "sid": "1234567890",
        "picture": userPicture(),
    };
    return response;
}

module.exports = {
    profileEmail
}

// give url to picture in ../static/user.png
const userPicture = () => {
    return `http://${process.env.HOST_NAME}:${process.env.PORT}/user.png`;
}