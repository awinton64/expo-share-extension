import { storage } from '../storage';
import { createClient } from '@supabase/supabase-js';

// Define the storage interface to match AsyncStorage API
interface StorageAdapter {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

// Create MMKV storage adapter for Supabase
const MMKVStorage: StorageAdapter = {
  getItem: (key: string) => {
    const value = storage.getString(key);
    return Promise.resolve(value || null);
  },
  setItem: (key: string, value: string) => {
    storage.set(key, value);
    return Promise.resolve();
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      storage: MMKVStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
); 