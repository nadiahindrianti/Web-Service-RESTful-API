const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token is required');

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, user) => { 
        if (err) return res.status(401).send('Invalid token');
        req.user = user; 
        next();
    });    
};

