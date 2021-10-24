import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    description: { type: String, required: true, },
    createdAt: { type: Date, required: true, default: Date.now },
    categories: [{ type: String, trim: true }],
    tags: [{ type: String, trim: true }],
    meta: {
        views: { type: Number, default: 0, required: true, },
        likes: { type: Number, default: 0, required: true, },
        sharedCount: { type: Number, default: 0, required: true, },
    }
});

const Video = mongoose.model("Video", videoSchema);
export default Video;