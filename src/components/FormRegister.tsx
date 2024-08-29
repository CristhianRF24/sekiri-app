import React from "react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Textarea } from "./ui/textarea";
import { insertarContactos } from "@/app/actions/fetchData";

// Definición del esquema de validación con zod
const formSchema = zod.object({
  name: zod.string().min(2, {
    message: "El nombre es demasiado corto",
  }),
  emailAddress: zod.string().email({
    message: "El email no es valido",
  }),
  textArea: zod.string().min(10, {
    message: "El mensaje es demasiado corto",
  }),
});

const FormRegister = () => {
  // Configuración de react-hook-form con zod
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      textArea: "",
    },
  });

  // Función para manejar el envío del formulario
  const handleSubmit = async (values: zod.infer<typeof formSchema>) => {
    console.log({ values });
    
    // Llamar a la función de inserción de datos
    const { data, error } = await insertarContactos({
      name: values.name,
      email: values.emailAddress,
      mensaje: values.textArea,
    });

    if (error) {
      console.error("Error insertando datos:", error);
      alert("Hubo un error al enviar tus datos. Inténtalo de nuevo.");
    } else {
      console.log("Datos insertados con éxito:", data);
      alert("¡Gracias! Tu mensaje ha sido enviado con éxito.");
      form.reset(); // Resetear el formulario después de un envío exitoso
    }
  };

  return (
    <section className="flex flex-col items-center min-h-screen justify-center p-6">
      {/* Contenedor del formulario */}
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md ">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Contáctanos</CardTitle>
            <CardDescription>
              Llena el formulario y nos pondremos en contacto contigo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                className="flex flex-col gap-4"
                onSubmit={form.handleSubmit(handleSubmit)}
              >
                {/* Campo de Nombre */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nombre Completo"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Campo de Correo Electrónico */}
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Correo electronico"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="textArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea className="min-h-[100px]"
                          placeholder="Escribe tu mensaje aqui"
                          
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full" type="submit">
                  Enviar
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FormRegister;
