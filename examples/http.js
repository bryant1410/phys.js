/**
 * http.js
 * http://github.com/abhiagarwal/phys.js
 *
 * Copyright 2013 Abhi Agarwal
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
* Example that depicts how you can use HTTP
* with our Physics Library.
*/

// Importing HTTP
var http = require('http');
// Importing our Library
var phys = require('../index.js');

// Starting the Server
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	// Calling our the Power function from the Mechanics Library
  	res.end(String(phys.mechanics.power(4, 3)));
}).listen(8888);