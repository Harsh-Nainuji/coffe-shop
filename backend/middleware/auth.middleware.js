/*============================================
middleware/auth.middleware.js
Simple hardcoded admin auth
============================================*/
// middleware/auth.middleware.js
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ msg: 'No credentials sent' });

  const [user, pass] = Buffer.from(authHeader.split(' ')[1], 'base64')
    .toString()
    .split(':');

  if (user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASS) {
    return next();
  }
  return res.status(403).json({ msg: 'Forbidden' });
};
