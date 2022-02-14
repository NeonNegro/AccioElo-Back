import joi from 'joi';

const checkoutSchemma = joi.object({
    products: joi.array().required(),
    cardId: joi.string().required(),
});

export default checkoutSchemma;