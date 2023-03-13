const handleAuth = () => {
    if(!process.env.AUTH0_SECERT) {
        throw new Error('AUTH0_SECRET is not defined');
    }
}

module.exports = {
    handleAuth
}
