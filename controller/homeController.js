class HomeController {
    home(req, res, next) {
        res.send('home')
    }
}
module.exports = new HomeController