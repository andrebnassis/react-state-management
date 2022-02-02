var data = require('../../initial-data')

module.exports = (req, res) => {
	const id = req.params.id;
	const index = data.findIndex((todo) => todo.id == id);
	if (index > -1) {
		data.splice(index, 1);
	}

	res.send(data);
}