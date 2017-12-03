import { Schema, model } from 'mongoose';

let PostSchema : Schema = new Schema({

    createdAt: Date,
    updatedAt: Date
})

export default model('Post', PostSchema);