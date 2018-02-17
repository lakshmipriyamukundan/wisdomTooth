import { check } from 'express-validator/check';
import { sanitizeBody } from 'express-validator/filter';
import  Word  from '../models/Word';
export const wordRules = {
    forSave: [
        check('word', 'Word must be specified').isLength({ min: 1 }).trim(),
        // Sanitize
        sanitizeBody('word').trim().escape()
    ]
}