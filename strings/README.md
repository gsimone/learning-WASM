https://wasmbyexample.dev/examples/strings/strings.c.en-us.html

Build 

`emcc -Os -s STANDALONE_WASM -s EXPORTED_FUNCTIONS="['_caesarEncrypt', '_caesarDecrypt']" -Wl,--no-entry "caesar.cpp" -o "caesar.wasm"`

`-Os`: Optimize for max performance
`-s STANDALONE_WASM`: generates pure WASM without js helpers
`-Wl,--no-entry`: no `start` function is inserted 