import Joi from 'joi';

export default Joi.object({
  code: Joi.string().length(3).required(),
  name: Joi.string().min(3).max(50).required()
});
