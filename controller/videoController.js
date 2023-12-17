
const Video = require('../model/video');

const videoController = {
    saveVideoDetails:async(req,res)=>{
        try{
            const data=req.body;
            const newVideo = new Video({
                title: data.title,
                thumbnail: data.thumbnail,
                views: data.views,
                likes: data.likes,
                comments: data.comments,
                estimatedEarning: data.estimatedEarning,
                date:data.date
              });
               const saveData=await newVideo.save();
              res.status(200).json(saveData);
        }
        catch(err){
            console.log(err);
        }
    },
    analyzeVideo: async (req, res) => {
        try {
          
        
          // Fetching all videos from the database and calculate ranking
          const allVideos = await Video.find();
          const rankedVideos = calculateRanking(allVideos);
    
          // Sending video data and ranked videos in the response
          res.json({  rankedVideos });
        } catch (error) {
          console.error('Error analyzing video:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      },
  

    };
// calculating ranking based on earnings
function calculateRanking(allVideos) {
  const sortedVideos = allVideos.slice().sort((a, b) => b.estimatedEarning - a.estimatedEarning);
  return sortedVideos.map((video, index) => ({ ...video.toObject(), rank: index + 1 }));
}

module.exports = videoController;

