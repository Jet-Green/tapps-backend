import mongoose from "mongoose";

export default interface Button {
  name: string,
  link: string
}

export default interface Tapp {
  _id: mongoose.Schema.Types.ObjectId,
  name: string,
  logoLink: string,
  buttons: Button[],
  creator: mongoose.Schema.Types.ObjectId,
}