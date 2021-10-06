export class properties
{
    areaDesc!: String
    affectedZones!: string;
    event!: string
}   
export interface features
{
    properties:properties
}   
export interface details
{
    features:features[]
}