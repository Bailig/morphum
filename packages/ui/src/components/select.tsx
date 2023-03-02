import { Listbox as SelectBase } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";
import { Label } from "./label";
import { Listbox } from "./listbox";
import { Loading } from "./loading";
import type { ReactNode } from "react";

export type SelectProps = {
  options: { value: string; content: ReactNode }[];
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  noOptionsText?: ReactNode;
  loading?: boolean;
  className?: string;
  name?: string;
  label?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
};

export const Select = (props: SelectProps) => {
  const {
    value,
    defaultValue = "",
    options,
    name,
    label,
    placeholder,
    noOptionsText = "No options",
    className = "",
    loading = false,
    onChange = () => {},
    onBlur = () => {},
  } = props;
  const [_selected, setSelected] = useState<string>(defaultValue);

  const selected = value ?? _selected;
  const selectedOptionContent = options.find(
    (o) => o.value === selected
  )?.content;

  const handleChange = (value: string) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className={`relative w-72 ${className}`}>
      <SelectBase
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        name={name}
      >
        <div className="grid">
          <SelectBase.Label as={Label}>{label}</SelectBase.Label>
          <SelectBase.Button
            className={classNames(
              "select block w-full max-w-xs truncate text-start text-base duration-200 hover:bg-base-content/20",
              {
                "text-base-content/40":
                  !selectedOptionContent && Boolean(placeholder),
              }
            )}
            onBlur={onBlur}
          >
            {selectedOptionContent || placeholder}
          </SelectBase.Button>
        </div>

        <Listbox.Transition>
          <SelectBase.Options
            as={Listbox}
            className="absolute z-10 mt-2 w-full"
          >
            {loading && <Loading className="py-4" />}
            {!loading && options.length === 0 && (
              <Listbox.NoOption>{noOptionsText}</Listbox.NoOption>
            )}
            {!loading &&
              options.map((option) => (
                <SelectBase.Option
                  as={Listbox.Option}
                  key={option.value}
                  value={option.value}
                >
                  <button type="button" className="ui-selected:active">
                    {option.content}
                  </button>
                </SelectBase.Option>
              ))}
          </SelectBase.Options>
        </Listbox.Transition>
      </SelectBase>
    </div>
  );
};
