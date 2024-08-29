'use server'
import { supabase } from "@/lib/supabase"

export async function fetchDataButton() {
    const { data, error } = await supabase
        .from('botones_CTA')
        .select('id,text, path')
    if (error) {
        console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
    }
    return data
}

export async function fetchTestimonio(){
    const { data, error} = await supabase
        .from('cliente')
        .select('nameCliente, testimonio')
   if (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
     }
 return data
}

export const fetchPrecios = async ()=>{
    const {data, error} = await supabase
    .from('precios')
    .select('*')
    if (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }else{
        return data
    }
}

export const fetchCanales = async ()=>{
    const {data, error} = await supabase
    .from('canales')
    .select('*')
    if (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }else{
        return data
    }
}

export const insertarContactos = async (contacData: any)=>{
    try {
        console.log("Enviando datos a Supabase:", contacData); // Log para depuración
        const {data, error} = await supabase
        .from('form_contacto')
        .insert([contacData])

        if (error) {
            console.error("Error insertando datos:", error.message);
            return { error: error.message };
          }
        return {data}

    }catch (err: any){
        console.error("Error inesperado:", err.message);
        return { error: "Ocurrió un error inesperado." }
    }
}

// /app/actions/fetchData.ts

export const blog = async (id: any) => {
    const { data, error } = await supabase
        .from('blog')
        .select('titulo, descripcion')
        .eq('id', id); // Filtra por ID específico

    if (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    } else {
        return data;
    }
};


export const fetchConsultas = async()=>{
    const {data, error} = await supabase
    .from('form_contacto')
    .select('*')
    if (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }else{
        return data
    }
}