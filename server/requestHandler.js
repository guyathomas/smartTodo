var items = ['Get Milk',
	'Get Cookies',
	'Eat Milk & Cookies'];

exports.getItems = function(req, res) {
    // req.on('end', function() {
    // })
    // res.writeHead(200, {'Content-Type': 'application/json'})
	res.send(items);
}

exports.addItem = function(req, res) {
	console.log(req.body)
	items.push(req.body.item);
	res.send(items);
}

exports.deleteItem = function(req, res) {
	console.log(req.body)
	var delIndex = req.body.index;
	// console.log('req index', delIndex)
	items.splice(delIndex, 1);
	res.send(items);
}