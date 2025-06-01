export interface Employee {
  employee_id: string;
  first_name: string;
  middle_name: string | null; // Can be null in DB
  last_name: string;
  suffix: string | null;
  address: string | null;
  city: string | null;
  province: string | null;
  zip: string | null;
  location: string | null;
  department: string | null;
  project: string | null;
  team: string | null;
  position: string | null;
  employment: string | null;
  user_profile: string | null;
  manager: string | null;
  vendor: string | null;
  email: string | null;
  phone: string | null;
  ctc: string | null;
  ctc_place: string | null;
  ctc_date: string | null | Date; // Can be string or Date, or null
  ctc_amount_paid: number | null; // Can be null in DB
  notes: string | null;
  pay_freq: string | null;
  sex: string | null;
  active: boolean; // Assuming this is always a boolean
  birthday: string | null | Date;
  date_hired: string | null | Date;
  kasambahay: boolean; // Assuming this is always a boolean
  regularized: string | null | Date;
  separated: string | null | Date;
  contract_start: string | null | Date;
  contract_end: string | null | Date;
  minimum_earner: boolean; // Assuming this is always a boolean
  minimum_daily: number | null;
  minimum_monthly: number | null;
  tax_id: string | null;
  tax_witheld: boolean; // Assuming this is always a boolean
  sss_gsis: string | null;
  sss_gsis_witheld: boolean; // Assuming this is always a boolean
  phic_id: string | null;
  phic_witheld: boolean; // Assuming this is always a boolean
  hdmf_id: string | null;
  hdmf_witheld: boolean; // Assuming this is always a boolean
  hdmf_account: string | null;
  bank: string | null;
  bank_account: string | null;
  rate_type: string | null;
  base_monthly_pay: number | null;
  days_per_month: number | null;
  hours_per_day: number | null;
  daily_rate: number | null;
  hourly_rate: number | null;
  col_allowance: number | null;
  represent_allowance: number | null;
  housing_allowance: number | null;
  transportation_allowance: number | null;
  created_at?: string | Date;
  updated_at?: string | Date;
  id?: string;
}
