import { MailerService } from '@nestjs-modules/mailer';
import { Contact } from '../contacts/entities/contact.entity';
export declare class EmailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendMail(contact: Contact): Promise<void>;
}
