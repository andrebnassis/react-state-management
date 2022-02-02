var data = require('../initial-data')

module.exports = (req, res) => {
    return res.status(200).send(data)
}