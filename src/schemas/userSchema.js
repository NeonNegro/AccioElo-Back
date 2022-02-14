import joi from 'joi';

const newUserSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});


export default newUserSchema