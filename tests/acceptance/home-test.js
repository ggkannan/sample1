import { test } from 'qunit';
import moduleForAcceptance from 'sample1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  visit('/home');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});
