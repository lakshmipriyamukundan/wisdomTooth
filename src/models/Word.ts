import { Schema, model } from 'mongoose'

const WordSchema: Schema  = new Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    word: {
        type: String,
        required: true
    },
    meaning: {
        type: String,
        required: true
    }
});

export default model('Word', WordSchema);