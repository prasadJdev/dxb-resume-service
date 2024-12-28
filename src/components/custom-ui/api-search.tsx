"use client";
import React from "react";

import { CommandInput, CommandGroup, CommandItem, Command } from "cmdk";

type Option = { label: string; value: string };

function SearchComponent({
  keyword,
  options,
  onChange,
  handleSelect,
}: {
  keyword?: string;
  options: Option[];
  onChange?: (query: string) => void;
  handleSelect: (query: Option) => void;
}) {
  return (
    <Command>
      <CommandInput value={keyword} onValueChange={onChange} placeholder="Search..." className="h-9" />
      <CommandGroup>
        {options.map((option) => (
          <CommandItem key={option.value} value={option.value} onSelect={() => handleSelect(option)}>
            {option.label}
          </CommandItem>
        ))}
      </CommandGroup>
    </Command>
  );
}

export default SearchComponent;
