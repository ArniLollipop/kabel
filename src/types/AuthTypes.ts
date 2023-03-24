export interface userI {
  id: number;
  access_token: string;
  refresh_token: string;
  last_login: string | null;
  is_superuser: boolean;
  phone_number: string;
  is_active: boolean;
  is_staff: boolean;
  first_name: string | null;
  last_name: string | null;
  middle_name: string | null;
  email: string | null;
  avatar: string | null;
  groups: number[];
  user_permissions: number[];
}

export interface sendSmsI {
  result: boolean;
}
