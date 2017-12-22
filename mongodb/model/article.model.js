var mongoose = require('mongoose')

var ArticleSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  //创建时间
  buildTime: {
    type: String,
    default: Date.now()
  },
  //作者
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  //内容
  content: {
    type: String,
    default: ''
  },
  //评论
  comment: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  //标签
  tag: {
    type: Array,
    default: []
  },
  meta: {
    likeCount: {
      type: Number,
      default: 0
    }
  }
})

mongoose.model('Article', ArticleSchema)