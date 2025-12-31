import { Input } from "@/06_shared/ui/Input";
import { useState } from "react";
import type { ChangeEvent } from "react";

interface SearchFavoritesInputProps {
  onSearch?: (searchText: string) => void;
}

export const SearchFavoritesInput = ({
  onSearch,
}: SearchFavoritesInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <Input placeholder="Поиск по имени" value={value} onChange={handleChange} />
  );
};
