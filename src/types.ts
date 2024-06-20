export interface WaterDataType {
    DISTRICT : string,
    LOCATION : string,
    LONGITUDE : number,
    LATITUDE : number,
    pH : number,
    EC : number,
    CO3 : number,
    HCO3 : number,
    Cl : number,
    SO4 : number,
    NO3 : number,
    F : number,
    PO4 : number,
    Ca : number,
    Mg : number,
    Na : number,
    K : number,
    SiO2 : number | String,
    TH : number,
    SAR_VALUE : number,
    RSC_VALUE : number
}

export type WaterDataTypeOrNull = WaterDataType | null;