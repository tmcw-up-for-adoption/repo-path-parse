/**
 * Parse git remote URLs into an object with `owner` and `repo`
 * keys.
 *
 * @alias repo-path-parse
 * @param {String} url any git-clonable URL that points to GitHub
 * @returns {Object} an object of `{owner:'owner',repo:'repo'}`
 * @example
 * var repoPathParse = require('repo-path-parse');
 * repoPathParse('git@github.com:tmcw/repo-path-parse.git');
 * // returns { owner: 'tmcw', repo: 'repo-path-parse' }
 */
function parse(url) {
    if (typeof url !== 'string') throw new Error('repository url must be a string');
    var path = url.match(/(?:(?:ssh:\/\/)?git@github\.com(?::|\/)|(?:https?|git|ssh):\/\/github\.com\/)(\S+)/);
    if (!path) return null;
    var parts = path[1].split('/');
    return {
        owner: parts[0],
        repo: parts[1].replace(/\.git$/, '')
    };
}

module.exports = parse;
