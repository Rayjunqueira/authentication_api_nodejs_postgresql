const db = require('../../models/index');

exports.index = async (req, res) => {
    try {
        const user = await db.User.findAll();

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
}