
export interface OrganizationInviteLink {
    id: string;
    internal_id: number;
    created_at: number;
    updated_at: number;
    status: 'active' | 'accepted' | 'rejected' | 'expired';
    metadata: any;
    invite_token: string;
    organization_id: number;
}