const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// project model

const ProjectModel = mongoose.models.Project || mongoose.model("Project", Schema);

export default ProjectModel;
