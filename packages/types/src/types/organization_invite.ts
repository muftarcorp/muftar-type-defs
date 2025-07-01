// Types
export interface OrganizationInvite {
    id: string;
    created_at: number;
    updated_at: number;  
    user_id?: string;
    role_id?: string;
    status?: string;
    metadata?: any;
    email: string;
    organization_id: string;
}
