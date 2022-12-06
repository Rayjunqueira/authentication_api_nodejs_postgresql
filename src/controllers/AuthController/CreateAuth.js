const db = require('../../models/index');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.store = async (req, res) => {
    const { email, password } = req.body;
    const secret = process.env.JWT_SECRET;

    try {
        const userExists = await db.User.findOne({ where: { email } });

        if (!userExists) {
            return res.status(401).json('User does not exist');
        }

        const isValidPassword = await bcrypt.compare(password, userExists.password);

        if (!isValidPassword) {
            return res.status(401).json('Password is not valid');
        }

        const token = jwt.sign({ id: userExists.id }, secret, {
            expiresIn: process.env.EXPIRES_TOKEN,
        })

        return res.status(200).json({
            userExists,
            token,
        });

    } catch (err) {
        return res.status(500).json(err);
    }
}