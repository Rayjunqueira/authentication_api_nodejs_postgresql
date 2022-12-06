const db = require('../../models/index');

exports.index = async (req, res) => {
    const { id } = req.params;
    try {
        const findUserById = await db.User.findOne({ where: { id } });

        return res.status(200).json(findUserById);
    } catch (err) {
        return res.status(500).json(err);
    }
}