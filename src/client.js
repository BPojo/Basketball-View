import { createClient } from '@supabase/supabase-js'

const URL = 'https://bvshwuxcfmqkvlwnyknk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2c2h3dXhjZm1xa3Zsd255a25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyOTg5NTksImV4cCI6MjAyODg3NDk1OX0.f5rdDbW2cr3U8o_nZ4qVbhg-F8sSvcE96AQ2Qxo4TMg';

export const supabase = createClient(URL, API_KEY);