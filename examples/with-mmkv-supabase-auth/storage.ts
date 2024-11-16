import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

export const setSharedUrl = (url: string) => storage.set("shared_url", url);
export const getSharedUrl = () => storage.getString("shared_url");
