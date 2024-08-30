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

export async function fetchTestimony(){
    const { data, error} = await supabase
        .from('client')
        .select('nameCliente, testimony')
   if (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
     }
 return data
}

export const fetchPrices = async ()=>{
    const {data, error} = await supabase
    .from('prices')
    .select('*')
    if (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }else{
        return data
    }
}

export const fetchChanels = async ()=>{
    const {data, error} = await supabase
    .from('chanels')
    .select('*')
    if (error) {
        console.error('Error fetching data:', error); 
        throw new Error('Failed to fetch data');
    }else{
        return data
    }
}

export const fetchInserContacts = async (contacData: any)=>{
    try {
        console.log("Enviando datos a Supabase:", contacData); 
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


export const fetchGetContacts = async()=>{
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


export const fetchBlog = async (id: any) => {
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
