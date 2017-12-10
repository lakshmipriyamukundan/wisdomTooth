"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let UserSchema = new mongoose_1.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    fullName: {
        type: String
    },
    email: {
        type: '',
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: 'User'
    },
    joinType: {
        type: String,
        default: 'Local'
    },
    lastLoginType: {
        type: 'String',
        default: 'Local'
    }
});
UserSchema.pre('save', (next) => {
    this.fullName = this.firstName + ' ' + this.lastName;
    next();
});
exports.default = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=user.js.map