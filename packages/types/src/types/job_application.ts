export interface JobApplication {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    status?: string;
    metadata?: any;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    location_id?: number | null;
    skills?: string;
    cv?: string;
    cover_letter?: string;
}
