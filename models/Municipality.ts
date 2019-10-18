export class MunicipalityRaw {
    public Selected: boolean;
    public Text: string;
    public Value: string;

    constructor(municipality: MunicipalityRaw) {
        this.Selected = municipality.Selected;
        this.Text = municipality.Text;
        this.Value = municipality.Value;
    }
}

export class Municipality {
    public id: number;
    public name: string;

    constructor(municipality: Municipality) {
        this.id = municipality.id;
        this.name = municipality.name;
    }

    public static fromRaw(municipality: MunicipalityRaw) {
        return new Municipality({
            id: parseInt(municipality.Value, 10),
            name: municipality.Text,
        });
    }
}
