"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const admin = require("firebase-admin");
const firebaseProvider = {
    provide: 'FIREBASE_APP',
    inject: [config_1.ConfigService],
    useFactory: (configService) => {
        const firebaseConfig = {
            type: configService.get('firebaseConfig.type '),
            project_id: configService.get('firebaseConfig.project_id'),
            private_key_id: configService.get('firebaseConfig.private_key_id'),
            private_key: configService.get('firebaseConfig.private_key'),
            client_email: configService.get('firebaseConfig.client_email'),
            client_id: configService.get('firebaseConfig.client_id'),
            auth_uri: configService.get('firebaseConfig.auth_uri'),
            token_uri: configService.get('firebaseConfig.token_uri'),
            auth_provider_x509_cert_url: configService.get('firebaseConfig.auth_provider_x509_cert_url'),
            client_x509_cert_url: configService.get('firebaseConfig.universe_domain'),
            universe_domain: configService.get('firebaseConfig.universe_domain'),
        };
        return admin.initializeApp({
            credential: admin.credential.cert(firebaseConfig),
            databaseURL: configService.get('firebaseConfig.databaseURL'),
            storageBucket: `${firebaseConfig.projectId}.appspot.com`,
        });
    },
};
let FirebaseModule = class FirebaseModule {
};
exports.FirebaseModule = FirebaseModule;
exports.FirebaseModule = FirebaseModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        providers: [firebaseProvider],
        exports: [firebaseProvider],
    })
], FirebaseModule);
//# sourceMappingURL=firebase.module.js.map