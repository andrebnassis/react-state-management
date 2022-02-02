var data = require('../../initial-data')

module.exports = (req, res) => {
    const id = req.params.id;
	const index = data.findIndex((todo) => todo.id == id);
	const completed = Boolean(req.body.completed);
	if (index > -1) {
		data[index].completed = completed;
	}
	return res.send(data[index]);
}