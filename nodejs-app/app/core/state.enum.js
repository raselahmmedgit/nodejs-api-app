"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateEnumLabel = exports.StateEnum = void 0;
var StateEnum;
(function (StateEnum) {
    StateEnum[StateEnum["Minnesota"] = 1] = "Minnesota";
    StateEnum[StateEnum["NewYork"] = 2] = "NewYork";
})(StateEnum = exports.StateEnum || (exports.StateEnum = {}));
;
exports.StateEnumLabel = new Map([
    [StateEnum.Minnesota, 'Minnesota'],
    [StateEnum.NewYork, 'New York']
]);
//console.log(StateEnumLabel.get(StateEnum.NewYork)); //New York
