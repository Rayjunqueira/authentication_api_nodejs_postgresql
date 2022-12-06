const db = require('../../models/index');

const bcrypt = require('bcryptjs');

exports.store = async (req, res) => {
    const { username, email, password, tokenReset } = req.body;

    try {

        const userAlreadyExists = await db.User.findOne({ where: { email } });

        const hashedPassword = bcrypt.hashSync(password, 10);

        if (userAlreadyExists) {
            res.status(400).json('User already exists.');
        }

        const createdUser = await db.User.create({
            username,
            email,
            password: hashedPassword,
            tokenReset: "",
        });

        return res.status(200).json(createdUser);
    } catch (err) {
        return res.status(500).json(err);
    }
}