// Use CommonJs require below so we can dynamically import during build-time
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ConfigureStoreStore.prod');
} else {
  module.exports = require('./ConfigureStore-dev');
}
