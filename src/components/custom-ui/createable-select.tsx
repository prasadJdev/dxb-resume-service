import * as React from "react";
import { CheckIcon, ChevronsUpDown, Loader2Icon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Command, CommandInput, CommandGroup, CommandItem } from "@/components/ui/command";

interface Option {
  value: string;
  label: string;
}

interface CreatableSelectProps {
  options: Option[];
  value?: string[]; // For controlled component
  onChange?: (value: string[]) => void; // Callback for controlled component
  defaultValue?: string[]; // For uncontrolled component
  isLoading?: boolean;
  mutate?: () => void;
  name?: string;
  id?: string;
}

interface State {
  open: boolean;
  internalValue: string[]; // Internal value for uncontrolled mode
  query: string;
  newOptions: Option[];
}

type Action =
  | { type: "SET_OPEN"; payload: boolean }
  | { type: "SET_INTERNAL_VALUE"; payload: string[] }
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_NEW_OPTIONS"; payload: Option[] }
  | { type: "ADD_OPTION"; payload: Option };

const matches = (str: string, query: string, exact: boolean = false) =>
  exact ? str.toLowerCase() === query.toLowerCase() : str.toLowerCase().includes(query.toLowerCase());

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_OPEN":
      return { ...state, open: action.payload };
    case "SET_INTERNAL_VALUE":
      return { ...state, internalValue: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_NEW_OPTIONS":
      return { ...state, newOptions: action.payload };
    case "ADD_OPTION":
      return {
        ...state,
        newOptions: [...state.newOptions, action.payload],
        internalValue: [...state.internalValue, action.payload.value],
      };
    default:
      return state;
  }
}

function CreatableSelect({
  options,
  value,
  onChange,
  defaultValue = [],
  isLoading = false,
  name,
  id,
}: CreatableSelectProps) {
  const isControlled = value !== undefined && onChange !== undefined;

  const initialState: State = {
    open: false,
    internalValue: defaultValue, // Only used in uncontrolled mode
    query: "",
    newOptions: options,
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    // Update new options when options prop changes

    dispatch({ type: "SET_NEW_OPTIONS", payload: options });
  }, [options]);

  const handleSelect = (option: Option) => {
    const currentValue = isControlled ? value : state.internalValue;

    if (!currentValue) return;

    const newValue = currentValue.includes(option.value)
      ? currentValue.filter((val) => val !== option.value) // Remove option if already selected
      : [...currentValue, option.value]; // Add option if not already selected

    if (isControlled) {
      onChange?.(newValue);
    } else {
      dispatch({ type: "SET_INTERNAL_VALUE", payload: newValue });
    }
  };

  const selectedValues = isControlled ? value : state.internalValue;

  return (
    <>
      <input className="hidden" type="hidden" name={name} value={selectedValues?.join(",")} />
      <Popover open={state.open} onOpenChange={(open) => dispatch({ type: "SET_OPEN", payload: open })}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="select"
            role="combobox"
            aria-expanded={state.open}
            className="w-full justify-between"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2Icon className="h-4 w-4 animate-spin ml-auto" />
            ) : (
              <>
                <p className="text-neutral-500 font-primary text-sm font-normal">
                  {selectedValues?.join(", ") || "Add+"}
                </p>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 min-w-[--radix-popover-trigger-width] max-h-[calc(var(--radix-popover-content-available-height)-2rem)] overflow-auto">
          <Command>
            <CommandInput
              value={state.query}
              onValueChange={(query: string) => dispatch({ type: "SET_QUERY", payload: query })}
              placeholder="Search..."
              className="h-9"
            />
            <CommandGroup>
              {state.query && !state.newOptions.some((option) => matches(option.label, state.query, true)) && (
                <CommandItem
                  key={state.query}
                  value={state.query}
                  onSelect={() => {
                    const newOption = { value: state.query, label: state.query };
                    dispatch({ type: "ADD_OPTION", payload: newOption });
                    dispatch({ type: "SET_OPEN", payload: true });
                  }}
                >
                  Create "{state.query}"
                  <XIcon
                    className="ml-auto h-4 w-4 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch({ type: "SET_QUERY", payload: "" });
                    }}
                  />
                </CommandItem>
              )}
              {state.newOptions.map((option) => (
                <CommandItem key={option.value} value={option.value} onSelect={() => handleSelect(option)}>
                  {option.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedValues?.includes(option.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default CreatableSelect;
