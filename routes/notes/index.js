const Router = require('koa-router');
const router = new Router();
const notes = require('../../data')

router.get('/notes', async (ctx) => {
  ctx.response.body = notes;
});

module.exports = router;