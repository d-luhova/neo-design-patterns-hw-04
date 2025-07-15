export class AppConfigService {
    private static instance: AppConfigService;

    private constructor(
        private companyName: string,
        private footer: string
    ) {}

    public static getInstance(companyName?: string, footer?: string): AppConfigService {
        if (!AppConfigService.instance) {
            if (!companyName || !footer) {
                throw new Error("AppConfigService not initialized");
            }
            AppConfigService.instance = new AppConfigService(companyName, footer);
        }
        return AppConfigService.instance;
    }

    public getCompanyName(): string {
        return this.companyName;
    }

    public getFooter(): string {
        return this.footer;
    }

    public setCompanyName(companyName: string): void {
        this.companyName = companyName;
    }

    public setFooter(footer: string): void {
        this.footer = footer;
    }
}