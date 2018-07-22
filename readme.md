
This app provides a testbed for playing around with the [`esm-library`](https://github.com/willismorse/esm-library). 



# Build
`yarn build`

# Run
`yarn serve`

This will launch an Express server hosting the `dist/` and `public/` folders on port 8080.

Browse to `localhost:8080` and observe the javascript console. You should see log entries from several of the classes in the `esm-library` package.

# Implementation notes

The main `LibraryConsumer.js` class instantiates and runs several classes from `esm-library`.

Things to try:
* Remove the main import statement and let Webstorm create it for you
* in the main constructor, add `child.` and observe the autocompletion in Webstorm and VSCode
* in the main constructor, add `stringUtils.capitalizeString;` and try command-clicking on `capitalizeString` to test the code navigation.
