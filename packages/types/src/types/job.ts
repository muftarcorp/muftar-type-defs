export interface Job {
    id: string;
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
    location_id?: string;
    organization_id?: string;
}