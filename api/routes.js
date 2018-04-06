const User = require('./controllers/user')
const Post = require('./controllers/post')
const multer = require('multer')

module.exports = app => {
  // account
  app.post('/user/signup', User.signup)
  app.post('/user/login', User.login)
  app.get('/user/logout', User.logout)
  app.get('/users', User.all)
  app.get('/user/:id', User.getById)

  // post
  app.post('/post', Post.new)
  app.delete('/post/:id', Post.remove)
  app.get('/posts', Post.all)

  // upload
  const uploadPaper = multer({ dest: './public/uploads/paper' })
  app.post('/paper', uploadPaper.single('paper'), User.updatePaper)
}
