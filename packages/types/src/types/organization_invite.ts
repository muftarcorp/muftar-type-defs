// Types
export interface OrganizationInvite {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;  
    user_id?: number | null;
    role_id?: string;
    status?: string;
    metadata?: any;
    email: string;
    organization_id: number;
}
