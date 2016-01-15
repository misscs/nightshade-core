# Nightshade Styles

_**N.B.** This repo is very specific to Casper. We've released it for others
to share our approach, but we don't recommend using it in your production
environment for the time being.`_

## Working with Nightshade-Styles

Install the repo with npm:

```
npm install git+https://github.com/CasperSleep/nightshade-styles.git#v1.x.x
```

Include stylesheets in your application. To get all of our tooling and plugins, 

```
@import './node_modules/nightshade-styles/plugins/positioning';
@import './node_modules/nightshade-styles/plugins/z-index';
@import './node_modules/nightshade-styles/plugins/queries_config';
@import './node_modules/nightshade-styles/plugins/visual_utilities';
@import './node_modules/nightshade-styles/plugins/animations';
@import './node_modules/nightshade-styles/plugins/arrows_config';

@import './node_modules/nightshade-styles/base/z-index_config';
@import './node_modules/nightshade-styles/base/breakpoints_config';
@import './node_modules/nightshade-styles/base/sizing_config';
@import './node_modules/nightshade-styles/base/fonts_config';
@import './node_modules/nightshade-styles/base/colors_config';
@import './node_modules/nightshade-styles/base/typography/bundle';
@import './node_modules/nightshade-styles/base/grids';
@import './node_modules/nightshade-styles/base/base';
```
