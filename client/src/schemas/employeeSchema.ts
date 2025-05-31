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
    .optional(),
  ctc: z.string(),
  ctc_place: z.string(),
  ctc_date: z.string().date().optional(),
  ctc_amount_paid: z.number().optional(),
  notes: z.string(),
});

export type EmployeeFormValues = z.infer<typeof employeeFormSchema>;
