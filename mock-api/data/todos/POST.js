var data = require('../initial-data')

module.exports = (req, res) => {
    const todo = { title: req.body.title, id: Math.random(), completed: false };
	data.push(todo);
	return res.send(todo);
}