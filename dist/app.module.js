"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const contacts_module_1 = require("./modules/contacts/contacts.module");
const env_helper_1 = require("./common/helper/env.helper");
const config_1 = require("@nestjs/config");
const firebase_config_1 = require("./common/configs/firebase.config");
const firebase_module_1 = require("./modules/firebase/firebase.module");
const mailer_config_1 = require("./common/configs/mailer.config");
const mailer_1 = require("@nestjs-modules/mailer");
const envFilePath = (0, env_helper_1.getEnvPath)(`${__dirname}/common/envs/`);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            contacts_module_1.ContactsModule,
            firebase_module_1.FirebaseModule,
            config_1.ConfigModule.forRoot({
                envFilePath: envFilePath,
                isGlobal: true,
                load: [firebase_config_1.default, mailer_config_1.default],
            }),
            mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    transport: {
                        service: configService.get('mailerConfig.transport_service'),
                        auth: {
                            user: configService.get('mailerConfig.transport_auth_user'),
                            pass: configService.get('mailerConfig.transport_auth_pass'),
                        },
                        ignoreTLS: true,
                    },
                    defaults: {},
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map