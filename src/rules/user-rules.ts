import * as bcrypt from 'bcrypt';
import { check } from 'express-validator/check';
import { sanitizeBody } from 'express-validator/filter';
import  User  from '../models/User';
export const userRules = {
  forRegister: [
    check('firstName', 'FirstName must be specified').isLength({ min: 1 }).trim(),
    check('lastName', 'LastName must be specified').isLength({ min: 1 }).trim(),
    check('email', 'Email must be specified').isLength({ min: 1 }).trim(),
    check('password', 'Password must be specified').isLength({ min: 1 }).trim(),

    // Sanitize
    sanitizeBody('firstName').trim().escape(),
    sanitizeBody('lastName').trim().escape(),
    sanitizeBody('email').trim().escape(),
    sanitizeBody('password').trim().escape(),
  ],
  forLogin: [
    check('email')
      .isEmail().withMessage('Invalid email or password')
      .custom(email => User.find({ where: { email } }).then(u => !u)).withMessage('No User Present'),
,
    check('password', 'Invalid email or password')
      .isLength({ min: 1 })
  ]
};