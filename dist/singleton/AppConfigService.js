"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigService = void 0;
class AppConfigService {
    constructor(companyName, footer) {
        this.companyName = companyName;
        this.footer = footer;
    }
    static getInstance(companyName, footer) {
        if (!AppConfigService.instance) {
            AppConfigService.instance = new AppConfigService(companyName, footer);
        }
        return AppConfigService.instance;
    }
    getCompanyName() {
        return this.companyName;
    }
    getFooter() {
        return this.footer;
    }
    setCompanyName(companyName) {
        this.companyName = companyName;
    }
    setFooter(footer) {
        this.footer = footer;
    }
}
exports.AppConfigService = AppConfigService;
