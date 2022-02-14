import joi from 'joi';

const newCardSchemma = joi.object({
    name: joi.string().required(),
    cardNumber: joi.string().required(),
    securityNumber: joi.string().required(),
    validThru: joi.string().required(),
});

export default newCardSchemma;