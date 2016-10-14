import base from './_base';

const name = `./_${base.env}`;
const override = require(name);
export default override.default(base);
