import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  <string>process.env.REACT_APP_SUPABASE_URL,
  <string>process.env.REACT_APP_SUPABASE_PUBLIC_KEY,
);

export { supabase };
