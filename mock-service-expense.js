Express = require('express');
var bodyParser = require('body-parser');

var app = Express();
app.use(bodyParser.json());

app.get("/api/expense", function(req, res, next){
    exp = [
        {'email': 'cio_3@ibm.com',
        'vendor': 'vale night',
        'vendor_type': 'casa rosa',
        'date': '2020-03-16 20:37:11.846307',
        'price': 0.01,
        'user_outlier': false,
        'usergroup_outlier': false},
        {'email': 'cio_3@ibm.com',
        'vendor': 'Uber',
        'vendor_type': 'Transport',
        'date': '2020-03-16 20:37:11.846307',
        'price': 1.23,
        'user_outlier': false,
        'usergroup_outlier': false},
    ];
    res.json(exp);
});

port = process.env.PORT || 8888;

app.listen(port, function(a) {
    console.log(`Listening to port ${port}`);
});