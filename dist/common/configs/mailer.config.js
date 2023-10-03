"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('mailerConfig', () => ({
    transport_service: process.env.MAILE_TRANSPORT_SERVICE,
    transport_auth_user: process.env.MAILE_TRANSPORT_AUTH_USER,
    transport_auth_pass: process.env.MAILE_TRANSPORT_AUTH_PASS,
}));
//# sourceMappingURL=mailer.config.js.map