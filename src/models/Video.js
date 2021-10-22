import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    categories: [{ type: String }],
    tags: [{ type: String }],
    meta: {
        views: Number,
        likes: Number,
        sharedCount: Number
    }
});

const Video = mongoose.model("Video", videoSchema);
export default Video;