"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppConfigService_1 = require("./AppConfigService");
const config1 = AppConfigService_1.AppConfigService.getInstance("Acme Inc.", "Confidential");
const config2 = AppConfigService_1.AppConfigService.getInstance("Another Corp", "Top Secret");
console.log(config1.getCompanyName());
console.log(config2.getCompanyName());
console.log(config1.setCompanyName("Another Corp"));
console.log(config2);
