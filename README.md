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

(defn say-hello []
  (println "hello!"))

(defn inc-all [nums]
  (map inc nums))

(.startup js/Meteor say-hello)
(.startup js/Meteor #(println (inc-all [1 3 5 9])))
```

# Project status: highly experimental

I only managed to get `cljs.core` working and haven't tested the ClojureScript integration extensively or in production mode. Pull requests on improvement are welcome.
