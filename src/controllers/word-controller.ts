import { RequestHandler } from 'express';

const { validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

import Word from '../models/Word';

export class WordClass {
    public static saveWord  : RequestHandler = async (req, res) => {
        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            return res.status(422).send({
                status: 'Failed',
                msg: validationErrors.array()
            });
        }
        // finding matched data from req.body
        const data =  matchedData(req);

        try{
            const word = new Word(data);
            const savedWord = await word.save();

            return res.status(200).send({
                status: 'Success',
                data: savedWord
            })
        }catch (err){
            console.log(err);
            return res.status(500).send({
                status: 'Failed',
                msg: err
            })
        }
    }
}