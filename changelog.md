## Change Log

### [v3.4.0](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v3.4.0) (2018-07-11)

* [[`409135348d`](https://github.com/wyze/eslint-plugin-wyze/commit/409135348d)] - Fix `sort-imports` auto-fix with TypeScript parser (#24) (Justin Anastos)
* [[`ef1fb7b259`](https://github.com/wyze/eslint-plugin-wyze/commit/ef1fb7b259)] - Add support for default values (#21) (Jakub Rożek)
* [[`aea583cbd3`](https://github.com/wyze/eslint-plugin-wyze/commit/aea583cbd3)] - Update code to reflect new lint rules (Neil Kistner)
* [[`8281a343f7`](https://github.com/wyze/eslint-plugin-wyze/commit/8281a343f7)] - Upgrade dependencies and remove prelint command (Neil Kistner)
* [[`18ec073bf2`](https://github.com/wyze/eslint-plugin-wyze/commit/18ec073bf2)] - Drop support for Node 4 (Neil Kistner)

### [v3.3.1](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v3.3.1) (2017-06-27)

* [[`9f0504d104`](https://github.com/wyze/eslint-plugin-wyze/commit/9f0504d104)] - Upgrade dependencies (Neil Kistner)
* [[`22bea1f744`](https://github.com/wyze/eslint-plugin-wyze/commit/22bea1f744)] - Ensure rest property is last in `sort-destructuring-keys` rule (Neil Kistner)
* [[`3f04cd2c66`](https://github.com/wyze/eslint-plugin-wyze/commit/3f04cd2c66)] - Fix bug in `sort-destructuring-keys` when 10+ keys are used (Neil Kistner)

### [v3.3.0](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v3.3.0) (2017-06-12)

* [[`354de2e304`](https://github.com/wyze/eslint-plugin-wyze/commit/354de2e304)] - Update `eslint` peer dependency (Neil Kistner)
* [[`385b13bcf6`](https://github.com/wyze/eslint-plugin-wyze/commit/385b13bcf6)] - Upgrade dependencies (Neil Kistner)
* [[`9211cff131`](https://github.com/wyze/eslint-plugin-wyze/commit/9211cff131)] - Bring in `write-changelog` to manage changelog (Neil Kistner)
* [[`ea99f192fb`](https://github.com/wyze/eslint-plugin-wyze/commit/ea99f192fb)] - Fixed tests failing due to repeated variable names in mock code (#16) (Sean Kemmis)
* [[`6ee089b049`](https://github.com/wyze/eslint-plugin-wyze/commit/6ee089b049)] - Added test and fixed sort-imports --fix bug (#15) (Sean Kemmis)
* [[`9040d0ca4b`](https://github.com/wyze/eslint-plugin-wyze/commit/9040d0ca4b)] - Ensure we install npm 4 instead of latest (Neil Kistner)

### [v3.2.1](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v3.2.1) (2017-05-06)

* [[`117195538d`](https://github.com/wyze/eslint-plugin-wyze/commit/117195538d)] - Use original delimiter when fixing specifiers (#11) (Justin Anastos)
* [[`eb4054d07e`](https://github.com/wyze/eslint-plugin-wyze/commit/eb4054d07e)] - Remove snapshot tests and use RuleTester for output validation (Neil Kistner)

### [v3.2.0](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v3.2.0) (2017-03-26)

* [[`d73bc26394`](https://github.com/wyze/eslint-plugin-wyze/commit/d73bc26394)] - Add filepath serializer to Jest to make snapshots valid on Travis (Neil Kistner)
* [[`72c04f70ac`](https://github.com/wyze/eslint-plugin-wyze/commit/72c04f70ac)] - Upgrade dependencies (Neil Kistner)
* [[`9969920a30`](https://github.com/wyze/eslint-plugin-wyze/commit/9969920a30)] - Add snapshot tests for `sort-import` rule fixes (Neil Kistner)
* [[`ace0a759ed`](https://github.com/wyze/eslint-plugin-wyze/commit/ace0a759ed)] - Add snapshot tests for `--fix` tests (Neil Kistner)
* [[`94c9adf380`](https://github.com/wyze/eslint-plugin-wyze/commit/94c9adf380)] - Switch to Jest for testing (Neil Kistner)
* [[`8a63051086`](https://github.com/wyze/eslint-plugin-wyze/commit/8a63051086)] - Make sort-imports fix the sort order (#10) (Justin Anastos)

### [v3.1.0](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v3.1.0) (2017-03-22)

* [[`04c7514816`](https://github.com/wyze/eslint-plugin-wyze/commit/04c7514816)] - Exclude test files from npm package (Neil Kistner)
* [[`d5af4d8498`](https://github.com/wyze/eslint-plugin-wyze/commit/d5af4d8498)] - Document some functions in `sort-destructuring-keys` rule (Neil Kistner)
* [[`a5b65319ac`](https://github.com/wyze/eslint-plugin-wyze/commit/a5b65319ac)] - Fix false positives for `func-params-spacing` rule (Neil Kistner)
* [[`3c4fa82012`](https://github.com/wyze/eslint-plugin-wyze/commit/3c4fa82012)] - Change message for `newline-after-export` and make fixable (Neil Kistner)
* [[`4a092c914f`](https://github.com/wyze/eslint-plugin-wyze/commit/4a092c914f)] - Add fixer to spacing rules (Neil Kistner)
* [[`701e2dcca3`](https://github.com/wyze/eslint-plugin-wyze/commit/701e2dcca3)] - Fix edge case with `func-params-spacing` rule (Neil Kistner)
* [[`d0eab7e55e`](https://github.com/wyze/eslint-plugin-wyze/commit/d0eab7e55e)] - Fix bug in `sort-destructuring-keys` with rest object (Neil Kistner)
* [[`503ff728af`](https://github.com/wyze/eslint-plugin-wyze/commit/503ff728af)] - Fix bug in `func-params-spacing` with class methods (Neil Kistner)
* [[`9ce64d019f`](https://github.com/wyze/eslint-plugin-wyze/commit/9ce64d019f)] - Change build process again (Neil Kistner)

### [v3.0.1](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v3.0.1) (2017-03-20)

* [[`0e722ea4f1`](https://github.com/wyze/eslint-plugin-wyze/commit/0e722ea4f1)] - Fix multi-line issue with `func-params-spacing` rule (Neil Kistner)
* [[`b271feee4d`](https://github.com/wyze/eslint-plugin-wyze/commit/b271feee4d)] - Fix bug in `space-params-spacing` rule (Neil Kistner)

### [v3.0.0](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v3.0.0) (2017-03-19)

* [[`5874cea542`](https://github.com/wyze/eslint-plugin-wyze/commit/5874cea542)] - Add `func-call-arg-spacing` rule (Neil Kistner)
* [[`a7858d4604`](https://github.com/wyze/eslint-plugin-wyze/commit/a7858d4604)] - Add past changelog and changelog build script (Neil Kistner)
* [[`b4840a2ea1`](https://github.com/wyze/eslint-plugin-wyze/commit/b4840a2ea1)] - Fix edge case in `space-around-conditional` rule (Neil Kistner)
* [[`3582af3cd2`](https://github.com/wyze/eslint-plugin-wyze/commit/3582af3cd2)] - Make spacing checks into helper functions (Neil Kistner)
* [[`a480a5d6a0`](https://github.com/wyze/eslint-plugin-wyze/commit/a480a5d6a0)] - Add `func-params-spacing` rule (Neil Kistner)
* [[`81ee64af21`](https://github.com/wyze/eslint-plugin-wyze/commit/81ee64af21)] - Restructure tests (Neil Kistner)
* [[`f34279b5e4`](https://github.com/wyze/eslint-plugin-wyze/commit/f34279b5e4)] - Upgrade lint rules and fix lint errors (Neil Kistner)
* [[`ac484103ef`](https://github.com/wyze/eslint-plugin-wyze/commit/ac484103ef)] - Add flow type sorting to `sort-imports` rule (Neil Kistner)
* [[`ccca3e30e8`](https://github.com/wyze/eslint-plugin-wyze/commit/ccca3e30e8)] - Update travis config to fix build (Neil Kistner)
* [[`e4bf84c455`](https://github.com/wyze/eslint-plugin-wyze/commit/e4bf84c455)] - Run ESLint against codebase (Neil Kistner)
* [[`ef6aa44f56`](https://github.com/wyze/eslint-plugin-wyze/commit/ef6aa44f56)] - Enhance the `space-around-conditional` rule (Neil Kistner)
* [[`60c202823c`](https://github.com/wyze/eslint-plugin-wyze/commit/60c202823c)] - Refactor `space-around-conditional` rule to use ESLint api (Neil Kistner)
* [[`8c1e5945f8`](https://github.com/wyze/eslint-plugin-wyze/commit/8c1e5945f8)] - Drop support for Node \< 4 (Neil Kistner)
* [[`8992b41f9a`](https://github.com/wyze/eslint-plugin-wyze/commit/8992b41f9a)] - Convert to new eslint rule config syntax (Neil Kistner)
* [[`e22a9eff75`](https://github.com/wyze/eslint-plugin-wyze/commit/e22a9eff75)] - Upgrade dependencies and add yarn (Neil Kistner)
* [[`ba0df49e53`](https://github.com/wyze/eslint-plugin-wyze/commit/ba0df49e53)] - Add `sort-destructuring-keys` rule (Neil Kistner)
* [[`1c563b3b9a`](https://github.com/wyze/eslint-plugin-wyze/commit/1c563b3b9a)] - Meta file updates (Neil Kistner)
* [[`e8dd6f687a`](https://github.com/wyze/eslint-plugin-wyze/commit/e8dd6f687a)] - Upgrade ava dependency (Neil Kistner)

### [v2.0.0](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v2.0.0) (2016-08-04)

* [[`3400550106`](https://github.com/wyze/eslint-plugin-wyze/commit/3400550106)] - Upgrade ESLint dependency (Neil Kistner)
* [[`e03c2d7b9c`](https://github.com/wyze/eslint-plugin-wyze/commit/e03c2d7b9c)] - Upgrade AVA dependency (Neil Kistner)
* [[`7b9aea43c2`](https://github.com/wyze/eslint-plugin-wyze/commit/7b9aea43c2)] - Upgrade ESLint dependency (Neil Kistner)
* [[`2d26113fd7`](https://github.com/wyze/eslint-plugin-wyze/commit/2d26113fd7)] - Upgrade AVA (Neil Kistner)

### [v1.4.0](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v1.4.0) (2016-05-10)

* [[`163a4fa198`](https://github.com/wyze/eslint-plugin-wyze/commit/163a4fa198)] - Add `newline-after-export` rule (Neil Kistner)
* [[`8217fac110`](https://github.com/wyze/eslint-plugin-wyze/commit/8217fac110)] - Enable Node v6 builds (Neil Kistner)
* [[`b4df375a96`](https://github.com/wyze/eslint-plugin-wyze/commit/b4df375a96)] - Add `max-file-length` rule with default of 200 lines (Neil Kistner)
* [[`2a52d8a696`](https://github.com/wyze/eslint-plugin-wyze/commit/2a52d8a696)] - Upgrade dependencies (Neil Kistner)
* [[`0402559df2`](https://github.com/wyze/eslint-plugin-wyze/commit/0402559df2)] - Upgrade dependencies (Neil Kistner)

### [v1.3.1](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v1.3.1) (2016-03-23)

* [[`dca738957a`](https://github.com/wyze/eslint-plugin-wyze/commit/dca738957a)] - Properly handle constant for loop (Neil Kistner)

### [v1.3.0](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v1.3.0) (2016-03-16)

* [[`cfe2f21bf2`](https://github.com/wyze/eslint-plugin-wyze/commit/cfe2f21bf2)] - Upgrade ESLint to 2.4.0 (Neil Kistner)

### [v1.2.1](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v1.2.1) (2016-03-10)

* [[`a23e41713d`](https://github.com/wyze/eslint-plugin-wyze/commit/a23e41713d)] - Upgrade AVA (Neil Kistner)
* [[`0ff332a3a3`](https://github.com/wyze/eslint-plugin-wyze/commit/0ff332a3a3)] - Pin ESLint to ~2.2.0 (Neil Kistner)
* [[`b2361250bb`](https://github.com/wyze/eslint-plugin-wyze/commit/b2361250bb)] - Update readme with recommended rules (Neil Kistner)
* [[`e3d1c6b455`](https://github.com/wyze/eslint-plugin-wyze/commit/e3d1c6b455)] - Quick docs update for `space-around-conditional` (Neil Kistner)

### [v1.2.0](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v1.2.0) (2016-03-04)

* [[`58cd17d72c`](https://github.com/wyze/eslint-plugin-wyze/commit/58cd17d72c)] - Consistent quotes and sort rules alphabetically (Neil Kistner)
* [[`2f4109ee3f`](https://github.com/wyze/eslint-plugin-wyze/commit/2f4109ee3f)] - Add recommended config (Neil Kistner)
* [[`392682b8a5`](https://github.com/wyze/eslint-plugin-wyze/commit/392682b8a5)] - Rename `space-in-control-statement` to `space-around-conditional` (Neil Kistner)
* [[`227f6fae9f`](https://github.com/wyze/eslint-plugin-wyze/commit/227f6fae9f)] - Prepare `space-in-control-statement` rule for release (Neil Kistner)
* [[`051c7dfe55`](https://github.com/wyze/eslint-plugin-wyze/commit/051c7dfe55)] - Quick comment update (Neil Kistner)

### [v1.1.0](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v1.1.0) (2016-02-28)

* [[`cbf5a28bc3`](https://github.com/wyze/eslint-plugin-wyze/commit/cbf5a28bc3)] - Restructure tests a bit (Neil Kistner)
* [[`6d8075d0e3`](https://github.com/wyze/eslint-plugin-wyze/commit/6d8075d0e3)] - Update documenation for `sort-imports` (Neil Kistner)
* [[`0806cfc4f6`](https://github.com/wyze/eslint-plugin-wyze/commit/0806cfc4f6)] - Add documentation for `space-in-control-statement` rule (Neil Kistner)
* [[`607507b5b0`](https://github.com/wyze/eslint-plugin-wyze/commit/607507b5b0)] - Add SwitchStatement (Neil Kistner)
* [[`1b251d689b`](https://github.com/wyze/eslint-plugin-wyze/commit/1b251d689b)] - Add test cases for `else if` (Neil Kistner)
* [[`39736708da`](https://github.com/wyze/eslint-plugin-wyze/commit/39736708da)] - Add DoWhileStatement (Neil Kistner)
* [[`dd40fa3799`](https://github.com/wyze/eslint-plugin-wyze/commit/dd40fa3799)] - Add WhileStatement (Neil Kistner)
* [[`eea851daca`](https://github.com/wyze/eslint-plugin-wyze/commit/eea851daca)] - Add ForStatement and DRY it up (Neil Kistner)
* [[`4961d3272e`](https://github.com/wyze/eslint-plugin-wyze/commit/4961d3272e)] - Add first check for `space-in-control-statement` rule (Neil Kistner)
* [[`609f4c818f`](https://github.com/wyze/eslint-plugin-wyze/commit/609f4c818f)] - Add keywords to package.json (Neil Kistner)

### [v1.0.0](https://github.com/wyze/eslint-plugin-wyze/releases/tag/v1.0.0) (2016-02-24)

* [[`8074d319e6`](https://github.com/wyze/eslint-plugin-wyze/commit/8074d319e6)] - Initial commit (Neil Kistner)
