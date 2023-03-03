import Joi from 'joi';

export default Joi.object({
  productId: Joi.string().hex().length(24).required(),
  quantity: Joi.number().min(1).required()
});
