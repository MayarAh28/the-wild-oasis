/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xwwiyujisitpkjtmmcwh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3d2l5dWppc2l0cGtqdG1tY3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNjAzMjMsImV4cCI6MjA3OTYzNjMyM30.ma-4vNiwGZFyC9fuTsd5WICQjOfqDLe-tCtmicn4xjQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
