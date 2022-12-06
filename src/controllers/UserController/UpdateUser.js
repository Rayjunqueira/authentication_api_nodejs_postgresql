const db = require('../../models/index');

const bcrypt = require('bcryptjs');

exports.update = async (req, res) => {
    const { id } = req.params;
    const {username, email, password} = req.body;
    try {

        const user = await db.User.findOne({ where: { id } });

        if (!user) {
            return res.status(401).json('User does not exist');
        }

        const hashPassword = bcrypt.hashSync(password, 8);

        await user.update({
            username,
            email,
            password: hashPassword,
        });

        return res.status(200).json('User updated!');
    } catch (err) {
        return res.status(500).json(err);
    }
}