import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsValidEmailConstraint implements ValidatorConstraintInterface {
    validate(email: string, args: ValidationArguments): boolean;
}
export declare function IsValidEmail(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
