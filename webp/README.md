https://developers.google.com/web/updates/2018/03/emscripting-a-c-library

## Build

```
emcc -O3 -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    -I libwebp \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c
```

`-s WASM=1`: tells Emscripten to give us a Wasm file instead of an asm.js file
`EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]'`: tells the compiler  to leave the cwrap() function available in the JavaScript file
`webp.c`: the file to compile

### Links

libwebp https://github.com/webmproject/libwebp
libwebp docs https://developers.google.com/speed/webp/docs/api
cwrap https://emscripten.org/docs/api_reference/preamble.js.html#cwrap