import { createClient } from '@supabase/supabase-js'

const URL = 'https://uppzknoubarljwmwhspr.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwcHprbm91YmFybGp3bXdoc3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxODYzNDgsImV4cCI6MjAwMjc2MjM0OH0.iqp8iUa-paUOhE0IqARbStd68gTzEymFy0Kd5tJ2rbM';

export const supabase = createClient(URL, API_KEY);


