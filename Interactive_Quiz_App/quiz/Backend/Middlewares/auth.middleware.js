const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(200).json({error: "You do not have access"})
  }
};

const isAuthenticated = (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ authenticated: true });
  } else {
    res.status(200).json({ authenticated: false });
  }
};

module.exports = { ensureAuthenticated, isAuthenticated };