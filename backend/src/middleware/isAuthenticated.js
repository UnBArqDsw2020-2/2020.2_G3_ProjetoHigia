const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1].split('"')[1];
        const idToken = await admin.auth().verifyIdToken(token);
        req.decodedToken = idToken;
        return next();
    } catch (e) {
        return res.status(400).json({ error: "Usuário não autorizado" });
    }
}

export default isAuthenticated;