const jwt = require('jsonwebtoken');

const db = require('../../models/index');
const sendEmail = require('../../utils/mailer');

const bcrypt = require('bcryptjs');

exports.store = async (req, res) => {
    const { email } = req.body;
    const secret = process.env.JWT_SECRET;

    try {

        const user = await db.User.findOne({ where: { email } });
 
        if (!user) {
            res.status(400).json('User does not exist.');
        }


        const token = jwt.sign({ id: user.id }, secret, {
            expiresIn: process.env.EXPIRES_FORGOTPASS,
        });

        const hashedToken = bcrypt.hashSync(token, 10);

        await user.update({
            tokenReset: hashedToken,
        });

        sendEmail({
            from: 'noreply@email.com',
            to: 'admin@gmail.com',
            subject: 'Reset your password',
            text: `Token sending email to reset password account from ${user.email}`,
            html: `<h2>Token sending email to reset password account from ${user.email}</h2>
                    <h4>${token}</h4>
                    <h4>${user.id}</h4>
            `,    
        });

        return res.status(200).json('Check the verification link in your email!');
    } catch (err) {
        return console.log(err);
    }
} 