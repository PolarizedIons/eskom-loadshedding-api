import HTTPClient from "./HTTPClient";
import { Province } from "../enums/Province";
import { Municipality, MunicipalityRaw } from "../models/Municipality";
import { SuburbRaw, Suburb } from "../models/Suburb";

export class Search extends HTTPClient {
    public static async getMunicipalitiesRaw(province: Province): Promise<MunicipalityRaw[]> {
        const resp = await this.get('/GetMunicipalities/?Id=' + province);
        return resp.data;;
    }

    public static async getMunicipalities(province: Province): Promise<Municipality[]> {
        const municipalities = await this.getMunicipalitiesRaw(province);
        return municipalities.map((municipality: MunicipalityRaw) => Municipality.fromRaw(municipality));
    }

    public static async getSuburbsRaw(municipalityId: number, searchTerm: string = ''): Promise<SuburbRaw[]> {
        const resp = await this.get(`/GetSurburbData/?pageSize=9999&pageNum=1&searchTerm=${searchTerm}&id=${municipalityId}`);
        return resp.data.Results;
    }

    public static async getSuburbs(municipalityId: number, searchTerm: string = ''): Promise<Suburb[]> {
        const suburbs = await this.getSuburbsRaw(municipalityId, searchTerm);
        return suburbs.map((suburb: SuburbRaw) => Suburb.fromRaw(suburb));
    }
}
