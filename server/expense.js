const request = require('request-promise-native');

const expensePath = `${process.env.EXP_API_URL}/api/expense`;

module.exports = async (req, res) => {
    const opt = {
        url: expensePath,
        strictSSL: false,
        json: true
    };
    try {
        expenses = await request.get(opt);
        res.send(expenses)
    } catch(e) {
        res.status(e.statusCode).send(e);
    }
}