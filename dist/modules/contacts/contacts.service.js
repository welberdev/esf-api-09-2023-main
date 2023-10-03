"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ContactsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const firebase_admin_1 = require("firebase-admin");
const email_service_1 = require("../email/email.service");
let ContactsService = ContactsService_1 = class ContactsService {
    constructor(firebaseApp, emailService) {
        this.firebaseApp = firebaseApp;
        this.emailService = emailService;
        this.logger = new common_1.Logger(ContactsService_1.name);
        this.db = firebaseApp.firestore();
        this.collection = this.db.collection('contacts');
    }
    async create(dto) {
        return new Promise(async (resolve, reject) => {
            await this.collection
                .add(dto)
                .then((data) => {
                this.logger.log(data);
                this.emailService.sendMail(dto);
                resolve(data);
            })
                .catch((error) => {
                this.logger.error(error);
                reject(error);
            })
                .finally(() => { });
        });
    }
    async list() {
        return new Promise((resolve, reject) => {
            this.collection
                .get()
                .then((snapshot) => {
                const documentos = [];
                snapshot.forEach((doc) => {
                    documentos.push({ id: doc.id, data: doc.data() });
                });
                resolve(documentos);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
};
exports.ContactsService = ContactsService;
exports.ContactsService = ContactsService = ContactsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FIREBASE_APP')),
    __metadata("design:paramtypes", [Object, email_service_1.EmailService])
], ContactsService);
//# sourceMappingURL=contacts.service.js.map