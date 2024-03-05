import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  // in useEffect because nextjs ssr doesnt have LS
  useEffect(() => {
    const jsonVal = localStorage.getItem(key);

    // only return if it's not null or undefined
    if (jsonVal != null) {
      setValue(JSON.parse(jsonVal));
      return;
    }

    if (typeof initialValue === "function") {
      setValue(initialValue());
      return;
    }

    setValue(initialValue);
  }, [initialValue, key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
