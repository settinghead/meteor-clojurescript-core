Package.describe({
  "name": "settinghead:cljs-core",
  "summary": "ClojureScript core functionalities for Meteor",
  "version": "0.0.1",
  "git": "https://github.com/settinghead/meteor-clojurescript.git"
});

Package.onUse(function (api) {
	api.imply(['settinghead:cljs-compiler@0.0.1']);
	api.addFiles('goog.js', ['server', 'client']);
	api.addFiles('cljs.core.js', ['server', 'client']);
	api.export('goog');
	api.export('cljs');
	api.export('clojure');
});
