import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | login/login-page', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:login/login-page');
    assert.ok(route);
  });
});
