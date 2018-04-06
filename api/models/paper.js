const mongoose = require('mongoose')

const PaperSchema = new mongoose.Schema(
  {
    authorname: { type: String, maxlength: 18 },
    filename: { type: String, required: true },
    originalname: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Paper', PaperSchema)
