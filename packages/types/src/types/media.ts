
export interface Media {
    id: string;
    created_at: number;
    updated_at: number;
    category?: string;
    file_name?: string;
    file_type?: string;
    file_uri?: string;
    status?: string;
    metadata?: any;
    user_id?: string;
    locked: boolean;
}
