import * as bcrypt from 'bcrypt';
import { body } from 'express-validator/check';
import { sanitizeBody } from 'express-validator/filter';
import  User  from '../models/user';
export const userRules = {
  forRegister: [
    body('firstName', 'FirstName must be specified').isLength({ min: 1 }).trim(),
    body('lastName', 'LastName must be specified').isLength({ min: 1 }).trim(),
    body('email', 'Email must be specified').isLength({ min: 1 }).trim(),
    body('password', 'Password must be specified').isLength({ min: 1 }).trim(),

    // Sanitize
    sanitizeBody('firstName').trim().escape(),
    sanitizeBody('lastName').trim().escape(),
    sanitizeBody('email').trim().escape(),
    sanitizeBody('password').trim().escape(),
  ],
  forLogin: [
    body('email')
      .isEmail().withMessage('Invalid email or password'),
    body('password', 'Invalid email or password')
      .isLength({ min: 1 })
  ]
};