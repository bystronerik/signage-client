export class Validity {
    public from: Date;

    public to: Date;

    constructor(public enabled: boolean, from: string, to: string) {
        this.from = new Date(from);
        this.to = new Date(to);
    }

    static isValid(from: Date | string, to: Date | string, date: Date = new Date()): boolean {
        return (
            (from instanceof Date ? from : new Date(from)) < date &&
            date < (to instanceof Date ? to : new Date(to))
        );
    }
}
