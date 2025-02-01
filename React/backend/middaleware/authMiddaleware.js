require('dotenv').config()
const { blacklist } = require("../blacklist");

const authentication = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ msg: "No token provided." });

    if (await isBlacklisted(token)) return res.status(401).json({ msg: "Token is revoked." });

    jwt.verify(token, process.env.secret_key, (err, decoded) => {
        if (err) return res.status(401).json({ msg: "Invalid token" });

        req.user = decoded.user;
        next();
    });
};


module.exports= {
    authentication
}