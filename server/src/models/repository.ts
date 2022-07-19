import mongoose from "mongoose"

const repositorySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    repositoryName: {
      type: String,
      required: true,
      unique: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
)

const repository = mongoose.model("repository", repositorySchema)

export default repository
