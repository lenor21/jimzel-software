import { z } from 'zod';

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
  //   location: z.string(),
  //   department: z.string(),
  //   project: z.string(),
  //   team: z.string(),
  //   position: z.string(),
  //   employment: z.string(),
  //   user_profile: z.string(),
  //   manager: z.string(),
  //   vendor: z.string(),
  //   email: z.string().email(),
  //   phone: z.number(),
  //   ctc: z.string(),
  //   ctc_place: z.string(),
  //   ctc_date: z.string().datetime(),
  //   ctc_amount_paid: z.number(),
  //   notes: z.string(),
});

export type EmployeeFormValues = z.infer<typeof employeeFormSchema>;
