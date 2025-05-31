import { z } from 'zod';

export const employeeFormSchema = z.object({
  empID: z.string().nonempty('Employee ID is required'),
  firstname: z.string().nonempty('First name is required'),
  middlename: z.string().optional(),
  lastname: z.string().nonempty('Last name is required'),
});

export type EmployeeFormValues = z.infer<typeof employeeFormSchema>;
