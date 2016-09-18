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
  console.log(loginForm);
  var email = loginForm.email.value;
  var pass = loginForm.pass.value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni40LjAvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2FscGhhLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvYmxhY2tsaXN0LmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvY29udGFpbnMuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9lcXVhbHMuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9lc2NhcGUuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0FmdGVyLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNBbHBoYS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQWxwaGFudW1lcmljLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNBc2NpaS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzQmFzZTY0LmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNCZWZvcmUuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0Jvb2xlYW4uanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0J5dGVMZW5ndGguanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0NyZWRpdENhcmQuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0N1cnJlbmN5LmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNEYXRhVVJJLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNEYXRlLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNEZWNpbWFsLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNEaXZpc2libGVCeS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzRW1haWwuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0ZRRE4uanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0Zsb2F0LmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNGdWxsV2lkdGguanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0hhbGZXaWR0aC5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSGV4Q29sb3IuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0hleGFkZWNpbWFsLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNJUC5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNCTi5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNJTi5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSVNPODYwMS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSW4uanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc0ludC5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzSlNPTi5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNMb3dlcmNhc2UuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc01BQ0FkZHJlc3MuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc01ENS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTW9iaWxlUGhvbmUuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc01vbmdvSWQuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc011bHRpYnl0ZS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTnVsbC5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzTnVtZXJpYy5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzU3Vycm9nYXRlUGFpci5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL2lzVVJMLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNVVUlELmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvaXNVcHBlcmNhc2UuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1ZhcmlhYmxlV2lkdGguanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9pc1doaXRlbGlzdGVkLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvbHRyaW0uanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9tYXRjaGVzLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvbm9ybWFsaXplRW1haWwuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi9ydHJpbS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3N0cmlwTG93LmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdG9Cb29sZWFuLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdG9EYXRlLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdG9GbG9hdC5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3RvSW50LmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdHJpbS5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3VuZXNjYXBlLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdXRpbC9hc3NlcnRTdHJpbmcuanMiLCJub2RlX21vZHVsZXMvdmFsaWRhdG9yL2xpYi91dGlsL21lcmdlLmpzIiwibm9kZV9tb2R1bGVzL3ZhbGlkYXRvci9saWIvdXRpbC90b1N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy92YWxpZGF0b3IvbGliL3doaXRlbGlzdC5qcyIsInN0YXRpYy9qcy9hdXRoL2xvZ2luL2xvZ2luLmpzIiwic3RhdGljL2pzL21pc2MvdmFsaWRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3RvRGF0ZSA9IHJlcXVpcmUoJy4vbGliL3RvRGF0ZScpO1xuXG52YXIgX3RvRGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0RhdGUpO1xuXG52YXIgX3RvRmxvYXQgPSByZXF1aXJlKCcuL2xpYi90b0Zsb2F0Jyk7XG5cbnZhciBfdG9GbG9hdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0Zsb2F0KTtcblxudmFyIF90b0ludCA9IHJlcXVpcmUoJy4vbGliL3RvSW50Jyk7XG5cbnZhciBfdG9JbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9JbnQpO1xuXG52YXIgX3RvQm9vbGVhbiA9IHJlcXVpcmUoJy4vbGliL3RvQm9vbGVhbicpO1xuXG52YXIgX3RvQm9vbGVhbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0Jvb2xlYW4pO1xuXG52YXIgX2VxdWFscyA9IHJlcXVpcmUoJy4vbGliL2VxdWFscycpO1xuXG52YXIgX2VxdWFsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lcXVhbHMpO1xuXG52YXIgX2NvbnRhaW5zID0gcmVxdWlyZSgnLi9saWIvY29udGFpbnMnKTtcblxudmFyIF9jb250YWluczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWlucyk7XG5cbnZhciBfbWF0Y2hlcyA9IHJlcXVpcmUoJy4vbGliL21hdGNoZXMnKTtcblxudmFyIF9tYXRjaGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdGNoZXMpO1xuXG52YXIgX2lzRW1haWwgPSByZXF1aXJlKCcuL2xpYi9pc0VtYWlsJyk7XG5cbnZhciBfaXNFbWFpbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0VtYWlsKTtcblxudmFyIF9pc1VSTCA9IHJlcXVpcmUoJy4vbGliL2lzVVJMJyk7XG5cbnZhciBfaXNVUkwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNVUkwpO1xuXG52YXIgX2lzTUFDQWRkcmVzcyA9IHJlcXVpcmUoJy4vbGliL2lzTUFDQWRkcmVzcycpO1xuXG52YXIgX2lzTUFDQWRkcmVzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc01BQ0FkZHJlc3MpO1xuXG52YXIgX2lzSVAgPSByZXF1aXJlKCcuL2xpYi9pc0lQJyk7XG5cbnZhciBfaXNJUDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0lQKTtcblxudmFyIF9pc0ZRRE4gPSByZXF1aXJlKCcuL2xpYi9pc0ZRRE4nKTtcblxudmFyIF9pc0ZRRE4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNGUUROKTtcblxudmFyIF9pc0Jvb2xlYW4gPSByZXF1aXJlKCcuL2xpYi9pc0Jvb2xlYW4nKTtcblxudmFyIF9pc0Jvb2xlYW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNCb29sZWFuKTtcblxudmFyIF9pc0FscGhhID0gcmVxdWlyZSgnLi9saWIvaXNBbHBoYScpO1xuXG52YXIgX2lzQWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNBbHBoYSk7XG5cbnZhciBfaXNBbHBoYW51bWVyaWMgPSByZXF1aXJlKCcuL2xpYi9pc0FscGhhbnVtZXJpYycpO1xuXG52YXIgX2lzQWxwaGFudW1lcmljMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQWxwaGFudW1lcmljKTtcblxudmFyIF9pc051bWVyaWMgPSByZXF1aXJlKCcuL2xpYi9pc051bWVyaWMnKTtcblxudmFyIF9pc051bWVyaWMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNOdW1lcmljKTtcblxudmFyIF9pc0xvd2VyY2FzZSA9IHJlcXVpcmUoJy4vbGliL2lzTG93ZXJjYXNlJyk7XG5cbnZhciBfaXNMb3dlcmNhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNMb3dlcmNhc2UpO1xuXG52YXIgX2lzVXBwZXJjYXNlID0gcmVxdWlyZSgnLi9saWIvaXNVcHBlcmNhc2UnKTtcblxudmFyIF9pc1VwcGVyY2FzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1VwcGVyY2FzZSk7XG5cbnZhciBfaXNBc2NpaSA9IHJlcXVpcmUoJy4vbGliL2lzQXNjaWknKTtcblxudmFyIF9pc0FzY2lpMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQXNjaWkpO1xuXG52YXIgX2lzRnVsbFdpZHRoID0gcmVxdWlyZSgnLi9saWIvaXNGdWxsV2lkdGgnKTtcblxudmFyIF9pc0Z1bGxXaWR0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0Z1bGxXaWR0aCk7XG5cbnZhciBfaXNIYWxmV2lkdGggPSByZXF1aXJlKCcuL2xpYi9pc0hhbGZXaWR0aCcpO1xuXG52YXIgX2lzSGFsZldpZHRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSGFsZldpZHRoKTtcblxudmFyIF9pc1ZhcmlhYmxlV2lkdGggPSByZXF1aXJlKCcuL2xpYi9pc1ZhcmlhYmxlV2lkdGgnKTtcblxudmFyIF9pc1ZhcmlhYmxlV2lkdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNWYXJpYWJsZVdpZHRoKTtcblxudmFyIF9pc011bHRpYnl0ZSA9IHJlcXVpcmUoJy4vbGliL2lzTXVsdGlieXRlJyk7XG5cbnZhciBfaXNNdWx0aWJ5dGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNNdWx0aWJ5dGUpO1xuXG52YXIgX2lzU3Vycm9nYXRlUGFpciA9IHJlcXVpcmUoJy4vbGliL2lzU3Vycm9nYXRlUGFpcicpO1xuXG52YXIgX2lzU3Vycm9nYXRlUGFpcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1N1cnJvZ2F0ZVBhaXIpO1xuXG52YXIgX2lzSW50ID0gcmVxdWlyZSgnLi9saWIvaXNJbnQnKTtcblxudmFyIF9pc0ludDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0ludCk7XG5cbnZhciBfaXNGbG9hdCA9IHJlcXVpcmUoJy4vbGliL2lzRmxvYXQnKTtcblxudmFyIF9pc0Zsb2F0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRmxvYXQpO1xuXG52YXIgX2lzRGVjaW1hbCA9IHJlcXVpcmUoJy4vbGliL2lzRGVjaW1hbCcpO1xuXG52YXIgX2lzRGVjaW1hbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0RlY2ltYWwpO1xuXG52YXIgX2lzSGV4YWRlY2ltYWwgPSByZXF1aXJlKCcuL2xpYi9pc0hleGFkZWNpbWFsJyk7XG5cbnZhciBfaXNIZXhhZGVjaW1hbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0hleGFkZWNpbWFsKTtcblxudmFyIF9pc0RpdmlzaWJsZUJ5ID0gcmVxdWlyZSgnLi9saWIvaXNEaXZpc2libGVCeScpO1xuXG52YXIgX2lzRGl2aXNpYmxlQnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNEaXZpc2libGVCeSk7XG5cbnZhciBfaXNIZXhDb2xvciA9IHJlcXVpcmUoJy4vbGliL2lzSGV4Q29sb3InKTtcblxudmFyIF9pc0hleENvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSGV4Q29sb3IpO1xuXG52YXIgX2lzTUQgPSByZXF1aXJlKCcuL2xpYi9pc01ENScpO1xuXG52YXIgX2lzTUQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNNRCk7XG5cbnZhciBfaXNKU09OID0gcmVxdWlyZSgnLi9saWIvaXNKU09OJyk7XG5cbnZhciBfaXNKU09OMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSlNPTik7XG5cbnZhciBfaXNOdWxsID0gcmVxdWlyZSgnLi9saWIvaXNOdWxsJyk7XG5cbnZhciBfaXNOdWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzTnVsbCk7XG5cbnZhciBfaXNMZW5ndGggPSByZXF1aXJlKCcuL2xpYi9pc0xlbmd0aCcpO1xuXG52YXIgX2lzTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzTGVuZ3RoKTtcblxudmFyIF9pc0J5dGVMZW5ndGggPSByZXF1aXJlKCcuL2xpYi9pc0J5dGVMZW5ndGgnKTtcblxudmFyIF9pc0J5dGVMZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNCeXRlTGVuZ3RoKTtcblxudmFyIF9pc1VVSUQgPSByZXF1aXJlKCcuL2xpYi9pc1VVSUQnKTtcblxudmFyIF9pc1VVSUQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNVVUlEKTtcblxudmFyIF9pc01vbmdvSWQgPSByZXF1aXJlKCcuL2xpYi9pc01vbmdvSWQnKTtcblxudmFyIF9pc01vbmdvSWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNNb25nb0lkKTtcblxudmFyIF9pc0RhdGUgPSByZXF1aXJlKCcuL2xpYi9pc0RhdGUnKTtcblxudmFyIF9pc0RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNEYXRlKTtcblxudmFyIF9pc0FmdGVyID0gcmVxdWlyZSgnLi9saWIvaXNBZnRlcicpO1xuXG52YXIgX2lzQWZ0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNBZnRlcik7XG5cbnZhciBfaXNCZWZvcmUgPSByZXF1aXJlKCcuL2xpYi9pc0JlZm9yZScpO1xuXG52YXIgX2lzQmVmb3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQmVmb3JlKTtcblxudmFyIF9pc0luID0gcmVxdWlyZSgnLi9saWIvaXNJbicpO1xuXG52YXIgX2lzSW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJbik7XG5cbnZhciBfaXNDcmVkaXRDYXJkID0gcmVxdWlyZSgnLi9saWIvaXNDcmVkaXRDYXJkJyk7XG5cbnZhciBfaXNDcmVkaXRDYXJkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQ3JlZGl0Q2FyZCk7XG5cbnZhciBfaXNJU0lOID0gcmVxdWlyZSgnLi9saWIvaXNJU0lOJyk7XG5cbnZhciBfaXNJU0lOMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSVNJTik7XG5cbnZhciBfaXNJU0JOID0gcmVxdWlyZSgnLi9saWIvaXNJU0JOJyk7XG5cbnZhciBfaXNJU0JOMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSVNCTik7XG5cbnZhciBfaXNNb2JpbGVQaG9uZSA9IHJlcXVpcmUoJy4vbGliL2lzTW9iaWxlUGhvbmUnKTtcblxudmFyIF9pc01vYmlsZVBob25lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzTW9iaWxlUGhvbmUpO1xuXG52YXIgX2lzQ3VycmVuY3kgPSByZXF1aXJlKCcuL2xpYi9pc0N1cnJlbmN5Jyk7XG5cbnZhciBfaXNDdXJyZW5jeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0N1cnJlbmN5KTtcblxudmFyIF9pc0lTTyA9IHJlcXVpcmUoJy4vbGliL2lzSVNPODYwMScpO1xuXG52YXIgX2lzSVNPMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSVNPKTtcblxudmFyIF9pc0Jhc2UgPSByZXF1aXJlKCcuL2xpYi9pc0Jhc2U2NCcpO1xuXG52YXIgX2lzQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0Jhc2UpO1xuXG52YXIgX2lzRGF0YVVSSSA9IHJlcXVpcmUoJy4vbGliL2lzRGF0YVVSSScpO1xuXG52YXIgX2lzRGF0YVVSSTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0RhdGFVUkkpO1xuXG52YXIgX2x0cmltID0gcmVxdWlyZSgnLi9saWIvbHRyaW0nKTtcblxudmFyIF9sdHJpbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sdHJpbSk7XG5cbnZhciBfcnRyaW0gPSByZXF1aXJlKCcuL2xpYi9ydHJpbScpO1xuXG52YXIgX3J0cmltMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3J0cmltKTtcblxudmFyIF90cmltID0gcmVxdWlyZSgnLi9saWIvdHJpbScpO1xuXG52YXIgX3RyaW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJpbSk7XG5cbnZhciBfZXNjYXBlID0gcmVxdWlyZSgnLi9saWIvZXNjYXBlJyk7XG5cbnZhciBfZXNjYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VzY2FwZSk7XG5cbnZhciBfdW5lc2NhcGUgPSByZXF1aXJlKCcuL2xpYi91bmVzY2FwZScpO1xuXG52YXIgX3VuZXNjYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuZXNjYXBlKTtcblxudmFyIF9zdHJpcExvdyA9IHJlcXVpcmUoJy4vbGliL3N0cmlwTG93Jyk7XG5cbnZhciBfc3RyaXBMb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaXBMb3cpO1xuXG52YXIgX3doaXRlbGlzdCA9IHJlcXVpcmUoJy4vbGliL3doaXRlbGlzdCcpO1xuXG52YXIgX3doaXRlbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aGl0ZWxpc3QpO1xuXG52YXIgX2JsYWNrbGlzdCA9IHJlcXVpcmUoJy4vbGliL2JsYWNrbGlzdCcpO1xuXG52YXIgX2JsYWNrbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ibGFja2xpc3QpO1xuXG52YXIgX2lzV2hpdGVsaXN0ZWQgPSByZXF1aXJlKCcuL2xpYi9pc1doaXRlbGlzdGVkJyk7XG5cbnZhciBfaXNXaGl0ZWxpc3RlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1doaXRlbGlzdGVkKTtcblxudmFyIF9ub3JtYWxpemVFbWFpbCA9IHJlcXVpcmUoJy4vbGliL25vcm1hbGl6ZUVtYWlsJyk7XG5cbnZhciBfbm9ybWFsaXplRW1haWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbm9ybWFsaXplRW1haWwpO1xuXG52YXIgX3RvU3RyaW5nID0gcmVxdWlyZSgnLi9saWIvdXRpbC90b1N0cmluZycpO1xuXG52YXIgX3RvU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvU3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZlcnNpb24gPSAnNS43LjAnO1xuXG52YXIgdmFsaWRhdG9yID0ge1xuICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICB0b0RhdGU6IF90b0RhdGUyLmRlZmF1bHQsXG4gIHRvRmxvYXQ6IF90b0Zsb2F0Mi5kZWZhdWx0LCB0b0ludDogX3RvSW50Mi5kZWZhdWx0LFxuICB0b0Jvb2xlYW46IF90b0Jvb2xlYW4yLmRlZmF1bHQsXG4gIGVxdWFsczogX2VxdWFsczIuZGVmYXVsdCwgY29udGFpbnM6IF9jb250YWluczIuZGVmYXVsdCwgbWF0Y2hlczogX21hdGNoZXMyLmRlZmF1bHQsXG4gIGlzRW1haWw6IF9pc0VtYWlsMi5kZWZhdWx0LCBpc1VSTDogX2lzVVJMMi5kZWZhdWx0LCBpc01BQ0FkZHJlc3M6IF9pc01BQ0FkZHJlc3MyLmRlZmF1bHQsIGlzSVA6IF9pc0lQMi5kZWZhdWx0LCBpc0ZRRE46IF9pc0ZRRE4yLmRlZmF1bHQsXG4gIGlzQm9vbGVhbjogX2lzQm9vbGVhbjIuZGVmYXVsdCxcbiAgaXNBbHBoYTogX2lzQWxwaGEyLmRlZmF1bHQsIGlzQWxwaGFudW1lcmljOiBfaXNBbHBoYW51bWVyaWMyLmRlZmF1bHQsIGlzTnVtZXJpYzogX2lzTnVtZXJpYzIuZGVmYXVsdCwgaXNMb3dlcmNhc2U6IF9pc0xvd2VyY2FzZTIuZGVmYXVsdCwgaXNVcHBlcmNhc2U6IF9pc1VwcGVyY2FzZTIuZGVmYXVsdCxcbiAgaXNBc2NpaTogX2lzQXNjaWkyLmRlZmF1bHQsIGlzRnVsbFdpZHRoOiBfaXNGdWxsV2lkdGgyLmRlZmF1bHQsIGlzSGFsZldpZHRoOiBfaXNIYWxmV2lkdGgyLmRlZmF1bHQsIGlzVmFyaWFibGVXaWR0aDogX2lzVmFyaWFibGVXaWR0aDIuZGVmYXVsdCxcbiAgaXNNdWx0aWJ5dGU6IF9pc011bHRpYnl0ZTIuZGVmYXVsdCwgaXNTdXJyb2dhdGVQYWlyOiBfaXNTdXJyb2dhdGVQYWlyMi5kZWZhdWx0LFxuICBpc0ludDogX2lzSW50Mi5kZWZhdWx0LCBpc0Zsb2F0OiBfaXNGbG9hdDIuZGVmYXVsdCwgaXNEZWNpbWFsOiBfaXNEZWNpbWFsMi5kZWZhdWx0LCBpc0hleGFkZWNpbWFsOiBfaXNIZXhhZGVjaW1hbDIuZGVmYXVsdCwgaXNEaXZpc2libGVCeTogX2lzRGl2aXNpYmxlQnkyLmRlZmF1bHQsXG4gIGlzSGV4Q29sb3I6IF9pc0hleENvbG9yMi5kZWZhdWx0LFxuICBpc01ENTogX2lzTUQyLmRlZmF1bHQsXG4gIGlzSlNPTjogX2lzSlNPTjIuZGVmYXVsdCxcbiAgaXNOdWxsOiBfaXNOdWxsMi5kZWZhdWx0LFxuICBpc0xlbmd0aDogX2lzTGVuZ3RoMi5kZWZhdWx0LCBpc0J5dGVMZW5ndGg6IF9pc0J5dGVMZW5ndGgyLmRlZmF1bHQsXG4gIGlzVVVJRDogX2lzVVVJRDIuZGVmYXVsdCwgaXNNb25nb0lkOiBfaXNNb25nb0lkMi5kZWZhdWx0LFxuICBpc0RhdGU6IF9pc0RhdGUyLmRlZmF1bHQsIGlzQWZ0ZXI6IF9pc0FmdGVyMi5kZWZhdWx0LCBpc0JlZm9yZTogX2lzQmVmb3JlMi5kZWZhdWx0LFxuICBpc0luOiBfaXNJbjIuZGVmYXVsdCxcbiAgaXNDcmVkaXRDYXJkOiBfaXNDcmVkaXRDYXJkMi5kZWZhdWx0LFxuICBpc0lTSU46IF9pc0lTSU4yLmRlZmF1bHQsIGlzSVNCTjogX2lzSVNCTjIuZGVmYXVsdCxcbiAgaXNNb2JpbGVQaG9uZTogX2lzTW9iaWxlUGhvbmUyLmRlZmF1bHQsXG4gIGlzQ3VycmVuY3k6IF9pc0N1cnJlbmN5Mi5kZWZhdWx0LFxuICBpc0lTTzg2MDE6IF9pc0lTTzIuZGVmYXVsdCxcbiAgaXNCYXNlNjQ6IF9pc0Jhc2UyLmRlZmF1bHQsIGlzRGF0YVVSSTogX2lzRGF0YVVSSTIuZGVmYXVsdCxcbiAgbHRyaW06IF9sdHJpbTIuZGVmYXVsdCwgcnRyaW06IF9ydHJpbTIuZGVmYXVsdCwgdHJpbTogX3RyaW0yLmRlZmF1bHQsXG4gIGVzY2FwZTogX2VzY2FwZTIuZGVmYXVsdCwgdW5lc2NhcGU6IF91bmVzY2FwZTIuZGVmYXVsdCwgc3RyaXBMb3c6IF9zdHJpcExvdzIuZGVmYXVsdCxcbiAgd2hpdGVsaXN0OiBfd2hpdGVsaXN0Mi5kZWZhdWx0LCBibGFja2xpc3Q6IF9ibGFja2xpc3QyLmRlZmF1bHQsXG4gIGlzV2hpdGVsaXN0ZWQ6IF9pc1doaXRlbGlzdGVkMi5kZWZhdWx0LFxuICBub3JtYWxpemVFbWFpbDogX25vcm1hbGl6ZUVtYWlsMi5kZWZhdWx0LFxuICB0b1N0cmluZzogX3RvU3RyaW5nMi5kZWZhdWx0XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0b3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgYWxwaGEgPSBleHBvcnRzLmFscGhhID0ge1xuICAnZW4tVVMnOiAvXltBLVpdKyQvaSxcbiAgJ2NzLUNaJzogL15bQS1aw4HEjMSOw4nEmsONxYfDk8WYxaDFpMOaxa7DncW9XSskL2ksXG4gICdkZS1ERSc6IC9eW0EtWsOEw5bDnMOfXSskL2ksXG4gICdlcy1FUyc6IC9eW0EtWsOBw4nDjcORw5PDmsOcXSskL2ksXG4gICdmci1GUic6IC9eW0EtWsOAw4LDhsOHw4nDiMOKw4vDj8OOw5TFksOZw5vDnMW4XSskL2ksXG4gICdubC1OTCc6IC9eW0EtWsOJw4vDj8OTw5bDnF0rJC9pLFxuICAnaHUtSFUnOiAvXltBLVrDgcOJw43Dk8OWxZDDmsOcxbBdKyQvaSxcbiAgJ3BsLVBMJzogL15bQS1axITEhsSYxZrFgcWDw5PFu8W5XSskL2ksXG4gICdwdC1QVCc6IC9eW0EtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXSskL2ksXG4gICdydS1SVSc6IC9eW9CQLdCv0IFdKyQvaSxcbiAgJ3NyLVJTQGxhdGluJzogL15bQS1axIzEhsW9xaDEkF0rJC9pLFxuICAnc3ItUlMnOiAvXlvQkC3Qr9CC0IjQidCK0IvQj10rJC9pLFxuICAndHItVFInOiAvXltBLVrDh8SexLDEscOWxZ7DnF0rJC9pLFxuICBhcjogL15b2KHYotij2KTYpdim2KfYqNip2KrYq9is2K3Yrtiv2LDYsdiy2LPYtNi12LbYt9i42LnYutmB2YLZg9mE2YXZhtmH2YjZidmK2YvZjNmN2Y7Zj9mQ2ZHZktmwXSskL1xufTtcblxudmFyIGFscGhhbnVtZXJpYyA9IGV4cG9ydHMuYWxwaGFudW1lcmljID0ge1xuICAnZW4tVVMnOiAvXlswLTlBLVpdKyQvaSxcbiAgJ2NzLUNaJzogL15bMC05QS1aw4HEjMSOw4nEmsONxYfDk8WYxaDFpMOaxa7DncW9XSskL2ksXG4gICdkZS1ERSc6IC9eWzAtOUEtWsOEw5bDnMOfXSskL2ksXG4gICdlcy1FUyc6IC9eWzAtOUEtWsOBw4nDjcORw5PDmsOcXSskL2ksXG4gICdmci1GUic6IC9eWzAtOUEtWsOAw4LDhsOHw4nDiMOKw4vDj8OOw5TFksOZw5vDnMW4XSskL2ksXG4gICdodS1IVSc6IC9eWzAtOUEtWsOBw4nDjcOTw5bFkMOaw5zFsF0rJC9pLFxuICAnbmwtTkwnOiAvXlswLTlBLVrDicOLw4/Dk8OWw5xdKyQvaSxcbiAgJ3BsLVBMJzogL15bMC05QS1axITEhsSYxZrFgcWDw5PFu8W5XSskL2ksXG4gICdwdC1QVCc6IC9eWzAtOUEtWsODw4HDgMOCw4fDicOKw43DlcOTw5TDmsOcXSskL2ksXG4gICdydS1SVSc6IC9eWzAtOdCQLdCv0IFdKyQvaSxcbiAgJ3NyLVJTQGxhdGluJzogL15bMC05QS1axIzEhsW9xaDEkF0rJC9pLFxuICAnc3ItUlMnOiAvXlswLTnQkC3Qr9CC0IjQidCK0IvQj10rJC9pLFxuICAndHItVFInOiAvXlswLTlBLVrDh8SexLDEscOWxZ7DnF0rJC9pLFxuICBhcjogL15b2aDZodmi2aPZpNml2abZp9mo2akwLTnYodii2KPYpNil2KbYp9io2KnYqtir2KzYrdiu2K/YsNix2LLYs9i02LXYtti32LjYudi62YHZgtmD2YTZhdmG2YfZiNmJ2YrZi9mM2Y3ZjtmP2ZDZkdmS2bBdKyQvXG59O1xuXG52YXIgZW5nbGlzaExvY2FsZXMgPSBleHBvcnRzLmVuZ2xpc2hMb2NhbGVzID0gWydBVScsICdHQicsICdISycsICdJTicsICdOWicsICdaQScsICdaTSddO1xuXG5mb3IgKHZhciBsb2NhbGUsIGkgPSAwOyBpIDwgZW5nbGlzaExvY2FsZXMubGVuZ3RoOyBpKyspIHtcbiAgbG9jYWxlID0gJ2VuLScgKyBlbmdsaXNoTG9jYWxlc1tpXTtcbiAgYWxwaGFbbG9jYWxlXSA9IGFscGhhWydlbi1VUyddO1xuICBhbHBoYW51bWVyaWNbbG9jYWxlXSA9IGFscGhhbnVtZXJpY1snZW4tVVMnXTtcbn1cblxuYWxwaGFbJ3B0LUJSJ10gPSBhbHBoYVsncHQtUFQnXTtcbmFscGhhbnVtZXJpY1sncHQtQlInXSA9IGFscGhhbnVtZXJpY1sncHQtUFQnXTtcblxuLy8gU291cmNlOiBodHRwOi8vd3d3LmxvY2FsZXBsYW5ldC5jb20vamF2YS9cbnZhciBhcmFiaWNMb2NhbGVzID0gZXhwb3J0cy5hcmFiaWNMb2NhbGVzID0gWydBRScsICdCSCcsICdEWicsICdFRycsICdJUScsICdKTycsICdLVycsICdMQicsICdMWScsICdNQScsICdRTScsICdRQScsICdTQScsICdTRCcsICdTWScsICdUTicsICdZRSddO1xuXG5mb3IgKHZhciBfbG9jYWxlLCBfaSA9IDA7IF9pIDwgYXJhYmljTG9jYWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgX2xvY2FsZSA9ICdhci0nICsgYXJhYmljTG9jYWxlc1tfaV07XG4gIGFscGhhW19sb2NhbGVdID0gYWxwaGEuYXI7XG4gIGFscGhhbnVtZXJpY1tfbG9jYWxlXSA9IGFscGhhbnVtZXJpYy5hcjtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBibGFja2xpc3Q7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBibGFja2xpc3Qoc3RyLCBjaGFycykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoJ1snICsgY2hhcnMgKyAnXSsnLCAnZycpLCAnJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjb250YWlucztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbnZhciBfdG9TdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvdG9TdHJpbmcnKTtcblxudmFyIF90b1N0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b1N0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKHN0ciwgZWxlbSkge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKCgwLCBfdG9TdHJpbmcyLmRlZmF1bHQpKGVsZW0pKSA+PSAwO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXF1YWxzO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZXF1YWxzKHN0ciwgY29tcGFyaXNvbikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN0ciA9PT0gY29tcGFyaXNvbjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBlc2NhcGU7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBlc2NhcGUoc3RyKSB7XG4gICAgICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvJy9nLCAnJiN4Mjc7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKS5yZXBsYWNlKC9cXC8vZywgJyYjeDJGOycpLnJlcGxhY2UoL2AvZywgJyYjOTY7Jyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0FmdGVyO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxudmFyIF90b0RhdGUgPSByZXF1aXJlKCcuL3RvRGF0ZScpO1xuXG52YXIgX3RvRGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0RhdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0FmdGVyKHN0cikge1xuICB2YXIgZGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFN0cmluZyhuZXcgRGF0ZSgpKSA6IGFyZ3VtZW50c1sxXTtcblxuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIGNvbXBhcmlzb24gPSAoMCwgX3RvRGF0ZTIuZGVmYXVsdCkoZGF0ZSk7XG4gIHZhciBvcmlnaW5hbCA9ICgwLCBfdG9EYXRlMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gISEob3JpZ2luYWwgJiYgY29tcGFyaXNvbiAmJiBvcmlnaW5hbCA+IGNvbXBhcmlzb24pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNBbHBoYTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuL2FscGhhJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzQWxwaGEoc3RyKSB7XG4gIHZhciBsb2NhbGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAnZW4tVVMnIDogYXJndW1lbnRzWzFdO1xuXG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBpZiAobG9jYWxlIGluIF9hbHBoYS5hbHBoYSkge1xuICAgIHJldHVybiBfYWxwaGEuYWxwaGFbbG9jYWxlXS50ZXN0KHN0cik7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGxvY2FsZSBcXCcnICsgbG9jYWxlICsgJ1xcJycpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNBbHBoYW51bWVyaWM7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi9hbHBoYScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0FscGhhbnVtZXJpYyhzdHIpIHtcbiAgdmFyIGxvY2FsZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/ICdlbi1VUycgOiBhcmd1bWVudHNbMV07XG5cbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIGlmIChsb2NhbGUgaW4gX2FscGhhLmFscGhhbnVtZXJpYykge1xuICAgIHJldHVybiBfYWxwaGEuYWxwaGFudW1lcmljW2xvY2FsZV0udGVzdChzdHIpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBsb2NhbGUgXFwnJyArIGxvY2FsZSArICdcXCcnKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQXNjaWk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG52YXIgYXNjaWkgPSAvXltcXHgwMC1cXHg3Rl0rJC87XG4vKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cblxuZnVuY3Rpb24gaXNBc2NpaShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBhc2NpaS50ZXN0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0Jhc2U2NDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBub3RCYXNlNjQgPSAvW15BLVowLTkrXFwvPV0vaTtcblxuZnVuY3Rpb24gaXNCYXNlNjQoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2YXIgbGVuID0gc3RyLmxlbmd0aDtcbiAgaWYgKCFsZW4gfHwgbGVuICUgNCAhPT0gMCB8fCBub3RCYXNlNjQudGVzdChzdHIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBmaXJzdFBhZGRpbmdDaGFyID0gc3RyLmluZGV4T2YoJz0nKTtcbiAgcmV0dXJuIGZpcnN0UGFkZGluZ0NoYXIgPT09IC0xIHx8IGZpcnN0UGFkZGluZ0NoYXIgPT09IGxlbiAtIDEgfHwgZmlyc3RQYWRkaW5nQ2hhciA9PT0gbGVuIC0gMiAmJiBzdHJbbGVuIC0gMV0gPT09ICc9Jztcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQmVmb3JlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxudmFyIF90b0RhdGUgPSByZXF1aXJlKCcuL3RvRGF0ZScpO1xuXG52YXIgX3RvRGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0RhdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0JlZm9yZShzdHIpIHtcbiAgdmFyIGRhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBTdHJpbmcobmV3IERhdGUoKSkgOiBhcmd1bWVudHNbMV07XG5cbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBjb21wYXJpc29uID0gKDAsIF90b0RhdGUyLmRlZmF1bHQpKGRhdGUpO1xuICB2YXIgb3JpZ2luYWwgPSAoMCwgX3RvRGF0ZTIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuICEhKG9yaWdpbmFsICYmIGNvbXBhcmlzb24gJiYgb3JpZ2luYWwgPCBjb21wYXJpc29uKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQm9vbGVhbjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBbJ3RydWUnLCAnZmFsc2UnLCAnMScsICcwJ10uaW5kZXhPZihzdHIpID49IDA7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc0J5dGVMZW5ndGg7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cbmZ1bmN0aW9uIGlzQnl0ZUxlbmd0aChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBtaW4gPSB2b2lkIDA7XG4gIHZhciBtYXggPSB2b2lkIDA7XG4gIGlmICgodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9wdGlvbnMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBtaW4gPSBvcHRpb25zLm1pbiB8fCAwO1xuICAgIG1heCA9IG9wdGlvbnMubWF4O1xuICB9IGVsc2Uge1xuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5OiBpc0J5dGVMZW5ndGgoc3RyLCBtaW4gWywgbWF4XSlcbiAgICBtaW4gPSBhcmd1bWVudHNbMV07XG4gICAgbWF4ID0gYXJndW1lbnRzWzJdO1xuICB9XG4gIHZhciBsZW4gPSBlbmNvZGVVUkkoc3RyKS5zcGxpdCgvJS4ufC4vKS5sZW5ndGggLSAxO1xuICByZXR1cm4gbGVuID49IG1pbiAmJiAodHlwZW9mIG1heCA9PT0gJ3VuZGVmaW5lZCcgfHwgbGVuIDw9IG1heCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0NyZWRpdENhcmQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG52YXIgY3JlZGl0Q2FyZCA9IC9eKD86NFswLTldezEyfSg/OlswLTldezN9KT98NVsxLTVdWzAtOV17MTR9fCgyMjJbMS05XXwyMlszLTldWzAtOV18MlszLTZdWzAtOV17Mn18MjdbMDFdWzAtOV18MjcyMClbMC05XXsxMn18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMn18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9KXw2MlswLTldezE0fSQvO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbmZ1bmN0aW9uIGlzQ3JlZGl0Q2FyZChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBzYW5pdGl6ZWQgPSBzdHIucmVwbGFjZSgvW14wLTldKy9nLCAnJyk7XG4gIGlmICghY3JlZGl0Q2FyZC50ZXN0KHNhbml0aXplZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHN1bSA9IDA7XG4gIHZhciBkaWdpdCA9IHZvaWQgMDtcbiAgdmFyIHRtcE51bSA9IHZvaWQgMDtcbiAgdmFyIHNob3VsZERvdWJsZSA9IHZvaWQgMDtcbiAgZm9yICh2YXIgaSA9IHNhbml0aXplZC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGRpZ2l0ID0gc2FuaXRpemVkLnN1YnN0cmluZyhpLCBpICsgMSk7XG4gICAgdG1wTnVtID0gcGFyc2VJbnQoZGlnaXQsIDEwKTtcbiAgICBpZiAoc2hvdWxkRG91YmxlKSB7XG4gICAgICB0bXBOdW0gKj0gMjtcbiAgICAgIGlmICh0bXBOdW0gPj0gMTApIHtcbiAgICAgICAgc3VtICs9IHRtcE51bSAlIDEwICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1bSArPSB0bXBOdW07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bSArPSB0bXBOdW07XG4gICAgfVxuICAgIHNob3VsZERvdWJsZSA9ICFzaG91bGREb3VibGU7XG4gIH1cbiAgcmV0dXJuICEhKHN1bSAlIDEwID09PSAwID8gc2FuaXRpemVkIDogZmFsc2UpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNDdXJyZW5jeTtcblxudmFyIF9tZXJnZSA9IHJlcXVpcmUoJy4vdXRpbC9tZXJnZScpO1xuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlKTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGN1cnJlbmN5UmVnZXgob3B0aW9ucykge1xuICB2YXIgc3ltYm9sID0gJyhcXFxcJyArIG9wdGlvbnMuc3ltYm9sLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKSArICcpJyArIChvcHRpb25zLnJlcXVpcmVfc3ltYm9sID8gJycgOiAnPycpLFxuICAgICAgbmVnYXRpdmUgPSAnLT8nLFxuICAgICAgd2hvbGVfZG9sbGFyX2Ftb3VudF93aXRob3V0X3NlcCA9ICdbMS05XVxcXFxkKicsXG4gICAgICB3aG9sZV9kb2xsYXJfYW1vdW50X3dpdGhfc2VwID0gJ1sxLTldXFxcXGR7MCwyfShcXFxcJyArIG9wdGlvbnMudGhvdXNhbmRzX3NlcGFyYXRvciArICdcXFxcZHszfSkqJyxcbiAgICAgIHZhbGlkX3dob2xlX2RvbGxhcl9hbW91bnRzID0gWycwJywgd2hvbGVfZG9sbGFyX2Ftb3VudF93aXRob3V0X3NlcCwgd2hvbGVfZG9sbGFyX2Ftb3VudF93aXRoX3NlcF0sXG4gICAgICB3aG9sZV9kb2xsYXJfYW1vdW50ID0gJygnICsgdmFsaWRfd2hvbGVfZG9sbGFyX2Ftb3VudHMuam9pbignfCcpICsgJyk/JyxcbiAgICAgIGRlY2ltYWxfYW1vdW50ID0gJyhcXFxcJyArIG9wdGlvbnMuZGVjaW1hbF9zZXBhcmF0b3IgKyAnXFxcXGR7Mn0pPyc7XG4gIHZhciBwYXR0ZXJuID0gd2hvbGVfZG9sbGFyX2Ftb3VudCArIGRlY2ltYWxfYW1vdW50O1xuXG4gIC8vIGRlZmF1bHQgaXMgbmVnYXRpdmUgc2lnbiBiZWZvcmUgc3ltYm9sLCBidXQgdGhlcmUgYXJlIHR3byBvdGhlciBvcHRpb25zIChiZXNpZGVzIHBhcmVucylcbiAgaWYgKG9wdGlvbnMuYWxsb3dfbmVnYXRpdmVzICYmICFvcHRpb25zLnBhcmVuc19mb3JfbmVnYXRpdmVzKSB7XG4gICAgaWYgKG9wdGlvbnMubmVnYXRpdmVfc2lnbl9hZnRlcl9kaWdpdHMpIHtcbiAgICAgIHBhdHRlcm4gKz0gbmVnYXRpdmU7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLm5lZ2F0aXZlX3NpZ25fYmVmb3JlX2RpZ2l0cykge1xuICAgICAgcGF0dGVybiA9IG5lZ2F0aXZlICsgcGF0dGVybjtcbiAgICB9XG4gIH1cblxuICAvLyBTb3V0aCBBZnJpY2FuIFJhbmQsIGZvciBleGFtcGxlLCB1c2VzIFIgMTIzIChzcGFjZSkgYW5kIFItMTIzIChubyBzcGFjZSlcbiAgaWYgKG9wdGlvbnMuYWxsb3dfbmVnYXRpdmVfc2lnbl9wbGFjZWhvbGRlcikge1xuICAgIHBhdHRlcm4gPSAnKCAoPyFcXFxcLSkpPycgKyBwYXR0ZXJuO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMuYWxsb3dfc3BhY2VfYWZ0ZXJfc3ltYm9sKSB7XG4gICAgcGF0dGVybiA9ICcgPycgKyBwYXR0ZXJuO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMuYWxsb3dfc3BhY2VfYWZ0ZXJfZGlnaXRzKSB7XG4gICAgcGF0dGVybiArPSAnKCAoPyEkKSk/JztcbiAgfVxuXG4gIGlmIChvcHRpb25zLnN5bWJvbF9hZnRlcl9kaWdpdHMpIHtcbiAgICBwYXR0ZXJuICs9IHN5bWJvbDtcbiAgfSBlbHNlIHtcbiAgICBwYXR0ZXJuID0gc3ltYm9sICsgcGF0dGVybjtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFsbG93X25lZ2F0aXZlcykge1xuICAgIGlmIChvcHRpb25zLnBhcmVuc19mb3JfbmVnYXRpdmVzKSB7XG4gICAgICBwYXR0ZXJuID0gJyhcXFxcKCcgKyBwYXR0ZXJuICsgJ1xcXFwpfCcgKyBwYXR0ZXJuICsgJyknO1xuICAgIH0gZWxzZSBpZiAoIShvcHRpb25zLm5lZ2F0aXZlX3NpZ25fYmVmb3JlX2RpZ2l0cyB8fCBvcHRpb25zLm5lZ2F0aXZlX3NpZ25fYWZ0ZXJfZGlnaXRzKSkge1xuICAgICAgcGF0dGVybiA9IG5lZ2F0aXZlICsgcGF0dGVybjtcbiAgICB9XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItdGVtcGxhdGUgKi9cbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICtcbiAgLy8gZW5zdXJlIHRoZXJlJ3MgYSBkb2xsYXIgYW5kL29yIGRlY2ltYWwgYW1vdW50LCBhbmQgdGhhdFxuICAvLyBpdCBkb2Vzbid0IHN0YXJ0IHdpdGggYSBzcGFjZSBvciBhIG5lZ2F0aXZlIHNpZ24gZm9sbG93ZWQgYnkgYSBzcGFjZVxuICAnKD8hLT8gKSg/PS4qXFxcXGQpJyArIHBhdHRlcm4gKyAnJCcpO1xuICAvKiBlc2xpbnQtZW5hYmxlIHByZWZlci10ZW1wbGF0ZSAqL1xufVxuXG52YXIgZGVmYXVsdF9jdXJyZW5jeV9vcHRpb25zID0ge1xuICBzeW1ib2w6ICckJyxcbiAgcmVxdWlyZV9zeW1ib2w6IGZhbHNlLFxuICBhbGxvd19zcGFjZV9hZnRlcl9zeW1ib2w6IGZhbHNlLFxuICBzeW1ib2xfYWZ0ZXJfZGlnaXRzOiBmYWxzZSxcbiAgYWxsb3dfbmVnYXRpdmVzOiB0cnVlLFxuICBwYXJlbnNfZm9yX25lZ2F0aXZlczogZmFsc2UsXG4gIG5lZ2F0aXZlX3NpZ25fYmVmb3JlX2RpZ2l0czogZmFsc2UsXG4gIG5lZ2F0aXZlX3NpZ25fYWZ0ZXJfZGlnaXRzOiBmYWxzZSxcbiAgYWxsb3dfbmVnYXRpdmVfc2lnbl9wbGFjZWhvbGRlcjogZmFsc2UsXG4gIHRob3VzYW5kc19zZXBhcmF0b3I6ICcsJyxcbiAgZGVjaW1hbF9zZXBhcmF0b3I6ICcuJyxcbiAgYWxsb3dfc3BhY2VfYWZ0ZXJfZGlnaXRzOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNDdXJyZW5jeShzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X2N1cnJlbmN5X29wdGlvbnMpO1xuICByZXR1cm4gY3VycmVuY3lSZWdleChvcHRpb25zKS50ZXN0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0RhdGFVUkk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGF0YVVSSSA9IC9eXFxzKmRhdGE6KFthLXpdK1xcL1thLXowLTlcXC1cXCtdKyg7W2EtelxcLV0rPVthLXowLTlcXC1dKyk/KT8oO2Jhc2U2NCk/LFthLXowLTkhXFwkJicsXFwoXFwpXFwqXFwrLDs9XFwtXFwuX346QFxcL1xcPyVcXHNdKlxccyokL2k7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuXG5mdW5jdGlvbiBpc0RhdGFVUkkoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gZGF0YVVSSS50ZXN0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0RhdGU7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG52YXIgX2lzSVNPID0gcmVxdWlyZSgnLi9pc0lTTzg2MDEnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXQoc3RyKSB7XG4gIHZhciBpc284NjAxUGFydHMgPSBzdHIubWF0Y2goX2lzSVNPLmlzbzg2MDEpO1xuICB2YXIgdGltZXpvbmUgPSB2b2lkIDAsXG4gICAgICBzaWduID0gdm9pZCAwLFxuICAgICAgaG91cnMgPSB2b2lkIDAsXG4gICAgICBtaW51dGVzID0gdm9pZCAwO1xuICBpZiAoIWlzbzg2MDFQYXJ0cykge1xuICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuICAgIHRpbWV6b25lID0gc3RyLm1hdGNoKC8oPzpcXHN8Z210XFxzKikoLXxcXCspKFxcZHsxLDR9KShcXHN8JCkvKTtcbiAgICBpZiAoIXRpbWV6b25lKSB7XG4gICAgICByZXR1cm4gc3RyLmluZGV4T2YoJ2dtdCcpICE9PSAtMSA/IDAgOiBudWxsO1xuICAgIH1cbiAgICBzaWduID0gdGltZXpvbmVbMV07XG4gICAgdmFyIG9mZnNldCA9IHRpbWV6b25lWzJdO1xuICAgIGlmIChvZmZzZXQubGVuZ3RoID09PSAzKSB7XG4gICAgICBvZmZzZXQgPSAnMCcgKyBvZmZzZXQ7XG4gICAgfVxuICAgIGlmIChvZmZzZXQubGVuZ3RoIDw9IDIpIHtcbiAgICAgIGhvdXJzID0gMDtcbiAgICAgIG1pbnV0ZXMgPSBwYXJzZUludChvZmZzZXQsIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaG91cnMgPSBwYXJzZUludChvZmZzZXQuc2xpY2UoMCwgMiksIDEwKTtcbiAgICAgIG1pbnV0ZXMgPSBwYXJzZUludChvZmZzZXQuc2xpY2UoMiwgNCksIDEwKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGltZXpvbmUgPSBpc284NjAxUGFydHNbMjFdO1xuICAgIGlmICghdGltZXpvbmUpIHtcbiAgICAgIC8vIGlmIG5vIGhvdXIvbWludXRlIHdhcyBwcm92aWRlZCwgdGhlIGRhdGUgaXMgR01UXG4gICAgICByZXR1cm4gIWlzbzg2MDFQYXJ0c1sxMl0gPyAwIDogbnVsbDtcbiAgICB9XG4gICAgaWYgKHRpbWV6b25lID09PSAneicgfHwgdGltZXpvbmUgPT09ICdaJykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHNpZ24gPSBpc284NjAxUGFydHNbMjJdO1xuICAgIGlmICh0aW1lem9uZS5pbmRleE9mKCc6JykgIT09IC0xKSB7XG4gICAgICBob3VycyA9IHBhcnNlSW50KGlzbzg2MDFQYXJ0c1syM10sIDEwKTtcbiAgICAgIG1pbnV0ZXMgPSBwYXJzZUludChpc284NjAxUGFydHNbMjRdLCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhvdXJzID0gMDtcbiAgICAgIG1pbnV0ZXMgPSBwYXJzZUludChpc284NjAxUGFydHNbMjNdLCAxMCk7XG4gICAgfVxuICB9XG4gIHJldHVybiAoaG91cnMgKiA2MCArIG1pbnV0ZXMpICogKHNpZ24gPT09ICctJyA/IDEgOiAtMSk7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBub3JtYWxpemVkRGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2Uoc3RyKSk7XG4gIGlmIChpc05hTihub3JtYWxpemVkRGF0ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBub3JtYWxpemVkRGF0ZSBpcyBpbiB0aGUgdXNlcidzIHRpbWV6b25lLiBBcHBseSB0aGUgaW5wdXRcbiAgLy8gdGltZXpvbmUgb2Zmc2V0IHRvIHRoZSBkYXRlIHNvIHRoYXQgdGhlIHllYXIgYW5kIGRheSBtYXRjaFxuICAvLyB0aGUgaW5wdXRcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXQoc3RyKTtcbiAgaWYgKHRpbWV6b25lT2Zmc2V0ICE9PSBudWxsKSB7XG4gICAgdmFyIHRpbWV6b25lRGlmZmVyZW5jZSA9IG5vcm1hbGl6ZWREYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgLSB0aW1lem9uZU9mZnNldDtcbiAgICBub3JtYWxpemVkRGF0ZSA9IG5ldyBEYXRlKG5vcm1hbGl6ZWREYXRlLmdldFRpbWUoKSArIDYwMDAwICogdGltZXpvbmVEaWZmZXJlbmNlKTtcbiAgfVxuXG4gIHZhciBkYXkgPSBTdHJpbmcobm9ybWFsaXplZERhdGUuZ2V0RGF0ZSgpKTtcbiAgdmFyIGRheU9yWWVhciA9IHZvaWQgMCxcbiAgICAgIGRheU9yWWVhck1hdGNoZXMgPSB2b2lkIDAsXG4gICAgICB5ZWFyID0gdm9pZCAwO1xuICAvLyBjaGVjayBmb3IgdmFsaWQgZG91YmxlIGRpZ2l0cyB0aGF0IGNvdWxkIGJlIGxhdGUgZGF5c1xuICAvLyBjaGVjayBmb3IgYWxsIG1hdGNoZXMgc2luY2UgYSBzdHJpbmcgbGlrZSAnMTIvMjMnIGlzIGEgdmFsaWQgZGF0ZVxuICAvLyBpZ25vcmUgZXZlcnl0aGluZyB3aXRoIG5lYXJieSBjb2xvbnNcbiAgZGF5T3JZZWFyTWF0Y2hlcyA9IHN0ci5tYXRjaCgvKF58W146XFxkXSlbMjNdXFxkKFteVDpcXGRdfCQpL2cpO1xuICBpZiAoIWRheU9yWWVhck1hdGNoZXMpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBkYXlPclllYXIgPSBkYXlPclllYXJNYXRjaGVzLm1hcChmdW5jdGlvbiAoZGlnaXRTdHJpbmcpIHtcbiAgICByZXR1cm4gZGlnaXRTdHJpbmcubWF0Y2goL1xcZCsvZylbMF07XG4gIH0pLmpvaW4oJy8nKTtcblxuICB5ZWFyID0gU3RyaW5nKG5vcm1hbGl6ZWREYXRlLmdldEZ1bGxZZWFyKCkpLnNsaWNlKC0yKTtcbiAgaWYgKGRheU9yWWVhciA9PT0gZGF5IHx8IGRheU9yWWVhciA9PT0geWVhcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGRheU9yWWVhciA9PT0gJycgKyBkYXkgLyB5ZWFyIHx8IGRheU9yWWVhciA9PT0gJycgKyB5ZWFyIC8gZGF5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNEZWNpbWFsO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlY2ltYWwgPSAvXlstK10/KFswLTldK3xcXC5bMC05XSt8WzAtOV0rXFwuWzAtOV0rKSQvO1xuXG5mdW5jdGlvbiBpc0RlY2ltYWwoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3RyICE9PSAnJyAmJiBkZWNpbWFsLnRlc3Qoc3RyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRGl2aXNpYmxlQnk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG52YXIgX3RvRmxvYXQgPSByZXF1aXJlKCcuL3RvRmxvYXQnKTtcblxudmFyIF90b0Zsb2F0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvRmxvYXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0RpdmlzaWJsZUJ5KHN0ciwgbnVtKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gKDAsIF90b0Zsb2F0Mi5kZWZhdWx0KShzdHIpICUgcGFyc2VJbnQobnVtLCAxMCkgPT09IDA7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0VtYWlsO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxudmFyIF9tZXJnZSA9IHJlcXVpcmUoJy4vdXRpbC9tZXJnZScpO1xuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlKTtcblxudmFyIF9pc0J5dGVMZW5ndGggPSByZXF1aXJlKCcuL2lzQnl0ZUxlbmd0aCcpO1xuXG52YXIgX2lzQnl0ZUxlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0J5dGVMZW5ndGgpO1xuXG52YXIgX2lzRlFETiA9IHJlcXVpcmUoJy4vaXNGUUROJyk7XG5cbnZhciBfaXNGUUROMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRlFETik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X2VtYWlsX29wdGlvbnMgPSB7XG4gIGFsbG93X2Rpc3BsYXlfbmFtZTogZmFsc2UsXG4gIGFsbG93X3V0ZjhfbG9jYWxfcGFydDogdHJ1ZSxcbiAgcmVxdWlyZV90bGQ6IHRydWVcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbnZhciBkaXNwbGF5TmFtZSA9IC9eW2EtelxcZCEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XFwuXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXStbYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXC5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZcXHNdKjwoLispPiQvaTtcbnZhciBlbWFpbFVzZXJQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dKyQvaTtcbnZhciBxdW90ZWRFbWFpbFVzZXIgPSAvXihbXFxzXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3ZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3ZV18KFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZdKSkqJC9pO1xudmFyIGVtYWlsVXNlclV0ZjhQYXJ0ID0gL15bYS16XFxkISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKyQvaTtcbnZhciBxdW90ZWRFbWFpbFVzZXJVdGY4ID0gL14oW1xcc1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2VcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfChcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKiQvaTtcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWVuYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG5cbmZ1bmN0aW9uIGlzRW1haWwoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9lbWFpbF9vcHRpb25zKTtcblxuICBpZiAob3B0aW9ucy5hbGxvd19kaXNwbGF5X25hbWUpIHtcbiAgICB2YXIgZGlzcGxheV9lbWFpbCA9IHN0ci5tYXRjaChkaXNwbGF5TmFtZSk7XG4gICAgaWYgKGRpc3BsYXlfZW1haWwpIHtcbiAgICAgIHN0ciA9IGRpc3BsYXlfZW1haWxbMV07XG4gICAgfVxuICB9XG5cbiAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KCdAJyk7XG4gIHZhciBkb21haW4gPSBwYXJ0cy5wb3AoKTtcbiAgdmFyIHVzZXIgPSBwYXJ0cy5qb2luKCdAJyk7XG5cbiAgdmFyIGxvd2VyX2RvbWFpbiA9IGRvbWFpbi50b0xvd2VyQ2FzZSgpO1xuICBpZiAobG93ZXJfZG9tYWluID09PSAnZ21haWwuY29tJyB8fCBsb3dlcl9kb21haW4gPT09ICdnb29nbGVtYWlsLmNvbScpIHtcbiAgICB1c2VyID0gdXNlci5yZXBsYWNlKC9cXC4vZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBpZiAoISgwLCBfaXNCeXRlTGVuZ3RoMi5kZWZhdWx0KSh1c2VyLCB7IG1heDogNjQgfSkgfHwgISgwLCBfaXNCeXRlTGVuZ3RoMi5kZWZhdWx0KShkb21haW4sIHsgbWF4OiAyNTYgfSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoISgwLCBfaXNGUUROMi5kZWZhdWx0KShkb21haW4sIHsgcmVxdWlyZV90bGQ6IG9wdGlvbnMucmVxdWlyZV90bGQgfSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodXNlclswXSA9PT0gJ1wiJykge1xuICAgIHVzZXIgPSB1c2VyLnNsaWNlKDEsIHVzZXIubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIG9wdGlvbnMuYWxsb3dfdXRmOF9sb2NhbF9wYXJ0ID8gcXVvdGVkRW1haWxVc2VyVXRmOC50ZXN0KHVzZXIpIDogcXVvdGVkRW1haWxVc2VyLnRlc3QodXNlcik7XG4gIH1cblxuICB2YXIgcGF0dGVybiA9IG9wdGlvbnMuYWxsb3dfdXRmOF9sb2NhbF9wYXJ0ID8gZW1haWxVc2VyVXRmOFBhcnQgOiBlbWFpbFVzZXJQYXJ0O1xuXG4gIHZhciB1c2VyX3BhcnRzID0gdXNlci5zcGxpdCgnLicpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHVzZXJfcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXBhdHRlcm4udGVzdCh1c2VyX3BhcnRzW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNGRFFOO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxudmFyIF9tZXJnZSA9IHJlcXVpcmUoJy4vdXRpbC9tZXJnZScpO1xuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bHRfZnFkbl9vcHRpb25zID0ge1xuICByZXF1aXJlX3RsZDogdHJ1ZSxcbiAgYWxsb3dfdW5kZXJzY29yZXM6IGZhbHNlLFxuICBhbGxvd190cmFpbGluZ19kb3Q6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc0ZEUU4oc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gKDAsIF9tZXJnZTIuZGVmYXVsdCkob3B0aW9ucywgZGVmYXVsdF9mcWRuX29wdGlvbnMpO1xuXG4gIC8qIFJlbW92ZSB0aGUgb3B0aW9uYWwgdHJhaWxpbmcgZG90IGJlZm9yZSBjaGVja2luZyB2YWxpZGl0eSAqL1xuICBpZiAob3B0aW9ucy5hbGxvd190cmFpbGluZ19kb3QgJiYgc3RyW3N0ci5sZW5ndGggLSAxXSA9PT0gJy4nKSB7XG4gICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSk7XG4gIH1cbiAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KCcuJyk7XG4gIGlmIChvcHRpb25zLnJlcXVpcmVfdGxkKSB7XG4gICAgdmFyIHRsZCA9IHBhcnRzLnBvcCgpO1xuICAgIGlmICghcGFydHMubGVuZ3RoIHx8ICEvXihbYS16XFx1MDBhMS1cXHVmZmZmXXsyLH18eG5bYS16MC05LV17Mix9KSQvaS50ZXN0KHRsZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yICh2YXIgcGFydCwgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICBpZiAob3B0aW9ucy5hbGxvd191bmRlcnNjb3Jlcykge1xuICAgICAgcGFydCA9IHBhcnQucmVwbGFjZSgvXy9nLCAnJyk7XG4gICAgfVxuICAgIGlmICghL15bYS16XFx1MDBhMS1cXHVmZmZmMC05LV0rJC9pLnRlc3QocGFydCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKC9bXFx1ZmYwMS1cXHVmZjVlXS8udGVzdChwYXJ0KSkge1xuICAgICAgLy8gZGlzYWxsb3cgZnVsbC13aWR0aCBjaGFyc1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocGFydFswXSA9PT0gJy0nIHx8IHBhcnRbcGFydC5sZW5ndGggLSAxXSA9PT0gJy0nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNGbG9hdDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBmbG9hdCA9IC9eKD86Wy0rXT8oPzpbMC05XSspKT8oPzpcXC5bMC05XSopPyg/OltlRV1bXFwrXFwtXT8oPzpbMC05XSspKT8kLztcblxuZnVuY3Rpb24gaXNGbG9hdChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAoc3RyID09PSAnJyB8fCBzdHIgPT09ICcuJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZmxvYXQudGVzdChzdHIpICYmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbWluJykgfHwgc3RyID49IG9wdGlvbnMubWluKSAmJiAoIW9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ21heCcpIHx8IHN0ciA8PSBvcHRpb25zLm1heCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZ1bGxXaWR0aCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRnVsbFdpZHRoO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGZ1bGxXaWR0aCA9IGV4cG9ydHMuZnVsbFdpZHRoID0gL1teXFx1MDAyMC1cXHUwMDdFXFx1RkY2MS1cXHVGRjlGXFx1RkZBMC1cXHVGRkRDXFx1RkZFOC1cXHVGRkVFMC05YS16QS1aXS87XG5cbmZ1bmN0aW9uIGlzRnVsbFdpZHRoKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIGZ1bGxXaWR0aC50ZXN0KHN0cik7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5oYWxmV2lkdGggPSB1bmRlZmluZWQ7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0hhbGZXaWR0aDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoYWxmV2lkdGggPSBleHBvcnRzLmhhbGZXaWR0aCA9IC9bXFx1MDAyMC1cXHUwMDdFXFx1RkY2MS1cXHVGRjlGXFx1RkZBMC1cXHVGRkRDXFx1RkZFOC1cXHVGRkVFMC05YS16QS1aXS87XG5cbmZ1bmN0aW9uIGlzSGFsZldpZHRoKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIGhhbGZXaWR0aC50ZXN0KHN0cik7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNIZXhDb2xvcjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoZXhjb2xvciA9IC9eIz8oWzAtOUEtRl17M318WzAtOUEtRl17Nn0pJC9pO1xuXG5mdW5jdGlvbiBpc0hleENvbG9yKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIGhleGNvbG9yLnRlc3Qoc3RyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzSGV4YWRlY2ltYWw7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaGV4YWRlY2ltYWwgPSAvXlswLTlBLUZdKyQvaTtcblxuZnVuY3Rpb24gaXNIZXhhZGVjaW1hbChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBoZXhhZGVjaW1hbC50ZXN0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0lQO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlwdjRNYXliZSA9IC9eKFxcZHsxLDN9KVxcLihcXGR7MSwzfSlcXC4oXFxkezEsM30pXFwuKFxcZHsxLDN9KSQvO1xudmFyIGlwdjZCbG9jayA9IC9eWzAtOUEtRl17MSw0fSQvaTtcblxuZnVuY3Rpb24gaXNJUChzdHIpIHtcbiAgdmFyIHZlcnNpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAnJyA6IGFyZ3VtZW50c1sxXTtcblxuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmVyc2lvbiA9IFN0cmluZyh2ZXJzaW9uKTtcbiAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIGlzSVAoc3RyLCA0KSB8fCBpc0lQKHN0ciwgNik7XG4gIH0gZWxzZSBpZiAodmVyc2lvbiA9PT0gJzQnKSB7XG4gICAgaWYgKCFpcHY0TWF5YmUudGVzdChzdHIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnLicpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgICByZXR1cm4gcGFydHNbM10gPD0gMjU1O1xuICB9IGVsc2UgaWYgKHZlcnNpb24gPT09ICc2Jykge1xuICAgIHZhciBibG9ja3MgPSBzdHIuc3BsaXQoJzonKTtcbiAgICB2YXIgZm91bmRPbWlzc2lvbkJsb2NrID0gZmFsc2U7IC8vIG1hcmtlciB0byBpbmRpY2F0ZSA6OlxuXG4gICAgLy8gQXQgbGVhc3Qgc29tZSBPUyBhY2NlcHQgdGhlIGxhc3QgMzIgYml0cyBvZiBhbiBJUHY2IGFkZHJlc3NcbiAgICAvLyAoaS5lLiAyIG9mIHRoZSBibG9ja3MpIGluIElQdjQgbm90YXRpb24sIGFuZCBSRkMgMzQ5MyBzYXlzXG4gICAgLy8gdGhhdCAnOjpmZmZmOmEuYi5jLmQnIGlzIHZhbGlkIGZvciBJUHY0LW1hcHBlZCBJUHY2IGFkZHJlc3NlcyxcbiAgICAvLyBhbmQgJzo6YS5iLmMuZCcgaXMgZGVwcmVjYXRlZCwgYnV0IGFsc28gdmFsaWQuXG4gICAgdmFyIGZvdW5kSVB2NFRyYW5zaXRpb25CbG9jayA9IGlzSVAoYmxvY2tzW2Jsb2Nrcy5sZW5ndGggLSAxXSwgNCk7XG4gICAgdmFyIGV4cGVjdGVkTnVtYmVyT2ZCbG9ja3MgPSBmb3VuZElQdjRUcmFuc2l0aW9uQmxvY2sgPyA3IDogODtcblxuICAgIGlmIChibG9ja3MubGVuZ3RoID4gZXhwZWN0ZWROdW1iZXJPZkJsb2Nrcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBpbml0aWFsIG9yIGZpbmFsIDo6XG4gICAgaWYgKHN0ciA9PT0gJzo6Jykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChzdHIuc3Vic3RyKDAsIDIpID09PSAnOjonKSB7XG4gICAgICBibG9ja3Muc2hpZnQoKTtcbiAgICAgIGJsb2Nrcy5zaGlmdCgpO1xuICAgICAgZm91bmRPbWlzc2lvbkJsb2NrID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIDIpID09PSAnOjonKSB7XG4gICAgICBibG9ja3MucG9wKCk7XG4gICAgICBibG9ja3MucG9wKCk7XG4gICAgICBmb3VuZE9taXNzaW9uQmxvY2sgPSB0cnVlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAvLyB0ZXN0IGZvciBhIDo6IHdoaWNoIGNhbiBub3QgYmUgYXQgdGhlIHN0cmluZyBzdGFydC9lbmRcbiAgICAgIC8vIHNpbmNlIHRob3NlIGNhc2VzIGhhdmUgYmVlbiBoYW5kbGVkIGFib3ZlXG4gICAgICBpZiAoYmxvY2tzW2ldID09PSAnJyAmJiBpID4gMCAmJiBpIDwgYmxvY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKGZvdW5kT21pc3Npb25CbG9jaykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gbXVsdGlwbGUgOjogaW4gYWRkcmVzc1xuICAgICAgICB9XG4gICAgICAgIGZvdW5kT21pc3Npb25CbG9jayA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZvdW5kSVB2NFRyYW5zaXRpb25CbG9jayAmJiBpID09PSBibG9ja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAvLyBpdCBoYXMgYmVlbiBjaGVja2VkIGJlZm9yZSB0aGF0IHRoZSBsYXN0XG4gICAgICAgIC8vIGJsb2NrIGlzIGEgdmFsaWQgSVB2NCBhZGRyZXNzXG4gICAgICB9IGVsc2UgaWYgKCFpcHY2QmxvY2sudGVzdChibG9ja3NbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdW5kT21pc3Npb25CbG9jaykge1xuICAgICAgcmV0dXJuIGJsb2Nrcy5sZW5ndGggPj0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGJsb2Nrcy5sZW5ndGggPT09IGV4cGVjdGVkTnVtYmVyT2ZCbG9ja3M7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJU0JOO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzYm4xME1heWJlID0gL14oPzpbMC05XXs5fVh8WzAtOV17MTB9KSQvO1xudmFyIGlzYm4xM01heWJlID0gL14oPzpbMC05XXsxM30pJC87XG52YXIgZmFjdG9yID0gWzEsIDNdO1xuXG5mdW5jdGlvbiBpc0lTQk4oc3RyKSB7XG4gIHZhciB2ZXJzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gJycgOiBhcmd1bWVudHNbMV07XG5cbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZlcnNpb24gPSBTdHJpbmcodmVyc2lvbik7XG4gIGlmICghdmVyc2lvbikge1xuICAgIHJldHVybiBpc0lTQk4oc3RyLCAxMCkgfHwgaXNJU0JOKHN0ciwgMTMpO1xuICB9XG4gIHZhciBzYW5pdGl6ZWQgPSBzdHIucmVwbGFjZSgvW1xccy1dKy9nLCAnJyk7XG4gIHZhciBjaGVja3N1bSA9IDA7XG4gIHZhciBpID0gdm9pZCAwO1xuICBpZiAodmVyc2lvbiA9PT0gJzEwJykge1xuICAgIGlmICghaXNibjEwTWF5YmUudGVzdChzYW5pdGl6ZWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgIGNoZWNrc3VtICs9IChpICsgMSkgKiBzYW5pdGl6ZWQuY2hhckF0KGkpO1xuICAgIH1cbiAgICBpZiAoc2FuaXRpemVkLmNoYXJBdCg5KSA9PT0gJ1gnKSB7XG4gICAgICBjaGVja3N1bSArPSAxMCAqIDEwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja3N1bSArPSAxMCAqIHNhbml0aXplZC5jaGFyQXQoOSk7XG4gICAgfVxuICAgIGlmIChjaGVja3N1bSAlIDExID09PSAwKSB7XG4gICAgICByZXR1cm4gISFzYW5pdGl6ZWQ7XG4gICAgfVxuICB9IGVsc2UgaWYgKHZlcnNpb24gPT09ICcxMycpIHtcbiAgICBpZiAoIWlzYm4xM01heWJlLnRlc3Qoc2FuaXRpemVkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgY2hlY2tzdW0gKz0gZmFjdG9yW2kgJSAyXSAqIHNhbml0aXplZC5jaGFyQXQoaSk7XG4gICAgfVxuICAgIGlmIChzYW5pdGl6ZWQuY2hhckF0KDEyKSAtICgxMCAtIGNoZWNrc3VtICUgMTApICUgMTAgPT09IDApIHtcbiAgICAgIHJldHVybiAhIXNhbml0aXplZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNJU0lOO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzaW4gPSAvXltBLVpdezJ9WzAtOUEtWl17OX1bMC05XSQvO1xuXG5mdW5jdGlvbiBpc0lTSU4oc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBpZiAoIWlzaW4udGVzdChzdHIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGNoZWNrc3VtU3RyID0gc3RyLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoY2hhcmFjdGVyLCAzNik7XG4gIH0pO1xuXG4gIHZhciBzdW0gPSAwO1xuICB2YXIgZGlnaXQgPSB2b2lkIDA7XG4gIHZhciB0bXBOdW0gPSB2b2lkIDA7XG4gIHZhciBzaG91bGREb3VibGUgPSB0cnVlO1xuICBmb3IgKHZhciBpID0gY2hlY2tzdW1TdHIubGVuZ3RoIC0gMjsgaSA+PSAwOyBpLS0pIHtcbiAgICBkaWdpdCA9IGNoZWNrc3VtU3RyLnN1YnN0cmluZyhpLCBpICsgMSk7XG4gICAgdG1wTnVtID0gcGFyc2VJbnQoZGlnaXQsIDEwKTtcbiAgICBpZiAoc2hvdWxkRG91YmxlKSB7XG4gICAgICB0bXBOdW0gKj0gMjtcbiAgICAgIGlmICh0bXBOdW0gPj0gMTApIHtcbiAgICAgICAgc3VtICs9IHRtcE51bSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdW0gKz0gdG1wTnVtO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdW0gKz0gdG1wTnVtO1xuICAgIH1cbiAgICBzaG91bGREb3VibGUgPSAhc2hvdWxkRG91YmxlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIDEpLCAxMCkgPT09ICgxMDAwMCAtIHN1bSkgJSAxMDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNvODYwMSA9IHVuZGVmaW5lZDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIGlzbzg2MDEudGVzdChzdHIpO1xufTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8vIGZyb20gaHR0cDovL2dvby5nbC8wZWpISFdcbnZhciBpc284NjAxID0gZXhwb3J0cy5pc284NjAxID0gL14oW1xcKy1dP1xcZHs0fSg/IVxcZHsyfVxcYikpKCgtPykoKDBbMS05XXwxWzAtMl0pKFxcMyhbMTJdXFxkfDBbMS05XXwzWzAxXSkpP3xXKFswLTRdXFxkfDVbMC0yXSkoLT9bMS03XSk/fCgwMFsxLTldfDBbMS05XVxcZHxbMTJdXFxkezJ9fDMoWzAtNV1cXGR8NlsxLTZdKSkpKFtUXFxzXSgoKFswMV1cXGR8MlswLTNdKSgoOj8pWzAtNV1cXGQpP3wyNDo/MDApKFtcXC4sXVxcZCsoPyE6KSk/KT8oXFwxN1swLTVdXFxkKFtcXC4sXVxcZCspPyk/KFt6Wl18KFtcXCstXSkoWzAxXVxcZHwyWzAtM10pOj8oWzAtNV1cXGQpPyk/KT8pPyQvO1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNJbjtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbnZhciBfdG9TdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvdG9TdHJpbmcnKTtcblxudmFyIF90b1N0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b1N0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzSW4oc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2YXIgaSA9IHZvaWQgMDtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvcHRpb25zKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIGZvciAoaSBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBpKSkge1xuICAgICAgICBhcnJheVtpXSA9ICgwLCBfdG9TdHJpbmcyLmRlZmF1bHQpKG9wdGlvbnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXkuaW5kZXhPZihzdHIpID49IDA7XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb25zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoc3RyKTtcbiAgfSBlbHNlIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5pbmRleE9mKHN0cikgPj0gMDtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc0ludDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpbnQgPSAvXig/OlstK10/KD86MHxbMS05XVswLTldKikpJC87XG52YXIgaW50TGVhZGluZ1plcm9lcyA9IC9eWy0rXT9bMC05XSskLztcblxuZnVuY3Rpb24gaXNJbnQoc3RyLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBHZXQgdGhlIHJlZ2V4IHRvIHVzZSBmb3IgdGVzdGluZywgYmFzZWQgb24gd2hldGhlclxuICAvLyBsZWFkaW5nIHplcm9lcyBhcmUgYWxsb3dlZCBvciBub3QuXG4gIHZhciByZWdleCA9IG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2FsbG93X2xlYWRpbmdfemVyb2VzJykgJiYgb3B0aW9ucy5hbGxvd19sZWFkaW5nX3plcm9lcyA/IGludExlYWRpbmdaZXJvZXMgOiBpbnQ7XG5cbiAgLy8gQ2hlY2sgbWluL21heFxuICB2YXIgbWluQ2hlY2tQYXNzZWQgPSAhb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbWluJykgfHwgc3RyID49IG9wdGlvbnMubWluO1xuICB2YXIgbWF4Q2hlY2tQYXNzZWQgPSAhb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbWF4JykgfHwgc3RyIDw9IG9wdGlvbnMubWF4O1xuXG4gIHJldHVybiByZWdleC50ZXN0KHN0cikgJiYgbWluQ2hlY2tQYXNzZWQgJiYgbWF4Q2hlY2tQYXNzZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc0pTT047XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0pTT04oc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB0cnkge1xuICAgIHZhciBvYmogPSBKU09OLnBhcnNlKHN0cik7XG4gICAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmopKSA9PT0gJ29iamVjdCc7XG4gIH0gY2F0Y2ggKGUpIHsvKiBpZ25vcmUgKi99XG4gIHJldHVybiBmYWxzZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzTGVuZ3RoO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXJlc3QtcGFyYW1zICovXG5mdW5jdGlvbiBpc0xlbmd0aChzdHIsIG9wdGlvbnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBtaW4gPSB2b2lkIDA7XG4gIHZhciBtYXggPSB2b2lkIDA7XG4gIGlmICgodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9wdGlvbnMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBtaW4gPSBvcHRpb25zLm1pbiB8fCAwO1xuICAgIG1heCA9IG9wdGlvbnMubWF4O1xuICB9IGVsc2Uge1xuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5OiBpc0xlbmd0aChzdHIsIG1pbiBbLCBtYXhdKVxuICAgIG1pbiA9IGFyZ3VtZW50c1sxXTtcbiAgICBtYXggPSBhcmd1bWVudHNbMl07XG4gIH1cbiAgdmFyIHN1cnJvZ2F0ZVBhaXJzID0gc3RyLm1hdGNoKC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2cpIHx8IFtdO1xuICB2YXIgbGVuID0gc3RyLmxlbmd0aCAtIHN1cnJvZ2F0ZVBhaXJzLmxlbmd0aDtcbiAgcmV0dXJuIGxlbiA+PSBtaW4gJiYgKHR5cGVvZiBtYXggPT09ICd1bmRlZmluZWQnIHx8IGxlbiA8PSBtYXgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNMb3dlcmNhc2U7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc0xvd2VyY2FzZShzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdHIgPT09IHN0ci50b0xvd2VyQ2FzZSgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNNQUNBZGRyZXNzO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG1hY0FkZHJlc3MgPSAvXihbMC05YS1mQS1GXVswLTlhLWZBLUZdOil7NX0oWzAtOWEtZkEtRl1bMC05YS1mQS1GXSkkLztcblxuZnVuY3Rpb24gaXNNQUNBZGRyZXNzKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIG1hY0FkZHJlc3MudGVzdChzdHIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNNRDU7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbWQ1ID0gL15bYS1mMC05XXszMn0kLztcblxuZnVuY3Rpb24gaXNNRDUoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gbWQ1LnRlc3Qoc3RyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTW9iaWxlUGhvbmU7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG52YXIgcGhvbmVzID0ge1xuICAnYXItRFonOiAvXihcXCs/MjEzfDApKDV8Nnw3KVxcZHs4fSQvLFxuICAnYXItU1knOiAvXighPyhcXCs/OTYzKXwwKT85XFxkezh9JC8sXG4gICdhci1TQSc6IC9eKCE/KFxcKz85NjYpfDApPzVcXGR7OH0kLyxcbiAgJ2VuLVVTJzogL14oXFwrPzEpP1syLTldXFxkezJ9WzItOV0oPyExMSlcXGR7Nn0kLyxcbiAgJ2NzLUNaJzogL14oXFwrPzQyMCk/ID9bMS05XVswLTldezJ9ID9bMC05XXszfSA/WzAtOV17M30kLyxcbiAgJ2RlLURFJzogL14oXFwrPzQ5WyBcXC5cXC1dKT8oW1xcKF17MX1bMC05XXsxLDZ9W1xcKV0pPyhbMC05IFxcLlxcLVxcL117MywyMH0pKCh4fGV4dHxleHRlbnNpb24pWyBdP1swLTldezEsNH0pPyQvLFxuICAnZGEtREsnOiAvXihcXCs/NDUpPyhcXGR7OH0pJC8sXG4gICdlbC1HUic6IC9eKFxcKz8zMCk/KDY5XFxkezh9KSQvLFxuICAnZW4tQVUnOiAvXihcXCs/NjF8MCk0XFxkezh9JC8sXG4gICdlbi1HQic6IC9eKFxcKz80NHwwKTdcXGR7OX0kLyxcbiAgJ2VuLUhLJzogL14oXFwrPzg1MlxcLT8pP1s1NjldXFxkezN9XFwtP1xcZHs0fSQvLFxuICAnZW4tSU4nOiAvXihcXCs/OTF8MCk/Wzc4OV1cXGR7OX0kLyxcbiAgJ2VuLU5aJzogL14oXFwrPzY0fDApMlxcZHs3LDl9JC8sXG4gICdlbi1aQSc6IC9eKFxcKz8yN3wwKVxcZHs5fSQvLFxuICAnZW4tWk0nOiAvXihcXCs/MjYpPzA5WzU2N11cXGR7N30kLyxcbiAgJ2VzLUVTJzogL14oXFwrPzM0KT8oNlxcZHsxfXw3WzEyMzRdKVxcZHs3fSQvLFxuICAnZmktRkknOiAvXihcXCs/MzU4fDApXFxzPyg0KDB8MXwyfDR8NSk/fDUwKVxccz8oXFxkXFxzPyl7NCw4fVxcZCQvLFxuICAnZnItRlInOiAvXihcXCs/MzN8MClbNjddXFxkezh9JC8sXG4gICdodS1IVSc6IC9eKFxcKz8zNikoMjB8MzB8NzApXFxkezd9JC8sXG4gICdpdC1JVCc6IC9eKFxcKz8zOSk/XFxzPzNcXGR7Mn0gP1xcZHs2LDd9JC8sXG4gICdqYS1KUCc6IC9eKFxcKz84MXwwKVxcZHsxLDR9WyBcXC1dP1xcZHsxLDR9WyBcXC1dP1xcZHs0fSQvLFxuICAnbXMtTVknOiAvXihcXCs/Nj8wMSl7MX0oKFsxNDVdezF9KFxcLXxcXHMpP1xcZHs3LDh9KXwoWzIzNjc4OV17MX0oXFxzfFxcLSk/XFxkezd9KSkkLyxcbiAgJ25iLU5PJzogL14oXFwrPzQ3KT9bNDldXFxkezd9JC8sXG4gICdubC1CRSc6IC9eKFxcKz8zMnwwKTQ/XFxkezh9JC8sXG4gICdubi1OTyc6IC9eKFxcKz80Nyk/WzQ5XVxcZHs3fSQvLFxuICAncGwtUEwnOiAvXihcXCs/NDgpPyA/WzUtOF1cXGQgP1xcZHszfSA/XFxkezJ9ID9cXGR7Mn0kLyxcbiAgJ3B0LUJSJzogL14oXFwrPzU1fDApXFwtP1sxLTldezJ9XFwtP1syLTldezF9XFxkezMsNH1cXC0/XFxkezR9JC8sXG4gICdwdC1QVCc6IC9eKFxcKz8zNTEpPzlbMTIzNl1cXGR7N30kLyxcbiAgJ3J1LVJVJzogL14oXFwrPzd8OCk/OVxcZHs5fSQvLFxuICAnc3ItUlMnOiAvXihcXCszODE2fDA2KVstIFxcZF17NSw5fSQvLFxuICAndHItVFInOiAvXihcXCs/OTB8MCk/NVxcZHs5fSQvLFxuICAndmktVk4nOiAvXihcXCs/ODR8MCk/KCgxKDIoWzAtOV0pfDYoWzItOV0pfDg4fDk5KSl8KDkoKD8hNSlbMC05XSkpKShbMC05XXs3fSkkLyxcbiAgJ3poLUNOJzogL14oXFwrPzA/ODZcXC0/KT8xWzM0NTc4OV1cXGR7OX0kLyxcbiAgJ3poLVRXJzogL14oXFwrPzg4NlxcLT98MCk/OVxcZHs4fSQvXG59O1xuLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG5cbi8vIGFsaWFzZXNcbnBob25lc1snZW4tQ0EnXSA9IHBob25lc1snZW4tVVMnXTtcbnBob25lc1snZnItQkUnXSA9IHBob25lc1snbmwtQkUnXTtcblxuZnVuY3Rpb24gaXNNb2JpbGVQaG9uZShzdHIsIGxvY2FsZSkge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgaWYgKGxvY2FsZSBpbiBwaG9uZXMpIHtcbiAgICByZXR1cm4gcGhvbmVzW2xvY2FsZV0udGVzdChzdHIpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTW9uZ29JZDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbnZhciBfaXNIZXhhZGVjaW1hbCA9IHJlcXVpcmUoJy4vaXNIZXhhZGVjaW1hbCcpO1xuXG52YXIgX2lzSGV4YWRlY2ltYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNIZXhhZGVjaW1hbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzTW9uZ29JZChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiAoMCwgX2lzSGV4YWRlY2ltYWwyLmRlZmF1bHQpKHN0cikgJiYgc3RyLmxlbmd0aCA9PT0gMjQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc011bHRpYnl0ZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRyb2wtcmVnZXggKi9cbnZhciBtdWx0aWJ5dGUgPSAvW15cXHgwMC1cXHg3Rl0vO1xuLyogZXNsaW50LWVuYWJsZSBuby1jb250cm9sLXJlZ2V4ICovXG5cbmZ1bmN0aW9uIGlzTXVsdGlieXRlKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIG11bHRpYnl0ZS50ZXN0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc051bGw7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc051bGwoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3RyLmxlbmd0aCA9PT0gMDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzTnVtZXJpYztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBudW1lcmljID0gL15bLStdP1swLTldKyQvO1xuXG5mdW5jdGlvbiBpc051bWVyaWMoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gbnVtZXJpYy50ZXN0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1N1cnJvZ2F0ZVBhaXI7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc3Vycm9nYXRlUGFpciA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdLztcblxuZnVuY3Rpb24gaXNTdXJyb2dhdGVQYWlyKHN0cikge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgcmV0dXJuIHN1cnJvZ2F0ZVBhaXIudGVzdChzdHIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNVUkw7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG52YXIgX2lzRlFETiA9IHJlcXVpcmUoJy4vaXNGUUROJyk7XG5cbnZhciBfaXNGUUROMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRlFETik7XG5cbnZhciBfaXNJUCA9IHJlcXVpcmUoJy4vaXNJUCcpO1xuXG52YXIgX2lzSVAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJUCk7XG5cbnZhciBfbWVyZ2UgPSByZXF1aXJlKCcuL3V0aWwvbWVyZ2UnKTtcblxudmFyIF9tZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0X3VybF9vcHRpb25zID0ge1xuICBwcm90b2NvbHM6IFsnaHR0cCcsICdodHRwcycsICdmdHAnXSxcbiAgcmVxdWlyZV90bGQ6IHRydWUsXG4gIHJlcXVpcmVfcHJvdG9jb2w6IGZhbHNlLFxuICByZXF1aXJlX2hvc3Q6IHRydWUsXG4gIHJlcXVpcmVfdmFsaWRfcHJvdG9jb2w6IHRydWUsXG4gIGFsbG93X3VuZGVyc2NvcmVzOiBmYWxzZSxcbiAgYWxsb3dfdHJhaWxpbmdfZG90OiBmYWxzZSxcbiAgYWxsb3dfcHJvdG9jb2xfcmVsYXRpdmVfdXJsczogZmFsc2Vcbn07XG5cbnZhciB3cmFwcGVkX2lwdjYgPSAvXlxcWyhbXlxcXV0rKVxcXSg/OjooWzAtOV0rKSk/JC87XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuXG5mdW5jdGlvbiBjaGVja0hvc3QoaG9zdCwgbWF0Y2hlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbWF0Y2ggPSBtYXRjaGVzW2ldO1xuICAgIGlmIChob3N0ID09PSBtYXRjaCB8fCBpc1JlZ0V4cChtYXRjaCkgJiYgbWF0Y2gudGVzdChob3N0KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNVUkwodXJsLCBvcHRpb25zKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KSh1cmwpO1xuICBpZiAoIXVybCB8fCB1cmwubGVuZ3RoID49IDIwODMgfHwgL1xccy8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh1cmwuaW5kZXhPZignbWFpbHRvOicpID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X3VybF9vcHRpb25zKTtcbiAgdmFyIHByb3RvY29sID0gdm9pZCAwLFxuICAgICAgYXV0aCA9IHZvaWQgMCxcbiAgICAgIGhvc3QgPSB2b2lkIDAsXG4gICAgICBob3N0bmFtZSA9IHZvaWQgMCxcbiAgICAgIHBvcnQgPSB2b2lkIDAsXG4gICAgICBwb3J0X3N0ciA9IHZvaWQgMCxcbiAgICAgIHNwbGl0ID0gdm9pZCAwLFxuICAgICAgaXB2NiA9IHZvaWQgMDtcblxuICBzcGxpdCA9IHVybC5zcGxpdCgnIycpO1xuICB1cmwgPSBzcGxpdC5zaGlmdCgpO1xuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCc/Jyk7XG4gIHVybCA9IHNwbGl0LnNoaWZ0KCk7XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJzovLycpO1xuICBpZiAoc3BsaXQubGVuZ3RoID4gMSkge1xuICAgIHByb3RvY29sID0gc3BsaXQuc2hpZnQoKTtcbiAgICBpZiAob3B0aW9ucy5yZXF1aXJlX3ZhbGlkX3Byb3RvY29sICYmIG9wdGlvbnMucHJvdG9jb2xzLmluZGV4T2YocHJvdG9jb2wpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvcHRpb25zLnJlcXVpcmVfcHJvdG9jb2wpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5hbGxvd19wcm90b2NvbF9yZWxhdGl2ZV91cmxzICYmIHVybC5zdWJzdHIoMCwgMikgPT09ICcvLycpIHtcbiAgICBzcGxpdFswXSA9IHVybC5zdWJzdHIoMik7XG4gIH1cbiAgdXJsID0gc3BsaXQuam9pbignOi8vJyk7XG5cbiAgc3BsaXQgPSB1cmwuc3BsaXQoJy8nKTtcbiAgdXJsID0gc3BsaXQuc2hpZnQoKTtcblxuICBpZiAodXJsID09PSAnJyAmJiAhb3B0aW9ucy5yZXF1aXJlX2hvc3QpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNwbGl0ID0gdXJsLnNwbGl0KCdAJyk7XG4gIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgYXV0aCA9IHNwbGl0LnNoaWZ0KCk7XG4gICAgaWYgKGF1dGguaW5kZXhPZignOicpID49IDAgJiYgYXV0aC5zcGxpdCgnOicpLmxlbmd0aCA+IDIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaG9zdG5hbWUgPSBzcGxpdC5qb2luKCdAJyk7XG5cbiAgcG9ydF9zdHIgPSBpcHY2ID0gbnVsbDtcbiAgdmFyIGlwdjZfbWF0Y2ggPSBob3N0bmFtZS5tYXRjaCh3cmFwcGVkX2lwdjYpO1xuICBpZiAoaXB2Nl9tYXRjaCkge1xuICAgIGhvc3QgPSAnJztcbiAgICBpcHY2ID0gaXB2Nl9tYXRjaFsxXTtcbiAgICBwb3J0X3N0ciA9IGlwdjZfbWF0Y2hbMl0gfHwgbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBzcGxpdCA9IGhvc3RuYW1lLnNwbGl0KCc6Jyk7XG4gICAgaG9zdCA9IHNwbGl0LnNoaWZ0KCk7XG4gICAgaWYgKHNwbGl0Lmxlbmd0aCkge1xuICAgICAgcG9ydF9zdHIgPSBzcGxpdC5qb2luKCc6Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBvcnRfc3RyICE9PSBudWxsKSB7XG4gICAgcG9ydCA9IHBhcnNlSW50KHBvcnRfc3RyLCAxMCk7XG4gICAgaWYgKCEvXlswLTldKyQvLnRlc3QocG9ydF9zdHIpIHx8IHBvcnQgPD0gMCB8fCBwb3J0ID4gNjU1MzUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoISgwLCBfaXNJUDIuZGVmYXVsdCkoaG9zdCkgJiYgISgwLCBfaXNGUUROMi5kZWZhdWx0KShob3N0LCBvcHRpb25zKSAmJiAoIWlwdjYgfHwgISgwLCBfaXNJUDIuZGVmYXVsdCkoaXB2NiwgNikpICYmIGhvc3QgIT09ICdsb2NhbGhvc3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaG9zdCA9IGhvc3QgfHwgaXB2NjtcblxuICBpZiAob3B0aW9ucy5ob3N0X3doaXRlbGlzdCAmJiAhY2hlY2tIb3N0KGhvc3QsIG9wdGlvbnMuaG9zdF93aGl0ZWxpc3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChvcHRpb25zLmhvc3RfYmxhY2tsaXN0ICYmIGNoZWNrSG9zdChob3N0LCBvcHRpb25zLmhvc3RfYmxhY2tsaXN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNVVUlEO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHV1aWQgPSB7XG4gIDM6IC9eWzAtOUEtRl17OH0tWzAtOUEtRl17NH0tM1swLTlBLUZdezN9LVswLTlBLUZdezR9LVswLTlBLUZdezEyfSQvaSxcbiAgNDogL15bMC05QS1GXXs4fS1bMC05QS1GXXs0fS00WzAtOUEtRl17M30tWzg5QUJdWzAtOUEtRl17M30tWzAtOUEtRl17MTJ9JC9pLFxuICA1OiAvXlswLTlBLUZdezh9LVswLTlBLUZdezR9LTVbMC05QS1GXXszfS1bODlBQl1bMC05QS1GXXszfS1bMC05QS1GXXsxMn0kL2ksXG4gIGFsbDogL15bMC05QS1GXXs4fS1bMC05QS1GXXs0fS1bMC05QS1GXXs0fS1bMC05QS1GXXs0fS1bMC05QS1GXXsxMn0kL2lcbn07XG5cbmZ1bmN0aW9uIGlzVVVJRChzdHIpIHtcbiAgdmFyIHZlcnNpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAnYWxsJyA6IGFyZ3VtZW50c1sxXTtcblxuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHBhdHRlcm4gPSB1dWlkW3ZlcnNpb25dO1xuICByZXR1cm4gcGF0dGVybiAmJiBwYXR0ZXJuLnRlc3Qoc3RyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVXBwZXJjYXNlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gaXNVcHBlcmNhc2Uoc3RyKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICByZXR1cm4gc3RyID09PSBzdHIudG9VcHBlckNhc2UoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVmFyaWFibGVXaWR0aDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbnZhciBfaXNGdWxsV2lkdGggPSByZXF1aXJlKCcuL2lzRnVsbFdpZHRoJyk7XG5cbnZhciBfaXNIYWxmV2lkdGggPSByZXF1aXJlKCcuL2lzSGFsZldpZHRoJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzVmFyaWFibGVXaWR0aChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBfaXNGdWxsV2lkdGguZnVsbFdpZHRoLnRlc3Qoc3RyKSAmJiBfaXNIYWxmV2lkdGguaGFsZldpZHRoLnRlc3Qoc3RyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzV2hpdGVsaXN0ZWQ7XG5cbnZhciBfYXNzZXJ0U3RyaW5nID0gcmVxdWlyZSgnLi91dGlsL2Fzc2VydFN0cmluZycpO1xuXG52YXIgX2Fzc2VydFN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnRTdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBpc1doaXRlbGlzdGVkKHN0ciwgY2hhcnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIGZvciAodmFyIGkgPSBzdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoY2hhcnMuaW5kZXhPZihzdHJbaV0pID09PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGx0cmltO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbHRyaW0oc3RyLCBjaGFycykge1xuICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgdmFyIHBhdHRlcm4gPSBjaGFycyA/IG5ldyBSZWdFeHAoJ15bJyArIGNoYXJzICsgJ10rJywgJ2cnKSA6IC9eXFxzKy9nO1xuICByZXR1cm4gc3RyLnJlcGxhY2UocGF0dGVybiwgJycpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbWF0Y2hlcztcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG1hdGNoZXMoc3RyLCBwYXR0ZXJuLCBtb2RpZmllcnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocGF0dGVybikgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgcGF0dGVybiA9IG5ldyBSZWdFeHAocGF0dGVybiwgbW9kaWZpZXJzKTtcbiAgfVxuICByZXR1cm4gcGF0dGVybi50ZXN0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBub3JtYWxpemVFbWFpbDtcblxudmFyIF9pc0VtYWlsID0gcmVxdWlyZSgnLi9pc0VtYWlsJyk7XG5cbnZhciBfaXNFbWFpbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0VtYWlsKTtcblxudmFyIF9tZXJnZSA9IHJlcXVpcmUoJy4vdXRpbC9tZXJnZScpO1xuXG52YXIgX21lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGRlZmF1bHRfbm9ybWFsaXplX2VtYWlsX29wdGlvbnMgPSB7XG4gIGxvd2VyY2FzZTogdHJ1ZSxcbiAgcmVtb3ZlX2RvdHM6IHRydWUsXG4gIHJlbW92ZV9leHRlbnNpb246IHRydWVcbn07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUVtYWlsKGVtYWlsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSAoMCwgX21lcmdlMi5kZWZhdWx0KShvcHRpb25zLCBkZWZhdWx0X25vcm1hbGl6ZV9lbWFpbF9vcHRpb25zKTtcbiAgaWYgKCEoMCwgX2lzRW1haWwyLmRlZmF1bHQpKGVtYWlsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGFydHMgPSBlbWFpbC5zcGxpdCgnQCcsIDIpO1xuICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChwYXJ0c1sxXSA9PT0gJ2dtYWlsLmNvbScgfHwgcGFydHNbMV0gPT09ICdnb29nbGVtYWlsLmNvbScpIHtcbiAgICBpZiAob3B0aW9ucy5yZW1vdmVfZXh0ZW5zaW9uKSB7XG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnNwbGl0KCcrJylbMF07XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnJlbW92ZV9kb3RzKSB7XG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcLi9nLCAnJyk7XG4gICAgfVxuICAgIGlmICghcGFydHNbMF0ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHBhcnRzWzBdID0gcGFydHNbMF0udG9Mb3dlckNhc2UoKTtcbiAgICBwYXJ0c1sxXSA9ICdnbWFpbC5jb20nO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMubG93ZXJjYXNlKSB7XG4gICAgcGFydHNbMF0gPSBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBwYXJ0cy5qb2luKCdAJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBydHJpbTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHJ0cmltKHN0ciwgY2hhcnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHZhciBwYXR0ZXJuID0gY2hhcnMgPyBuZXcgUmVnRXhwKCdbJyArIGNoYXJzICsgJ10nKSA6IC9cXHMvO1xuXG4gIHZhciBpZHggPSBzdHIubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGlkeCA+PSAwICYmIHBhdHRlcm4udGVzdChzdHJbaWR4XSkpIHtcbiAgICBpZHgtLTtcbiAgfVxuXG4gIHJldHVybiBpZHggPCBzdHIubGVuZ3RoID8gc3RyLnN1YnN0cigwLCBpZHggKyAxKSA6IHN0cjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHN0cmlwTG93O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxudmFyIF9ibGFja2xpc3QgPSByZXF1aXJlKCcuL2JsYWNrbGlzdCcpO1xuXG52YXIgX2JsYWNrbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ibGFja2xpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHJpcExvdyhzdHIsIGtlZXBfbmV3X2xpbmVzKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICB2YXIgY2hhcnMgPSBrZWVwX25ld19saW5lcyA/ICdcXFxceDAwLVxcXFx4MDlcXFxceDBCXFxcXHgwQ1xcXFx4MEUtXFxcXHgxRlxcXFx4N0YnIDogJ1xcXFx4MDAtXFxcXHgxRlxcXFx4N0YnO1xuICByZXR1cm4gKDAsIF9ibGFja2xpc3QyLmRlZmF1bHQpKHN0ciwgY2hhcnMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9Cb29sZWFuO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9Cb29sZWFuKHN0ciwgc3RyaWN0KSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShzdHIpO1xuICBpZiAoc3RyaWN0KSB7XG4gICAgcmV0dXJuIHN0ciA9PT0gJzEnIHx8IHN0ciA9PT0gJ3RydWUnO1xuICB9XG4gIHJldHVybiBzdHIgIT09ICcwJyAmJiBzdHIgIT09ICdmYWxzZScgJiYgc3RyICE9PSAnJztcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvRGF0ZTtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRvRGF0ZShkYXRlKSB7XG4gICgwLCBfYXNzZXJ0U3RyaW5nMi5kZWZhdWx0KShkYXRlKTtcbiAgZGF0ZSA9IERhdGUucGFyc2UoZGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oZGF0ZSkgPyBuZXcgRGF0ZShkYXRlKSA6IG51bGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0b0Zsb2F0O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9GbG9hdChzdHIpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBwYXJzZUZsb2F0KHN0cik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0b0ludDtcblxudmFyIF9hc3NlcnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWwvYXNzZXJ0U3RyaW5nJyk7XG5cbnZhciBfYXNzZXJ0U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydFN0cmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRvSW50KHN0ciwgcmFkaXgpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBwYXJzZUludChzdHIsIHJhZGl4IHx8IDEwKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRyaW07XG5cbnZhciBfcnRyaW0gPSByZXF1aXJlKCcuL3J0cmltJyk7XG5cbnZhciBfcnRyaW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcnRyaW0pO1xuXG52YXIgX2x0cmltID0gcmVxdWlyZSgnLi9sdHJpbScpO1xuXG52YXIgX2x0cmltMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2x0cmltKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdHJpbShzdHIsIGNoYXJzKSB7XG4gIHJldHVybiAoMCwgX3J0cmltMi5kZWZhdWx0KSgoMCwgX2x0cmltMi5kZWZhdWx0KShzdHIsIGNoYXJzKSwgY2hhcnMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZXNjYXBlO1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdW5lc2NhcGUoc3RyKSB7XG4gICAgICAoMCwgX2Fzc2VydFN0cmluZzIuZGVmYXVsdCkoc3RyKTtcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvJmFtcDsvZywgJyYnKS5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJykucmVwbGFjZSgvJiN4Mjc7L2csIFwiJ1wiKS5yZXBsYWNlKC8mbHQ7L2csICc8JykucmVwbGFjZSgvJmd0Oy9nLCAnPicpLnJlcGxhY2UoLyYjeDJGOy9nLCAnLycpLnJlcGxhY2UoLyYjOTY7L2csICdgJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhc3NlcnRTdHJpbmc7XG5mdW5jdGlvbiBhc3NlcnRTdHJpbmcoaW5wdXQpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlzIGxpYnJhcnkgKHZhbGlkYXRvci5qcykgdmFsaWRhdGVzIHN0cmluZ3Mgb25seScpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBtZXJnZTtcbmZ1bmN0aW9uIG1lcmdlKCkge1xuICB2YXIgb2JqID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBkZWZhdWx0cyA9IGFyZ3VtZW50c1sxXTtcblxuICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb2JqW2tleV0gPSBkZWZhdWx0c1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdG9TdHJpbmc7XG5mdW5jdGlvbiB0b1N0cmluZyhpbnB1dCkge1xuICBpZiAoKHR5cGVvZiBpbnB1dCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoaW5wdXQpKSA9PT0gJ29iamVjdCcgJiYgaW5wdXQgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpbnB1dCA9IGlucHV0LnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0ID0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlucHV0ID09PSBudWxsIHx8IHR5cGVvZiBpbnB1dCA9PT0gJ3VuZGVmaW5lZCcgfHwgaXNOYU4oaW5wdXQpICYmICFpbnB1dC5sZW5ndGgpIHtcbiAgICBpbnB1dCA9ICcnO1xuICB9XG4gIHJldHVybiBTdHJpbmcoaW5wdXQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2hpdGVsaXN0O1xuXG52YXIgX2Fzc2VydFN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9hc3NlcnRTdHJpbmcnKTtcblxudmFyIF9hc3NlcnRTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0U3RyaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gd2hpdGVsaXN0KHN0ciwgY2hhcnMpIHtcbiAgKDAsIF9hc3NlcnRTdHJpbmcyLmRlZmF1bHQpKHN0cik7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKCdbXicgKyBjaGFycyArICddKycsICdnJyksICcnKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsInZhciB2YWxpZGF0b3IgPSByZXF1aXJlKCcuLi8uLi9taXNjL3ZhbGlkYXRlJyk7XG5cbi8vIGdldCBlbGVtZW50IHJlZmVyZW5jZXNcbnZhciBsb2dpbkZvcm1EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdl9sb2dpbl9mb3JtXCIpO1xudmFyIGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5fZm9ybVwiKTtcbnZhciBsb2dpblN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5fZm9ybV9zdWJtaXRcIik7XG5cbnZhciBjcmVhdGVGb3JtRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXZfY3JlYXRlX2Zvcm1cIik7XG52YXIgY3JlYXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlX2Zvcm1cIik7XG52YXIgY3JlYXRlU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVfZm9ybV9zdWJtaXRcIik7XG5cbnZhciB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bl90b2dnbGVfZm9ybXNcIik7XG5cbi8vIGluaXRpYWwgdmlldyBzdGF0ZVxubG9naW5Gb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5jcmVhdGVGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxubG9naW5Gb3JtLmVtYWlsLnBsYWNlaG9sZGVyID0gXCJlbWFpbEBleGFtcGxlLmNvbVwiXG5jcmVhdGVGb3JtLmVtYWlsLnBsYWNlaG9sZGVyID0gXCJlbWFpbEBleGFtcGxlLmNvbVwiXG5cbi8vIGFkZCBsaXN0ZW5lcnNcbmxvZ2luU3VibWl0Lm9uY2xpY2sgPSB2YWxpZGF0ZUxvZ2luRm9ybTtcbmNyZWF0ZVN1Ym1pdC5vbmNsaWNrID0gdmFsaWRhdGVDcmVhdGVGb3JtO1xudG9nZ2xlQnV0dG9uLm9uY2xpY2sgPSB0b2dnbGVGb3JtcztcblxuZnVuY3Rpb24gdmFsaWRhdGVDcmVhdGVGb3JtKCl7XG4gIGNsZWFyRXJyb3JzKCk7XG4gIC8vIHJldHVybiBmYWxzZTtcbiAgdmFyIGVtYWlsID0gY3JlYXRlRm9ybS5lbWFpbC52YWx1ZTtcbiAgdmFyIHBhc3MxID0gY3JlYXRlRm9ybS5wYXNzMS52YWx1ZTtcbiAgdmFyIHBhc3MyID0gY3JlYXRlRm9ybS5wYXNzMi52YWx1ZTtcbiAgdmFyIGVycm9ycyA9IFtdO1xuXG4gIHZhciB2YWxpZEVtYWlsID0gdmFsaWRhdG9yLmlzVmFsaWRFbWFpbChlbWFpbCk7XG4gIHZhciBwd2RTYW1lID0gcGFzczEgPT09IHBhc3MyO1xuICBpZiAoIXZhbGlkRW1haWwpe1xuICAgIGVycm9ycy5wdXNoKFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCIpO1xuICB9XG4gIGlmKCFwd2RTYW1lKXtcbiAgICBlcnJvcnMucHVzaChcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XG4gIH1cblxuICBpZihlcnJvcnMubGVuZ3RoID4gMCl7XG4gICAgc2hvd0Vycm9ycyhlcnJvcnMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtaW5QYXNzTGVuZ3RoID0gODtcbiAgdmFyIHZhbGlkUHdkID0gdmFsaWRhdG9yLmlzVmFsaWRQYXNzd29yZChwYXNzMSwgbWluUGFzc0xlbmd0aCk7XG5cbiAgaWYoIXZhbGlkUHdkKXtcbiAgICBlcnJvcnMucHVzaChcIkludmFsaWQgcGFzc3dvcmQ6IG11c3QgYmUgYWxwaGFudW1lcmljIGFuZCBsb25nZXIgdGhhbiBcIiArIG1pblBhc3NMZW5ndGgpO1xuICB9XG5cbiAgaWYoZXJyb3JzLmxlbmd0aCA+IDApe1xuICAgIHNob3dFcnJvcnMoZXJyb3JzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBtYWRlIGl0IHRocm91Z2ggYWxsIGNoZWNrcywgdmFsdWVzIGFyZSB2YWxpZCBhbmQgZm9ybSBzaG91bGQgYmUgc3VibWl0dGVkLlxuICBjb25zb2xlLmxvZyhcIkNyZWF0ZSBGb3JtIFN1Ym1pdHRlZFwiKTtcbiAgY3JlYXRlRm9ybS5zdWJtaXQoKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVMb2dpbkZvcm0oKXtcbiAgY2xlYXJFcnJvcnMoKTtcbiAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQuZm9ybXNbXCJsb2dpbl9mb3JtXCJdKVxuICBjb25zb2xlLmxvZyhcInZhbGlkYXRpbmcgbG9naW4gZm9ybVwiKTtcbiAgY29uc29sZS5sb2cobG9naW5Gb3JtKTtcbiAgdmFyIGVtYWlsID0gbG9naW5Gb3JtLmVtYWlsLnZhbHVlO1xuICB2YXIgcGFzcyA9IGxvZ2luRm9ybS5wYXNzLnZhbHVlO1xuICBjb25zb2xlLmxvZyhcImZvcm0gdmFsdWVzIC0gXCIgKyBlbWFpbCArIFwiLCBcIiArIHBhc3MpO1xuICB2YXIgdmFsaWRFbWFpbCA9IHZhbGlkYXRvci5pc1ZhbGlkRW1haWwoZW1haWwpO1xuICB2YXIgdmFsaWRQYXNzID0gdmFsaWRhdG9yLmlzVmFsaWRQYXNzd29yZChwYXNzKTtcbiAgdmFyIHZhbGlkTG9naW4gPSB2YWxpZEVtYWlsICYmIHZhbGlkUGFzcztcblxuICBpZih2YWxpZExvZ2luKXtcbiAgICAgIGxvZ2luRm9ybS5zdWJtaXQoKTtcbiAgICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlcnJvcnMgPSBbXVxuXG4gIGlmKCF2YWxpZEVtYWlsKXtcbiAgICBlcnJvcnMucHVzaChcIkludmFsaWQgRW1haWwgQWRkcmVzc1wiKTtcbiAgfVxuICBpZighdmFsaWRQYXNzKXtcbiAgICBlcnJvcnMucHVzaChcIkludmFsaWQgUGFzc3dvcmRcIik7XG4gIH1cbiAgaWYoZXJyb3JzLmxlbmd0aCA+IDApe1xuICAgIHNob3dFcnJvcnMoZXJyb3JzKTtcbiAgfVxuICByZXR1cm4gdmFsaWRFbWFpbCAmJiB2YWxpZFBhc3M7XG59XG5cbmZ1bmN0aW9uIHNob3dFcnJvcnMoZXJyb3JzKXtcbiAgdmFyIGVycm9yUGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcnNcIik7XG4gIGNsZWFyRXJyb3JzKCk7XG4gIHZhciBlcnJvclRleHQgPSBcIlwiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKyl7XG4gICAgZXJyb3JUZXh0ICs9IFwiPGxpPlwiICsgZXJyb3JzW2ldICsgXCI8L2xpPlwiXG4gIH1cbiAgZXJyb3JQYXJhZ3JhcGguaW5uZXJIVE1MID0gZXJyb3JUZXh0O1xufVxuXG5mdW5jdGlvbiBjbGVhckVycm9ycygpe1xuICB2YXIgZXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcnNcIik7XG4gIGVycm9ycy5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGb3Jtcygpe1xuICB2YXIgZm9ybVJheSA9IFtsb2dpbkZvcm1EaXYsIGNyZWF0ZUZvcm1EaXZdXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBmb3JtUmF5Lmxlbmd0aDsgaSsrKXtcbiAgICB2YXIgZm9ybSA9IGZvcm1SYXlbaV07XG4gICAgaWYoZm9ybS5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKXtcbiAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxufVxuIiwidmFyIHZhbGlkYXRvciA9IHJlcXVpcmUoJ3ZhbGlkYXRvcicpO1xuXG5leHBvcnRzLmlzVmFsaWRFbWFpbCA9IGZ1bmN0aW9uKGVtYWlsKXtcbiAgcmV0dXJuIHZhbGlkYXRvci5pc0VtYWlsKGVtYWlsKTtcbn1cblxuZXhwb3J0cy5pc1ZhbGlkUGFzc3dvcmQgPSBmdW5jdGlvbihwd2QsIG1pbkxlbmd0aCl7XG4gIGlmKCFtaW5MZW5ndGgpe1xuICAgIG1pbkxlbmd0aCA9IDg7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gcHdkLmxlbmd0aDtcbiAgdmFyIHZhbGlkTGVuZ3RoID0gbGVuZ3RoID49IG1pbkxlbmd0aDtcblxuICB2YXIgaXNBbHBoYU51bSA9IHZhbGlkYXRvci5pc0FscGhhbnVtZXJpYyhwd2QpO1xuXG4gIGlmKHZhbGlkTGVuZ3RoICYmIGlzQWxwaGFOdW0pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiJdfQ==
