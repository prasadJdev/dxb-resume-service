"use client";

import * as React from "react";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

type Option = {
  value: string;
  label: string;
};

function ComboBoxResponsive({
  options,
  Trigger,
  value,
  onChange,
}: {
  options: Option[];
  Trigger: React.ReactNode;
  value?: Option | null;
  onChange: (value: Option | null) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>{Trigger}</PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList options={options} setOpen={setOpen} setSelectedStatus={onChange} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{Trigger}</DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList options={options} setOpen={setOpen} setSelectedStatus={onChange} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  options,
  setOpen,
  setSelectedStatus,
}: {
  options: Option[];
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: Option | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {options.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedStatus(options.find((opt) => opt.value === value) || null);
                setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default ComboBoxResponsive;
