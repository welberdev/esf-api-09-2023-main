"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidEmail = exports.IsValidEmailConstraint = void 0;
const class_validator_1 = require("class-validator");
let IsValidEmailConstraint = class IsValidEmailConstraint {
    validate(email, args) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && pattern.test(email)) {
            return true;
        }
        return false;
    }
};
exports.IsValidEmailConstraint = IsValidEmailConstraint;
exports.IsValidEmailConstraint = IsValidEmailConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], IsValidEmailConstraint);
function IsValidEmail(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsValidEmail',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: IsValidEmailConstraint,
        });
    };
}
exports.IsValidEmail = IsValidEmail;
//# sourceMappingURL=is-valid-email.decorator.js.map