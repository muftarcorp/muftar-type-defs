
export interface OrganizationUser {
    id: string;
    internal_id: number;
    created_at: number;
    user_id: number;
    organization_id: number;
    status: 'active' | 'inactive' | 'pending' | 'suspended';
    metadata: Record<string, any>;
    role: '' | 'admin' | 'member' | 'owner' | 'driver' | 'dispatcher';
    assigned_at: number;
    updated_at: number;
}
