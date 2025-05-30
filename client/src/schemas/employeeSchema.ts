import { z } from 'zod';
const internationalPhoneRegex = new RegExp(
  /^(\+|00)?[1-9]\d{6,14}$|^[1-9]\d{6,14}$/ // A common, slightly more flexible regex
);

export const employeeFormSchema = z.object({
  employee_id: z.string().nonempty('Employee ID is required'),
  first_name: z.string().nonempty('First name is required'),
  middle_name: z.string().optional(),
  last_name: z.string().nonempty('Last name is required'),
  suffix: z.string(),
  address: z.string(),
  city: z.string(),
  province: z.string(),
  zip: z.string(),
  location: z.string(),
  department: z.string(),
  project: z.string(),
  team: z.string(),
  position: z.string(),
  employment: z.string(),
  user_profile: z.string(),
  manager: z.string(),
  vendor: z.string(),
  email: z.string().email(),
  phone: z
    .string()
    .refine(
      (value) => {
        const cleanedValue = value.replace(/[()\-\s.]/g, '');
        return internationalPhoneRegex.test(cleanedValue);
      },
      {
        message: 'Invalid international phone number format.',
      }
    )
    .optional()
    .or(z.literal('')),
  ctc: z.string(),
  ctc_place: z.string(),
  ctc_date: z.string().date().optional().or(z.literal('')),
  ctc_amount_paid: z.number().optional(),
  notes: z.string(),
  pay_freq: z.string().nonempty('Pay Frequency is required'),
  sex: z.string(),
  active: z.boolean(),
  birthday: z.string().date(),
  date_hired: z.string().date(),
  kasambahay: z.boolean(),
  regularized: z.string().date().optional().or(z.literal('')),
  separated: z.string().date().optional().or(z.literal('')),
  contract_start: z.string().date().optional().or(z.literal('')),
  contract_end: z.string().date().optional().or(z.literal('')),
  minimum_earner: z.boolean(),
  minimum_daily: z.number(),
  minimum_monthly: z.number(),
  tax_id: z.string().nonempty('Tax ID is required'),
  tax_witheld: z.boolean(),
  sss_gsis: z.string().nonempty('SSS/GSIS No. is required'),
  sss_gsis_witheld: z.boolean(),
  phic_id: z.string().nonempty('PHIC ID is required'),
  phic_witheld: z.boolean(),
  hdmf_id: z.string().nonempty('HDMF ID is required'),
  hdmf_witheld: z.boolean(),
  hdmf_account: z.string(),
  bank: z.string(),
  bank_account: z.string(),
  rate_type: z.string(),
  base_monthly_pay: z.number(),
  days_per_month: z.number().optional(),
  hours_per_day: z.number().optional(),
  daily_rate: z.number().optional(),
  hourly_rate: z.number().optional(),
  col_allowance: z.number().optional(),
  represent_allowance: z.number().optional(),
  housing_allowance: z.number().optional(),
  transportation_allowance: z.number().optional(),
});

export type EmployeeFormValues = z.infer<typeof employeeFormSchema>;
