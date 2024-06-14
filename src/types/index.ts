import { z } from "zod";

//Definir estructura en la cual recibiremos cada dato
export const Client = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  status: z.boolean().optional(),
});

// Estructurar los diferentes datos dentro de un array
export const Clients = z.array(Client);

// Crear un tipo para tipificar los clientes
export type Clients = z.infer<typeof Clients>;
