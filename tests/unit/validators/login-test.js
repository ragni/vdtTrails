import { module, test } from 'qunit';
import validateLogin from 'login-header/validators/login';

module('Unit | Validator | login');

test('it exists', function(assert) {
  assert.ok(validateLogin());
});
