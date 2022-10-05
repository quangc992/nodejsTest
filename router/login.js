const router = require('express').Router()
const account = require('../models/account')

const loginController = require('../controller/loginController')

// create
router.post('/', function(req, res, next) {
    account.findOne({ user: req.body.user })
        .then(data => {
            if (data) {
                res.json('da ton tai')
            } else {
                return account.create(req.body)
            }
        })
        .then(data => {
            res.json('tao thanh cong')
        })
        .catch(err => {
            res.status(500).json({ err: 'loi' })
        })
})

//show all
router.get('/', function(req, res, next) {
    account.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json('loi server')
        })
})

//show id
router.get('/:id', function(req, res, next) {
    account.findById({ _id: req.params.id })
        .then(data => {
            if (data) {
                res.json(data)
            } else {
                res.status(400).json('khong co du lieu yeu cau')
            }
        })
        .catch(err => {
            res.status(500).json('loi server')
        })
})

//update
router.put('/:id', function(req, res, next) {
    account.findByIdAndUpdate(req.params.id, { pass: req.body.newPass })
        .then(data => {
            res.json('thay doi pass thanh cong')
        })
        .catch(err => {
            res.status(500).json('loi server')
        })
})

//delete
router.delete('/:id', function(req, res, next) {
    account.findByIdAndDelete({ _id: req.params.id })
        .then(data => {
            if (data) {
                res.json('xoa thanh cong')
            } else {
                res.status(400).json('khong id nhu ban khai bao')
            }
        })
        .catch(err => {
            res.status(500).json('loi server')
        })
})

router.post('/login', function(req, res, next) {
    account.findOne(req.body)
        .then(data => {
            if (data) {
                res.json('dang nhap thanh cong')
            } else {
                res.status(400).json('dang nhap that bai')
            }
        })
        .catch(() => {
            res.status(500).json('loi server')
        })
})

module.exports = router