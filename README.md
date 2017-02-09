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
.bin folder under node_modules have the executables for all the packages we downloaded. 

we can use default eslint parser or we can use babel as a parser. eslint's default doesn't know how to parse all the advanced features so will use babel parser

env p=options allows us to enable features, globals like browser, window
browser=true will allow now to use browser as a global to be a valid code.

eslint can throw two types of errors, parsing error and rule errors. parsing errors means that the eslint wasn't able to parse the whole file.

we will tell eslint to use babel as it's parser as it can't parse class static properties. 

babel-eslint is like a bridge between eslint and babel and if we use babel-eslint as the parser then it doesn't look at .babelrc
.babelrc will be used by webpack and gulp file.
 {"SwitchCase" : 1} allows use to use tabs for case in switch as a rule
 "semi" : ["error", "always"] error on if we don't have semi's at the end.
  "console": false : console tells that eslint that we can use console without importing it or defined. false means that we cannot re-assign console.
  by default eslint doesn't understand react code, so we need to install a plugin called eslint-plugin-react, react plugin will hook into eslint

"react/jsx-uses-react":"error",
"react/jsx-uses-vars":"error"
allows eslint to use react




