const router = require('express').Router();
const { body } = require('express-validator');
const { register } = require('./controllers/registerController');
const { login } = require('./controllers/loginController');
const { getUser } = require('./controllers/getUserController');

router.post('/register', [
    body('name', "O nome deve ter no mínimo 3 caracteres")
        .notEmpty()
        .escape()
        .trim()
        .isLength({ min: 3 }),
    body('email', "Endereço de email invalido")
        .notEmpty()
        .escape()
        .trim().isEmail(),
    body('password', "A senha deve ter no mínimo 4 caracteres").notEmpty().trim().isLength({ min: 4 }),
], register);


router.post('/login', [
    body('email', "Endereço de email invalido")
        .notEmpty()
        .escape()
        .trim().isEmail(),
    body('password', "A senha deve ter no mínimo 4 caracteres").notEmpty().trim().isLength({ min: 4 }),
], login);

router.get('/getuser', getUser);

module.exports = router;

