
# Industry Web App 2.0

[![Node 5.7.1](https://img.shields.io/badge/Node-v5.7.1-brightgreen.svg)](https://nodejs.org/en/)
[![npm 3.6.0](https://img.shields.io/badge/npm-3.6.0-brightgreen.svg)](https://nodejs.org/en/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


#### Overview

Front end application for Industry Platform. [React](https://github.com/facebook/react) and [Redux](https://github.com/reactjs/redux) client side rendering
combined with [EJS](http://www.embeddedjs.com/) templating server-side in correlation with [Node](bphttps://nodejs.org/en/).


#### Setup
```
npm install
```

You will need to obtain a copy of the `.env` file from dropbox. @vvillait88 can give you access to the company's dropbox. The other environments variables are
set within their associated containers.

#### Launching
```
npm start
```


#### Branching and naming convention

Always create a new branch for new code. This way we can keep the same workflow for all update types (new features, bug fixes, etc.). Create meaningful names
for branch names. For example, if branch is for fixing a css issue, you could name your branch `footer-css-fix`.

After your branch is pushed to Github you should submit a [Pull Request](https://help.github.com/articles/about-pull-requests/) for another developer to code
review. @vvillait88 or @goosejoinedindustry will give the final okay when merging PRs.
