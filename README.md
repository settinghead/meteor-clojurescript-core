ClojureScript `cljs.core` for Meteor
==


(Highly experimental) ClojureScript core functionalities based on [cljs-bootstrap](https://github.com/swannodette/cljs-bootstrap). No JVM is required.

# Installation

In your project folder

```bash
meteor add settinghead:cljs-core
```

Create a file with extension `.cljs`, e.g.

```Clojure
(enable-console-print!)
(.startup js/Meteor #(println "Hello!"))
```

# Project status: highly experimental

I only managed to get `cljs.core` working and haven't tested the ClojureScript integration extensively or in production mode.
