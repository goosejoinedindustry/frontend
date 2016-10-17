import base from './_base';

const name = `./_${base.env}`;
const override = require(name).default;
export default override(base);
