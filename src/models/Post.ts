import { Schema, model } from 'mongoose';

const PostSchema: Schema = new Schema({

    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: 'String',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Draft', 'Post', 'Published'],
        default: 'Draft'
    },
    slug: {
        type: String,
        default: '',
        required: true,
        unique: true,
        trim: true

    },
    image: {
        type: String,
        default: ''
    }
});

export default model('Post', PostSchema);