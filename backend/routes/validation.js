import Joi from '@hapi/joi';

// Register validation
const registerValidation = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().min(6).required(),
        lastName: Joi.string().allow(""),
        email: Joi.string().required().email(),
        password: Joi.string().min(8).required()
    })

    return schema.validate(data)
}

// Login validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(8).required()
    })

    return schema.validate(data)
}

export { registerValidation, loginValidation };