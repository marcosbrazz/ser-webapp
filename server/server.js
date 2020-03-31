(async () => {
    const express = require('express');
    const router = express.Router();
    const expense = require('./expense');
    const path = require('path');
    
    app = express();
    app.use(express.json());
    // app.use(express.urlencoded( {extended: true} ));
    // router.use('/api/expense', expense);
    // router.use('/', (req, res, next) => express.static(path.join(__dirname, 'web-app', 'index.html'))(req, res, next));
    
    // app.use(router);
    app.get('/api/expense', expense);
    app.use('/', express.static(path.join(__dirname, 'web-app')));
    
    const port = process.env.PORT || '80'
    app.listen(port);
    console.log(`Server started on port ${port}`);
})();