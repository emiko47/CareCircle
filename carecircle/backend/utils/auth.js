import jwt from 'jsonwebtoken'; // Correct way to import CommonJS modules in ES modules
const { sign, verify } = jwt;

function generateToken(userInfo) {
    if (!userInfo) {
        return null;
    }

    // Ensure JWT_SECRET is set in your environment variables
    const token = sign(userInfo, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

function verifyToken(username, token) {
    try {
        // Synchronous verification
        const decoded = verify(token, process.env.JWT_SECRET);
        if (decoded.username !== username) {
            return {
                verified: false,
                message: 'Invalid user'
            };
        }

        return {
            verified: true,
            message: 'Valid token'
        };
    } catch (err) {
        return {
            verified: false,
            message: 'Invalid token'
        };
    }
}

const _generateToken = generateToken;
export { _generateToken as generateToken };
const _verifyToken = verifyToken;
export { _verifyToken as verifyToken };
