import 'babel-polyfill';

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

if (['production', 'circleci'].indexOf(process.env.NODE_ENV) === -1) {
  const dotenv = require('dotenv');
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // this loads the default file in github with dummy values
}

// Only load newrelic when we explicitly want it
if (process.env.NEW_RELIC_LICENSE_KEY) {
  require('newrelic');
}
