import { z } from 'zod';

const userSchema = z.object({ 
  name: z.string(),
  email: z.string().email(),
  password: z.number().int().min(8),
})

const userTest = {
  name: 'Arturo',
  email: 'arturoyz2105@gmail.com',
  password: 12345678
}

const result = userSchema.parse(userTest)

console.log(result);