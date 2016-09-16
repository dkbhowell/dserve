(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toDate = require('./lib/toDate');

var _toDate2 = _interopRequireDefault(_toDate);

var _toFloat = require('./lib/toFloat');

var _toFloat2 = _interopRequireDefault(_toFloat);

var _toInt = require('./lib/toInt');

var _toInt2 = _interopRequireDefault(_toInt);

var _toBoolean = require('./lib/toBoolean');

var _toBoolean2 = _interopRequireDefault(_toBoolean);

var _equals = require('./lib/equals');

var _equals2 = _interopRequireDefault(_equals);

var _contains = require('./lib/contains');

var _contains2 = _interopRequireDefault(_contains);

var _matches = require('./lib/matches');

var _matches2 = _interopRequireDefault(_matches);

var _isEmail = require('./lib/isEmail');

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isURL = require('./lib/isURL');

var _isURL2 = _interopRequireDefault(_isURL);

var _isMACAddress = require('./lib/isMACAddress');

var _isMACAddress2 = _interopRequireDefault(_isMACAddress);

var _isIP = require('./lib/isIP');

var _isIP2 = _interopRequireDefault(_isIP);

var _isFQDN = require('./lib/isFQDN');

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isBoolean = require('./lib/isBoolean');

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isAlpha = require('./lib/isAlpha');

var _isAlpha2 = _interopRequireDefault(_isAlpha);

var _isAlphanumeric = require('./lib/isAlphanumeric');

var _isAlphanumeric2 = _interopRequireDefault(_isAlphanumeric);

var _isNumeric = require('./lib/isNumeric');

var _isNumeric2 = _interopRequireDefault(_isNumeric);

var _isLowercase = require('./lib/isLowercase');

var _isLowercase2 = _interopRequireDefault(_isLowercase);

var _isUppercase = require('./lib/isUppercase');

var _isUppercase2 = _interopRequireDefault(_isUppercase);

var _isAscii = require('./lib/isAscii');

var _isAscii2 = _interopRequireDefault(_isAscii);

var _isFullWidth = require('./lib/isFullWidth');

var _isFullWidth2 = _interopRequireDefault(_isFullWidth);

var _isHalfWidth = require('./lib/isHalfWidth');

var _isHalfWidth2 = _interopRequireDefault(_isHalfWidth);

var _isVariableWidth = require('./lib/isVariableWidth');

var _isVariableWidth2 = _interopRequireDefault(_isVariableWidth);

var _isMultibyte = require('./lib/isMultibyte');

var _isMultibyte2 = _interopRequireDefault(_isMultibyte);

var _isSurrogatePair = require('./lib/isSurrogatePair');

var _isSurrogatePair2 = _interopRequireDefault(_isSurrogatePair);

var _isInt = require('./lib/isInt');

var _isInt2 = _interopRequireDefault(_isInt);

var _isFloat = require('./lib/isFloat');

var _isFloat2 = _interopRequireDefault(_isFloat);

var _isDecimal = require('./lib/isDecimal');

var _isDecimal2 = _interopRequireDefault(_isDecimal);

var _isHexadecimal = require('./lib/isHexadecimal');

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

var _isDivisibleBy = require('./lib/isDivisibleBy');

var _isDivisibleBy2 = _interopRequireDefault(_isDivisibleBy);

var _isHexColor = require('./lib/isHexColor');

var _isHexColor2 = _interopRequireDefault(_isHexColor);

var _isMD = require('./lib/isMD5');

var _isMD2 = _interopRequireDefault(_isMD);

var _isJSON = require('./lib/isJSON');

var _isJSON2 = _interopRequireDefault(_isJSON);

var _isNull = require('./lib/isNull');

var _isNull2 = _interopRequireDefault(_isNull);

var _isLength = require('./lib/isLength');

var _isLength2 = _interopRequireDefault(_isLength);

var _isByteLength = require('./lib/isByteLength');

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isUUID = require('./lib/isUUID');

var _isUUID2 = _interopRequireDefault(_isUUID);

var _isMongoId = require('./lib/isMongoId');

var _isMongoId2 = _interopRequireDefault(_isMongoId);

var _isDate = require('./lib/isDate');

var _isDate2 = _interopRequireDefault(_isDate);

var _isAfter = require('./lib/isAfter');

var _isAfter2 = _interopRequireDefault(_isAfter);

var _isBefore = require('./lib/isBefore');

var _isBefore2 = _interopRequireDefault(_isBefore);

var _isIn = require('./lib/isIn');

var _isIn2 = _interopRequireDefault(_isIn);

var _isCreditCard = require('./lib/isCreditCard');

var _isCreditCard2 = _interopRequireDefault(_isCreditCard);

var _isISIN = require('./lib/isISIN');

var _isISIN2 = _interopRequireDefault(_isISIN);

var _isISBN = require('./lib/isISBN');

var _isISBN2 = _interopRequireDefault(_isISBN);

var _isMobilePhone = require('./lib/isMobilePhone');

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _isCurrency = require('./lib/isCurrency');

var _isCurrency2 = _interopRequireDefault(_isCurrency);

var _isISO = require('./lib/isISO8601');

var _isISO2 = _interopRequireDefault(_isISO);

var _isBase = require('./lib/isBase64');

var _isBase2 = _interopRequireDefault(_isBase);

var _isDataURI = require('./lib/isDataURI');

var _isDataURI2 = _interopRequireDefault(_isDataURI);

var _ltrim = require('./lib/ltrim');

var _ltrim2 = _interopRequireDefault(_ltrim);

var _rtrim = require('./lib/rtrim');

var _rtrim2 = _interopRequireDefault(_rtrim);

var _trim = require('./lib/trim');

var _trim2 = _interopRequireDefault(_trim);

var _escape = require('./lib/escape');

var _escape2 = _interopRequireDefault(_escape);

var _unescape = require('./lib/unescape');

var _unescape2 = _interopRequireDefault(_unescape);

var _stripLow = require('./lib/stripLow');

var _stripLow2 = _interopRequireDefault(_stripLow);

var _whitelist = require('./lib/whitelist');

var _whitelist2 = _interopRequireDefault(_whitelist);

var _blacklist = require('./lib/blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _isWhitelisted = require('./lib/isWhitelisted');

var _isWhitelisted2 = _interopRequireDefault(_isWhitelisted);

var _normalizeEmail = require('./lib/normalizeEmail');

var _normalizeEmail2 = _interopRequireDefault(_normalizeEmail);

var _toString = require('./lib/util/toString');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '5.7.0';

var validator = {
  version: version,
  toDate: _toDate2.default,
  toFloat: _toFloat2.default, toInt: _toInt2.default,
  toBoolean: _toBoolean2.default,
  equals: _equals2.default, contains: _contains2.default, matches: _matches2.default,
  isEmail: _isEmail2.default, isURL: _isURL2.default, isMACAddress: _isMACAddress2.default, isIP: _isIP2.default, isFQDN: _isFQDN2.default,
  isBoolean: _isBoolean2.default,
  isAlpha: _isAlpha2.default, isAlphanumeric: _isAlphanumeric2.default, isNumeric: _isNumeric2.default, isLowercase: _isLowercase2.default, isUppercase: _isUppercase2.default,
  isAscii: _isAscii2.default, isFullWidth: _isFullWidth2.default, isHalfWidth: _isHalfWidth2.default, isVariableWidth: _isVariableWidth2.default,
  isMultibyte: _isMultibyte2.default, isSurrogatePair: _isSurrogatePair2.default,
  isInt: _isInt2.default, isFloat: _isFloat2.default, isDecimal: _isDecimal2.default, isHexadecimal: _isHexadecimal2.default, isDivisibleBy: _isDivisibleBy2.default,
  isHexColor: _isHexColor2.default,
  isMD5: _isMD2.default,
  isJSON: _isJSON2.default,
  isNull: _isNull2.default,
  isLength: _isLength2.default, isByteLength: _isByteLength2.default,
  isUUID: _isUUID2.default, isMongoId: _isMongoId2.default,
  isDate: _isDate2.default, isAfter: _isAfter2.default, isBefore: _isBefore2.default,
  isIn: _isIn2.default,
  isCreditCard: _isCreditCard2.default,
  isISIN: _isISIN2.default, isISBN: _isISBN2.default,
  isMobilePhone: _isMobilePhone2.default,
  isCurrency: _isCurrency2.default,
  isISO8601: _isISO2.default,
  isBase64: _isBase2.default, isDataURI: _isDataURI2.default,
  ltrim: _ltrim2.default, rtrim: _rtrim2.default, trim: _trim2.default,
  escape: _escape2.default, unescape: _unescape2.default, stripLow: _stripLow2.default,
  whitelist: _whitelist2.default, blacklist: _blacklist2.default,
  isWhitelisted: _isWhitelisted2.default,
  normalizeEmail: _normalizeEmail2.default,
  toString: _toString2.default
};

exports.default = validator;
module.exports = exports['default'];
},{"./lib/blacklist":3,"./lib/contains":4,"./lib/equals":5,"./lib/escape":6,"./lib/isAfter":7,"./lib/isAlpha":8,"./lib/isAlphanumeric":9,"./lib/isAscii":10,"./lib/isBase64":11,"./lib/isBefore":12,"./lib/isBoolean":13,"./lib/isByteLength":14,"./lib/isCreditCard":15,"./lib/isCurrency":16,"./lib/isDataURI":17,"./lib/isDate":18,"./lib/isDecimal":19,"./lib/isDivisibleBy":20,"./lib/isEmail":21,"./lib/isFQDN":22,"./lib/isFloat":23,"./lib/isFullWidth":24,"./lib/isHalfWidth":25,"./lib/isHexColor":26,"./lib/isHexadecimal":27,"./lib/isIP":28,"./lib/isISBN":29,"./lib/isISIN":30,"./lib/isISO8601":31,"./lib/isIn":32,"./lib/isInt":33,"./lib/isJSON":34,"./lib/isLength":35,"./lib/isLowercase":36,"./lib/isMACAddress":37,"./lib/isMD5":38,"./lib/isMobilePhone":39,"./lib/isMongoId":40,"./lib/isMultibyte":41,"./lib/isNull":42,"./lib/isNumeric":43,"./lib/isSurrogatePair":44,"./lib/isURL":45,"./lib/isUUID":46,"./lib/isUppercase":47,"./lib/isVariableWidth":48,"./lib/isWhitelisted":49,"./lib/ltrim":50,"./lib/matches":51,"./lib/normalizeEmail":52,"./lib/rtrim":53,"./lib/stripLow":54,"./lib/toBoolean":55,"./lib/toDate":56,"./lib/toFloat":57,"./lib/toInt":58,"./lib/trim":59,"./lib/unescape":60,"./lib/util/toString":63,"./lib/whitelist":64}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var alpha = exports.alpha = {
  'en-US': /^[A-Z]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'nl-NL': /^[A-ZÉËÏÓÖÜ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var alphanumeric = exports.alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nl-NL': /^[0-9A-ZÉËÏÓÖÜ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var englishLocales = exports.englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = 'en-' + englishLocales[i];
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];

// Source: http://www.localeplanet.com/java/
var arabicLocales = exports.arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = 'ar-' + arabicLocales[_i];
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function blacklist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];
},{"./util/assertString":61}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = require('./util/toString');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(str, elem) {
  (0, _assertString2.default)(str);
  return str.indexOf((0, _toString2.default)(elem)) >= 0;
}
module.exports = exports['default'];
},{"./util/assertString":61,"./util/toString":63}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equals(str, comparison) {
  (0, _assertString2.default)(str);
  return str === comparison;
}
module.exports = exports['default'];
},{"./util/assertString":61}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.default = escape;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(str) {
      (0, _assertString2.default)(str);
      return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/`/g, '&#96;');
}
module.exports = exports['default'];
},{"./util/assertString":61}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = require('./toDate');

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAfter(str) {
  var date = arguments.length <= 1 || arguments[1] === undefined ? String(new Date()) : arguments[1];

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original > comparison);
}
module.exports = exports['default'];
},{"./toDate":56,"./util/assertString":61}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = require('./alpha');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlpha(str) {
  var locale = arguments.length <= 1 || arguments[1] === undefined ? 'en-US' : arguments[1];

  (0, _assertString2.default)(str);
  if (locale in _alpha.alpha) {
    return _alpha.alpha[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];
},{"./alpha":2,"./util/assertString":61}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlphanumeric;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = require('./alpha');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlphanumeric(str) {
  var locale = arguments.length <= 1 || arguments[1] === undefined ? 'en-US' : arguments[1];

  (0, _assertString2.default)(str);
  if (locale in _alpha.alphanumeric) {
    return _alpha.alphanumeric[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];
},{"./alpha":2,"./util/assertString":61}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString2.default)(str);
  return ascii.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
  (0, _assertString2.default)(str);
  var len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}
module.exports = exports['default'];
},{"./util/assertString":61}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = require('./toDate');

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBefore(str) {
  var date = arguments.length <= 1 || arguments[1] === undefined ? String(new Date()) : arguments[1];

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original < comparison);
}
module.exports = exports['default'];
},{"./toDate":56,"./util/assertString":61}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBoolean(str) {
  (0, _assertString2.default)(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}
module.exports = exports['default'];
},{"./util/assertString":61}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = isByteLength;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];
},{"./util/assertString":61}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})|62[0-9]{14}$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[^0-9]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];
},{"./util/assertString":61}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCurrency;

var _merge = require('./util/merge');

var _merge2 = _interopRequireDefault(_merge);

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function currencyRegex(options) {
  var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*',
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?',
      decimal_amount = '(\\' + options.decimal_separator + '\\d{2})?';
  var pattern = whole_dollar_amount + decimal_amount;

  // default is negative sign before symbol, but there are two other options (besides parens)
  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  }

  // South African Rand, for example, uses R 123 (space) and R-123 (no space)
  if (options.allow_negative_sign_placeholder) {
    pattern = '( (?!\\-))?' + pattern;
  } else if (options.allow_space_after_symbol) {
    pattern = ' ?' + pattern;
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  }

  /* eslint-disable prefer-template */
  return new RegExp('^' +
  // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space
  '(?!-? )(?=.*\\d)' + pattern + '$');
  /* eslint-enable prefer-template */
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_currency_options);
  return currencyRegex(options).test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61,"./util/merge":62}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataURI = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i; // eslint-disable-line max-len

function isDataURI(str) {
  (0, _assertString2.default)(str);
  return dataURI.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDate;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _isISO = require('./isISO8601');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTimezoneOffset(str) {
  var iso8601Parts = str.match(_isISO.iso8601);
  var timezone = void 0,
      sign = void 0,
      hours = void 0,
      minutes = void 0;
  if (!iso8601Parts) {
    str = str.toLowerCase();
    timezone = str.match(/(?:\s|gmt\s*)(-|\+)(\d{1,4})(\s|$)/);
    if (!timezone) {
      return str.indexOf('gmt') !== -1 ? 0 : null;
    }
    sign = timezone[1];
    var offset = timezone[2];
    if (offset.length === 3) {
      offset = '0' + offset;
    }
    if (offset.length <= 2) {
      hours = 0;
      minutes = parseInt(offset, 10);
    } else {
      hours = parseInt(offset.slice(0, 2), 10);
      minutes = parseInt(offset.slice(2, 4), 10);
    }
  } else {
    timezone = iso8601Parts[21];
    if (!timezone) {
      // if no hour/minute was provided, the date is GMT
      return !iso8601Parts[12] ? 0 : null;
    }
    if (timezone === 'z' || timezone === 'Z') {
      return 0;
    }
    sign = iso8601Parts[22];
    if (timezone.indexOf(':') !== -1) {
      hours = parseInt(iso8601Parts[23], 10);
      minutes = parseInt(iso8601Parts[24], 10);
    } else {
      hours = 0;
      minutes = parseInt(iso8601Parts[23], 10);
    }
  }
  return (hours * 60 + minutes) * (sign === '-' ? 1 : -1);
}

function isDate(str) {
  (0, _assertString2.default)(str);
  var normalizedDate = new Date(Date.parse(str));
  if (isNaN(normalizedDate)) {
    return false;
  }

  // normalizedDate is in the user's timezone. Apply the input
  // timezone offset to the date so that the year and day match
  // the input
  var timezoneOffset = getTimezoneOffset(str);
  if (timezoneOffset !== null) {
    var timezoneDifference = normalizedDate.getTimezoneOffset() - timezoneOffset;
    normalizedDate = new Date(normalizedDate.getTime() + 60000 * timezoneDifference);
  }

  var day = String(normalizedDate.getDate());
  var dayOrYear = void 0,
      dayOrYearMatches = void 0,
      year = void 0;
  // check for valid double digits that could be late days
  // check for all matches since a string like '12/23' is a valid date
  // ignore everything with nearby colons
  dayOrYearMatches = str.match(/(^|[^:\d])[23]\d([^T:\d]|$)/g);
  if (!dayOrYearMatches) {
    return true;
  }
  dayOrYear = dayOrYearMatches.map(function (digitString) {
    return digitString.match(/\d+/g)[0];
  }).join('/');

  year = String(normalizedDate.getFullYear()).slice(-2);
  if (dayOrYear === day || dayOrYear === year) {
    return true;
  } else if (dayOrYear === '' + day / year || dayOrYear === '' + year / day) {
    return true;
  }
  return false;
}
module.exports = exports['default'];
},{"./isISO8601":31,"./util/assertString":61}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var decimal = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;

function isDecimal(str) {
  (0, _assertString2.default)(str);
  return str !== '' && decimal.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDivisibleBy;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _toFloat = require('./toFloat');

var _toFloat2 = _interopRequireDefault(_toFloat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDivisibleBy(str, num) {
  (0, _assertString2.default)(str);
  return (0, _toFloat2.default)(str) % parseInt(num, 10) === 0;
}
module.exports = exports['default'];
},{"./toFloat":57,"./util/assertString":61}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = require('./util/merge');

var _merge2 = _interopRequireDefault(_merge);

var _isByteLength = require('./isByteLength');

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isFQDN = require('./isFQDN');

var _isFQDN2 = _interopRequireDefault(_isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 256 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];
},{"./isByteLength":14,"./isFQDN":22,"./util/assertString":61,"./util/merge":62}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFDQN;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = require('./util/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFDQN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    if (/[\uff01-\uff5e]/.test(part)) {
      // disallow full-width chars
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];
},{"./util/assertString":61,"./util/merge":62}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var float = /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/;

function isFloat(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};
  if (str === '' || str === '.') {
    return false;
  }
  return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max);
}
module.exports = exports['default'];
},{"./util/assertString":61}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fullWidth = undefined;
exports.default = isFullWidth;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isFullWidth(str) {
  (0, _assertString2.default)(str);
  return fullWidth.test(str);
}
},{"./util/assertString":61}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.halfWidth = undefined;
exports.default = isHalfWidth;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isHalfWidth(str) {
  (0, _assertString2.default)(str);
  return halfWidth.test(str);
}
},{"./util/assertString":61}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexColor;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

function isHexColor(str) {
  (0, _assertString2.default)(str);
  return hexcolor.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexadecimal = /^[0-9A-F]+$/i;

function isHexadecimal(str) {
  (0, _assertString2.default)(str);
  return hexadecimal.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];
},{"./util/assertString":61}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISBN;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }
  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i = void 0;
  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }
    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }
    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }
    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }
  return false;
}
module.exports = exports['default'];
},{"./util/assertString":61}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISIN;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  (0, _assertString2.default)(str);
  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });

  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = true;
  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}
module.exports = exports['default'];
},{"./util/assertString":61}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iso8601 = undefined;

exports.default = function (str) {
  (0, _assertString2.default)(str);
  return iso8601.test(str);
};

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = exports.iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */
},{"./util/assertString":61}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = isIn;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = require('./util/toString');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isIn(str, options) {
  (0, _assertString2.default)(str);
  var i = void 0;
  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];
    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = (0, _toString2.default)(options[i]);
      }
    }
    return array.indexOf(str) >= 0;
  } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }
  return false;
}
module.exports = exports['default'];
},{"./util/assertString":61,"./util/toString":63}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  var regex = options.hasOwnProperty('allow_leading_zeroes') && options.allow_leading_zeroes ? intLeadingZeroes : int;

  // Check min/max
  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;

  return regex.test(str) && minCheckPassed && maxCheckPassed;
}
module.exports = exports['default'];
},{"./util/assertString":61}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = isJSON;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isJSON(str) {
  (0, _assertString2.default)(str);
  try {
    var obj = JSON.parse(str);
    return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  } catch (e) {/* ignore */}
  return false;
}
module.exports = exports['default'];
},{"./util/assertString":61}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = isLength;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];
},{"./util/assertString":61}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowercase;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLowercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toLowerCase();
}
module.exports = exports['default'];
},{"./util/assertString":61}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;

function isMACAddress(str) {
  (0, _assertString2.default)(str);
  return macAddress.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMD5;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  (0, _assertString2.default)(str);
  return md5.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
  'da-DK': /^(\+?45)?(\d{8})$/,
  'el-GR': /^(\+?30)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
  'en-IN': /^(\+?91|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)2\d{7,9}$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ja-JP': /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
  'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
  'zh-CN': /^(\+?0?86\-?)?1[345789]\d{9}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */

// aliases
phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];

function isMobilePhone(str, locale) {
  (0, _assertString2.default)(str);
  if (locale in phones) {
    return phones[locale].test(str);
  }
  return false;
}
module.exports = exports['default'];
},{"./util/assertString":61}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMongoId;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _isHexadecimal = require('./isHexadecimal');

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMongoId(str) {
  (0, _assertString2.default)(str);
  return (0, _isHexadecimal2.default)(str) && str.length === 24;
}
module.exports = exports['default'];
},{"./isHexadecimal":27,"./util/assertString":61}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMultibyte;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  (0, _assertString2.default)(str);
  return multibyte.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNull;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isNull(str) {
  (0, _assertString2.default)(str);
  return str.length === 0;
}
module.exports = exports['default'];
},{"./util/assertString":61}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numeric = /^[-+]?[0-9]+$/;

function isNumeric(str) {
  (0, _assertString2.default)(str);
  return numeric.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  (0, _assertString2.default)(str);
  return surrogatePair.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _isFQDN = require('./isFQDN');

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isIP = require('./isIP');

var _isIP2 = _interopRequireDefault(_isIP);

var _merge = require('./util/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /\s/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6)) && host !== 'localhost') {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];
},{"./isFQDN":22,"./isIP":28,"./util/assertString":61,"./util/merge":62}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUUID;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length <= 1 || arguments[1] === undefined ? 'all' : arguments[1];

  (0, _assertString2.default)(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUppercase;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUppercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toUpperCase();
}
module.exports = exports['default'];
},{"./util/assertString":61}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _isFullWidth = require('./isFullWidth');

var _isHalfWidth = require('./isHalfWidth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVariableWidth(str) {
  (0, _assertString2.default)(str);
  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}
module.exports = exports['default'];
},{"./isFullWidth":24,"./isHalfWidth":25,"./util/assertString":61}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhitelisted;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWhitelisted(str, chars) {
  (0, _assertString2.default)(str);
  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];
},{"./util/assertString":61}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ltrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
  return str.replace(pattern, '');
}
module.exports = exports['default'];
},{"./util/assertString":61}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matches(str, pattern, modifiers) {
  (0, _assertString2.default)(str);
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }
  return pattern.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeEmail;

var _isEmail = require('./isEmail');

var _isEmail2 = _interopRequireDefault(_isEmail);

var _merge = require('./util/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_normalize_email_options = {
  lowercase: true,
  remove_dots: true,
  remove_extension: true
};

function normalizeEmail(email, options) {
  options = (0, _merge2.default)(options, default_normalize_email_options);
  if (!(0, _isEmail2.default)(email)) {
    return false;
  }
  var parts = email.split('@', 2);
  parts[1] = parts[1].toLowerCase();
  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    if (options.remove_extension) {
      parts[0] = parts[0].split('+')[0];
    }
    if (options.remove_dots) {
      parts[0] = parts[0].replace(/\./g, '');
    }
    if (!parts[0].length) {
      return false;
    }
    parts[0] = parts[0].toLowerCase();
    parts[1] = 'gmail.com';
  } else if (options.lowercase) {
    parts[0] = parts[0].toLowerCase();
  }
  return parts.join('@');
}
module.exports = exports['default'];
},{"./isEmail":21,"./util/merge":62}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rtrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('[' + chars + ']') : /\s/;

  var idx = str.length - 1;
  while (idx >= 0 && pattern.test(str[idx])) {
    idx--;
  }

  return idx < str.length ? str.substr(0, idx + 1) : str;
}
module.exports = exports['default'];
},{"./util/assertString":61}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _blacklist = require('./blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripLow(str, keep_new_lines) {
  (0, _assertString2.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist2.default)(str, chars);
}
module.exports = exports['default'];
},{"./blacklist":3,"./util/assertString":61}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBoolean(str, strict) {
  (0, _assertString2.default)(str);
  if (strict) {
    return str === '1' || str === 'true';
  }
  return str !== '0' && str !== 'false' && str !== '';
}
module.exports = exports['default'];
},{"./util/assertString":61}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toDate(date) {
  (0, _assertString2.default)(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}
module.exports = exports['default'];
},{"./util/assertString":61}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFloat;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFloat(str) {
  (0, _assertString2.default)(str);
  return parseFloat(str);
}
module.exports = exports['default'];
},{"./util/assertString":61}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(str, radix) {
  (0, _assertString2.default)(str);
  return parseInt(str, radix || 10);
}
module.exports = exports['default'];
},{"./util/assertString":61}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = require('./rtrim');

var _rtrim2 = _interopRequireDefault(_rtrim);

var _ltrim = require('./ltrim');

var _ltrim2 = _interopRequireDefault(_ltrim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(str, chars) {
  return (0, _rtrim2.default)((0, _ltrim2.default)(str, chars), chars);
}
module.exports = exports['default'];
},{"./ltrim":50,"./rtrim":53}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.default = unescape;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unescape(str) {
      (0, _assertString2.default)(str);
      return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#96;/g, '`');
}
module.exports = exports['default'];
},{"./util/assertString":61}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  if (typeof input !== 'string') {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];
},{}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];
},{}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = toString;
function toString(input) {
  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }
  return String(input);
}
module.exports = exports['default'];
},{}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whitelist;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whitelist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];
},{"./util/assertString":61}],65:[function(require,module,exports){
var validator = require('../../misc/validate');

// get element references
var loginFormDiv = document.getElementById("div_login_form");
var loginForm = document.getElementById("login_form");
var loginSubmit = document.getElementById("login_form_submit");

var createFormDiv = document.getElementById("div_create_form");
var createForm = document.getElementById("create_form");
var createSubmit = document.getElementById("create_form_submit");

var toggleButton = document.getElementById("btn_toggle_forms");

// initial view state
loginFormDiv.style.display = "block";
createFormDiv.style.display = "none";

loginForm.email.placeholder = "email@example.com"
createForm.email.placeholder = "email@example.com"

// add listeners
loginSubmit.onclick = validateLoginForm;
createSubmit.onclick = validateCreateForm;
toggleButton.onclick = toggleForms;

function validateCreateForm(){
  clearErrors();
  // return false;
  var email = createForm.email.value;
  var pass1 = createForm.pass1.value;
  var pass2 = createForm.pass2.value;
  var errors = [];

  var validEmail = validator.isValidEmail(email);
  var pwdSame = pass1 === pass2;
  if (!validEmail){
    errors.push("Invalid email address");
  }
  if(!pwdSame){
    errors.push("Passwords do not match");
  }

  if(errors.length > 0){
    showErrors(errors);
    return;
  }

  var minPassLength = 8;
  var validPwd = validator.isValidPassword(pass1, minPassLength);

  if(!validPwd){
    errors.push("Invalid password: must be alphanumeric and longer than " + minPassLength);
  }

  if(errors.length > 0){
    showErrors(errors);
    return;
  }

  // made it through all checks, values are valid and form should be submitted.
  console.log("Create Form Submitted");
  createForm.submit();
}

function validateLoginForm(){
  clearErrors();
  // console.log(document.forms["login_form"])
  console.log("validating login form");
  var email = loginForm.username.value;
  var pass = loginForm.password.value;
  console.log("form values - " + email + ", " + pass);
  var validEmail = validator.isValidEmail(email);
  var validPass = validator.isValidPassword(pass);
  var validLogin = validEmail && validPass;

  if(validLogin){
      loginForm.submit();
      return;
  }

  var errors = []

  if(!validEmail){
    errors.push("Invalid Email Address");
  }
  if(!validPass){
    errors.push("Invalid Password");
  }
  if(errors.length > 0){
    showErrors(errors);
  }
  return validEmail && validPass;
}

function showErrors(errors){
  var errorParagraph = document.getElementById("errors");
  clearErrors();
  var errorText = "";
  for (var i = 0; i < errors.length; i++){
    errorText += "<li>" + errors[i] + "</li>"
  }
  errorParagraph.innerHTML = errorText;
}

function clearErrors(){
  var errors = document.getElementById("errors");
  errors.innerHTML = "";
}

function toggleForms(){
  var formRay = [loginFormDiv, createFormDiv]
  for(var i = 0; i < formRay.length; i++){
    var form = formRay[i];
    if(form.style.display == "none"){
      form.style.display = "block";
    }else{
      form.style.display = "none";
    }
  }
}

},{"../../misc/validate":66}],66:[function(require,module,exports){
var validator = require('validator');

exports.isValidEmail = function(email){
  return validator.isEmail(email);
}

exports.isValidPassword = function(pwd, minLength){
  if(!minLength){
    minLength = 8;
  }

  var length = pwd.length;
  var validLength = length >= minLength;

  var isAlphaNum = validator.isAlphanumeric(pwd);

  if(validLength && isAlphaNum){
    return true;
  }
  return false;
}

},{"validator":1}]},{},[65])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni40LjAvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2FscGhhLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvYmxhY2tsaXN0LmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvY29udGFpbnMuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9lcXVhbHMuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9lc2NhcGUuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0FmdGVyLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNBbHBoYS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQWxwaGFudW1lcmljLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNBc2NpaS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQmFzZTY0LmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNCZWZvcmUuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0Jvb2xlYW4uanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0J5dGVMZW5ndGguanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0NyZWRpdENhcmQuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0N1cnJlbmN5LmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNEYXRhVVJJLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNEYXRlLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNEZWNpbWFsLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNEaXZpc2libGVCeS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRW1haWwuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0ZRRE4uanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0Zsb2F0LmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNGdWxsV2lkdGguanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0hhbGZXaWR0aC5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSGV4Q29sb3IuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0hleGFkZWNpbWFsLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJUC5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNCTi5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNJTi5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNPODYwMS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSW4uanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0ludC5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSlNPTi5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNMb3dlcmNhc2UuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc01BQ0FkZHJlc3MuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc01ENS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTW9iaWxlUGhvbmUuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc01vbmdvSWQuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc011bHRpYnl0ZS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTnVsbC5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTnVtZXJpYy5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzU3Vycm9nYXRlUGFpci5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzVVJMLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNVVUlELmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNVcHBlcmNhc2UuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1ZhcmlhYmxlV2lkdGguanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1doaXRlbGlzdGVkLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvbHRyaW0uanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9tYXRjaGVzLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvbm9ybWFsaXplRW1haWwuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9ydHJpbS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3N0cmlwTG93LmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdG9Cb29sZWFuLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdG9EYXRlLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdG9GbG9hdC5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3RvSW50LmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdHJpbS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3VuZXNjYXBlLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdXRpbC9hc3NlcnRTdHJpbmcuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi91dGlsL21lcmdlLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdXRpbC90b1N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3doaXRlbGlzdC5qcyIsInN0YXRpYy9qcy9hdXRoL2xvZ2luL2xvZ2luLmpzIiwic3RhdGljL2pzL21pc2MvdmFsaWRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90b0RhdGUgPSByZXF1aXJlKCcuL2xpYi90b0RhdGUnKTtcblxudmFyIF90b0RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9EYXRlKTtcblxudmFyIF90b0Zsb2F0ID0gcmVxdWlyZSgnLi9saWIvdG9GbG9hdCcpO1xuXG52YXIgX3RvRmxvYXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9GbG9hdCk7XG5cbnZhciBfdG9JbnQgPSByZXF1aXJlKCcuL2xpYi90b0ludCcpO1xuXG52YXIgX3RvSW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvSW50KTtcblxudmFyIF90b0Jvb2xlYW4gPSByZXF1aXJlKCcuL2xpYi90b0Jvb2xlYW4nKTtcblxudmFyIF90b0Jvb2xlYW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9Cb29sZWFuKTtcblxudmFyIF9lcXVhbHMgPSByZXF1aXJlKCcuL2xpYi9lcXVhbHMnKTtcblxudmFyIF9lcXVhbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXF1YWxzKTtcblxudmFyIF9jb250YWlucyA9IHJlcXVpcmUoJy4vbGliL2NvbnRhaW5zJyk7XG5cbnZhciBfY29udGFpbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbnMpO1xuXG52YXIgX21hdGNoZXMgPSByZXF1aXJlKCcuL2xpYi9tYXRjaGVzJyk7XG5cbnZhciBfbWF0Y2hlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRjaGVzKTtcblxudmFyIF9pc0VtYWlsID0gcmVxdWlyZSgnLi9saWIvaXNFbWFpbCcpO1xuXG52YXIgX2lzRW1haWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNFbWFpbCk7XG5cbnZhciBfaXNVUkwgPSByZXF1aXJlKCcuL2xpYi9pc1VSTCcpO1xuXG52YXIgX2lzVVJMMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVVJMKTtcblxudmFyIF9pc01BQ0FkZHJlc3MgPSByZXF1aXJlKCcuL2xpYi9pc01BQ0FkZHJlc3MnKTtcblxudmFyIF9pc01BQ0FkZHJlc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNNQUNBZGRyZXNzKTtcblxudmFyIF9pc0lQID0gcmVxdWlyZSgnLi9saWIvaXNJUCcpO1xuXG52YXIgX2lzSVAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJUCk7XG5cbnZhciBfaXNGUUROID0gcmVxdWlyZSgnLi9saWIvaXNGUUROJyk7XG5cbnZhciBfaXNGUUROMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRlFETik7XG5cbnZhciBfaXNCb29sZWFuID0gcmVxdWlyZSgnLi9saWIvaXNCb29sZWFuJyk7XG5cbnZhciBfaXNCb29sZWFuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQm9vbGVhbik7XG5cbnZhciBfaXNBbHBoYSA9IHJlcXVpcmUoJy4vbGliL2lzQWxwaGEnKTtcblxudmFyIF9pc0FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQWxwaGEpO1xuXG52YXIgX2lzQWxwaGFudW1lcmljID0gcmVxdWlyZSgnLi9saWIvaXNBbHBoYW51bWVyaWMnKTtcblxudmFyIF9pc0FscGhhbnVtZXJpYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0FscGhhbnVtZXJpYyk7XG5cbnZhciBfaXNOdW1lcmljID0gcmVxdWlyZSgnLi9saWIvaXNOdW1lcmljJyk7XG5cbnZhciBfaXNOdW1lcmljMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzTnVtZXJpYyk7XG5cbnZhciBfaXNMb3dlcmNhc2UgPSByZXF1aXJlKCcuL2xpYi9pc0xvd2VyY2FzZScpO1xuXG52YXIgX2lzTG93ZXJjYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzTG93ZXJjYXNlKTtcblxudmFyIF9pc1VwcGVyY2FzZSA9IHJlcXVpcmUoJy4vbGliL2lzVXBwZXJjYXNlJyk7XG5cbnZhciBfaXNVcHBlcmNhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNVcHBlcmNhc2UpO1xuXG52YXIgX2lzQXNjaWkgPSByZXF1aXJlKCcuL2xpYi9pc0FzY2lpJyk7XG5cbnZhciBfaXNBc2NpaTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0FzY2lpKTtcblxudmFyIF9pc0Z1bGxXaWR0aCA9IHJlcXVpcmUoJy4vbGliL2lzRnVsbFdpZHRoJyk7XG5cbnZhciBfaXNGdWxsV2lkdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNGdWxsV2lkdGgpO1xuXG52YXIgX2lzSGFsZldpZHRoID0gcmVxdWlyZSgnLi9saWIvaXNIYWxmV2lkdGgnKTtcblxudmFyIF9pc0hhbGZXaWR0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0hhbGZXaWR0aCk7XG5cbnZhciBfaXNWYXJpYWJsZVdpZHRoID0gcmVxdWlyZSgnLi9saWIvaXNWYXJpYWJsZVdpZHRoJyk7XG5cbnZhciBfaXNWYXJpYWJsZVdpZHRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVmFyaWFibGVXaWR0aCk7XG5cbnZhciBfaXNNdWx0aWJ5dGUgPSByZXF1aXJlKCcuL2xpYi9pc011bHRpYnl0ZScpO1xuXG52YXIgX2lzTXVsdGlieXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzTXVsdGlieXRlKTtcblxudmFyIF9pc1N1cnJvZ2F0ZVBhaXIgPSByZXF1aXJlKCcuL2xpYi9pc1N1cnJvZ2F0ZVBhaXInKTtcblxudmFyIF9pc1N1cnJvZ2F0ZVBhaXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNTdXJyb2dhdGVQYWlyKTtcblxudmFyIF9pc0ludCA9IHJlcXVpcmUoJy4vbGliL2lzSW50Jyk7XG5cbnZhciBfaXNJbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJbnQpO1xuXG52YXIgX2lzRmxvYXQgPSByZXF1aXJlKCcuL2xpYi9pc0Zsb2F0Jyk7XG5cbnZhciBfaXNGbG9hdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0Zsb2F0KTtcblxudmFyIF9pc0RlY2ltYWwgPSByZXF1aXJlKCcuL2xpYi9pc0RlY2ltYWwnKTtcblxudmFyIF9pc0RlY2ltYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNEZWNpbWFsKTtcblxudmFyIF9pc0hleGFkZWNpbWFsID0gcmVxdWlyZSgnLi9saWIvaXNIZXhhZGVjaW1hbCcpO1xuXG52YXIgX2lzSGV4YWRlY2ltYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNIZXhhZGVjaW1hbCk7XG5cbnZhciBfaXNEaXZpc2libGVCeSA9IHJlcXVpcmUoJy4vbGliL2lzRGl2aXNpYmxlQnknKTtcblxudmFyIF9pc0RpdmlzaWJsZUJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRGl2aXNpYmxlQnkpO1xuXG52YXIgX2lzSGV4Q29sb3IgPSByZXF1aXJlKCcuL2xpYi9pc0hleENvbG9yJyk7XG5cbnZhciBfaXNIZXhDb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0hleENvbG9yKTtcblxudmFyIF9pc01EID0gcmVxdWlyZSgnLi9saWIvaXNNRDUnKTtcblxudmFyIF9pc01EMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzTUQpO1xuXG52YXIgX2lzSlNPTiA9IHJlcXVpcmUoJy4vbGliL2lzSlNPTicpO1xuXG52YXIgX2lzSlNPTjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0pTT04pO1xuXG52YXIgX2lzTnVsbCA9IHJlcXVpcmUoJy4vbGliL2lzTnVsbCcpO1xuXG52YXIgX2lzTnVsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc051bGwpO1xuXG52YXIgX2lzTGVuZ3RoID0gcmVxdWlyZSgnLi9saWIvaXNMZW5ndGgnKTtcblxudmFyIF9pc0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0xlbmd0aCk7XG5cbnZhciBfaXNCeXRlTGVuZ3RoID0gcmVxdWlyZSgnLi9saWIvaXNCeXRlTGVuZ3RoJyk7XG5cbnZhciBfaXNCeXRlTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQnl0ZUxlbmd0aCk7XG5cbnZhciBfaXNVVUlEID0gcmVxdWlyZSgnLi9saWIvaXNVVUlEJyk7XG5cbnZhciBfaXNVVUlEMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVVVJRCk7XG5cbnZhciBfaXNNb25nb0lkID0gcmVxdWlyZSgnLi9saWIvaXNNb25nb0lkJyk7XG5cbnZhciBfaXNNb25nb0lkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzTW9uZ29JZCk7XG5cbnZhciBfaXNEYXRlID0gcmVxdWlyZSgnLi9saWIvaXNEYXRlJyk7XG5cbnZhciBfaXNEYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRGF0ZSk7XG5cbnZhciBfaXNBZnRlciA9IHJlcXVpcmUoJy4vbGliL2lzQWZ0ZXInKTtcblxudmFyIF9pc0FmdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQWZ0ZXIpO1xuXG52YXIgX2lzQmVmb3JlID0gcmVxdWlyZSgnLi9saWIvaXNCZWZvcmUnKTtcblxudmFyIF9pc0JlZm9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0JlZm9yZSk7XG5cbnZhciBfaXNJbiA9IHJlcXVpcmUoJy4vbGliL2lzSW4nKTtcblxudmFyIF9pc0luMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSW4pO1xuXG52YXIgX2lzQ3JlZGl0Q2FyZCA9IHJlcXVpcmUoJy4vbGliL2lzQ3JlZGl0Q2FyZCcpO1xuXG52YXIgX2lzQ3JlZGl0Q2FyZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0NyZWRpdENhcmQpO1xuXG52YXIgX2lzSVNJTiA9IHJlcXVpcmUoJy4vbGliL2lzSVNJTicpO1xuXG52YXIgX2lzSVNJTjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0lTSU4pO1xuXG52YXIgX2lzSVNCTiA9IHJlcXVpcmUoJy4vbGliL2lzSVNCTicpO1xuXG52YXIgX2lzSVNCTjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0lTQk4pO1xuXG52YXIgX2lzTW9iaWxlUGhvbmUgPSByZXF1aXJlKCcuL2xpYi9pc01vYmlsZVBob25lJyk7XG5cbnZhciBfaXNNb2JpbGVQaG9uZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc01vYmlsZVBob25lKTtcblxudmFyIF9pc0N1cnJlbmN5ID0gcmVxdWlyZSgnLi9saWIvaXNDdXJyZW5jeScpO1xuXG52YXIgX2lzQ3VycmVuY3kyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNDdXJyZW5jeSk7XG5cbnZhciBfaXNJU08gPSByZXF1aXJlKCcuL2xpYi9pc0lTTzg2MDEnKTtcblxudmFyIF9pc0lTTzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0lTTyk7XG5cbnZhciBfaXNCYXNlID0gcmVxdWlyZSgnLi9saWIvaXNCYXNlNjQnKTtcblxudmFyIF9pc0Jhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNCYXNlKTtcblxudmFyIF9pc0RhdGFVUkkgPSByZXF1aXJlKCcuL2xpYi9pc0RhdGFVUkknKTtcblxudmFyIF9pc0RhdGFVUkkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNEYXRhVVJJKTtcblxudmFyIF9sdHJpbSA9IHJlcXVpcmUoJy4vbGliL2x0cmltJyk7XG5cbnZhciBfbHRyaW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbHRyaW0pO1xuXG52YXIgX3J0cmltID0gcmVxdWlyZSgnLi9saWIvcnRyaW0nKTtcblxudmFyIF9ydHJpbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydHJpbSk7XG5cbnZhciBfdHJpbSA9IHJlcXVpcmUoJy4vbGliL3RyaW0nKTtcblxudmFyIF90cmltMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyaW0pO1xuXG52YXIgX2VzY2FwZSA9IHJlcXVpcmUoJy4vbGliL2VzY2FwZScpO1xuXG52YXIgX2VzY2FwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lc2NhcGUpO1xuXG52YXIgX3VuZXNjYXBlID0gcmVxdWlyZSgnLi9saWIvdW5lc2NhcGUnKTtcblxudmFyIF91bmVzY2FwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bmVzY2FwZSk7XG5cbnZhciBfc3RyaXBMb3cgPSByZXF1aXJlKCcuL2xpYi9zdHJpcExvdycpO1xuXG52YXIgX3N0cmlwTG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmlwTG93KTtcblxudmFyIF93aGl0ZWxpc3QgPSByZXF1aXJlKCcuL2xpYi93aGl0ZWxpc3QnKTtcblxudmFyIF93aGl0ZWxpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2hpdGVsaXN0KTtcblxudmFyIF9ibGFja2xpc3QgPSByZXF1aXJlKCcuL2xpYi9ibGFja2xpc3QnKTtcblxudmFyIF9ibGFja2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmxhY2tsaXN0KTtcblxudmFyIF9pc1doaXRlbGlzdGVkID0gcmVxdWlyZSgnLi9saWIvaXNXaGl0ZWxpc3RlZCcpO1xuXG52YXIgX2lzV2hpdGVsaXN0ZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNXaGl0ZWxpc3RlZCk7XG5cbnZhciBfbm9ybWFsaXplRW1haWwgPSByZXF1aXJlKCcuL2xpYi9ub3JtYWxpemVFbWFpbCcpO1xuXG52YXIgX25vcm1hbGl6ZUVtYWlsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vcm1hbGl6ZUVtYWlsKTtcblxudmFyIF90b1N0cmluZyA9IHJlcXVpcmUoJy4vbGliL3V0aWwvdG9TdHJpbmcnKTtcblxudmFyIF90b1N0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b1N0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2ZXJzaW9uID0gJzUuNy4wJztcblxudmFyIHZhbGlkYXRvciA9IHtcbiAgdmVyc2lvbjogdmVyc2lvbixcbiAgdG9EYXRlOiBfdG9EYXRlMi5kZWZhdWx0LFxuICB0b0Zsb2F0OiBfdG9GbG9hdDIuZGVmYXVsdCwgdG9JbnQ6IF90b0ludDIuZGVmYXVsdCxcbiAgdG9Cb29sZWFuOiBfdG9Cb29sZWFuMi5kZWZhdWx0LFxuICBlcXVhbHM6IF9lcXVhbHMyLmRlZmF1bHQsIGNvbnRhaW5zOiBfY29udGFpbnMyLmRlZmF1bHQsIG1hdGNoZXM6IF9tYXRjaGVzMi5kZWZhdWx0LFxuICBpc0VtYWlsOiBfaXNFbWFpbDIuZGVmYXVsdCwgaXNVUkw6IF9pc1VSTDIuZGVmYXVsdCwgaXNNQUNBZGRyZXNzOiBfaXNNQUNBZGRyZXNzMi5kZWZhdWx0LCBpc0lQOiBfaXNJUDIuZGVmYXVsdCwgaXNGUUROOiBfaXNGUUROMi5kZWZhdWx0LFxuICBpc0Jvb2xlYW46IF9pc0Jvb2xlYW4yLmRlZmF1bHQsXG4gIGlzQWxwaGE6IF9pc0FscGhhMi5kZWZhdWx0LCBpc0FscGhhbnVtZXJpYzogX2lzQWxwaGFudW1lcmljMi5kZWZhdWx0LCBpc051bWVyaWM6IF9pc051bWVyaWMyLmRlZmF1bHQsIGlzTG93ZXJjYXNlOiBfaXNMb3dlcmNhc2UyLmRlZmF1bHQsIGlzVXBwZXJjYXNlOiBfaXNVcHBlcmNhc2UyLmRlZmF1bHQsXG4gIGlzQXNjaWk6IF9pc0FzY2lpMi5kZWZhdWx0LCBpc0Z1bGxXaWR0aDogX2lzRnVsbFdpZHRoMi5kZWZhdWx0LCBpc0hhbGZXaWR0aDogX2lzSGFsZldpZHRoMi5kZWZhdWx0LCBpc1ZhcmlhYmxlV2lkdGg6IF9pc1ZhcmlhYmxlV2lkdGgyLmRlZmF1bHQsXG4gIGlzTXVsdGlieXRlOiBfaXNNdWx0aWJ5dGUyLmRlZmF1bHQsIGlzU3Vycm9nYXRlUGFpcjogX2lzU3Vycm9nYXRlUGFpcjIuZGVmYXVsdCxcbiAgaXNJbnQ6IF9pc0ludDIuZGVmYXVsdCwgaXNGbG9hdDogX2lzRmxvYXQyLmRlZmF1bHQsIGlzRGVjaW1hbDogX2lzRGVjaW1hbDIuZGVmYXVsdCwgaXNIZXhhZGVjaW1hbDogX2lzSGV4YWRlY2ltYWwyLmRlZmF1bHQsIGlzRGl2aXNpYmxlQnk6IF9pc0RpdmlzaWJsZUJ5Mi5kZWZhdWx0LFxuICBpc0hleENvbG9yOiBfaXNIZXhDb2xvcjIuZGVmYXVsdCxcbiAgaXNNRDU6IF9pc01EMi5kZWZhdWx0LFxuICBpc0pTT046IF9pc0pTT04yLmRlZmF1bHQsXG4gIGlzTnVsbDogX2lzTnVsbDIuZGVmYXVsdCxcbiAgaXNMZW5ndGg6IF9pc0xlbmd0aDIuZGVmYXVsdCwgaXNCeXRlTGVuZ3RoOiBfaXNCeXRlTGVuZ3RoMi5kZWZhdWx0LFxuICBpc1VVSUQ6IF9pc1VVSUQyLmRlZmF1bHQsIGlzTW9uZ29JZDogX2lzTW9uZ29JZDIuZGVmYXVsdCxcbiAgaXNEYXRlOiBfaXNEYXRlMi5kZWZhdWx0LCBpc0FmdGVyOiBfaXNBZnRlcjIuZGVmYXVsdCwgaXNCZWZvcmU6IF9pc0JlZm9yZTIuZGVmYXVsdCxcbiAgaXNJbjogX2lzSW4yLmRlZmF1bHQsXG4gIGlzQ3JlZGl0Q2FyZDogX2lzQ3JlZGl0Q2FyZDIuZGVmYXVsdCxcbiAgaXNJU0lOOiBfaXNJU0lOMi5kZWZhdWx0LCBpc0lTQk46IF9pc0lTQk4yLmRlZmF1bHQsXG4gIGlzTW9iaWxlUGhvbmU6IF9pc01vYmlsZVBob25lMi5kZWZhdWx0LFxuICBpc0N1cnJlbmN5OiBfaXNDdXJyZW5jeTIuZGVmYXVsdCxcbiAgaXNJU084NjAxOiBfaXNJU08yLmRlZmF1bHQsXG4gIGlzQmFzZTY0OiBfaXNCYXNlMi5kZWZhdWx0LCBpc0RhdGFVUkk6IF9pc0RhdGFVUkkyLmRlZmF1bHQsXG4gIGx0cmltOiBfbHRyaW0yLmRlZmF1bHQsIHJ0cmltOiBfcnRyaW0yLmRlZmF1bHQsIHRyaW06IF90cmltMi5kZWZhdWx0LFxuICBlc2NhcGU6IF9lc2NhcGUyLmRlZmF1bHQsIHVuZXNjYXBlOiBfdW5lc2NhcGUyLmRlZmF1bHQsIHN0cmlwTG93OiBfc3RyaXBMb3cyLmRlZmF1bHQsXG4gIHdoaXRlbGlzdDogX3doaXRlbGlzdDIuZGVmYXVsdCwgYmxhY2tsaXN0OiBfYmxhY2tsaXN0Mi5kZWZhdWx0LFxuICBpc1doaXRlbGlzdGVkOiBfaXNXaGl0ZWxpc3RlZDIuZGVmYXVsdCxcbiAgbm9ybWFsaXplRW1haWw6IF9ub3JtYWxpemVFbWFpbDIuZGVmYXVsdCxcbiAgdG9TdHJpbmc6IF90b1N0cmluZzIuZGVmYXVsdFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdG9yO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGFscGhhID0gZXhwb3J0cy5hbHBoYSA9IHtcbiAgJ2VuLVVTJzogL15bQS1aXSskL2ksXG4gICdjcy1DWic6IC9eW0EtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvV0rJC9pLFxuICAnZGUtREUnOiAvXltBLVrDhMOWw5zDn10rJC9pLFxuICAnZXMtRVMnOiAvXltBLVrDgcOJw43DkcOTw5rDnF0rJC9pLFxuICAnZnItRlInOiAvXltBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuF0rJC9pLFxuICAnbmwtTkwnOiAvXltBLVrDicOLw4/Dk8OWw5xdKyQvaSxcbiAgJ2h1LUhVJzogL15bQS1aw4HDicONw5PDlsWQw5rDnMWwXSskL2ksXG4gICdwbC1QTCc6IC9eW0EtWsSExIbEmMWaxYHFg8OTxbvFuV0rJC9pLFxuICAncHQtUFQnOiAvXltBLVrDg8OBw4DDgsOHw4nDisONw5XDk8OUw5rDnF0rJC9pLFxuICAncnUtUlUnOiAvXlvQkC3Qr9CBXSskL2ksXG4gICdzci1SU0BsYXRpbic6IC9eW0EtWsSMxIbFvcWgxJBdKyQvaSxcbiAgJ3NyLVJTJzogL15b0JAt0K/QgtCI0InQitCL0I9dKyQvaSxcbiAgJ3RyLVRSJzogL15bQS1aw4fEnsSwxLHDlsWew5xdKyQvaSxcbiAgYXI6IC9eW9ih2KLYo9ik2KXYptin2KjYqdiq2KvYrNit2K7Yr9iw2LHYstiz2LTYtdi22LfYuNi52LrZgdmC2YPZhNmF2YbZh9mI2YnZitmL2YzZjdmO2Y/ZkNmR2ZLZsF0rJC9cbn07XG5cbnZhciBhbHBoYW51bWVyaWMgPSBleHBvcnRzLmFscGhhbnVtZXJpYyA9IHtcbiAgJ2VuLVVTJzogL15bMC05QS1aXSskL2ksXG4gICdjcy1DWic6IC9eWzAtOUEtWsOBxIzEjsOJxJrDjcWHw5PFmMWgxaTDmsWuw53FvV0rJC9pLFxuICAnZGUtREUnOiAvXlswLTlBLVrDhMOWw5zDn10rJC9pLFxuICAnZXMtRVMnOiAvXlswLTlBLVrDgcOJw43DkcOTw5rDnF0rJC9pLFxuICAnZnItRlInOiAvXlswLTlBLVrDgMOCw4bDh8OJw4jDisOLw4/DjsOUxZLDmcObw5zFuF0rJC9pLFxuICAnaHUtSFUnOiAvXlswLTlBLVrDgcOJw43Dk8OWxZDDmsOcxbBdKyQvaSxcbiAgJ25sLU5MJzogL15bMC05QS1aw4nDi8OPw5PDlsOcXSskL2ksXG4gICdwbC1QTCc6IC9eWzAtOUEtWsSExIbEmMWaxYHFg8OTxbvFuV0rJC9pLFxuICAncHQtUFQnOiAvXlswLTlBLVrDg8OBw4DDgsOHw4nDisONw5XDk8OUw5rDnF0rJC9pLFxuICAncnUtUlUnOiAvXlswLTnQkC3Qr9CBXSskL2ksXG4gICdzci1SU0BsYXRpbic6IC9eWzAtOUEtWsSMxIbFvcWgxJBdKyQvaSxcbiAgJ3NyLVJTJzogL15bMC050JAt0K/QgtCI0InQitCL0I9dKyQvaSxcbiAgJ3RyLVRSJzogL15bMC05QS1aw4fEnsSwxLHDlsWew5xdKyQvaSxcbiAgYXI6IC9eW9mg2aHZotmj2aTZpdmm2afZqNmpMC052KHYotij2KTYpdim2KfYqNip2KrYq9is2K3Yrtiv2LDYsdiy2LPYtNi12LbYt9i42LnYutmB2YLZg9mE2YXZhtmH2YjZidmK2YvZjNmN2Y7Zj9mQ2ZHZktmwXSskL1xufTtcblxudmFyIGVuZ2xpc2hMb2NhbGVzID0gZXhwb3J0cy5lbmdsaXNoTG9jYWxlcyA9IFsnQVUnLCAnR0InLCAnSEsnLCAnSU4nLCAnTlonLCAnWkEnLCAnWk0nXTtcblxuZm9yICh2YXIgbG9jYWxlLCBpID0gMDsgaSA8IGVuZ2xpc2hMb2NhbGVzLmxlbmd0aDsgaSsrKSB7XG4gIGxvY2FsZSA9ICdlbi0nICsgZW5nbGlzaExvY2FsZXNbaV07XG4gIGFscGhhW2xvY2FsZV0gPSBhbHBoYVsnZW4tVVMnXTtcbiAgYWxwaGFudW1lcmljW2xvY2FsZV0gPSBhbHBoYW51bWVyaWNbJ2VuLVVTJ107XG59XG5cbmFscGhhWydwdC1CUiddID0gYWxwaGFbJ3B0LVBUJ107XG5hbHBoYW51bWVyaWNbJ3B0LUJSJ10gPSBhbHBoYW51bWVyaWNbJ3B0LVBUJ107XG5cbi8vIFNvdXJjZTogaHR0cDovL3d3dy5sb2NhbGVwbGFuZXQuY29tL2phdmEvXG52YXIgYXJhYmljTG9jYWxlcyA9IGV4cG9ydHMuYXJhYmljTG9jYWxlcyA9IFsnQUUnLCAnQkgnLCAnRFonLCAnRUcnLCAnSVEnLCAnSk8nLCAnS1cnLCAnTEInLCAnTFknLCAnTUEnLCAnUU0nLCAnUUEnLCAnU0EnLCAnU0QnLCAnU1knLCAnVE4nLCAnWUUnXTtcblxuZm9yICh2YXIgX2xvY2FsZSwgX2kgPSAwOyBfaSA8IGFyYWJpY0xvY2FsZXMubGVuZ3RoOyBfaSsrKSB7XG4gIF9sb2NhbGUgPSAnYXItJyArIGFyYWJpY0xvY2FsZXNbX2ldO1xuICBhbHBoYVtfbG9jYWxlXSA9IGFscGhhLmFyO1xuICBhbHBoYW51bWVyaWNbX2xvY2FsZV0gPSBhbHBoYW51bWVyaWMuYXI7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYmxhY2tsaXN0O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYmxhY2tsaXN0KHN0ciwgY2hhcnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKCdbJyArIGNoYXJzICsgJ10rJywgJ2cnKSwgJycpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY29udGFpbnM7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG52YXIgX3RvU3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL3RvU3RyaW5nJyk7XG5cbnZhciBfdG9TdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9TdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjb250YWlucyhzdHIsIGVsZW0pIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdHIuaW5kZXhPZigoMCwgX3RvU3RyaW5nMi5kZWZhdWx0KShlbGVtKSkgPj0gMDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGVxdWFscztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGVxdWFscyhzdHIsIGNvbXBhcmlzb24pIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdHIgPT09IGNvbXBhcmlzb247XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXNjYXBlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZXNjYXBlKHN0cikge1xuICAgICAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpLnJlcGxhY2UoLycvZywgJyYjeDI3OycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JykucmVwbGFjZSgvXFwvL2csICcmI3gyRjsnKS5yZXBsYWNlKC9gL2csICcmIzk2OycpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNBZnRlcjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbnZhciBfdG9EYXRlID0gcmVxdWlyZSgnLi90b0RhdGUnKTtcblxudmFyIF90b0RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9EYXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNBZnRlcihzdHIpIHtcbiAgdmFyIGRhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBTdHJpbmcobmV3IERhdGUoKSkgOiBhcmd1bWVudHNbMV07XG5cbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBjb21wYXJpc29uID0gKDAsIF90b0RhdGUyLmRlZmF1bHQpKGRhdGUpO1xuICB2YXIgb3JpZ2luYWwgPSAoMCwgX3RvRGF0ZTIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuICEhKG9yaWdpbmFsICYmIGNvbXBhcmlzb24gJiYgb3JpZ2luYWwgPiBjb21wYXJpc29uKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQWxwaGE7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi9hbHBoYScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0FscGhhKHN0cikge1xuICB2YXIgbG9jYWxlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gJ2VuLVVTJyA6IGFyZ3VtZW50c1sxXTtcblxuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgaWYgKGxvY2FsZSBpbiBfYWxwaGEuYWxwaGEpIHtcbiAgICByZXR1cm4gX2FscGhhLmFscGhhW2xvY2FsZV0udGVzdChzdHIpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBsb2NhbGUgXFwnJyArIGxvY2FsZSArICdcXCcnKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQWxwaGFudW1lcmljO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4vYWxwaGEnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNBbHBoYW51bWVyaWMoc3RyKSB7XG4gIHZhciBsb2NhbGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAnZW4tVVMnIDogYXJndW1lbnRzWzFdO1xuXG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBpZiAobG9jYWxlIGluIF9hbHBoYS5hbHBoYW51bWVyaWMpIHtcbiAgICByZXR1cm4gX2FscGhhLmFscGhhbnVtZXJpY1tsb2NhbGVdLnRlc3Qoc3RyKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbG9jYWxlIFxcJycgKyBsb2NhbGUgKyAnXFwnJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0FzY2lpO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29udHJvbC1yZWdleCAqL1xudmFyIGFzY2lpID0gL15bXFx4MDAtXFx4N0ZdKyQvO1xuLyogZXNsaW50LWVuYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG5cbmZ1bmN0aW9uIGlzQXNjaWkoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gYXNjaWkudGVzdChzdHIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNCYXNlNjQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbm90QmFzZTY0ID0gL1teQS1aMC05K1xcLz1dL2k7XG5cbmZ1bmN0aW9uIGlzQmFzZTY0KHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIGxlbiA9IHN0ci5sZW5ndGg7XG4gIGlmICghbGVuIHx8IGxlbiAlIDQgIT09IDAgfHwgbm90QmFzZTY0LnRlc3Qoc3RyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZmlyc3RQYWRkaW5nQ2hhciA9IHN0ci5pbmRleE9mKCc9Jyk7XG4gIHJldHVybiBmaXJzdFBhZGRpbmdDaGFyID09PSAtMSB8fCBmaXJzdFBhZGRpbmdDaGFyID09PSBsZW4gLSAxIHx8IGZpcnN0UGFkZGluZ0NoYXIgPT09IGxlbiAtIDIgJiYgc3RyW2xlbiAtIDFdID09PSAnPSc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0JlZm9yZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbnZhciBfdG9EYXRlID0gcmVxdWlyZSgnLi90b0RhdGUnKTtcblxudmFyIF90b0RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9EYXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNCZWZvcmUoc3RyKSB7XG4gIHZhciBkYXRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gU3RyaW5nKG5ldyBEYXRlKCkpIDogYXJndW1lbnRzWzFdO1xuXG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2YXIgY29tcGFyaXNvbiA9ICgwLCBfdG9EYXRlMi5kZWZhdWx0KShkYXRlKTtcbiAgdmFyIG9yaWdpbmFsID0gKDAsIF90b0RhdGUyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiAhIShvcmlnaW5hbCAmJiBjb21wYXJpc29uICYmIG9yaWdpbmFsIDwgY29tcGFyaXNvbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0Jvb2xlYW47XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gWyd0cnVlJywgJ2ZhbHNlJywgJzEnLCAnMCddLmluZGV4T2Yoc3RyKSA+PSAwO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNCeXRlTGVuZ3RoO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXJlc3QtcGFyYW1zICovXG5mdW5jdGlvbiBpc0J5dGVMZW5ndGgoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2YXIgbWluID0gdm9pZCAwO1xuICB2YXIgbWF4ID0gdm9pZCAwO1xuICBpZiAoKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb25zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgbWluID0gb3B0aW9ucy5taW4gfHwgMDtcbiAgICBtYXggPSBvcHRpb25zLm1heDtcbiAgfSBlbHNlIHtcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogaXNCeXRlTGVuZ3RoKHN0ciwgbWluIFssIG1heF0pXG4gICAgbWluID0gYXJndW1lbnRzWzFdO1xuICAgIG1heCA9IGFyZ3VtZW50c1syXTtcbiAgfVxuICB2YXIgbGVuID0gZW5jb2RlVVJJKHN0cikuc3BsaXQoLyUuLnwuLykubGVuZ3RoIC0gMTtcbiAgcmV0dXJuIGxlbiA+PSBtaW4gJiYgKHR5cGVvZiBtYXggPT09ICd1bmRlZmluZWQnIHx8IGxlbiA8PSBtYXgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNDcmVkaXRDYXJkO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xudmFyIGNyZWRpdENhcmQgPSAvXig/OjRbMC05XXsxMn0oPzpbMC05XXszfSk/fDVbMS01XVswLTldezE0fXwoMjIyWzEtOV18MjJbMy05XVswLTldfDJbMy02XVswLTldezJ9fDI3WzAxXVswLTldfDI3MjApWzAtOV17MTJ9fDYoPzowMTF8NVswLTldWzAtOV0pWzAtOV17MTJ9fDNbNDddWzAtOV17MTN9fDMoPzowWzAtNV18WzY4XVswLTldKVswLTldezExfXwoPzoyMTMxfDE4MDB8MzVcXGR7M30pXFxkezExfSl8NjJbMC05XXsxNH0kLztcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuXG5mdW5jdGlvbiBpc0NyZWRpdENhcmQoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2YXIgc2FuaXRpemVkID0gc3RyLnJlcGxhY2UoL1teMC05XSsvZywgJycpO1xuICBpZiAoIWNyZWRpdENhcmQudGVzdChzYW5pdGl6ZWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBzdW0gPSAwO1xuICB2YXIgZGlnaXQgPSB2b2lkIDA7XG4gIHZhciB0bXBOdW0gPSB2b2lkIDA7XG4gIHZhciBzaG91bGREb3VibGUgPSB2b2lkIDA7XG4gIGZvciAodmFyIGkgPSBzYW5pdGl6ZWQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBkaWdpdCA9IHNhbml0aXplZC5zdWJzdHJpbmcoaSwgaSArIDEpO1xuICAgIHRtcE51bSA9IHBhcnNlSW50KGRpZ2l0LCAxMCk7XG4gICAgaWYgKHNob3VsZERvdWJsZSkge1xuICAgICAgdG1wTnVtICo9IDI7XG4gICAgICBpZiAodG1wTnVtID49IDEwKSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW0gJSAxMCArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdW0gKz0gdG1wTnVtO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdW0gKz0gdG1wTnVtO1xuICAgIH1cbiAgICBzaG91bGREb3VibGUgPSAhc2hvdWxkRG91YmxlO1xuICB9XG4gIHJldHVybiAhIShzdW0gJSAxMCA9PT0gMCA/IHNhbml0aXplZCA6IGZhbHNlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQ3VycmVuY3k7XG5cbnZhciBfbWVyZ2UgPSByZXF1aXJlKCcuL3V0aWwvbWVyZ2UnKTtcblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZSk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjdXJyZW5jeVJlZ2V4KG9wdGlvbnMpIHtcbiAgdmFyIHN5bWJvbCA9ICcoXFxcXCcgKyBvcHRpb25zLnN5bWJvbC5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuJykgKyAnKScgKyAob3B0aW9ucy5yZXF1aXJlX3N5bWJvbCA/ICcnIDogJz8nKSxcbiAgICAgIG5lZ2F0aXZlID0gJy0/JyxcbiAgICAgIHdob2xlX2RvbGxhcl9hbW91bnRfd2l0aG91dF9zZXAgPSAnWzEtOV1cXFxcZConLFxuICAgICAgd2hvbGVfZG9sbGFyX2Ftb3VudF93aXRoX3NlcCA9ICdbMS05XVxcXFxkezAsMn0oXFxcXCcgKyBvcHRpb25zLnRob3VzYW5kc19zZXBhcmF0b3IgKyAnXFxcXGR7M30pKicsXG4gICAgICB2YWxpZF93aG9sZV9kb2xsYXJfYW1vdW50cyA9IFsnMCcsIHdob2xlX2RvbGxhcl9hbW91bnRfd2l0aG91dF9zZXAsIHdob2xlX2RvbGxhcl9hbW91bnRfd2l0aF9zZXBdLFxuICAgICAgd2hvbGVfZG9sbGFyX2Ftb3VudCA9ICcoJyArIHZhbGlkX3dob2xlX2RvbGxhcl9hbW91bnRzLmpvaW4oJ3wnKSArICcpPycsXG4gICAgICBkZWNpbWFsX2Ftb3VudCA9ICcoXFxcXCcgKyBvcHRpb25zLmRlY2ltYWxfc2VwYXJhdG9yICsgJ1xcXFxkezJ9KT8nO1xuICB2YXIgcGF0dGVybiA9IHdob2xlX2RvbGxhcl9hbW91bnQgKyBkZWNpbWFsX2Ftb3VudDtcblxuICAvLyBkZWZhdWx0IGlzIG5lZ2F0aXZlIHNpZ24gYmVmb3JlIHN5bWJvbCwgYnV0IHRoZXJlIGFyZSB0d28gb3RoZXIgb3B0aW9ucyAoYmVzaWRlcyBwYXJlbnMpXG4gIGlmIChvcHRpb25zLmFsbG93X25lZ2F0aXZlcyAmJiAhb3B0aW9ucy5wYXJlbnNfZm9yX25lZ2F0aXZlcykge1xuICAgIGlmIChvcHRpb25zLm5lZ2F0aXZlX3NpZ25fYWZ0ZXJfZGlnaXRzKSB7XG4gICAgICBwYXR0ZXJuICs9IG5lZ2F0aXZlO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5uZWdhdGl2ZV9zaWduX2JlZm9yZV9kaWdpdHMpIHtcbiAgICAgIHBhdHRlcm4gPSBuZWdhdGl2ZSArIHBhdHRlcm47XG4gICAgfVxuICB9XG5cbiAgLy8gU291dGggQWZyaWNhbiBSYW5kLCBmb3IgZXhhbXBsZSwgdXNlcyBSIDEyMyAoc3BhY2UpIGFuZCBSLTEyMyAobm8gc3BhY2UpXG4gIGlmIChvcHRpb25zLmFsbG93X25lZ2F0aXZlX3NpZ25fcGxhY2Vob2xkZXIpIHtcbiAgICBwYXR0ZXJuID0gJyggKD8hXFxcXC0pKT8nICsgcGF0dGVybjtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmFsbG93X3NwYWNlX2FmdGVyX3N5bWJvbCkge1xuICAgIHBhdHRlcm4gPSAnID8nICsgcGF0dGVybjtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmFsbG93X3NwYWNlX2FmdGVyX2RpZ2l0cykge1xuICAgIHBhdHRlcm4gKz0gJyggKD8hJCkpPyc7XG4gIH1cblxuICBpZiAob3B0aW9ucy5zeW1ib2xfYWZ0ZXJfZGlnaXRzKSB7XG4gICAgcGF0dGVybiArPSBzeW1ib2w7XG4gIH0gZWxzZSB7XG4gICAgcGF0dGVybiA9IHN5bWJvbCArIHBhdHRlcm47XG4gIH1cblxuICBpZiAob3B0aW9ucy5hbGxvd19uZWdhdGl2ZXMpIHtcbiAgICBpZiAob3B0aW9ucy5wYXJlbnNfZm9yX25lZ2F0aXZlcykge1xuICAgICAgcGF0dGVybiA9ICcoXFxcXCgnICsgcGF0dGVybiArICdcXFxcKXwnICsgcGF0dGVybiArICcpJztcbiAgICB9IGVsc2UgaWYgKCEob3B0aW9ucy5uZWdhdGl2ZV9zaWduX2JlZm9yZV9kaWdpdHMgfHwgb3B0aW9ucy5uZWdhdGl2ZV9zaWduX2FmdGVyX2RpZ2l0cykpIHtcbiAgICAgIHBhdHRlcm4gPSBuZWdhdGl2ZSArIHBhdHRlcm47XG4gICAgfVxuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXRlbXBsYXRlICovXG4gIHJldHVybiBuZXcgUmVnRXhwKCdeJyArXG4gIC8vIGVuc3VyZSB0aGVyZSdzIGEgZG9sbGFyIGFuZC9vciBkZWNpbWFsIGFtb3VudCwgYW5kIHRoYXRcbiAgLy8gaXQgZG9lc24ndCBzdGFydCB3aXRoIGEgc3BhY2Ugb3IgYSBuZWdhdGl2ZSBzaWduIGZvbGxvd2VkIGJ5IGEgc3BhY2VcbiAgJyg/IS0/ICkoPz0uKlxcXFxkKScgKyBwYXR0ZXJuICsgJyQnKTtcbiAgLyogZXNsaW50LWVuYWJsZSBwcmVmZXItdGVtcGxhdGUgKi9cbn1cblxudmFyIGRlZmF1bHRfY3VycmVuY3lfb3B0aW9ucyA9IHtcbiAgc3ltYm9sOiAnJCcsXG4gIHJlcXVpcmVfc3ltYm9sOiBmYWxzZSxcbiAgYWxsb3dfc3BhY2VfYWZ0ZXJfc3ltYm9sOiBmYWxzZSxcbiAgc3ltYm9sX2FmdGVyX2RpZ2l0czogZmFsc2UsXG4gIGFsbG93X25lZ2F0aXZlczogdHJ1ZSxcbiAgcGFyZW5zX2Zvcl9uZWdhdGl2ZXM6IGZhbHNlLFxuICBuZWdhdGl2ZV9zaWduX2JlZm9yZV9kaWdpdHM6IGZhbHNlLFxuICBuZWdhdGl2ZV9zaWduX2FmdGVyX2RpZ2l0czogZmFsc2UsXG4gIGFsbG93X25lZ2F0aXZlX3NpZ25fcGxhY2Vob2xkZXI6IGZhbHNlLFxuICB0aG91c2FuZHNfc2VwYXJhdG9yOiAnLCcsXG4gIGRlY2ltYWxfc2VwYXJhdG9yOiAnLicsXG4gIGFsbG93X3NwYWNlX2FmdGVyX2RpZ2l0czogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGlzQ3VycmVuY3koc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9jdXJyZW5jeV9vcHRpb25zKTtcbiAgcmV0dXJuIGN1cnJlbmN5UmVnZXgob3B0aW9ucykudGVzdChzdHIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNEYXRhVVJJO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRhdGFVUkkgPSAvXlxccypkYXRhOihbYS16XStcXC9bYS16MC05XFwtXFwrXSsoO1thLXpcXC1dKz1bYS16MC05XFwtXSspPyk/KDtiYXNlNjQpPyxbYS16MC05IVxcJCYnLFxcKFxcKVxcKlxcKyw7PVxcLVxcLl9+OkBcXC9cXD8lXFxzXSpcXHMqJC9pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cblxuZnVuY3Rpb24gaXNEYXRhVVJJKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIGRhdGFVUkkudGVzdChzdHIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNEYXRlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxudmFyIF9pc0lTTyA9IHJlcXVpcmUoJy4vaXNJU084NjAxJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0KHN0cikge1xuICB2YXIgaXNvODYwMVBhcnRzID0gc3RyLm1hdGNoKF9pc0lTTy5pc284NjAxKTtcbiAgdmFyIHRpbWV6b25lID0gdm9pZCAwLFxuICAgICAgc2lnbiA9IHZvaWQgMCxcbiAgICAgIGhvdXJzID0gdm9pZCAwLFxuICAgICAgbWludXRlcyA9IHZvaWQgMDtcbiAgaWYgKCFpc284NjAxUGFydHMpIHtcbiAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICB0aW1lem9uZSA9IHN0ci5tYXRjaCgvKD86XFxzfGdtdFxccyopKC18XFwrKShcXGR7MSw0fSkoXFxzfCQpLyk7XG4gICAgaWYgKCF0aW1lem9uZSkge1xuICAgICAgcmV0dXJuIHN0ci5pbmRleE9mKCdnbXQnKSAhPT0gLTEgPyAwIDogbnVsbDtcbiAgICB9XG4gICAgc2lnbiA9IHRpbWV6b25lWzFdO1xuICAgIHZhciBvZmZzZXQgPSB0aW1lem9uZVsyXTtcbiAgICBpZiAob2Zmc2V0Lmxlbmd0aCA9PT0gMykge1xuICAgICAgb2Zmc2V0ID0gJzAnICsgb2Zmc2V0O1xuICAgIH1cbiAgICBpZiAob2Zmc2V0Lmxlbmd0aCA8PSAyKSB7XG4gICAgICBob3VycyA9IDA7XG4gICAgICBtaW51dGVzID0gcGFyc2VJbnQob2Zmc2V0LCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhvdXJzID0gcGFyc2VJbnQob2Zmc2V0LnNsaWNlKDAsIDIpLCAxMCk7XG4gICAgICBtaW51dGVzID0gcGFyc2VJbnQob2Zmc2V0LnNsaWNlKDIsIDQpLCAxMCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRpbWV6b25lID0gaXNvODYwMVBhcnRzWzIxXTtcbiAgICBpZiAoIXRpbWV6b25lKSB7XG4gICAgICAvLyBpZiBubyBob3VyL21pbnV0ZSB3YXMgcHJvdmlkZWQsIHRoZSBkYXRlIGlzIEdNVFxuICAgICAgcmV0dXJuICFpc284NjAxUGFydHNbMTJdID8gMCA6IG51bGw7XG4gICAgfVxuICAgIGlmICh0aW1lem9uZSA9PT0gJ3onIHx8IHRpbWV6b25lID09PSAnWicpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBzaWduID0gaXNvODYwMVBhcnRzWzIyXTtcbiAgICBpZiAodGltZXpvbmUuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgICAgaG91cnMgPSBwYXJzZUludChpc284NjAxUGFydHNbMjNdLCAxMCk7XG4gICAgICBtaW51dGVzID0gcGFyc2VJbnQoaXNvODYwMVBhcnRzWzI0XSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBob3VycyA9IDA7XG4gICAgICBtaW51dGVzID0gcGFyc2VJbnQoaXNvODYwMVBhcnRzWzIzXSwgMTApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGhvdXJzICogNjAgKyBtaW51dGVzKSAqIChzaWduID09PSAnLScgPyAxIDogLTEpO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2YXIgbm9ybWFsaXplZERhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKHN0cikpO1xuICBpZiAoaXNOYU4obm9ybWFsaXplZERhdGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gbm9ybWFsaXplZERhdGUgaXMgaW4gdGhlIHVzZXIncyB0aW1lem9uZS4gQXBwbHkgdGhlIGlucHV0XG4gIC8vIHRpbWV6b25lIG9mZnNldCB0byB0aGUgZGF0ZSBzbyB0aGF0IHRoZSB5ZWFyIGFuZCBkYXkgbWF0Y2hcbiAgLy8gdGhlIGlucHV0XG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0KHN0cik7XG4gIGlmICh0aW1lem9uZU9mZnNldCAhPT0gbnVsbCkge1xuICAgIHZhciB0aW1lem9uZURpZmZlcmVuY2UgPSBub3JtYWxpemVkRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpIC0gdGltZXpvbmVPZmZzZXQ7XG4gICAgbm9ybWFsaXplZERhdGUgPSBuZXcgRGF0ZShub3JtYWxpemVkRGF0ZS5nZXRUaW1lKCkgKyA2MDAwMCAqIHRpbWV6b25lRGlmZmVyZW5jZSk7XG4gIH1cblxuICB2YXIgZGF5ID0gU3RyaW5nKG5vcm1hbGl6ZWREYXRlLmdldERhdGUoKSk7XG4gIHZhciBkYXlPclllYXIgPSB2b2lkIDAsXG4gICAgICBkYXlPclllYXJNYXRjaGVzID0gdm9pZCAwLFxuICAgICAgeWVhciA9IHZvaWQgMDtcbiAgLy8gY2hlY2sgZm9yIHZhbGlkIGRvdWJsZSBkaWdpdHMgdGhhdCBjb3VsZCBiZSBsYXRlIGRheXNcbiAgLy8gY2hlY2sgZm9yIGFsbCBtYXRjaGVzIHNpbmNlIGEgc3RyaW5nIGxpa2UgJzEyLzIzJyBpcyBhIHZhbGlkIGRhdGVcbiAgLy8gaWdub3JlIGV2ZXJ5dGhpbmcgd2l0aCBuZWFyYnkgY29sb25zXG4gIGRheU9yWWVhck1hdGNoZXMgPSBzdHIubWF0Y2goLyhefFteOlxcZF0pWzIzXVxcZChbXlQ6XFxkXXwkKS9nKTtcbiAgaWYgKCFkYXlPclllYXJNYXRjaGVzKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZGF5T3JZZWFyID0gZGF5T3JZZWFyTWF0Y2hlcy5tYXAoZnVuY3Rpb24gKGRpZ2l0U3RyaW5nKSB7XG4gICAgcmV0dXJuIGRpZ2l0U3RyaW5nLm1hdGNoKC9cXGQrL2cpWzBdO1xuICB9KS5qb2luKCcvJyk7XG5cbiAgeWVhciA9IFN0cmluZyhub3JtYWxpemVkRGF0ZS5nZXRGdWxsWWVhcigpKS5zbGljZSgtMik7XG4gIGlmIChkYXlPclllYXIgPT09IGRheSB8fCBkYXlPclllYXIgPT09IHllYXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChkYXlPclllYXIgPT09ICcnICsgZGF5IC8geWVhciB8fCBkYXlPclllYXIgPT09ICcnICsgeWVhciAvIGRheSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRGVjaW1hbDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWNpbWFsID0gL15bLStdPyhbMC05XSt8XFwuWzAtOV0rfFswLTldK1xcLlswLTldKykkLztcblxuZnVuY3Rpb24gaXNEZWNpbWFsKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ciAhPT0gJycgJiYgZGVjaW1hbC50ZXN0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0RpdmlzaWJsZUJ5O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxudmFyIF90b0Zsb2F0ID0gcmVxdWlyZSgnLi90b0Zsb2F0Jyk7XG5cbnZhciBfdG9GbG9hdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0Zsb2F0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNEaXZpc2libGVCeShzdHIsIG51bSkge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuICgwLCBfdG9GbG9hdDIuZGVmYXVsdCkoc3RyKSAlIHBhcnNlSW50KG51bSwgMTApID09PSAwO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNFbWFpbDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbnZhciBfbWVyZ2UgPSByZXF1aXJlKCcuL3V0aWwvbWVyZ2UnKTtcblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZSk7XG5cbnZhciBfaXNCeXRlTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0J5dGVMZW5ndGgnKTtcblxudmFyIF9pc0J5dGVMZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNCeXRlTGVuZ3RoKTtcblxudmFyIF9pc0ZRRE4gPSByZXF1aXJlKCcuL2lzRlFETicpO1xuXG52YXIgX2lzRlFETjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0ZRRE4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF9lbWFpbF9vcHRpb25zID0ge1xuICBhbGxvd19kaXNwbGF5X25hbWU6IGZhbHNlLFxuICBhbGxvd191dGY4X2xvY2FsX3BhcnQ6IHRydWUsXG4gIHJlcXVpcmVfdGxkOiB0cnVlXG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG52YXIgZGlzcGxheU5hbWUgPSAvXlthLXpcXGQhI1xcJCUmJ1xcKlxcK1xcLVxcLz1cXD9cXF5fYHtcXHx9flxcLlxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0rW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XFwuXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXFxzXSo8KC4rKT4kL2k7XG52YXIgZW1haWxVc2VyUGFydCA9IC9eW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XSskL2k7XG52YXIgcXVvdGVkRW1haWxVc2VyID0gL14oW1xcc1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2VdfChcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXSkpKiQvaTtcbnZhciBlbWFpbFVzZXJVdGY4UGFydCA9IC9eW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSskL2k7XG52YXIgcXVvdGVkRW1haWxVc2VyVXRmOCA9IC9eKFtcXHNcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdlXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXXwoXFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3ZlxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSokL2k7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1lbmFibGUgbm8tY29udHJvbC1yZWdleCAqL1xuXG5mdW5jdGlvbiBpc0VtYWlsKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfZW1haWxfb3B0aW9ucyk7XG5cbiAgaWYgKG9wdGlvbnMuYWxsb3dfZGlzcGxheV9uYW1lKSB7XG4gICAgdmFyIGRpc3BsYXlfZW1haWwgPSBzdHIubWF0Y2goZGlzcGxheU5hbWUpO1xuICAgIGlmIChkaXNwbGF5X2VtYWlsKSB7XG4gICAgICBzdHIgPSBkaXNwbGF5X2VtYWlsWzFdO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnQCcpO1xuICB2YXIgZG9tYWluID0gcGFydHMucG9wKCk7XG4gIHZhciB1c2VyID0gcGFydHMuam9pbignQCcpO1xuXG4gIHZhciBsb3dlcl9kb21haW4gPSBkb21haW4udG9Mb3dlckNhc2UoKTtcbiAgaWYgKGxvd2VyX2RvbWFpbiA9PT0gJ2dtYWlsLmNvbScgfHwgbG93ZXJfZG9tYWluID09PSAnZ29vZ2xlbWFpbC5jb20nKSB7XG4gICAgdXNlciA9IHVzZXIucmVwbGFjZSgvXFwuL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgaWYgKCEoMCwgX2lzQnl0ZUxlbmd0aDIuZGVmYXVsdCkodXNlciwgeyBtYXg6IDY0IH0pIHx8ICEoMCwgX2lzQnl0ZUxlbmd0aDIuZGVmYXVsdCkoZG9tYWluLCB7IG1heDogMjU2IH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCEoMCwgX2lzRlFETjIuZGVmYXVsdCkoZG9tYWluLCB7IHJlcXVpcmVfdGxkOiBvcHRpb25zLnJlcXVpcmVfdGxkIH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHVzZXJbMF0gPT09ICdcIicpIHtcbiAgICB1c2VyID0gdXNlci5zbGljZSgxLCB1c2VyLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBvcHRpb25zLmFsbG93X3V0ZjhfbG9jYWxfcGFydCA/IHF1b3RlZEVtYWlsVXNlclV0ZjgudGVzdCh1c2VyKSA6IHF1b3RlZEVtYWlsVXNlci50ZXN0KHVzZXIpO1xuICB9XG5cbiAgdmFyIHBhdHRlcm4gPSBvcHRpb25zLmFsbG93X3V0ZjhfbG9jYWxfcGFydCA/IGVtYWlsVXNlclV0ZjhQYXJ0IDogZW1haWxVc2VyUGFydDtcblxuICB2YXIgdXNlcl9wYXJ0cyA9IHVzZXIuc3BsaXQoJy4nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB1c2VyX3BhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFwYXR0ZXJuLnRlc3QodXNlcl9wYXJ0c1tpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRkRRTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbnZhciBfbWVyZ2UgPSByZXF1aXJlKCcuL3V0aWwvbWVyZ2UnKTtcblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X2ZxZG5fb3B0aW9ucyA9IHtcbiAgcmVxdWlyZV90bGQ6IHRydWUsXG4gIGFsbG93X3VuZGVyc2NvcmVzOiBmYWxzZSxcbiAgYWxsb3dfdHJhaWxpbmdfZG90OiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNGRFFOKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9ICgwLCBfbWVyZ2UyLmRlZmF1bHQpKG9wdGlvbnMsIGRlZmF1bHRfZnFkbl9vcHRpb25zKTtcblxuICAvKiBSZW1vdmUgdGhlIG9wdGlvbmFsIHRyYWlsaW5nIGRvdCBiZWZvcmUgY2hlY2tpbmcgdmFsaWRpdHkgKi9cbiAgaWYgKG9wdGlvbnMuYWxsb3dfdHJhaWxpbmdfZG90ICYmIHN0cltzdHIubGVuZ3RoIC0gMV0gPT09ICcuJykge1xuICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICB9XG4gIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnLicpO1xuICBpZiAob3B0aW9ucy5yZXF1aXJlX3RsZCkge1xuICAgIHZhciB0bGQgPSBwYXJ0cy5wb3AoKTtcbiAgICBpZiAoIXBhcnRzLmxlbmd0aCB8fCAhL14oW2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9fHhuW2EtejAtOS1dezIsfSkkL2kudGVzdCh0bGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAodmFyIHBhcnQsIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0ID0gcGFydHNbaV07XG4gICAgaWYgKG9wdGlvbnMuYWxsb3dfdW5kZXJzY29yZXMpIHtcbiAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoL18vZywgJycpO1xuICAgIH1cbiAgICBpZiAoIS9eW2EtelxcdTAwYTEtXFx1ZmZmZjAtOS1dKyQvaS50ZXN0KHBhcnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICgvW1xcdWZmMDEtXFx1ZmY1ZV0vLnRlc3QocGFydCkpIHtcbiAgICAgIC8vIGRpc2FsbG93IGZ1bGwtd2lkdGggY2hhcnNcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHBhcnRbMF0gPT09ICctJyB8fCBwYXJ0W3BhcnQubGVuZ3RoIC0gMV0gPT09ICctJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRmxvYXQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZmxvYXQgPSAvXig/OlstK10/KD86WzAtOV0rKSk/KD86XFwuWzAtOV0qKT8oPzpbZUVdW1xcK1xcLV0/KD86WzAtOV0rKSk/JC87XG5cbmZ1bmN0aW9uIGlzRmxvYXQoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKHN0ciA9PT0gJycgfHwgc3RyID09PSAnLicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGZsb2F0LnRlc3Qoc3RyKSAmJiAoIW9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ21pbicpIHx8IHN0ciA+PSBvcHRpb25zLm1pbikgJiYgKCFvcHRpb25zLmhhc093blByb3BlcnR5KCdtYXgnKSB8fCBzdHIgPD0gb3B0aW9ucy5tYXgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5mdWxsV2lkdGggPSB1bmRlZmluZWQ7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0Z1bGxXaWR0aDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBmdWxsV2lkdGggPSBleHBvcnRzLmZ1bGxXaWR0aCA9IC9bXlxcdTAwMjAtXFx1MDA3RVxcdUZGNjEtXFx1RkY5RlxcdUZGQTAtXFx1RkZEQ1xcdUZGRTgtXFx1RkZFRTAtOWEtekEtWl0vO1xuXG5mdW5jdGlvbiBpc0Z1bGxXaWR0aChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBmdWxsV2lkdGgudGVzdChzdHIpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaGFsZldpZHRoID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNIYWxmV2lkdGg7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaGFsZldpZHRoID0gZXhwb3J0cy5oYWxmV2lkdGggPSAvW1xcdTAwMjAtXFx1MDA3RVxcdUZGNjEtXFx1RkY5RlxcdUZGQTAtXFx1RkZEQ1xcdUZGRTgtXFx1RkZFRTAtOWEtekEtWl0vO1xuXG5mdW5jdGlvbiBpc0hhbGZXaWR0aChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBoYWxmV2lkdGgudGVzdChzdHIpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSGV4Q29sb3I7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaGV4Y29sb3IgPSAvXiM/KFswLTlBLUZdezN9fFswLTlBLUZdezZ9KSQvaTtcblxuZnVuY3Rpb24gaXNIZXhDb2xvcihzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBoZXhjb2xvci50ZXN0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0hleGFkZWNpbWFsO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhleGFkZWNpbWFsID0gL15bMC05QS1GXSskL2k7XG5cbmZ1bmN0aW9uIGlzSGV4YWRlY2ltYWwoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gaGV4YWRlY2ltYWwudGVzdChzdHIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJUDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpcHY0TWF5YmUgPSAvXihcXGR7MSwzfSlcXC4oXFxkezEsM30pXFwuKFxcZHsxLDN9KVxcLihcXGR7MSwzfSkkLztcbnZhciBpcHY2QmxvY2sgPSAvXlswLTlBLUZdezEsNH0kL2k7XG5cbmZ1bmN0aW9uIGlzSVAoc3RyKSB7XG4gIHZhciB2ZXJzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gJycgOiBhcmd1bWVudHNbMV07XG5cbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZlcnNpb24gPSBTdHJpbmcodmVyc2lvbik7XG4gIGlmICghdmVyc2lvbikge1xuICAgIHJldHVybiBpc0lQKHN0ciwgNCkgfHwgaXNJUChzdHIsIDYpO1xuICB9IGVsc2UgaWYgKHZlcnNpb24gPT09ICc0Jykge1xuICAgIGlmICghaXB2NE1heWJlLnRlc3Qoc3RyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy4nKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnRzWzNdIDw9IDI1NTtcbiAgfSBlbHNlIGlmICh2ZXJzaW9uID09PSAnNicpIHtcbiAgICB2YXIgYmxvY2tzID0gc3RyLnNwbGl0KCc6Jyk7XG4gICAgdmFyIGZvdW5kT21pc3Npb25CbG9jayA9IGZhbHNlOyAvLyBtYXJrZXIgdG8gaW5kaWNhdGUgOjpcblxuICAgIC8vIEF0IGxlYXN0IHNvbWUgT1MgYWNjZXB0IHRoZSBsYXN0IDMyIGJpdHMgb2YgYW4gSVB2NiBhZGRyZXNzXG4gICAgLy8gKGkuZS4gMiBvZiB0aGUgYmxvY2tzKSBpbiBJUHY0IG5vdGF0aW9uLCBhbmQgUkZDIDM0OTMgc2F5c1xuICAgIC8vIHRoYXQgJzo6ZmZmZjphLmIuYy5kJyBpcyB2YWxpZCBmb3IgSVB2NC1tYXBwZWQgSVB2NiBhZGRyZXNzZXMsXG4gICAgLy8gYW5kICc6OmEuYi5jLmQnIGlzIGRlcHJlY2F0ZWQsIGJ1dCBhbHNvIHZhbGlkLlxuICAgIHZhciBmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgPSBpc0lQKGJsb2Nrc1tibG9ja3MubGVuZ3RoIC0gMV0sIDQpO1xuICAgIHZhciBleHBlY3RlZE51bWJlck9mQmxvY2tzID0gZm91bmRJUHY0VHJhbnNpdGlvbkJsb2NrID8gNyA6IDg7XG5cbiAgICBpZiAoYmxvY2tzLmxlbmd0aCA+IGV4cGVjdGVkTnVtYmVyT2ZCbG9ja3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gaW5pdGlhbCBvciBmaW5hbCA6OlxuICAgIGlmIChzdHIgPT09ICc6OicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc3RyLnN1YnN0cigwLCAyKSA9PT0gJzo6Jykge1xuICAgICAgYmxvY2tzLnNoaWZ0KCk7XG4gICAgICBibG9ja3Muc2hpZnQoKTtcbiAgICAgIGZvdW5kT21pc3Npb25CbG9jayA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSAyKSA9PT0gJzo6Jykge1xuICAgICAgYmxvY2tzLnBvcCgpO1xuICAgICAgYmxvY2tzLnBvcCgpO1xuICAgICAgZm91bmRPbWlzc2lvbkJsb2NrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7ICsraSkge1xuICAgICAgLy8gdGVzdCBmb3IgYSA6OiB3aGljaCBjYW4gbm90IGJlIGF0IHRoZSBzdHJpbmcgc3RhcnQvZW5kXG4gICAgICAvLyBzaW5jZSB0aG9zZSBjYXNlcyBoYXZlIGJlZW4gaGFuZGxlZCBhYm92ZVxuICAgICAgaWYgKGJsb2Nrc1tpXSA9PT0gJycgJiYgaSA+IDAgJiYgaSA8IGJsb2Nrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmIChmb3VuZE9taXNzaW9uQmxvY2spIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG11bHRpcGxlIDo6IGluIGFkZHJlc3NcbiAgICAgICAgfVxuICAgICAgICBmb3VuZE9taXNzaW9uQmxvY2sgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgJiYgaSA9PT0gYmxvY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgLy8gaXQgaGFzIGJlZW4gY2hlY2tlZCBiZWZvcmUgdGhhdCB0aGUgbGFzdFxuICAgICAgICAvLyBibG9jayBpcyBhIHZhbGlkIElQdjQgYWRkcmVzc1xuICAgICAgfSBlbHNlIGlmICghaXB2NkJsb2NrLnRlc3QoYmxvY2tzW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZE9taXNzaW9uQmxvY2spIHtcbiAgICAgIHJldHVybiBibG9ja3MubGVuZ3RoID49IDE7XG4gICAgfVxuICAgIHJldHVybiBibG9ja3MubGVuZ3RoID09PSBleHBlY3RlZE51bWJlck9mQmxvY2tzO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVNCTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc2JuMTBNYXliZSA9IC9eKD86WzAtOV17OX1YfFswLTldezEwfSkkLztcbnZhciBpc2JuMTNNYXliZSA9IC9eKD86WzAtOV17MTN9KSQvO1xudmFyIGZhY3RvciA9IFsxLCAzXTtcblxuZnVuY3Rpb24gaXNJU0JOKHN0cikge1xuICB2YXIgdmVyc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/ICcnIDogYXJndW1lbnRzWzFdO1xuXG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2ZXJzaW9uID0gU3RyaW5nKHZlcnNpb24pO1xuICBpZiAoIXZlcnNpb24pIHtcbiAgICByZXR1cm4gaXNJU0JOKHN0ciwgMTApIHx8IGlzSVNCTihzdHIsIDEzKTtcbiAgfVxuICB2YXIgc2FuaXRpemVkID0gc3RyLnJlcGxhY2UoL1tcXHMtXSsvZywgJycpO1xuICB2YXIgY2hlY2tzdW0gPSAwO1xuICB2YXIgaSA9IHZvaWQgMDtcbiAgaWYgKHZlcnNpb24gPT09ICcxMCcpIHtcbiAgICBpZiAoIWlzYm4xME1heWJlLnRlc3Qoc2FuaXRpemVkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICBjaGVja3N1bSArPSAoaSArIDEpICogc2FuaXRpemVkLmNoYXJBdChpKTtcbiAgICB9XG4gICAgaWYgKHNhbml0aXplZC5jaGFyQXQoOSkgPT09ICdYJykge1xuICAgICAgY2hlY2tzdW0gKz0gMTAgKiAxMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tzdW0gKz0gMTAgKiBzYW5pdGl6ZWQuY2hhckF0KDkpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tzdW0gJSAxMSA9PT0gMCkge1xuICAgICAgcmV0dXJuICEhc2FuaXRpemVkO1xuICAgIH1cbiAgfSBlbHNlIGlmICh2ZXJzaW9uID09PSAnMTMnKSB7XG4gICAgaWYgKCFpc2JuMTNNYXliZS50ZXN0KHNhbml0aXplZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIGNoZWNrc3VtICs9IGZhY3RvcltpICUgMl0gKiBzYW5pdGl6ZWQuY2hhckF0KGkpO1xuICAgIH1cbiAgICBpZiAoc2FuaXRpemVkLmNoYXJBdCgxMikgLSAoMTAgLSBjaGVja3N1bSAlIDEwKSAlIDEwID09PSAwKSB7XG4gICAgICByZXR1cm4gISFzYW5pdGl6ZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSVNJTjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc2luID0gL15bQS1aXXsyfVswLTlBLVpdezl9WzAtOV0kLztcblxuZnVuY3Rpb24gaXNJU0lOKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgaWYgKCFpc2luLnRlc3Qoc3RyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBjaGVja3N1bVN0ciA9IHN0ci5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAoY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGNoYXJhY3RlciwgMzYpO1xuICB9KTtcblxuICB2YXIgc3VtID0gMDtcbiAgdmFyIGRpZ2l0ID0gdm9pZCAwO1xuICB2YXIgdG1wTnVtID0gdm9pZCAwO1xuICB2YXIgc2hvdWxkRG91YmxlID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IGNoZWNrc3VtU3RyLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgZGlnaXQgPSBjaGVja3N1bVN0ci5zdWJzdHJpbmcoaSwgaSArIDEpO1xuICAgIHRtcE51bSA9IHBhcnNlSW50KGRpZ2l0LCAxMCk7XG4gICAgaWYgKHNob3VsZERvdWJsZSkge1xuICAgICAgdG1wTnVtICo9IDI7XG4gICAgICBpZiAodG1wTnVtID49IDEwKSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW0gKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VtICs9IHRtcE51bTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3VtICs9IHRtcE51bTtcbiAgICB9XG4gICAgc2hvdWxkRG91YmxlID0gIXNob3VsZERvdWJsZTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludChzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSAxKSwgMTApID09PSAoMTAwMDAgLSBzdW0pICUgMTA7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzbzg2MDEgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBpc284NjAxLnRlc3Qoc3RyKTtcbn07XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vLyBmcm9tIGh0dHA6Ly9nb28uZ2wvMGVqSEhXXG52YXIgaXNvODYwMSA9IGV4cG9ydHMuaXNvODYwMSA9IC9eKFtcXCstXT9cXGR7NH0oPyFcXGR7Mn1cXGIpKSgoLT8pKCgwWzEtOV18MVswLTJdKShcXDMoWzEyXVxcZHwwWzEtOV18M1swMV0pKT98VyhbMC00XVxcZHw1WzAtMl0pKC0/WzEtN10pP3woMDBbMS05XXwwWzEtOV1cXGR8WzEyXVxcZHsyfXwzKFswLTVdXFxkfDZbMS02XSkpKShbVFxcc10oKChbMDFdXFxkfDJbMC0zXSkoKDo/KVswLTVdXFxkKT98MjQ6PzAwKShbXFwuLF1cXGQrKD8hOikpPyk/KFxcMTdbMC01XVxcZChbXFwuLF1cXGQrKT8pPyhbelpdfChbXFwrLV0pKFswMV1cXGR8MlswLTNdKTo/KFswLTVdXFxkKT8pPyk/KT8kLztcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzSW47XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG52YXIgX3RvU3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL3RvU3RyaW5nJyk7XG5cbnZhciBfdG9TdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9TdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0luKHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIGkgPSB2b2lkIDA7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob3B0aW9ucykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGkgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgaSkpIHtcbiAgICAgICAgYXJyYXlbaV0gPSAoMCwgX3RvU3RyaW5nMi5kZWZhdWx0KShvcHRpb25zW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5LmluZGV4T2Yoc3RyKSA+PSAwO1xuICB9IGVsc2UgaWYgKCh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob3B0aW9ucykpID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvcHRpb25zLmhhc093blByb3BlcnR5KHN0cik7XG4gIH0gZWxzZSBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuaW5kZXhPZihzdHIpID49IDA7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJbnQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaW50ID0gL14oPzpbLStdPyg/OjB8WzEtOV1bMC05XSopKSQvO1xudmFyIGludExlYWRpbmdaZXJvZXMgPSAvXlstK10/WzAtOV0rJC87XG5cbmZ1bmN0aW9uIGlzSW50KHN0ciwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gR2V0IHRoZSByZWdleCB0byB1c2UgZm9yIHRlc3RpbmcsIGJhc2VkIG9uIHdoZXRoZXJcbiAgLy8gbGVhZGluZyB6ZXJvZXMgYXJlIGFsbG93ZWQgb3Igbm90LlxuICB2YXIgcmVnZXggPSBvcHRpb25zLmhhc093blByb3BlcnR5KCdhbGxvd19sZWFkaW5nX3plcm9lcycpICYmIG9wdGlvbnMuYWxsb3dfbGVhZGluZ196ZXJvZXMgPyBpbnRMZWFkaW5nWmVyb2VzIDogaW50O1xuXG4gIC8vIENoZWNrIG1pbi9tYXhcbiAgdmFyIG1pbkNoZWNrUGFzc2VkID0gIW9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ21pbicpIHx8IHN0ciA+PSBvcHRpb25zLm1pbjtcbiAgdmFyIG1heENoZWNrUGFzc2VkID0gIW9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ21heCcpIHx8IHN0ciA8PSBvcHRpb25zLm1heDtcblxuICByZXR1cm4gcmVnZXgudGVzdChzdHIpICYmIG1pbkNoZWNrUGFzc2VkICYmIG1heENoZWNrUGFzc2VkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNKU09OO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNKU09OKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdHJ5IHtcbiAgICB2YXIgb2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgPT09ICdvYmplY3QnO1xuICB9IGNhdGNoIChlKSB7LyogaWdub3JlICovfVxuICByZXR1cm4gZmFsc2U7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc0xlbmd0aDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1yZXN0LXBhcmFtcyAqL1xuZnVuY3Rpb24gaXNMZW5ndGgoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2YXIgbWluID0gdm9pZCAwO1xuICB2YXIgbWF4ID0gdm9pZCAwO1xuICBpZiAoKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb25zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgbWluID0gb3B0aW9ucy5taW4gfHwgMDtcbiAgICBtYXggPSBvcHRpb25zLm1heDtcbiAgfSBlbHNlIHtcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eTogaXNMZW5ndGgoc3RyLCBtaW4gWywgbWF4XSlcbiAgICBtaW4gPSBhcmd1bWVudHNbMV07XG4gICAgbWF4ID0gYXJndW1lbnRzWzJdO1xuICB9XG4gIHZhciBzdXJyb2dhdGVQYWlycyA9IHN0ci5tYXRjaCgvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXS9nKSB8fCBbXTtcbiAgdmFyIGxlbiA9IHN0ci5sZW5ndGggLSBzdXJyb2dhdGVQYWlycy5sZW5ndGg7XG4gIHJldHVybiBsZW4gPj0gbWluICYmICh0eXBlb2YgbWF4ID09PSAndW5kZWZpbmVkJyB8fCBsZW4gPD0gbWF4KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTG93ZXJjYXNlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNMb3dlcmNhc2Uoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3RyID09PSBzdHIudG9Mb3dlckNhc2UoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTUFDQWRkcmVzcztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBtYWNBZGRyZXNzID0gL14oWzAtOWEtZkEtRl1bMC05YS1mQS1GXTopezV9KFswLTlhLWZBLUZdWzAtOWEtZkEtRl0pJC87XG5cbmZ1bmN0aW9uIGlzTUFDQWRkcmVzcyhzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBtYWNBZGRyZXNzLnRlc3Qoc3RyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTUQ1O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG1kNSA9IC9eW2EtZjAtOV17MzJ9JC87XG5cbmZ1bmN0aW9uIGlzTUQ1KHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIG1kNS50ZXN0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc01vYmlsZVBob25lO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xudmFyIHBob25lcyA9IHtcbiAgJ2FyLURaJzogL14oXFwrPzIxM3wwKSg1fDZ8NylcXGR7OH0kLyxcbiAgJ2FyLVNZJzogL14oIT8oXFwrPzk2Myl8MCk/OVxcZHs4fSQvLFxuICAnYXItU0EnOiAvXighPyhcXCs/OTY2KXwwKT81XFxkezh9JC8sXG4gICdlbi1VUyc6IC9eKFxcKz8xKT9bMi05XVxcZHsyfVsyLTldKD8hMTEpXFxkezZ9JC8sXG4gICdjcy1DWic6IC9eKFxcKz80MjApPyA/WzEtOV1bMC05XXsyfSA/WzAtOV17M30gP1swLTldezN9JC8sXG4gICdkZS1ERSc6IC9eKFxcKz80OVsgXFwuXFwtXSk/KFtcXChdezF9WzAtOV17MSw2fVtcXCldKT8oWzAtOSBcXC5cXC1cXC9dezMsMjB9KSgoeHxleHR8ZXh0ZW5zaW9uKVsgXT9bMC05XXsxLDR9KT8kLyxcbiAgJ2RhLURLJzogL14oXFwrPzQ1KT8oXFxkezh9KSQvLFxuICAnZWwtR1InOiAvXihcXCs/MzApPyg2OVxcZHs4fSkkLyxcbiAgJ2VuLUFVJzogL14oXFwrPzYxfDApNFxcZHs4fSQvLFxuICAnZW4tR0InOiAvXihcXCs/NDR8MCk3XFxkezl9JC8sXG4gICdlbi1ISyc6IC9eKFxcKz84NTJcXC0/KT9bNTY5XVxcZHszfVxcLT9cXGR7NH0kLyxcbiAgJ2VuLUlOJzogL14oXFwrPzkxfDApP1s3ODldXFxkezl9JC8sXG4gICdlbi1OWic6IC9eKFxcKz82NHwwKTJcXGR7Nyw5fSQvLFxuICAnZW4tWkEnOiAvXihcXCs/Mjd8MClcXGR7OX0kLyxcbiAgJ2VuLVpNJzogL14oXFwrPzI2KT8wOVs1NjddXFxkezd9JC8sXG4gICdlcy1FUyc6IC9eKFxcKz8zNCk/KDZcXGR7MX18N1sxMjM0XSlcXGR7N30kLyxcbiAgJ2ZpLUZJJzogL14oXFwrPzM1OHwwKVxccz8oNCgwfDF8Mnw0fDUpP3w1MClcXHM/KFxcZFxccz8pezQsOH1cXGQkLyxcbiAgJ2ZyLUZSJzogL14oXFwrPzMzfDApWzY3XVxcZHs4fSQvLFxuICAnaHUtSFUnOiAvXihcXCs/MzYpKDIwfDMwfDcwKVxcZHs3fSQvLFxuICAnaXQtSVQnOiAvXihcXCs/MzkpP1xccz8zXFxkezJ9ID9cXGR7Niw3fSQvLFxuICAnamEtSlAnOiAvXihcXCs/ODF8MClcXGR7MSw0fVsgXFwtXT9cXGR7MSw0fVsgXFwtXT9cXGR7NH0kLyxcbiAgJ21zLU1ZJzogL14oXFwrPzY/MDEpezF9KChbMTQ1XXsxfShcXC18XFxzKT9cXGR7Nyw4fSl8KFsyMzY3ODldezF9KFxcc3xcXC0pP1xcZHs3fSkpJC8sXG4gICduYi1OTyc6IC9eKFxcKz80Nyk/WzQ5XVxcZHs3fSQvLFxuICAnbmwtQkUnOiAvXihcXCs/MzJ8MCk0P1xcZHs4fSQvLFxuICAnbm4tTk8nOiAvXihcXCs/NDcpP1s0OV1cXGR7N30kLyxcbiAgJ3BsLVBMJzogL14oXFwrPzQ4KT8gP1s1LThdXFxkID9cXGR7M30gP1xcZHsyfSA/XFxkezJ9JC8sXG4gICdwdC1CUic6IC9eKFxcKz81NXwwKVxcLT9bMS05XXsyfVxcLT9bMi05XXsxfVxcZHszLDR9XFwtP1xcZHs0fSQvLFxuICAncHQtUFQnOiAvXihcXCs/MzUxKT85WzEyMzZdXFxkezd9JC8sXG4gICdydS1SVSc6IC9eKFxcKz83fDgpPzlcXGR7OX0kLyxcbiAgJ3NyLVJTJzogL14oXFwrMzgxNnwwNilbLSBcXGRdezUsOX0kLyxcbiAgJ3RyLVRSJzogL14oXFwrPzkwfDApPzVcXGR7OX0kLyxcbiAgJ3ZpLVZOJzogL14oXFwrPzg0fDApPygoMSgyKFswLTldKXw2KFsyLTldKXw4OHw5OSkpfCg5KCg/ITUpWzAtOV0pKSkoWzAtOV17N30pJC8sXG4gICd6aC1DTic6IC9eKFxcKz8wPzg2XFwtPyk/MVszNDU3ODldXFxkezl9JC8sXG4gICd6aC1UVyc6IC9eKFxcKz84ODZcXC0/fDApPzlcXGR7OH0kL1xufTtcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuXG4vLyBhbGlhc2VzXG5waG9uZXNbJ2VuLUNBJ10gPSBwaG9uZXNbJ2VuLVVTJ107XG5waG9uZXNbJ2ZyLUJFJ10gPSBwaG9uZXNbJ25sLUJFJ107XG5cbmZ1bmN0aW9uIGlzTW9iaWxlUGhvbmUoc3RyLCBsb2NhbGUpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIGlmIChsb2NhbGUgaW4gcGhvbmVzKSB7XG4gICAgcmV0dXJuIHBob25lc1tsb2NhbGVdLnRlc3Qoc3RyKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc01vbmdvSWQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG52YXIgX2lzSGV4YWRlY2ltYWwgPSByZXF1aXJlKCcuL2lzSGV4YWRlY2ltYWwnKTtcblxudmFyIF9pc0hleGFkZWNpbWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSGV4YWRlY2ltYWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc01vbmdvSWQoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gKDAsIF9pc0hleGFkZWNpbWFsMi5kZWZhdWx0KShzdHIpICYmIHN0ci5sZW5ndGggPT09IDI0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNNdWx0aWJ5dGU7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG52YXIgbXVsdGlieXRlID0gL1teXFx4MDAtXFx4N0ZdLztcbi8qIGVzbGludC1lbmFibGUgbm8tY29udHJvbC1yZWdleCAqL1xuXG5mdW5jdGlvbiBpc011bHRpYnl0ZShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBtdWx0aWJ5dGUudGVzdChzdHIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNOdWxsO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNOdWxsKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ci5sZW5ndGggPT09IDA7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc051bWVyaWM7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbnVtZXJpYyA9IC9eWy0rXT9bMC05XSskLztcblxuZnVuY3Rpb24gaXNOdW1lcmljKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIG51bWVyaWMudGVzdChzdHIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNTdXJyb2dhdGVQYWlyO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHN1cnJvZ2F0ZVBhaXIgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXS87XG5cbmZ1bmN0aW9uIGlzU3Vycm9nYXRlUGFpcihzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdXJyb2dhdGVQYWlyLnRlc3Qoc3RyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVVJMO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxudmFyIF9pc0ZRRE4gPSByZXF1aXJlKCcuL2lzRlFETicpO1xuXG52YXIgX2lzRlFETjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0ZRRE4pO1xuXG52YXIgX2lzSVAgPSByZXF1aXJlKCcuL2lzSVAnKTtcblxudmFyIF9pc0lQMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSVApO1xuXG52YXIgX21lcmdlID0gcmVxdWlyZSgnLi91dGlsL21lcmdlJyk7XG5cbnZhciBfbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdF91cmxfb3B0aW9ucyA9IHtcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZnRwJ10sXG4gIHJlcXVpcmVfdGxkOiB0cnVlLFxuICByZXF1aXJlX3Byb3RvY29sOiBmYWxzZSxcbiAgcmVxdWlyZV9ob3N0OiB0cnVlLFxuICByZXF1aXJlX3ZhbGlkX3Byb3RvY29sOiB0cnVlLFxuICBhbGxvd191bmRlcnNjb3JlczogZmFsc2UsXG4gIGFsbG93X3RyYWlsaW5nX2RvdDogZmFsc2UsXG4gIGFsbG93X3Byb3RvY29sX3JlbGF0aXZlX3VybHM6IGZhbHNlXG59O1xuXG52YXIgd3JhcHBlZF9pcHY2ID0gL15cXFsoW15cXF1dKylcXF0oPzo6KFswLTldKykpPyQvO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gY2hlY2tIb3N0KGhvc3QsIG1hdGNoZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG1hdGNoID0gbWF0Y2hlc1tpXTtcbiAgICBpZiAoaG9zdCA9PT0gbWF0Y2ggfHwgaXNSZWdFeHAobWF0Y2gpICYmIG1hdGNoLnRlc3QoaG9zdCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzVVJMKHVybCwgb3B0aW9ucykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkodXJsKTtcbiAgaWYgKCF1cmwgfHwgdXJsLmxlbmd0aCA+PSAyMDgzIHx8IC9cXHMvLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodXJsLmluZGV4T2YoJ21haWx0bzonKSA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF91cmxfb3B0aW9ucyk7XG4gIHZhciBwcm90b2NvbCA9IHZvaWQgMCxcbiAgICAgIGF1dGggPSB2b2lkIDAsXG4gICAgICBob3N0ID0gdm9pZCAwLFxuICAgICAgaG9zdG5hbWUgPSB2b2lkIDAsXG4gICAgICBwb3J0ID0gdm9pZCAwLFxuICAgICAgcG9ydF9zdHIgPSB2b2lkIDAsXG4gICAgICBzcGxpdCA9IHZvaWQgMCxcbiAgICAgIGlwdjYgPSB2b2lkIDA7XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJyMnKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcblxuICBzcGxpdCA9IHVybC5zcGxpdCgnPycpO1xuICB1cmwgPSBzcGxpdC5zaGlmdCgpO1xuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCc6Ly8nKTtcbiAgaWYgKHNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICBwcm90b2NvbCA9IHNwbGl0LnNoaWZ0KCk7XG4gICAgaWYgKG9wdGlvbnMucmVxdWlyZV92YWxpZF9wcm90b2NvbCAmJiBvcHRpb25zLnByb3RvY29scy5pbmRleE9mKHByb3RvY29sKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5yZXF1aXJlX3Byb3RvY29sKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMuYWxsb3dfcHJvdG9jb2xfcmVsYXRpdmVfdXJscyAmJiB1cmwuc3Vic3RyKDAsIDIpID09PSAnLy8nKSB7XG4gICAgc3BsaXRbMF0gPSB1cmwuc3Vic3RyKDIpO1xuICB9XG4gIHVybCA9IHNwbGl0LmpvaW4oJzovLycpO1xuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCcvJyk7XG4gIHVybCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgaWYgKHVybCA9PT0gJycgJiYgIW9wdGlvbnMucmVxdWlyZV9ob3N0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzcGxpdCA9IHVybC5zcGxpdCgnQCcpO1xuICBpZiAoc3BsaXQubGVuZ3RoID4gMSkge1xuICAgIGF1dGggPSBzcGxpdC5zaGlmdCgpO1xuICAgIGlmIChhdXRoLmluZGV4T2YoJzonKSA+PSAwICYmIGF1dGguc3BsaXQoJzonKS5sZW5ndGggPiAyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGhvc3RuYW1lID0gc3BsaXQuam9pbignQCcpO1xuXG4gIHBvcnRfc3RyID0gaXB2NiA9IG51bGw7XG4gIHZhciBpcHY2X21hdGNoID0gaG9zdG5hbWUubWF0Y2god3JhcHBlZF9pcHY2KTtcbiAgaWYgKGlwdjZfbWF0Y2gpIHtcbiAgICBob3N0ID0gJyc7XG4gICAgaXB2NiA9IGlwdjZfbWF0Y2hbMV07XG4gICAgcG9ydF9zdHIgPSBpcHY2X21hdGNoWzJdIHx8IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgc3BsaXQgPSBob3N0bmFtZS5zcGxpdCgnOicpO1xuICAgIGhvc3QgPSBzcGxpdC5zaGlmdCgpO1xuICAgIGlmIChzcGxpdC5sZW5ndGgpIHtcbiAgICAgIHBvcnRfc3RyID0gc3BsaXQuam9pbignOicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwb3J0X3N0ciAhPT0gbnVsbCkge1xuICAgIHBvcnQgPSBwYXJzZUludChwb3J0X3N0ciwgMTApO1xuICAgIGlmICghL15bMC05XSskLy50ZXN0KHBvcnRfc3RyKSB8fCBwb3J0IDw9IDAgfHwgcG9ydCA+IDY1NTM1KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKCEoMCwgX2lzSVAyLmRlZmF1bHQpKGhvc3QpICYmICEoMCwgX2lzRlFETjIuZGVmYXVsdCkoaG9zdCwgb3B0aW9ucykgJiYgKCFpcHY2IHx8ICEoMCwgX2lzSVAyLmRlZmF1bHQpKGlwdjYsIDYpKSAmJiBob3N0ICE9PSAnbG9jYWxob3N0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhvc3QgPSBob3N0IHx8IGlwdjY7XG5cbiAgaWYgKG9wdGlvbnMuaG9zdF93aGl0ZWxpc3QgJiYgIWNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3Rfd2hpdGVsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAob3B0aW9ucy5ob3N0X2JsYWNrbGlzdCAmJiBjaGVja0hvc3QoaG9zdCwgb3B0aW9ucy5ob3N0X2JsYWNrbGlzdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVVVJRDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB1dWlkID0ge1xuICAzOiAvXlswLTlBLUZdezh9LVswLTlBLUZdezR9LTNbMC05QS1GXXszfS1bMC05QS1GXXs0fS1bMC05QS1GXXsxMn0kL2ksXG4gIDQ6IC9eWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tNFswLTlBLUZdezN9LVs4OUFCXVswLTlBLUZdezN9LVswLTlBLUZdezEyfSQvaSxcbiAgNTogL15bMC05QS1GXXs4fS1bMC05QS1GXXs0fS01WzAtOUEtRl17M30tWzg5QUJdWzAtOUEtRl17M30tWzAtOUEtRl17MTJ9JC9pLFxuICBhbGw6IC9eWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17NH0tWzAtOUEtRl17MTJ9JC9pXG59O1xuXG5mdW5jdGlvbiBpc1VVSUQoc3RyKSB7XG4gIHZhciB2ZXJzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gJ2FsbCcgOiBhcmd1bWVudHNbMV07XG5cbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBwYXR0ZXJuID0gdXVpZFt2ZXJzaW9uXTtcbiAgcmV0dXJuIHBhdHRlcm4gJiYgcGF0dGVybi50ZXN0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1VwcGVyY2FzZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzVXBwZXJjYXNlKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ciA9PT0gc3RyLnRvVXBwZXJDYXNlKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1ZhcmlhYmxlV2lkdGg7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG52YXIgX2lzRnVsbFdpZHRoID0gcmVxdWlyZSgnLi9pc0Z1bGxXaWR0aCcpO1xuXG52YXIgX2lzSGFsZldpZHRoID0gcmVxdWlyZSgnLi9pc0hhbGZXaWR0aCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc1ZhcmlhYmxlV2lkdGgoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gX2lzRnVsbFdpZHRoLmZ1bGxXaWR0aC50ZXN0KHN0cikgJiYgX2lzSGFsZldpZHRoLmhhbGZXaWR0aC50ZXN0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1doaXRlbGlzdGVkO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNXaGl0ZWxpc3RlZChzdHIsIGNoYXJzKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBmb3IgKHZhciBpID0gc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGNoYXJzLmluZGV4T2Yoc3RyW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsdHJpbTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGx0cmltKHN0ciwgY2hhcnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBwYXR0ZXJuID0gY2hhcnMgPyBuZXcgUmVnRXhwKCdeWycgKyBjaGFycyArICddKycsICdnJykgOiAvXlxccysvZztcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKHBhdHRlcm4sICcnKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IG1hdGNoZXM7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBtYXRjaGVzKHN0ciwgcGF0dGVybiwgbW9kaWZpZXJzKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHBhdHRlcm4pICE9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKHBhdHRlcm4sIG1vZGlmaWVycyk7XG4gIH1cbiAgcmV0dXJuIHBhdHRlcm4udGVzdChzdHIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbm9ybWFsaXplRW1haWw7XG5cbnZhciBfaXNFbWFpbCA9IHJlcXVpcmUoJy4vaXNFbWFpbCcpO1xuXG52YXIgX2lzRW1haWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNFbWFpbCk7XG5cbnZhciBfbWVyZ2UgPSByZXF1aXJlKCcuL3V0aWwvbWVyZ2UnKTtcblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X25vcm1hbGl6ZV9lbWFpbF9vcHRpb25zID0ge1xuICBsb3dlcmNhc2U6IHRydWUsXG4gIHJlbW92ZV9kb3RzOiB0cnVlLFxuICByZW1vdmVfZXh0ZW5zaW9uOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVFbWFpbChlbWFpbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9ub3JtYWxpemVfZW1haWxfb3B0aW9ucyk7XG4gIGlmICghKDAsIF9pc0VtYWlsMi5kZWZhdWx0KShlbWFpbCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhcnRzID0gZW1haWwuc3BsaXQoJ0AnLCAyKTtcbiAgcGFydHNbMV0gPSBwYXJ0c1sxXS50b0xvd2VyQ2FzZSgpO1xuICBpZiAocGFydHNbMV0gPT09ICdnbWFpbC5jb20nIHx8IHBhcnRzWzFdID09PSAnZ29vZ2xlbWFpbC5jb20nKSB7XG4gICAgaWYgKG9wdGlvbnMucmVtb3ZlX2V4dGVuc2lvbikge1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5zcGxpdCgnKycpWzBdO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5yZW1vdmVfZG90cykge1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXC4vZywgJycpO1xuICAgIH1cbiAgICBpZiAoIXBhcnRzWzBdLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgcGFydHNbMV0gPSAnZ21haWwuY29tJztcbiAgfSBlbHNlIGlmIChvcHRpb25zLmxvd2VyY2FzZSkge1xuICAgIHBhcnRzWzBdID0gcGFydHNbMF0udG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gcGFydHMuam9pbignQCcpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcnRyaW07XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBydHJpbShzdHIsIGNoYXJzKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2YXIgcGF0dGVybiA9IGNoYXJzID8gbmV3IFJlZ0V4cCgnWycgKyBjaGFycyArICddJykgOiAvXFxzLztcblxuICB2YXIgaWR4ID0gc3RyLmxlbmd0aCAtIDE7XG4gIHdoaWxlIChpZHggPj0gMCAmJiBwYXR0ZXJuLnRlc3Qoc3RyW2lkeF0pKSB7XG4gICAgaWR4LS07XG4gIH1cblxuICByZXR1cm4gaWR4IDwgc3RyLmxlbmd0aCA/IHN0ci5zdWJzdHIoMCwgaWR4ICsgMSkgOiBzdHI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzdHJpcExvdztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbnZhciBfYmxhY2tsaXN0ID0gcmVxdWlyZSgnLi9ibGFja2xpc3QnKTtcblxudmFyIF9ibGFja2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmxhY2tsaXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3RyaXBMb3coc3RyLCBrZWVwX25ld19saW5lcykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIGNoYXJzID0ga2VlcF9uZXdfbGluZXMgPyAnXFxcXHgwMC1cXFxceDA5XFxcXHgwQlxcXFx4MENcXFxceDBFLVxcXFx4MUZcXFxceDdGJyA6ICdcXFxceDAwLVxcXFx4MUZcXFxceDdGJztcbiAgcmV0dXJuICgwLCBfYmxhY2tsaXN0Mi5kZWZhdWx0KShzdHIsIGNoYXJzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvQm9vbGVhbjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRvQm9vbGVhbihzdHIsIHN0cmljdCkge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgaWYgKHN0cmljdCkge1xuICAgIHJldHVybiBzdHIgPT09ICcxJyB8fCBzdHIgPT09ICd0cnVlJztcbiAgfVxuICByZXR1cm4gc3RyICE9PSAnMCcgJiYgc3RyICE9PSAnZmFsc2UnICYmIHN0ciAhPT0gJyc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0b0RhdGU7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0b0RhdGUoZGF0ZSkge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoZGF0ZSk7XG4gIGRhdGUgPSBEYXRlLnBhcnNlKGRhdGUpO1xuICByZXR1cm4gIWlzTmFOKGRhdGUpID8gbmV3IERhdGUoZGF0ZSkgOiBudWxsO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9GbG9hdDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRvRmxvYXQoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gcGFyc2VGbG9hdChzdHIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9JbnQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0b0ludChzdHIsIHJhZGl4KSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gcGFyc2VJbnQoc3RyLCByYWRpeCB8fCAxMCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0cmltO1xuXG52YXIgX3J0cmltID0gcmVxdWlyZSgnLi9ydHJpbScpO1xuXG52YXIgX3J0cmltMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3J0cmltKTtcblxudmFyIF9sdHJpbSA9IHJlcXVpcmUoJy4vbHRyaW0nKTtcblxudmFyIF9sdHJpbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sdHJpbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRyaW0oc3RyLCBjaGFycykge1xuICByZXR1cm4gKDAsIF9ydHJpbTIuZGVmYXVsdCkoKDAsIF9sdHJpbTIuZGVmYXVsdCkoc3RyLCBjaGFycyksIGNoYXJzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmVzY2FwZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHVuZXNjYXBlKHN0cikge1xuICAgICAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyZhbXA7L2csICcmJykucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpLnJlcGxhY2UoLyYjeDI3Oy9nLCBcIidcIikucmVwbGFjZSgvJmx0Oy9nLCAnPCcpLnJlcGxhY2UoLyZndDsvZywgJz4nKS5yZXBsYWNlKC8mI3gyRjsvZywgJy8nKS5yZXBsYWNlKC8mIzk2Oy9nLCAnYCcpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYXNzZXJ0U3RyaW5nO1xuZnVuY3Rpb24gYXNzZXJ0U3RyaW5nKGlucHV0KSB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcyBsaWJyYXJ5ICh2YWxpZGF0b3IuanMpIHZhbGlkYXRlcyBzdHJpbmdzIG9ubHknKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWVyZ2U7XG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgdmFyIG9iaiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICB2YXIgZGVmYXVsdHMgPSBhcmd1bWVudHNbMV07XG5cbiAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9ialtrZXldID0gZGVmYXVsdHNba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRvU3RyaW5nO1xuZnVuY3Rpb24gdG9TdHJpbmcoaW5wdXQpIHtcbiAgaWYgKCh0eXBlb2YgaW5wdXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGlucHV0KSkgPT09ICdvYmplY3QnICYmIGlucHV0ICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dC50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5wdXQgPSBpbnB1dC50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dCA9ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpbnB1dCA9PT0gbnVsbCB8fCB0eXBlb2YgaW5wdXQgPT09ICd1bmRlZmluZWQnIHx8IGlzTmFOKGlucHV0KSAmJiAhaW5wdXQubGVuZ3RoKSB7XG4gICAgaW5wdXQgPSAnJztcbiAgfVxuICByZXR1cm4gU3RyaW5nKGlucHV0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdoaXRlbGlzdDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHdoaXRlbGlzdChzdHIsIGNoYXJzKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cCgnW14nICsgY2hhcnMgKyAnXSsnLCAnZycpLCAnJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJ2YXIgdmFsaWRhdG9yID0gcmVxdWlyZSgnLi4vLi4vbWlzYy92YWxpZGF0ZScpO1xuXG4vLyBnZXQgZWxlbWVudCByZWZlcmVuY2VzXG52YXIgbG9naW5Gb3JtRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXZfbG9naW5fZm9ybVwiKTtcbnZhciBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luX2Zvcm1cIik7XG52YXIgbG9naW5TdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luX2Zvcm1fc3VibWl0XCIpO1xuXG52YXIgY3JlYXRlRm9ybURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2X2NyZWF0ZV9mb3JtXCIpO1xudmFyIGNyZWF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9mb3JtXCIpO1xudmFyIGNyZWF0ZVN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlX2Zvcm1fc3VibWl0XCIpO1xuXG52YXIgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5fdG9nZ2xlX2Zvcm1zXCIpO1xuXG4vLyBpbml0aWFsIHZpZXcgc3RhdGVcbmxvZ2luRm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuY3JlYXRlRm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbmxvZ2luRm9ybS5lbWFpbC5wbGFjZWhvbGRlciA9IFwiZW1haWxAZXhhbXBsZS5jb21cIlxuY3JlYXRlRm9ybS5lbWFpbC5wbGFjZWhvbGRlciA9IFwiZW1haWxAZXhhbXBsZS5jb21cIlxuXG4vLyBhZGQgbGlzdGVuZXJzXG5sb2dpblN1Ym1pdC5vbmNsaWNrID0gdmFsaWRhdGVMb2dpbkZvcm07XG5jcmVhdGVTdWJtaXQub25jbGljayA9IHZhbGlkYXRlQ3JlYXRlRm9ybTtcbnRvZ2dsZUJ1dHRvbi5vbmNsaWNrID0gdG9nZ2xlRm9ybXM7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ3JlYXRlRm9ybSgpe1xuICBjbGVhckVycm9ycygpO1xuICAvLyByZXR1cm4gZmFsc2U7XG4gIHZhciBlbWFpbCA9IGNyZWF0ZUZvcm0uZW1haWwudmFsdWU7XG4gIHZhciBwYXNzMSA9IGNyZWF0ZUZvcm0ucGFzczEudmFsdWU7XG4gIHZhciBwYXNzMiA9IGNyZWF0ZUZvcm0ucGFzczIudmFsdWU7XG4gIHZhciBlcnJvcnMgPSBbXTtcblxuICB2YXIgdmFsaWRFbWFpbCA9IHZhbGlkYXRvci5pc1ZhbGlkRW1haWwoZW1haWwpO1xuICB2YXIgcHdkU2FtZSA9IHBhc3MxID09PSBwYXNzMjtcbiAgaWYgKCF2YWxpZEVtYWlsKXtcbiAgICBlcnJvcnMucHVzaChcIkludmFsaWQgZW1haWwgYWRkcmVzc1wiKTtcbiAgfVxuICBpZighcHdkU2FtZSl7XG4gICAgZXJyb3JzLnB1c2goXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xuICB9XG5cbiAgaWYoZXJyb3JzLmxlbmd0aCA+IDApe1xuICAgIHNob3dFcnJvcnMoZXJyb3JzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbWluUGFzc0xlbmd0aCA9IDg7XG4gIHZhciB2YWxpZFB3ZCA9IHZhbGlkYXRvci5pc1ZhbGlkUGFzc3dvcmQocGFzczEsIG1pblBhc3NMZW5ndGgpO1xuXG4gIGlmKCF2YWxpZFB3ZCl7XG4gICAgZXJyb3JzLnB1c2goXCJJbnZhbGlkIHBhc3N3b3JkOiBtdXN0IGJlIGFscGhhbnVtZXJpYyBhbmQgbG9uZ2VyIHRoYW4gXCIgKyBtaW5QYXNzTGVuZ3RoKTtcbiAgfVxuXG4gIGlmKGVycm9ycy5sZW5ndGggPiAwKXtcbiAgICBzaG93RXJyb3JzKGVycm9ycyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbWFkZSBpdCB0aHJvdWdoIGFsbCBjaGVja3MsIHZhbHVlcyBhcmUgdmFsaWQgYW5kIGZvcm0gc2hvdWxkIGJlIHN1Ym1pdHRlZC5cbiAgY29uc29sZS5sb2coXCJDcmVhdGUgRm9ybSBTdWJtaXR0ZWRcIik7XG4gIGNyZWF0ZUZvcm0uc3VibWl0KCk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTG9naW5Gb3JtKCl7XG4gIGNsZWFyRXJyb3JzKCk7XG4gIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmZvcm1zW1wibG9naW5fZm9ybVwiXSlcbiAgY29uc29sZS5sb2coXCJ2YWxpZGF0aW5nIGxvZ2luIGZvcm1cIik7XG4gIHZhciBlbWFpbCA9IGxvZ2luRm9ybS51c2VybmFtZS52YWx1ZTtcbiAgdmFyIHBhc3MgPSBsb2dpbkZvcm0ucGFzc3dvcmQudmFsdWU7XG4gIGNvbnNvbGUubG9nKFwiZm9ybSB2YWx1ZXMgLSBcIiArIGVtYWlsICsgXCIsIFwiICsgcGFzcyk7XG4gIHZhciB2YWxpZEVtYWlsID0gdmFsaWRhdG9yLmlzVmFsaWRFbWFpbChlbWFpbCk7XG4gIHZhciB2YWxpZFBhc3MgPSB2YWxpZGF0b3IuaXNWYWxpZFBhc3N3b3JkKHBhc3MpO1xuICB2YXIgdmFsaWRMb2dpbiA9IHZhbGlkRW1haWwgJiYgdmFsaWRQYXNzO1xuXG4gIGlmKHZhbGlkTG9naW4pe1xuICAgICAgbG9naW5Gb3JtLnN1Ym1pdCgpO1xuICAgICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVycm9ycyA9IFtdXG5cbiAgaWYoIXZhbGlkRW1haWwpe1xuICAgIGVycm9ycy5wdXNoKFwiSW52YWxpZCBFbWFpbCBBZGRyZXNzXCIpO1xuICB9XG4gIGlmKCF2YWxpZFBhc3Mpe1xuICAgIGVycm9ycy5wdXNoKFwiSW52YWxpZCBQYXNzd29yZFwiKTtcbiAgfVxuICBpZihlcnJvcnMubGVuZ3RoID4gMCl7XG4gICAgc2hvd0Vycm9ycyhlcnJvcnMpO1xuICB9XG4gIHJldHVybiB2YWxpZEVtYWlsICYmIHZhbGlkUGFzcztcbn1cblxuZnVuY3Rpb24gc2hvd0Vycm9ycyhlcnJvcnMpe1xuICB2YXIgZXJyb3JQYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yc1wiKTtcbiAgY2xlYXJFcnJvcnMoKTtcbiAgdmFyIGVycm9yVGV4dCA9IFwiXCI7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSsrKXtcbiAgICBlcnJvclRleHQgKz0gXCI8bGk+XCIgKyBlcnJvcnNbaV0gKyBcIjwvbGk+XCJcbiAgfVxuICBlcnJvclBhcmFncmFwaC5pbm5lckhUTUwgPSBlcnJvclRleHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRXJyb3JzKCl7XG4gIHZhciBlcnJvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yc1wiKTtcbiAgZXJyb3JzLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUZvcm1zKCl7XG4gIHZhciBmb3JtUmF5ID0gW2xvZ2luRm9ybURpdiwgY3JlYXRlRm9ybURpdl1cbiAgZm9yKHZhciBpID0gMDsgaSA8IGZvcm1SYXkubGVuZ3RoOyBpKyspe1xuICAgIHZhciBmb3JtID0gZm9ybVJheVtpXTtcbiAgICBpZihmb3JtLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpe1xuICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1lbHNle1xuICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG59XG4iLCJ2YXIgdmFsaWRhdG9yID0gcmVxdWlyZSgndmFsaWRhdG9yJyk7XG5cbmV4cG9ydHMuaXNWYWxpZEVtYWlsID0gZnVuY3Rpb24oZW1haWwpe1xuICByZXR1cm4gdmFsaWRhdG9yLmlzRW1haWwoZW1haWwpO1xufVxuXG5leHBvcnRzLmlzVmFsaWRQYXNzd29yZCA9IGZ1bmN0aW9uKHB3ZCwgbWluTGVuZ3RoKXtcbiAgaWYoIW1pbkxlbmd0aCl7XG4gICAgbWluTGVuZ3RoID0gODtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBwd2QubGVuZ3RoO1xuICB2YXIgdmFsaWRMZW5ndGggPSBsZW5ndGggPj0gbWluTGVuZ3RoO1xuXG4gIHZhciBpc0FscGhhTnVtID0gdmFsaWRhdG9yLmlzQWxwaGFudW1lcmljKHB3ZCk7XG5cbiAgaWYodmFsaWRMZW5ndGggJiYgaXNBbHBoYU51bSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl19
