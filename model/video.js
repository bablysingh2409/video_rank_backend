const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  views: Number,
  likes: Number,
  comments: Number,
  estimatedEarning: Number,
  date:Date
}, { timestamps: true });

const Video = mongoose.model('VideoCollection', videoSchema);

module.exports = Video;
 