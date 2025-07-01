
export interface OrganizationInviteLink {
    id: string;
    created_at: number;
    updated_at: number;
    status: 'active' | 'accepted' | 'rejected' | 'expired';
    metadata: any;
    invite_token: string;
    organization_id: string;
}