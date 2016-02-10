# Nightshade Styles

_**N.B.** This repo is very specific to Casper. We've released it for others
to share our approach, but we don't recommend using it in your production
environment for the time being.`_

## Install the repo

Install with npm. This will install the latest tag available in `master`.

```bash
npm install CasperSleep/nightshade-styles -D
```

## Include stylesheets in your application.

To get all of our tooling and plugins, import the files you want into your application.

```sass
@import './node_modules/accoutrement-color/sass/color';
@import './node_modules/susy/sass/susy';

@import './node_modules/@casper/nightshade-styles/utilities/queries_config';
@import './node_modules/@casper/nightshade-styles/utilities/animations';
@import './node_modules/@casper/nightshade-styles/utilities/arrows_config';
@import './node_modules/@casper/nightshade-styles/utilities/positioning';
@import './node_modules/@casper/nightshade-styles/utilities/visual_utilities';
@import './node_modules/@casper/nightshade-styles/utilities/z-index';

@import './node_modules/@casper/nightshade-styles/base/z-index_config';
@import './node_modules/@casper/nightshade-styles/base/breakpoints_config';
@import './node_modules/@casper/nightshade-styles/base/sizing_config';
@import './node_modules/@casper/nightshade-styles/base/fonts_config';
@import './node_modules/@casper/nightshade-styles/base/colors_config';
@import './node_modules/@casper/nightshade-styles/base/typography/bundle';
@import './node_modules/@casper/nightshade-styles/base/grids';


// Generates Output
@import './node_modules/@casper/nightshade-styles/base/base';
@import './node_modules/@casper/nightshade-styles/base/typography';
@import './node_modules/@casper/nightshade-styles/utilities/display_helpers';
@import './node_modules/@casper/nightshade-styles/utilities/flex-embed';

```

## License

© Casper Coders


#### <3 what you see

Want to be a part of what we're coding? We're looking for front-end developers and designers to join our team. Email claudina[at]casper[dot]com.
