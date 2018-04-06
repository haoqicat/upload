const Paper = require('../models/paper.js')

// 读取所有用户
exports.all = (req, res) => {
  Paper.find({}, '_id authorname filename originalname')
    .exec()
    .then(papers => {
      res.json({ papers })
    })
}

exports.new = (req, res) => {
  console.log('req.body', req.body)
  console.log('req.file', req.file.originalname)

  const originalname = req.file.originalname
  const filename = req.file.filename
  const { authorname } = req.body
  const _paper = { authorname, originalname, filename }
  const paper = new Paper(_paper)
  paper.save((err, paper) => {
    if (err) return res.status(500).json({ msg: '保存失败，请重试', err })
    res.json({
      msg: '保存成功'
    })
  })
}
