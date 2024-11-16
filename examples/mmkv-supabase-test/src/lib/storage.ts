import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

export const mmkvStorage = {
  getItem: (key: string): string | null => {
    const value = storage.getString(key)
    console.log('MMKV getItem:', { key, value })
    return value || null
  },
  setItem: (key: string, value: string): void => {
    console.log('MMKV setItem:', { key, value })
    storage.set(key, value)
  },
  removeItem: (key: string): void => {
    console.log('MMKV removeItem:', { key })
    storage.delete(key)
  },
} 