# gulp-angular-translate
Gulp version of [grunt-angular-translate](https://github.com/angular-translate/grunt-angular-translate).
Simply extract all the translation keys for `angular-translate` project.

## Getting started
Install this gulp plugin next to your project. Require [gulpjs][getting_started].

```bash
$ npm install gulp-angular-translate
```

Then you can use the gulp plugin inside your gulp tasks, as follow:

```javascript
//...
    var gulp = require('gulp');
    var angularTranslate = require('./');
//...
    gulp.task('default', function () {
        return gulp.src('fixtures/*.html')
            .pipe(angularTranslate({
                lang: ['en_CA', 'fr_CA']
            }))
            //..
    });
//...
```

To know all options available, please read the documentation ([here](#Options)).

## Use Cases

### Views

#### Filters

`{{'TRANSLATION' | translate}}`

`{{'TRANSLATION' | translate:XXXXXX}}`

#### Directives

`<a href="#" translate>TRANSLATION</a>`

#### Directives plural (custom attribute angular-plural-extract to automatize extraction)

`<span translate="TRANSLATION_KEY" angular-plural-extract="['TEXT FOR ONE','# TEXT FOR OTHER']" translate-values="{NB: X}" translate-interpolation="messageformat"></span>`

### Javascript

#### Filter

`$filter("translate")("TRANSLATION")`

#### Service angular-translate

`$translate('TRANSLATION')`

`$translate.instant('TRANSLATION')`

`$translate(['TRANSLATION', 'TRANSLATION_1'])`

## Configuration

### Options

This is all options supported by gulp-angular-translate:

- [nullEmpty](#nullempty-v026)
- [namespace](#namespace-v026)
- [interpolation](#interpolation)
- [defaultLang](#defaultLang)
- [lang](#lang)
- [prefix](#prefix)
- [suffix](#suffix)
- [dest](#dest)
- [safeMode](#safeMode)
- [stringifyOptions](#stringifyOptions)

#### nullEmpty (v0.2.6)

Type: `Boolean`
Default: `false`

Example: `true`

If set to true, it will replace all final empty translations by *null* value.

#### namespace (v0.2.6)

Type: `Boolean`
Default: `false`

Example: `true`

If set to true, it will organize output JSON like the following.
`````
{
  "MODULE": {
    "CATEGORY": {
      "TITLE": "My Title",
      "TITLE1": null
    }
  }
}
`````


#### interpolation

Type: `Object`
Default: `{ startDelimiter: '{{', endDelimiter: '}}' }`

Example: `{ startDelimiter: '[[', endDelimiter: ']]' }`

Define interpolation symbol use for your angular application.
The angulars docs about ($interpolateProvider)[http://docs.angularjs.org/api/ng.$interpolateProvider] explain how you can configure the interpolation markup.

#### defaultLang

Type: `String`
Default: `undefined`

Example: `"en_CA"`

Define the default language. For default language, by default the key will be set as value.

#### customRegex

Type: `Array<String>`
Default: `[]`

Example:

```javascript
customRegex: [
  'tt-default="\'((?:\\\\.|[^\'\\\\])*)\'\\|translate"'
],
```

Will extract `MY.CUSTOM.REGEX` from the following HTML: `<article tt-default="'MY.CUSTOM.REGEX'|translate">`.

Enjoy your custom regex guys!

#### lang

Type: `Array`
Default: `undefined`

Example: `['en_CA', 'en_US']`

Define language to be extract (en__CA, en__US, xxx). xxx will be the output filename wrapped by prefix and suffix option.

#### prefix

Type: `String`
Default: `""`

Example: `"project_"`

Set prefix to output filenames (cf [angular-translate#static-files][https://github.com/PascalPrecht/angular-translate/wiki/Asynchronous-loading#using-extension-static-files-loader]).

#### suffix

Type: `String`
Default:  `""`

Example: `".json"`

Set suffix to output filenames (cf [angular-translate#static-files][https://github.com/PascalPrecht/angular-translate/wiki/Asynchronous-loading#using-extension-static-files-loader]).

#### dest

Type: `String`
Default:  `""`

Example: `"src/assets/i18n"`

Relative path to output folder.

#### safeMode

Type: `Boolean`
Default: `false`

If safeMode is set to `true` the deleted translations will stay in the output lang file.

#### stringifyOptions

Type: `Boolean` or `Object`
Default: `false`

If stringifyOptions is set to `true` the output will be sort (case insensitive).
If stringifyOptions is an `object`, you can easily check [json-stable-stringify](https://github.com/substack/json-stable-stringify) README.



## Notes
To use ES6 `const` with `'strict mode'` and more generally ES6 features, run
gulp with `harmony` flag as follow:

```bash
$ gulp [taskName] --harmony
```
