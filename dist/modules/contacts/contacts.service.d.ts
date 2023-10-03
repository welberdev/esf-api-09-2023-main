import { Contact } from './entities/contact.entity';
import { ContactCreateDto } from './dtos/contact-create.dto';
import { app } from 'firebase-admin';
import { EmailService } from '../email/email.service';
export declare class ContactsService {
    private firebaseApp;
    private emailService;
    private db;
    private collection;
    private logger;
    constructor(firebaseApp: app.App, emailService: EmailService);
    create(dto: ContactCreateDto): Promise<any>;
    list(): Promise<Contact[]>;
}
