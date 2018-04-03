module.exports = {
  AUTH0_DOMAIN: 'dhwani-lanetteam.auth0.com', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://dhwani:dhwani@ds227199.mlab.com:27199/mean',
  NAMESPACE: 'http://myapp.com/roles'
};
