const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
    },
    thumbnail: {
      type: String,
      unique: true,
    },
    story: {
      type: String,
    },
  },
  {
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

// MovieSchema.set("toObject", { virtuals: true });
// MovieSchema.set("toJSON", { virtuals: true });

MovieSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id", // Review에서 참조하고 있는 Movie의 필드
  foreignField: "movie", // Review에서 참조를 저장하고 있는 필드
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
