
// Types
export interface Location {
    id: string;
    created_at: number;
    updated_at: number;
    reference_id: string;
    collection: string;
    status: string;
    metadata: any;
    category: string;
    latitude?: number|null;
    longitude?: number|null;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    name: string;
}