export class SearchSuburbRaw {
    MunicipalityName: string;
    ProvinceName: string;
    Name: string;
    Id: number;
    Total: number;

    constructor(searchSuburb: SearchSuburbRaw) {
        this.MunicipalityName = searchSuburb.MunicipalityName;
        this.ProvinceName = searchSuburb.ProvinceName;
        this.Name = searchSuburb.Name;
        this.Id = searchSuburb.Id;
        this.Total = searchSuburb.Total;
    }
}

export class SearchSuburb {
    municipality: string;
    province: string;
    suburb: string;
    id: number;
    total: number;

    constructor(searchSuburb: SearchSuburb) {
        this.municipality = searchSuburb.municipality;
        this.province = searchSuburb.province;
        this.suburb = searchSuburb.suburb;
        this.id = searchSuburb.id;
        this.total = searchSuburb.total;
    }

    public static fromRaw(searchSuburb: SearchSuburbRaw): SearchSuburb {
        return new SearchSuburb({
            municipality: searchSuburb.MunicipalityName,
            province: searchSuburb.ProvinceName,
            suburb: searchSuburb.Name,
            id: searchSuburb.Id,
            total: searchSuburb.Total,
        });
    }
}
