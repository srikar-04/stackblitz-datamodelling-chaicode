import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId, // this is a kind of 'DATATYPE' which tells db that you are referencing to some exsisting "MODEL"
    ref: "User"   // referrencing users.model.js

    // generally the value to the "ref" key will always be the exact same name that you have used while exporting the "MODEL" (User in this case)
  },
  subTodos: [  // subTodos are array of content. First we write square brackets to define that "it's an array" and then we specify the type or give a reference, as usually in an object
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubTodo'
    }
  ]
}, { timestamps: true });

export const Todo = mongoose.model('Todo', todoSchema);
