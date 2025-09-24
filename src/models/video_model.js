import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
//To optimize Searcing fields use index:true
const videoSchema = Schema(
  {
    videoFile: {
      type: String, //Coudinary url
      requried: true,
    },
    thumbnail: {
      type: String, //Coudinary url
      requried: true,
    },
    title: {
      type: String,
      requried: true,
    },
    description: {
      type: String,
      requried: true,
    },
    duration: {
      type: String, //Coudinary url
      requried: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
