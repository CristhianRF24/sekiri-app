'use server'
import { supabase } from "@/lib/supabase"

export async function fetchDataButton() {
    const { data, error } = await supabase
        .from('botones_CTA')
        .select('text')
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