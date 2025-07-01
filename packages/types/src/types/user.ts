
export interface Userdata {
    id: string;
    created_at: number;
    updated_at: number;
    metadata: any
    status: string;
    first_name: string;
    last_name: string;
    photo?: string;
    date_of_birth?: string;
    email_verified_at?: number;
    email: string;
    phone_verified_at?: number;
    phone?: string;
    referral_code?: string;
    referred_by?: string;
    user_type?: string;
    id_submitted_at?: number;
    credit_wallet_id?: string;
    seen_notifications?: boolean;
    auth_id?: string;
  }