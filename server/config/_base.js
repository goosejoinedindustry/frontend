/* eslint key-spacing:0 spaced-comment:0 */
import path from 'path';
import dotenv from 'dotenv';

// Loads config from .env file
dotenv.load();

const config = {
  env : process.env.NODE_ENV,

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base  : path.resolve(__dirname, '../'),
  dir_client : 'src',
  dir_dist   : 'dist',
  dir_server : 'server',
  dir_test   : 'tests',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host : 'localhost',
  server_port : process.env.PORT || 3000,
  api_url     : 'localhost:1337',

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_css_modules     : true,
  compiler_enable_hmr      : false,
  compiler_source_maps     : true,
  compiler_hash_type       : 'hash',
  compiler_fail_on_warning : false,
  compiler_quiet           : false,
  compiler_public_path     : '/',
  enable_babel_polyfill    : false,
  compiler_stats           : {
    chunks : false,
    chunkModules : false,
    colors : true
  }

};

/************************************************
-------------------------------------------------
All Internal Configuration Below
Edit at Your Own Risk
-------------------------------------------------
************************************************/


// ------------------------------------
// Environment
// ------------------------------------
config.globals = {
  'process.env'  : {
    NODE_ENV                : config.env,
    AUTH0_CLIENT_ID         : JSON.stringify(process.env.AUTH0_CLIENT_ID),
    AUTH0_CLIENT_DOMAIN     : JSON.stringify(process.env.AUTH0_CLIENT_DOMAIN),
    BASE_API_URL            : JSON.stringify(process.env.BASE_API_URL),
    CLOUDINARY_API_KEY      : JSON.stringify(process.env.CLOUDINARY_API_KEY),
    CLOUDINARY_CLOUD_NAME   : JSON.stringify(process.env.CLOUDINARY_CLOUD_NAME),
    CLOUDINARY_BASE_API_URL : JSON.stringify(process.env.CLOUDINARY_BASE_API_URL),
    INTERCOM_APP_ID         : JSON.stringify(process.env.INTERCOM_APP_ID),
    GOOGLE_ANALYTICS_ID     : JSON.stringify(process.env.GOOGLE_ANALYTICS_ID),
    TRELLO_TOKEN            : JSON.stringify(process.env.TRELLO_TOKEN),
    TRELLO_KEY              : JSON.stringify(process.env.TRELLO_KEY),
    GOOGLE_MAP_API_KEY      : JSON.stringify(process.env.GOOGLE_MAP_API_KEY),
    ALGOLIA_APP_ID          : JSON.stringify(process.env.ALGOLIA_APP_ID),
    ALGOLIA_SEARCH_KEY      : JSON.stringify(process.env.ALGOLIA_SEARCH_KEY)
  },
  NODE_ENV             : config.env,
  __LOCAL_             : config.env === 'local',
  __DEV__              : config.env === 'development',
  __PROD__             : config.env === 'production',
  __PLAYGROUND__       : config.env === 'playground'
};

export default config;
