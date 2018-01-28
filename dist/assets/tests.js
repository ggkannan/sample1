'use strict';

define('sample1/tests/acceptance/child-app/child-home-test', ['qunit', 'sample1/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | child app/child home');

  (0, _qunit.test)('visiting /child-app/child-home', function (assert) {
    visit('/child-app/child-home');

    andThen(function () {
      assert.equal(currentURL(), '/child-app/child-home');
    });
  });
});
define('sample1/tests/acceptance/child-app/child-home1-test', ['qunit', 'sample1/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | child app/child home1');

  (0, _qunit.test)('visiting /child-app/child-home1', function (assert) {
    visit('/child-app/child-home1');

    andThen(function () {
      assert.equal(currentURL(), '/child-app/child-home1');
    });
  });
});
define('sample1/tests/acceptance/home-test', ['qunit', 'sample1/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | home');

  (0, _qunit.test)('visiting /home', function (assert) {
    visit('/home');

    andThen(function () {
      assert.equal(currentURL(), '/home');
    });
  });
});
define('sample1/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('models/custom-inflector-rules.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/custom-inflector-rules.js should pass ESLint\n\n');
  });

  QUnit.test('models/house.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/house.js should pass ESLint\n\n');
  });

  QUnit.test('models/rental.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/rental.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });

  QUnit.test('routes/page1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/page1.js should pass ESLint\n\n');
  });
});
define('sample1/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('sample1/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'sample1/tests/helpers/start-app', 'sample1/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('sample1/tests/helpers/resolver', ['exports', 'sample1/resolver', 'sample1/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('sample1/tests/helpers/start-app', ['exports', 'sample1/app', 'sample1/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('sample1/tests/test-helper', ['sample1/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('sample1/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/child-app/child-home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/child-app/child-home-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/child-app/child-home1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/child-app/child-home1-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/house-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/house-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/rental-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/rental-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/page1-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/page1-test.js should pass ESLint\n\n');
  });
});
define('sample1/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('sample1/tests/unit/models/house-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('house', 'Unit | Model | house', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('sample1/tests/unit/models/rental-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('rental', 'Unit | Model | rental', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('sample1/tests/unit/routes/home-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sample1/tests/unit/routes/page1-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:page1', 'Unit | Route | page1', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('sample1/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
