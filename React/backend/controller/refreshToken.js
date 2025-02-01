const { blacklist } = require("../blacklist");

const refreshToken = (req, res) => {
    const token = req.cookies.refreshToken;

    if (!token) {
        return res.status(401).json({ msg: "Refresh token missing" });
    }

    jwt.verify(token, process.env.refresh_secret_key, (err, decoded) => {
        if (err) {
            return res.status(403).json({ msg: "Invalid refresh token" });
        }

       
        const newAccessToken = jwt.sign(
            { userId: decoded.userId },
            process.env.secret_key,
            { expiresIn: "15m" }
        );

        res.status(200).json({ accessToken: newAccessToken });
    });
};


const logout = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(400).json({ msg: "No token provided" });
    }
    blacklist.add(token);
    res.status(200).json({ msg: "Logged out successfully" });
};


module.exports = {
    refreshToken,
    logout
}