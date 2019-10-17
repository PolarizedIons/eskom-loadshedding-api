import HTTPClient from "./HTTPClient";
import { Province } from "../enums/Province";
import { Municipality, MunicipalityRaw } from "../models/Municipality";

export class Search extends HTTPClient {
    public static async getMunicipalitiesRaw(province: Province): Promise<MunicipalityRaw[]> {
        const resp = await this.get('/GetMunicipalities/?Id=' + province);
        return resp.data;;
    }

    public static async getMunicipalities(province: Province): Promise<Municipality[]> {
        const municipalities = await this.getMunicipalitiesRaw(province);
        return municipalities.map((municipality: MunicipalityRaw) => Municipality.fromRaw(municipality));
    }
}
