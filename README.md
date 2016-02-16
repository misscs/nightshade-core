# Nightshade Styles

_**N.B.** This repo is very specific to Casper. We've released it for others
to share our approach, but we don't recommend using it in your production
environment for the time being.`_

## Install the repo

Install with npm. This will install the latest tag available in `master`.

```bash
npm install CasperSleep/nightshade-styles -D
```

## Including components in your library

Import modules, libraries, and utilities in your file.

### External Dependencies

Third party libraries we rely on for tooling.

```sass
@import './node_modules/accoutrement-color/sass/color';
@import './node_modules/susy/sass/susy';
```

### Utilities

Sass tools for web development

```sass
@import './node_modules/@casper/nightshade-styles/utilities/queries_config';
@import './node_modules/@casper/nightshade-styles/utilities/animations';
@import './node_modules/@casper/nightshade-styles/utilities/arrows_config';
@import './node_modules/@casper/nightshade-styles/utilities/positioning';
@import './node_modules/@casper/nightshade-styles/utilities/visual_utilities';
@import './node_modules/@casper/nightshade-styles/utilities/z-index';
```


### Modules

The core collection of Casper modules that comprise the Nightshade Design System.

At the moment, the modules are in flux. We recommend checking `modules` directory to find out the file(s) to import.

Check out [the discussion](https://github.com/CasperSleep/nightshade-styles/issues/19) on the topic. Input and feedback welcome and open
to all!



### Other Nightshade Repos

* [Nightshade Icons](https://github.com/CasperSleep/nightshade-icons)


## License

© Casper Coders


#### <3 what you see

Want to be a part of what we're coding? We're looking for front-end developers and designers to join our team. Email claudina[at]casper[dot]com.
