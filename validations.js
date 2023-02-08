import Joi from "joi";
export default function movieValidation(data){
      const shema =Joi.object({
            title: Joi.string().required().min(3).max(30),
            type: Joi.string().required().max(30).min(3),
            directors: Joi.array().required().max(30),
            genres: Joi.array().required().max(30),
            countries: Joi.array().required().max(30),
            year: Joi.number().min(1900).max(2023) ,
            description: Joi.string().required(),
      });
  return shema.validate(data)
};
