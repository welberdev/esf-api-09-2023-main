import { ContactInterface } from '../entities/contact.entity';
export declare class ContactCreateDto implements ContactInterface {
    firstname: string;
    lastname: string;
    email: string;
    whatsapp: string;
}
