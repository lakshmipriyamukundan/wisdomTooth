"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.default = mongoose_1.model('Post', PostSchema);
//# sourceMappingURL=Post.js.map