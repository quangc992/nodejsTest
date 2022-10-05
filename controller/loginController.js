class LoginController {
    login(req, res, next) {
        res.send('login')
    }
}
module.exports = new LoginController