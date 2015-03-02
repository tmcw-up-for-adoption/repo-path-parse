var test = require('tape'),
    parse = require('./');

test('parse', function(t) {
    t.deepEqual(parse('git@github.com:tmcw/doxme.git'), { owner: 'tmcw', repo: 'doxme' });
    t.deepEqual(parse('git@github.com:tmcw/foo.js.git'), { owner: 'tmcw', repo: 'foo.js' });
    t.deepEqual(parse('https://github.com/substack/travisify.git'), { owner: 'substack', repo: 'travisify' });
    t.deepEqual(parse('https://github.com/substack/travisify'), { owner: 'substack', repo: 'travisify' });
    t.deepEqual(parse('https://github.com/gmaclennan/ghfs.js'), { owner: 'gmaclennan', repo: 'ghfs.js' });
    t.throws(function() { parse({}); });
    t.throws(function() { parse(); });
    t.end();
});
