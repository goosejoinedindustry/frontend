# Server Side Files

### Overview

We use [EJS](http://ejs.co/) to render the initial pages on the backend and the rest is taken care of by [react](https://facebook.github.io/react/index.html) on the client side.


### File Structure

The server side file structure contains three main components: `views` and `routes`.

```
| -- Views // Contains view related files
| -- |
| -- | -- Shared // Shared partials across views
|
| -- Routes // Contains route logic
| -- |
| -- | --- index.js // Main route file. Included in server.js
|
| -- Config // Contains route logic
| -- |
| -- | --- index.js // Main configuration file that is then extended base on the environment.
```
