import { AppConfigService } from "./AppConfigService";

const config1 = AppConfigService.getInstance("Acme Inc.", "Confidential");
const config2 = AppConfigService.getInstance();

console.log(config1.getCompanyName()); // Acme Inc.
console.log(config2.getCompanyName()); // Acme Inc.
console.log(config1 === config2);       // true

config1.setCompanyName("Another Corp");
console.log(config2.getCompanyName()); // Another Corp