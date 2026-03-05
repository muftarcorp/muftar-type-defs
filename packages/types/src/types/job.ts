export interface Job {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    title?: string;
    description?: string;
    requirements?: string[];
    type?: string;
    compensation?: string;
    tag?: string;
    status?: string;
    metadata?: any;
    photo?: string;
    location_id?: number | null;
    organization_id?: number | null;
}