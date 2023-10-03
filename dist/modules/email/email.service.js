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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let EmailService = class EmailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendMail(contact) {
        new Promise(async (resolve, reject) => {
            await this.mailerService
                .sendMail({
                from: 'Exploradores Sem Fronteiras <esf.firebase@gmail.com>',
                to: contact.email,
                subject: 'Se inscreva em nosso canal do YouTube! 🎥🌎',
                html: `
          <h1>Olá, ${contact.firstname}</h1>
          <p>Muito obrigado por preencher nosso formulário. Abaixo seguem os links de nossas redes sociais. Siga-nos e fique por dentro de todas as novidades!</p>
        `,
            })
                .then((resp) => {
                resolve(resp);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.DEFAULT }),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailService);
//# sourceMappingURL=email.service.js.map