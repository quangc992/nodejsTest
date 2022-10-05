const home = require('./home')
const login = require('./login')

function router(app) {
    app.use('/home', home)
    app.use('/account', login)
}

module.exports = router