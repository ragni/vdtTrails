import {
  validatePresence,
  validateLength,
  validateFormat
} from 'ember-changeset-validations/validators';
const LoginValidator = {
  email:[validatePresence({presence:true, message:'{description} should be present'}),
  validateFormat({type:'email'})],
  password:[validatePresence({presence:true, message:'{description} should be present'}),
  validateLength({min:8})]
};
export {LoginValidator};