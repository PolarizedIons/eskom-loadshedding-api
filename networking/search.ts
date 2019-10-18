import HTTPClient from './HTTPClient';
import { Province } from '../enums/Province';
import { Municipality, MunicipalityRaw } from '../models/Municipality';
import { SuburbRaw, Suburb } from '../models/Suburb';
import { SearchSuburbRaw, SearchSuburb } from '../models/SearchSuburb';

export class Search extends HTTPClient {
    public static async getMunicipalitiesRaw(province: Province): Promise<MunicipalityRaw[]> {
        const resp = await this.get('/GetMunicipalities/?Id=' + province);
        return resp.data;
    }

    public static async getMunicipalities(province: Province): Promise<Municipality[]> {
        const municipalities = await this.getMunicipalitiesRaw(province);
        return municipalities.map((municipality: MunicipalityRaw) => Municipality.fromRaw(municipality));
    }

    public static async getMunicipalitySuburbsRaw(municipalityId: number, searchTerm: string = '', pageNum = 1): Promise<SuburbRaw[]> {
        const resp = await this.get(`/GetSurburbData/?pageSize=100&pageNum=${pageNum}&searchTerm=${searchTerm}&id=${municipalityId}`);
        return resp.data.Results;
    }

    public static async getMunicipalitySuburbs(municipalityId: number, searchTerm: string = '', pageNum = 1): Promise<Suburb[]> {
        const suburbs = await this.getMunicipalitySuburbsRaw(municipalityId, searchTerm, pageNum);
        return suburbs.map((suburb: SuburbRaw) => Suburb.fromRaw(suburb));
    }

    public static async searchSuburbsRaw(searchTerm: string, maxResults: number = 300): Promise<SearchSuburbRaw[]> {
        const resp = await this.get(`/FindSuburbs?searchText=${searchTerm}&maxResults=${maxResults}`);
        return resp.data;
    }

    public static async searchSuburbs(searchTerm: string, maxResults: number = 300): Promise<SearchSuburb[]> {
        const searchResults = await this.searchSuburbsRaw(searchTerm, maxResults);
        return searchResults.map((result: SearchSuburbRaw) => SearchSuburb.fromRaw(result));
    }
}
