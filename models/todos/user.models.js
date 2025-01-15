import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: false,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'], // can also write custom message if the field is false
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
