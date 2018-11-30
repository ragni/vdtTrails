import { module, test } from 'qunit';
import validateLogin from 'vdt-client-app/validators/login';

module('Unit | Validator | login');

test('it exists', function(assert) {
  assert.ok(validateLogin());
});
