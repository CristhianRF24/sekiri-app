import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {Form, FormControl,FormField,FormItem,FormLabel,FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {Card,CardContent,CardDescription,CardHeader,CardTitle,
} from "./ui/card";
import { Textarea } from "./ui/textarea";
import { fetchInserContacts } from "@/app/actions/fetchData";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";


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
  }).max(500, {
    message: "El mensaje es demasiado largo",
  }),
});

const FormRegister = () => {
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      textArea: "",
    },
  });

  const [textAreaValue, setTextAreaValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [textAreaValue]);

  const handleSubmit = async (values: zod.infer<typeof formSchema>) => {
    console.log({ values });

    const { data, error } = await fetchInserContacts({
      name: values.name,
      email: values.emailAddress,
      message: values.textArea,
    });

    if (error) {
      console.error("Error insertando datos:", error);
      setStatusMessage({ type: 'error', text: 'Hubo un error al enviar tus datos. Inténtalo de nuevo.' });
    } else {
      console.log("Datos insertados con éxito:", data);
      setStatusMessage({ type: 'success', text: '¡Gracias! Tu mensaje ha sido enviado con éxito.' });
      form.reset(); 
      setTextAreaValue(""); // Resetear el valor del textArea
    }
  };

  return (
    <>
      <section className="flex flex-col items-center min-h-screen justify-center p-6">
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
                          <Textarea
                            ref={textAreaRef}
                            value={textAreaValue}
                            onChange={(e) => {
                              setTextAreaValue(e.target.value);
                              field.onChange(e);
                            }}
                            className="min-h-[100px] resize-none overflow-hidden"
                            placeholder="Escribe tu mensaje aquí"
                            maxLength={100}
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-sm text-gray-500 mt-1">
                          {100 - textAreaValue.length} caracteres restantes
                        </p>
                      </FormItem>
                    )}
                  />

                  <Button className="w-full" type="submit">
                    Enviar
                  </Button>

                  {/* Mostrar mensaje de éxito o error */}
                  {statusMessage && (
                    <div
                      className={`mt-4 p-2 text-center rounded ${
                        statusMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {statusMessage.text}
                    </div>
                  )}
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="flex justify-center">
            <Link href={"/consultas"}>
              <Button variant={"default"} className="mt-4 bg-sky-600">
                Ver solicitudes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormRegister;
