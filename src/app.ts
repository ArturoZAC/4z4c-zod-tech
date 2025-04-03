import { z } from 'zod';

// Z -> Object of Z
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.number().int().min(8),
})

const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
});

const personalDataSchema = z.object({
  age: z.number(),
  gender: z.string(),
})

const citizenSchema = userSchema.extend({
  ...addressSchema.shape,
  ...personalDataSchema.shape,
})

// Z -> inter 
type User = z.infer<typeof userSchema>;
type Address = z.infer<typeof addressSchema>;
type Citizen = z.infer<typeof citizenSchema>;

const userTest: User = {
  name: 'Arturo',
  email: 'arturoyz2105@gmail.com',
  password: 12345678
}

const userAddress: Address = {
  street: 'Calle de la Paz',
  city: 'Madrid'
}

const citizenData: Citizen = {
  age: 30,
  city: 'Lima',
  email: 'aada123@gmail.com',
  gender: 'male',
  name: 'Arturo',
  password: 12345678,
  street: 'Ventanilla',
}

const result = userSchema.parse(userTest);
const result2 = addressSchema.parse(userAddress);
const result3 = citizenSchema.parse(citizenData);

// console.log(result);
// console.log(result2);
// console.log(result3);

const nameSchema = z.string().nonempty();

const resp = nameSchema.safeParse('Arturo');
console.log(resp.success);

//Arrays
const s1 = z.string().array().optional();
type s1Type = z.infer<typeof s1>;
const s2 = z.string().optional().array();
type s2Type = z.infer<typeof s2>;