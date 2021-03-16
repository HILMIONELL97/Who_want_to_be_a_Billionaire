const Joi = require('joi')



exports.registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().required().email(),
        password: Joi.string().alphanum().min(3).max(1024).required(),
    })
    return schema.validate(data)
}



exports.loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email().trim(),
        password: Joi.string().alphanum().min(3).max(20).required().trim(),
    })
    return schema.validate(data)
}