export class SuburbRaw {
    public id: string;
    public text: string;
    public Tot: number;

    constructor(suburb: SuburbRaw) {
        this.id = suburb.id;
        this.text = suburb.text;
        this.Tot = suburb.Tot;
    }
}

export class Suburb {
    public id: number;
    public name: string;
    public total: number;

    constructor(suburb: Suburb) {
        this.id = suburb.id;
        this.name = suburb.name;
        this.total = suburb.total;
    }

    public static fromRaw(suburb: SuburbRaw) {
        return new Suburb({
            id: parseInt(suburb.id, 10),
            name: suburb.text,
            total: suburb.Tot,
        });
    }
}
