### public folder is where we serve the content for http server

client.js is going to be the entry point to our application which will bootstrap the entire program including routing.
jsconfig.json is the file for visual studio code that will indicate the compiler option to use when we do code completion

we will make eslint to use babel compiler to understand our code. 

babel-core is just the compiler.  It's just is an engine but without transforms. 
we install transformation via presets. 
presets are a collection of individual transforms. 
react preset includes JSX, flow and display-name
es-2015, es-2016, es-2017 are all preset
four stages of TC-39, stage-0, stage-1, stage-2, stage-3
never include stage presets as they can change. So rather include the individual transform. 
transform-object-rest-spread
static class properties 
// there are syntax definition tells babel how to understand package (parse) and then transform packages. 
// babel-runtime will include polyfills for promises, map and other stuff at runtime.

 in babelrc file we need to have the syntax plugins defined first and then the transform plugins otherwise babel won't work 








