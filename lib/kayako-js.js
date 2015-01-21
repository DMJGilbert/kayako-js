/*
 * kayako-js
 * https://github.com/DarrenGilbert/kayako-js
 *
 * Copyright (c) 2015 Darren Gilbert
 * Licensed under the MIT license.
 */

'use strict';

var KayakoJs = function (config) {
  this.config = config;
};

KayakoJs.prototype.test = function () {
  return this.config.string;
};

module.exports = KayakoJs;
