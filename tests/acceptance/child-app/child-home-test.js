import { test } from 'qunit';
import moduleForAcceptance from 'sample1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | child app/child home');

test('visiting /child-app/child-home', function(assert) {
  visit('/child-app/child-home');

  andThen(function() {
    assert.equal(currentURL(), '/child-app/child-home');
  });
});
