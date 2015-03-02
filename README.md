# repo-path-parse

[![build status](https://secure.travis-ci.org/tmcw/repo-path-parse.png)](http://travis-ci.org/tmcw/repo-path-parse)

parse repository path strings to get repository and organization parts


### `repo-path-parse 
Parse git remote URLs into an object with `owner` and `repo`
keys.
(url)`



### Parameters

| parameter | type   | description                                |
| --------- | ------ | ------------------------------------------ |
| `url`     | String | any git-clonable URL that points to GitHub |


### Example

```js
var repoPathParse = require('repo-path-parse');
repoPathParse('git@github.com:tmcw/repo-path-parse.git');
// returns { owner: 'tmcw', repo: 'repo-path-parse' }
```


**Returns** `Object`, an object of `{owner:'owner',repo:'repo'}`

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install repo-path-parse
```

## Tests

```sh
$ npm test
```


