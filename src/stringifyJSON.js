// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var arrayHoldingArrContent = [];
  var str = '';
  var quotesForStr = '"';
  if (typeof obj === 'string') {
    return quotesForStr + obj + quotesForStr;
    } else if (obj === null || typeof obj === 'boolean' || typeof obj === 'number' || obj === undefined) {
      return str + obj;
    } else if (!Array.isArray(obj)) {
        var arrHoldingKeyValues = [];
        var arrayHoldingGivenObjectKeys = Object.keys(obj);
        arrayHoldingGivenObjectKeys.forEach(function(eachkey) {
            var keyInStringForm = quotesForStr + eachkey + '":';
            var valueOfKeyInStrForm = obj[eachkey];
            if (typeof valueOfKeyInStrForm === undefined || valueOfKeyInStrForm instanceof Function) {
              arrHoldingKeyValues.push(str);
            } else if (valueOfKeyInStrForm === null || typeof valueOfKeyInStrForm === 'boolean' || valueOfKeyInStrForm === 'number') {
              arrHoldingKeyValues.push(keyInStringForm + valueOfKeyInStrForm);
            } else if (typeof valueOfKeyInStrForm === 'string') {
              arrHoldingKeyValues.push(keyInStringForm + quotesForStr + valueOfKeyInStrForm + quotesForStr);
            } else if (valueOfKeyInStrForm instanceof Object) {
              arrHoldingKeyValues.push(keyInStringForm + stringifyJSON(valueOfKeyInStrForm));
            }
        });
        return '{' + arrHoldingKeyValues + '}';
      } else {
        if (obj.length < 1) {
          return '[]';
        } else {
            obj.forEach(function(item) {
            arrayHoldingArrContent.push(stringifyJSON(item));
            });
            return '[' + arrayHoldingArrContent + ']';
          }
    }
};
