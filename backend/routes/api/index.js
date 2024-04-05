const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const spotsRouter = require('./spots');
const spotImageRouter = require('./images.js');
const reviewRouter = require('./reviews');
const bookingRouter = require('./bookings.js')
const { restoreUser } = require('../../utils/auth.js');


router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

  // GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    }
  });
  setTokenCookie(res, user);
  return res.json({ user: user });
});


// GET /api/restore-user


router.use(restoreUser);

router.get(
  '/restore-user',
  (req, res) => {
    return res.json(req.user);
  }
);

const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);

router.use(restoreUser);
router.use('/session', sessionRouter);
router.use('/', bookingRouter);

router.use('/users', usersRouter);
router.use('/spots', spotsRouter);
router.use('/', spotImageRouter);
router.use('/', reviewRouter);
router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});


module.exports = router;
