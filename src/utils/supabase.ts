import { createClient } from '@supabase/supabase-js';

// Supabase connection details
const supabaseUrl = 'https://fjvguqktsexwztguvtqa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqdmd1cWt0c2V4d3p0Z3V2dHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNjYwNDksImV4cCI6MjA1OTY0MjA0OX0.BU9Qqs1AAX3tig4CzHnnSn6hQKYsAa8mZzpb-zNfI3c';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Example functions for common database operations

// Fetch data from a table
export async function fetchData(tableName: string, options?: { 
  columns?: string,
  filter?: { column: string, operator: string, value: any }
}) {
  let query = supabase
    .from(tableName)
    .select(options?.columns || '*');
  
  if (options?.filter) {
    const { column, operator, value } = options.filter;
    query = query.filter(column, operator, value);
  }
  
  const { data, error } = await query;
  
  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }
  
  return data;
}

// Insert data into a table
export async function insertData(tableName: string, data: any) {
  const { data: result, error } = await supabase
    .from(tableName)
    .insert(data)
    .select();
  
  if (error) {
    console.error('Error inserting data:', error);
    return null;
  }
  
  return result;
}

// Update data in a table
export async function updateData(tableName: string, id: number | string, data: any) {
  const { data: result, error } = await supabase
    .from(tableName)
    .update(data)
    .eq('id', id)
    .select();
  
  if (error) {
    console.error('Error updating data:', error);
    return null;
  }
  
  return result;
}

// Delete data from a table
export async function deleteData(tableName: string, id: number | string) {
  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting data:', error);
    return false;
  }
  
  return true;
} 