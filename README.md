# Nightshade Styles

_**N.B.** This repo is very specific to Casper. We've released it for others
to share our approach, but we don't recommend using it in your production
environment for the time being.`_

## Working with Nightshade Styles

Install the repo with npm. The following will install the latest in `master`.

```bash
npm install CasperSleep/nightshade-styles.git
```

We **highly recommend** installing a tag of the repo `#v1.1.0`.

Include stylesheets in your application. To get all of our tooling and plugins,

```sass
// Third part dependencies
@import './node_modules/accoutrement-color/sass/color;
@import './node_modules/susy;



@import './node_modules/@casper/nightshade-styles/utilities/positioning';
@import './node_modules/@casper/nightshade-styles/utilities/z-index';
@import './node_modules/@casper/nightshade-styles/utilities/queries_config';
@import './node_modules/@casper/nightshade-styles/utilities/visual_utilities';
@import './node_modules/@casper/nightshade-styles/utilities/animations';
@import './node_modules/@casper/nightshade-styles/utilities/arrows_config';

@import './node_modules/@casper/nightshade-styles/base/z-index_config';
@import './node_modules/@casper/nightshade-styles/base/breakpoints_config';
@import './node_modules/@casper/nightshade-styles/base/sizing_config';
@import './node_modules/@casper/nightshade-styles/base/fonts_config';
@import './node_modules/@casper/nightshade-styles/base/colors_config';
@import './node_modules/@casper/nightshade-styles/base/typography/bundle';
@import './node_modules/@casper/nightshade-styles/base/grids';
@import './node_modules/@casper/nightshade-styles/base/base';
```

## License

 © Casper Coders
