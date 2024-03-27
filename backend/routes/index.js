const express = require('express');
// const fetch = require('node-fetch')

const router = express.Router();
const apiRouter = require('./api');
router.use('/api', apiRouter);


// const express = require('express');
// const router = express.Router();

// router.get('/hello/world', function(req, res) {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   res.send('Hello World!');
// });

// module.exports = router;

// Add a XSRF-TOKEN cookie
router.get("/api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
      'XSRF-Token': csrfToken
    });
  });
//   fetch('/api/test', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": "WpVPxQxp-dKxSewBlHSNNLNJvw-_QaXLU_0o"
//     },
//     body: JSON.stringify({ hello: 'world' })
//   }).then(res => res.json()).then(data => console.log(data));

  module.exports = router;
