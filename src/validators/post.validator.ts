import Joi from "joi"

export const postValidator = Joi.object({
title:
Joi
    .string()
    .min(10)
    .max(100)
    .required()
    .pattern(new RegExp("^[a-zA-Z ]*$"))
    .messages({
        "string.required.base": "title is required",
        "string.min.base": "min 10 sumbol"

    })
    ,
    body:
        Joi
            .string()
            .min(20)
            .max(1000)
            .pattern(new RegExp("^[a-zA-Z ]*$"))
            .messages({
                "string.required.base": "title is required",
                "string.min.base": "min 20 sumbol"

            }),
})