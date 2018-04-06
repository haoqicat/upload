const User = require('./controllers/user')
const multer = require('multer')

module.exports = app => {
  // account
  app.post('/user/signup', User.signup)
  app.post('/user/login', User.login)
  app.get('/user/logout', User.logout)
  app.get('/users', User.all)
  app.get('/user/:id', User.getById)

  // upload
  const uploadPaper = multer({ dest: './public/uploads/paper' })
  app.post('/paper', uploadPaper.single('paper'), User.updatePaper)
}
