export class DocumentBuilder {
    private header: string = "";
    private body: string = "";
    private footer: string = "";
    
    addHeader(header: string): DocumentBuilder {
        this.header = header;
        return this;
    }
    addBody(body: string): DocumentBuilder {
        this.body = body;
        return this;
    }
    addFooter(footer: string): DocumentBuilder {
        this.footer = footer;
        return this;
    }
    build(): string {
        let result = "";
        if (this.header) {
        result += `=== ${this.header} ===\n\n`;
        }
        if (this.body) {
        result += `${this.body}\n\n`;
        }
        if (this.footer) {
        result += `${this.footer}`;
        }
        return result;
    }
}