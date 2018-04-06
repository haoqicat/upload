const Paper = require('./controllers/paper')
const multer = require('multer')

module.exports = app => {
  // upload
  const uploadPaper = multer({ dest: './public/uploads/paper' })
  app.post('/paper', uploadPaper.single('paper'), Paper.new)
  app.get('/papers', Paper.all)
}
