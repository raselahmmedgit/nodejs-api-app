"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryEnumLabel = exports.CountryEnum = void 0;
var CountryEnum;
(function (CountryEnum) {
    CountryEnum[CountryEnum["UnitedStates"] = 1] = "UnitedStates";
    CountryEnum[CountryEnum["Bangladesh"] = 2] = "Bangladesh";
})(CountryEnum = exports.CountryEnum || (exports.CountryEnum = {}));
;
exports.CountryEnumLabel = new Map([
    [CountryEnum.UnitedStates, 'USA'],
    [CountryEnum.Bangladesh, 'Bangladesh']
]);
//console.log(CountryEnumLabel.get(CountryEnum.UnitedStates)); //USA
