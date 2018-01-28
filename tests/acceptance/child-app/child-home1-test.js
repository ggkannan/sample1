import { test } from 'qunit';
import moduleForAcceptance from 'sample1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | child app/child home1');

test('visiting /child-app/child-home1', function(assert) {
  visit('/child-app/child-home1');

  andThen(function() {
    assert.equal(currentURL(), '/child-app/child-home1');
  });
});
