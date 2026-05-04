import { useCallback } from "react";

const STORAGE_KEY = "car-images-v1";

function loadStore(): Record<string, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function saveStore(store: Record<string, string>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // storage quota or privacy mode
  }
}

export function useCarImages() {
  const getImage = useCallback((carId: bigint): string | undefined => {
    const store = loadStore();
    return store[carId.toString()];
  }, []);

  const setImage = useCallback((carId: bigint, base64: string): void => {
    const store = loadStore();
    store[carId.toString()] = base64;
    saveStore(store);
  }, []);

  const removeImage = useCallback((carId: bigint): void => {
    const store = loadStore();
    delete store[carId.toString()];
    saveStore(store);
  }, []);

  const getAllImages = useCallback((): Record<string, string> => {
    return loadStore();
  }, []);

  return { getImage, setImage, removeImage, getAllImages };
}
