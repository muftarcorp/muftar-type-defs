
export interface OrganizationUser {
    id: string;
    created_at: number;
    user_id: string;
    organization_id: string;
    status: 'active' | 'inactive' | 'pending' | 'suspended';
    metadata: Record<string, any>;
    role: '' | 'admin' | 'member' | 'owner' | 'driver' | 'dispatcher';
    assigned_at: number;
    updated_at: number;
}
