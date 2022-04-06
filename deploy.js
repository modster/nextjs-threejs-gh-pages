const ghpages = require('gh-pages');

function callback (e) {
    if (error) { console.error(e) }
    else console.log('success');
}

ghpages.publish('out', {
    remote: 'upstream'
  }, callback);
