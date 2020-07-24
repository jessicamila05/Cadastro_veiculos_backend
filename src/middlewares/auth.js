const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");


module.exports = (req, res, nex) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({error: "No token provided"});
    
    const parts = authHeader.split(" ");

    if(!parts.length === 2)
        return res.status(401).send({error: "Token error"});

    const [scheme, Token] = parts;

    if(!/^Beares$/i.test(scheme))
        return res.status(401).send({error: "Token malformatted"});

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({error: "token inalid"});
    
        req.userID = decoded.id;
        return next();
    });

};