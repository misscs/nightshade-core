# Contribute


## Code Style

We think it's best for the project if the code you write looks like the code the last developer wrote, so we've put together some guidelines we ask that you follow. We greatly appreciate your cooperation and contribution.


## Pull Request Guidelines

- Develop in a topic branch (not `master`)
- If your PR is not related to an issue, write a descriptive title
- Add a description to your PR
- Add a label to your PR
- Once your PR is merged, update the version, create a tag, and write a release.

### Labels

We use labels to help tag the state of a PR.

* No label: PR is under active development
* `Ready for review`: PR is ready to be reviewed. If a reviewer finds any issues,
comments are left on the issue.
* `DTM`: Added to PR once reviewer and developer are done with code review and feel PR is ready to merge into master.

### Tagging your release

Nightshade-styles uses Semver. Here is a [good primer](http://www.sitepoint.com/semantic-versioning-why-you-should-using/) on how this project tags releases.

Once you've closed and merged your PR, you need to bump version
and create a new tag. We can easily accomplish this with [npm-version](https://docs.npmjs.com/cli/version).

```sh
npm version [ major | minor | patch ] -m "Bump version %s"
```

We also supply a message with `-m`. `%s` will be replaced with the resulting
version number.

Most updates will be `minor` version changes. It is safe to assume a minor version
change if there isn't one explicitly stated.

```sh
# Pretend current version is 0.2.1
npm version minor
# current version is 0.3.0
# fix small bug
npm version patch
# current verion is 0.3.1
```

Running `npm version` will run `postversion` script in `package.json`. This takes care
of pushing your tags to repo and even lists the new tag under releases!


### Publish a release


Now that you've pushed your tag it is time to publish a release. Even though our
workflow creates a new release, we like to annotate our releases with the features
and bugs we resolved.

We recommend using  [hub](https://github.com/github/hub) for more productive workflow. You can also
[create a release from the browser](https://github.com/CasperSleep/Ando/releases).


#### Publish a release using Hub

```sh
git/hub release create <tag> -p -m
```


* `<tag>` includes the intial v, example `v0.5.0`.
* `-p` specifies the release is a _pre-release_. All of our releases are currently pre-releases

When you hit enter, it will bring up your editor of choice to enter your release message. Please refer to [release page](https://github.com/CasperSleep/Ando/releases) for example of how we write our release messages.

For more information on `git/hub release create` type `git/hub release create -h` in your console.


## Submitting New Ideas

We love new ideas. Please use the issue queue to submit your suggestions.


## Browser Compatibility

Our code base is written as close to the spec as possible. We use autoprefixer to generate compliant code. We support last two versions of Chrome, Firefox, Opera, Safari and IE9 up.


