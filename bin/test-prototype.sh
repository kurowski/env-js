#!/bin/sh

# Usage: test-prototype.sh [version]
# Currently supported versions: 1.6.0.3
#
# This script will check out the Prototype development tree from Github if necessary,
# massage the testing scripts as necessary, copy our latest version of env.js into place,
# and then run the test scripts.


if [ -n "$2" ]; then 
    echo 'debug'
    if [ -n "$2" ]; then VERSION="$2"; else VERSION="1.6.0.3"; fi
    DEBUG=1
else 
    echo 'jquery'
    if [ -n "$1" ]; then VERSION="$1"; else VERSION="1.6.0.3"; fi
    DEBUG=0
fi

PROTOTYPE_DIR="test/vendor/Prototype/$VERSION";

ant concat

if [ ! -d "$PROTOTYPE_DIR" ]; then
  git clone git://github.com/sstephenson/prototype.git $PROTOTYPE_DIR
  cd $PROTOTYPE_DIR
  git submodule init
  git submodule update
  rake test:build #prepares tests
  cd -
fi

cp dist/env.rhino.js $PROTOTYPE_DIR/test/env.js
cp rhino/js.jar $PROTOTYPE_DIR/test/js.jar
cp bin/prototype-$VERSION-test.js $PROTOTYPE_DIR/test/test.js

cd $PROTOTYPE_DIR/test

if [ $DEBUG -eq 1 ]; then
    echo 'running with rhino debugger'
    java -cp js.jar org.mozilla.javascript.tools.debugger.Main test.js;
else
    echo 'running with rhino'
    java -jar js.jar -w -debug test.js;
fi

