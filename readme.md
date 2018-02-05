> __No longer maintained, would you be our new maintainer? Let us know at [mark@ulties.com](mailto:mark@ulties.com).__

![nglar - ngTap](https://raw.githubusercontent.com/nglar/ngTap/master/resources/logo.png)

A angular module to add directives for touch devices.

[![Build Status](https://travis-ci.org/nglar/ngTap.svg?branch=master)](https://travis-ci.org/nglar/ngTap)
[![StyleCI Status](https://styleci.io/repos/30239459/shield?style=flat)](https://styleci.io/repos/30239459)
[![Dependencies](https://img.shields.io/david/nglar/ngTap.svg)](https://github.com/nglar/ngTap)
[![Dev Dependencies](https://img.shields.io/david/dev/nglar/ngTap.svg)](https://github.com/nglar/ngTap)
[![License](https://img.shields.io/bower/l/ngTap.svg)](https://github.com/nglar/ngTap)
[![Open Source Helpers](https://www.codetriage.com/nglar/ngtap/badges/users.svg)](https://www.codetriage.com/nglar/ngtap)

* [Info](#info)
* [Installing/Loading](#installingloading)
    * [Install using Bower](#install-using-bower)
    * [Install using NPM](#install-using-npm)
    * [Loading](#loading)
* [Usage](#usage)
* [Links](#links)
* [Tests](#tests)
* [Contributing](#contributing)
* [Security Vulnerabilities](#security-vulnerabilities)
* [License](#license)

## Info

Version: 1.0.1    
Author: Mark Topper [[Facebook](https://facebook.com/marktopper)] [[Github](https://github.com/marktopper)] [[Twitter](https://twitter.com/webman.io)]    
Website: [ulties.com](https://ulties.com)    
Email: [mark@ulties.com](mailto:mark@ulties.com)

## Installing/Loading

### Install using Bower

Install using bower:
```
bower install ngtap --save
```

### Install using NPM

Install using npm:
```
npm install ngtap --save
```

[Go to NPM page for this package.](https://www.npmjs.com/package/ngtap)

### Loading

Load the file to you HTML header:
```
<script type="text/javascript" src="path/to/components/ngtap/build/ngTap.min.js"></script>
```

## Usage

You must include the ngTap dependency on your angular module:
````
var app = angular.module("demoapp", ["ngTap"]);
````

Then in your controller:

```
$scope.onTap = function($event) {
   console.log('tap event called');
}
```

Then in your HTML:
```
<div ng-tap="onTap($event)"></div>
```

This will trigger whenever a touch device is touched and moving.

[__Get the whole ngTouch package.__](https://github.com/nglar/ngTouch)

## Links

The following is a list of libraries that extend ngTap:

 * None yet

*Contact me at [mark@ulties.com](mailto:mark@ulties.com) to get yours added.*

The following is a list of libraries that requires by ngTap:

 * [Angular](https://github.com/angular/angular.js):
HTML enhanced for web apps

The following is a list of alternatives for ngTap:
* [ngTouch](https://github.com/nglar/ngTouch):
A angular module to add directives for touch devices.

## Tests

From the project directory, tests can be ran using `gulp test`

## Contributing

Thank you for considering contributing! The contribution guide can be found in the [contributions.md](https://github.com/nglar/ngTap/blob/master/contributions.md).

## Security Vulnerabilities

If you discover a security vulnerability within ngTouch, please send an e-mail to Mark Topper at [mark@ulties.com](mailto:mark@ulties.com). All security vulnerabilities will be promptly addressed.

## License

Released under the MIT License - see [`license.txt`](https://github.com/nglar/ngTap/blob/master/license) for details.
