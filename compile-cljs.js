const compileCljs = Npm.require('clojurescript-compiler').compile;

var counter = 0;

function ClojureScriptCompiler() {}
ClojureScriptCompiler.prototype.processFilesForTarget = function (files) {
	counter++;
	console.log(counter);
  files.forEach(function (file) {
    // process and add the output
    var output = compileCljs(file.getContentsAsString());
    console.log(file.getPathInPackage());
    file.addJavaScript({ data: output, path: file.getPathInPackage() + '.js' });
  });
};

Plugin.registerCompiler({
  extensions: ["cljs", "cjs", "clj", "cljc"],
  filenames: []
}, function () {
  var compiler  = new ClojureScriptCompiler();
  return compiler;
});