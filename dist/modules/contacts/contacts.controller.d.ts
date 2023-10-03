import { ContactsService } from './contacts.service';
import { ContactCreateDto } from './dtos/contact-create.dto';
export declare class ContactsController {
    private contactsService;
    constructor(contactsService: ContactsService);
    create(dto: ContactCreateDto): Promise<any>;
    list(): Promise<import("./entities/contact.entity").Contact[]>;
}
