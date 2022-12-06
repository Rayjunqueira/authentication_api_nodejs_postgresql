const jwt = require('jsonwebtoken');

const db = require('../../models/index');
const bcrypt = require('bcryptjs');

const sendEmail = require('../../utils/mailer');

exports.store = async (req, res) => {
    const { token, id } = req.params;
    const { password } = req.body;
    const secret = process.env.JWT_SECRET;

    try {

        const userExists = await db.User.findOne({ where: { id: id } });

        if (!userExists) {
            return res.status(401).json('User not found in our database!');
        }

        const verifyResetToken = await bcrypt.compare(token, userExists.tokenReset);

        if (!verifyResetToken) {
            return res.status(401).json('Link expired, make a new password reset request!');
        }

        try {
            await jwt.verify(token, secret);
        } catch (err) {
            return res.status(401).json('Link expired, make a new password reset request!');
        }

        const hashedNewPass = bcrypt.hashSync(password, 10);

        await userExists.update({
            password: hashedNewPass,
            tokenReset: "",
        });

        return res.status(200).json(`Password updated!`);
    } catch (err) {
        return console.log(err);
    }
} 