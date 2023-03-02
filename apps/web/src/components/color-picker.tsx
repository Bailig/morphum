import { Button } from "@morphum/ui";
import { useState } from "react";
import { ChromePicker } from "react-color";

export type ColorPickerProps = {
  defaultValue?: string;
  name: string;
  onChange?: (value: string) => void;
};

export const ColorPicker = (props: ColorPickerProps) => {
  const { defaultValue, name, onChange = () => {} } = props;

  const [color, setColor] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative grid">
      <Button
        type="button"
        color="none"
        className="flex h-14 items-center justify-start gap-3 text-left"
        onClick={() => setOpen((open) => !open)}
      >
        <div
          className="h-10 w-10 rounded-full border"
          style={{ backgroundColor: color }}
        />
        <span className="capitalize">{name}</span>
      </Button>

      <div
        className={`absolute right-full -top-full ${open ? "block" : "hidden"}`}
      >
        <ChromePicker
          color={color}
          onChange={(color) => setColor(color.hex)}
          onChangeComplete={(color) => {
            setColor(color.hex);
            onChange(color.hex);
          }}
        />
      </div>
    </div>
  );
};
