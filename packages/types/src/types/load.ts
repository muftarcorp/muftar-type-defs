
export interface Load {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    status: string | null;
    metadata: any | null;
    details: string | null;
    weight: number | null;
    equipment: any | null;
    stops: any[] | null;
    notes: string | null;
    rate: number | null;
    organization_id: number | null;
    serial_number: string | null;
    uri: string | null;
    uri_bol: string | null;
    signed_uri: string | null;
    driver_id: number | null;
    delivered_at: number | null;
}