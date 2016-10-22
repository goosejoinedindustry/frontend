# Client Side files

### Overview

We are using (react)[] and (redux)[] to create a fast loading application. The files structure represents the different pages on the application.


### File Structure

The server side file structure contains three main components: `views` and `routes`.

```
| -- src // React components, actions, reducers
| -- |
| -- | -- components // Components separated based on page location
| -- |
| -- | -- containers // Containers separated based on page location
| -- |
| -- | -- reducers // Reducers separated based on page location
| -- |
| -- | -- styles // scss documents that are later turned into css
|
| -- static // Contains statically server files to the client's browser.
| -- |
| -- | -- css // styling
| -- |
| -- | -- js // webpack bundled javascript
|
| -- route.js // Contains route logic
|
| -- index.js // Generic render item
```
