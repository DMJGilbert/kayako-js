/*
 * kayako-js
 * https://github.com/DarrenGilbert/kayako-js
 *
 * Copyright (c) 2015 Darren Gilbert
 * Licensed under the MIT license.
 */

'use strict';

var KayakoJs = require('../');

var helpdesk = new KayakoJs({
	test: 'Test'
});

helpdesk.test(); // "Test"
