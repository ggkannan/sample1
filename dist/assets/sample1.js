"use strict";



define('sample1/adapters/application', ['exports', 'ember-data/adapters/json-api'], function (exports, _jsonApi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _jsonApi.default.extend({
    namespace: 'api'
  });
});
define('sample1/app', ['exports', 'sample1/resolver', 'ember-load-initializers', 'sample1/config/environment', 'sample1/models/custom-inflector-rules'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default,
    engines: {
      childApp: {
        dependencies: {
          externalRoutes: {},
          services: ['store']
        }
      }
    }
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('sample1/components/link-to-external', ['exports', 'ember-engines/components/link-to-external-component'], function (exports, _linkToExternalComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkToExternalComponent.default;
    }
  });
});
define('sample1/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('sample1/config/asset-manifest', ['exports', 'require', 'sample1/config/environment'], function (exports, _require2, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var modulePrefix = _environment.default.modulePrefix;
  var metaName = modulePrefix + '/config/asset-manifest';
  var nodeName = modulePrefix + '/config/node-asset-manifest';

  var config = {};

  try {
    // If we have a Node version of the asset manifest, use that for FastBoot and
    // similar environments.
    if (_require2.default.has(nodeName)) {
      config = (0, _require2.default)(nodeName).default; // eslint-disable-line
    } else {
      var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
      config = JSON.parse(unescape(rawConfig));
    }
  } catch (err) {
    throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "' + metaName + '" is present. For non-browser environments, verify that you included the node-asset-manifest module.');
  }

  exports.default = config;
});
define('sample1/helpers/app-version', ['exports', 'sample1/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('sample1/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('sample1/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('sample1/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sample1/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('sample1/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('sample1/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('sample1/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'sample1/config/environment', 'sample1/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _readModules, _environment, _config, _server, _assign2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  var getWithDefault = Ember.getWithDefault;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize: function initialize() {
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;

    var environment = env.environment;
    var discoverEmberDataModels = getWithDefault(env['ember-cli-mirage'] || {}, 'discoverEmberDataModels', true);
    var modules = (0, _readModules.default)(env.modulePrefix);
    var trackRequests = env['ember-cli-mirage'];
    var options = (0, _assign2.default)(modules, { environment: environment, baseConfig: _config.default, testConfig: _config.testConfig, discoverEmberDataModels: discoverEmberDataModels, trackRequests: trackRequests });

    return new _server.default(options);
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('sample1/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('sample1/initializers/engines', ['exports', 'ember-engines/initializers/engines'], function (exports, _engines) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _engines.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _engines.initialize;
    }
  });
});
define('sample1/initializers/export-application-global', ['exports', 'sample1/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('sample1/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('sample1/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('sample1/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("sample1/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('sample1/instance-initializers/load-asset-manifest', ['exports', 'sample1/config/asset-manifest'], function (exports, _assetManifest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  /**
   * Initializes the AssetLoader service with a generated asset-manifest.
   */
  function initialize(instance) {
    var service = instance.lookup('service:asset-loader');
    service.pushManifest(_assetManifest.default);
  }

  exports.default = {
    name: 'load-asset-manifest',
    initialize: initialize
  };
});
define('sample1/mirage/config', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {

    this.namespace = '/api';

    this.get('/rentals', function () {
      return {
        data: [{
          type: 'rentals',
          id: 'grand-old-mansion',
          attributes: {
            title: 'Grand Old Mansion',
            owner: 'Veruca Salt',
            city: 'San Francisco',
            category: 'Estate',
            bedrooms: 15,
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
          }
        }, {
          type: 'rentals',
          id: 'urban-living',
          attributes: {
            title: 'Urban Living',
            owner: 'Mike Teavee',
            city: 'Seattle',
            category: 'Condo',
            bedrooms: 1,
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
          }
        }, {
          type: 'rentals',
          id: 'downtown-charm',
          attributes: {
            title: 'Downtown Charm',
            owner: 'Violet Beauregarde',
            city: 'Portland',
            category: 'Apartment',
            bedrooms: 3,
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
          }
        }]
      };
    });
    this.get('/house', function () {
      return {
        data: [{
          type: 'house',
          id: 'grand-old-mansion',
          attributes: {
            title: 'Grand Old Mansion 1',
            owner: 'Veruca Salt 1',
            city: 'San Francisco 1',
            category: 'Estate 11111111111111',
            bedrooms: 15,
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
          }
        }, {
          type: 'house',
          id: 'downtown-charm',
          attributes: {
            title: 'Downtown Charm',
            owner: 'Violet Beauregarde',
            city: 'Portland',
            category: 'Apartment',
            bedrooms: 3,
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
          }
        }]
      };
    });
  };
});
define("sample1/mirage/scenarios/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    // server.createList('post', 10);
  };
});
define('sample1/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('sample1/models/custom-inflector-rules', ['exports', 'ember-inflector'], function (exports, _emberInflector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var inflector = _emberInflector.default.inflector;

  inflector.irregular('house', 'house');

  // Meet Ember Inspector's expectation of an export
  exports.default = {};
});
define('sample1/models/house', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _model, _attr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _model.default.extend({
    title: (0, _attr.default)(),
    owner: (0, _attr.default)(),
    city: (0, _attr.default)(),
    category: (0, _attr.default)(),
    image: (0, _attr.default)(),
    bedrooms: (0, _attr.default)(),
    description: (0, _attr.default)()
  });
});
define('sample1/models/rental', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr(),
    owner: _emberData.default.attr(),
    city: _emberData.default.attr(),
    category: _emberData.default.attr(),
    image: _emberData.default.attr(),
    bedrooms: _emberData.default.attr(),
    description: _emberData.default.attr()
  });
});
define('sample1/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('sample1/router', ['exports', 'sample1/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('home');
    this.route('page1');
    this.mount('child-app');
  });

  exports.default = Router;
});
define('sample1/routes/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return this.get('store').findAll('rental');
    }
  });
});
define('sample1/routes/page1', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('sample1/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('sample1/services/asset-loader', ['exports', 'ember-asset-loader/services/asset-loader'], function (exports, _assetLoader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _assetLoader.default;
    }
  });
});
define("sample1/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bj5GC7yK", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[7],[0,\"Application\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"home\"],null,{\"statements\":[[0,\"Home page\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"link-to\",[\"page1\"],null,{\"statements\":[[0,\"sub page\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"link-to\",[\"child-app.child-home\"],null,{\"statements\":[[0,\"child home 1\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"link-to\",[\"child-app.child-home1\"],null,{\"statements\":[[0,\"child home 2\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\\n \\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sample1/templates/application.hbs" } });
});
define("sample1/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zlxy6faT", "block": "{\"symbols\":[\"rental\"],\"statements\":[[6,\"h1\"],[7],[0,\"child home 1\"],[8],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[6,\"article\"],[9,\"class\",\"listing\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[1,[19,1,[\"title\"]],false],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail owner\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Owner:\"],[8],[0,\" \"],[1,[19,1,[\"owner\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail type\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Type:\"],[8],[0,\" \"],[1,[19,1,[\"category\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail location\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Location:\"],[8],[0,\" \"],[1,[19,1,[\"city\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail bedrooms\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Number of bedrooms:\"],[8],[0,\" \"],[1,[19,1,[\"bedrooms\"]],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "sample1/templates/home.hbs" } });
});
define("sample1/templates/page1", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EJ7c5kvS", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[7],[0,\"sub page\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sample1/templates/page1.hbs" } });
});
define('sample1/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});


define('sample1/config/environment', [], function() {
  var prefix = 'sample1';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("sample1/app")["default"].create({"name":"sample1","version":"0.0.0"});
}
//# sourceMappingURL=sample1.map
