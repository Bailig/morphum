import { Fragment } from "react";
import { ColorPicker } from "./color-picker";
import type { Field } from "@morphum/messenger";

export type ControlChangeEvent = {
  id: string;
  value: string;
};

export type ControlsProps = {
  fieldGroups: [string, Field[]][];
  onChange?: (event: ControlChangeEvent) => void;
};

export const Controls = (props: ControlsProps) => {
  const { fieldGroups, onChange = () => {} } = props;
  return (
    <div className="py-4">
      {fieldGroups.map(([group, fields]) => (
        <Fragment key={group}>
          <div className="divider first:hidden" />
          <div key={group}>
            <h2 className="px-4 py-2 font-bold capitalize text-base-content">
              {group}
            </h2>
            <div className="grid gap-2">
              {fields.map((field) => (
                <div key={field.name}>
                  {field.type === "color" && (
                    <ColorPicker
                      defaultValue={field.value}
                      name={field.name}
                      onChange={(value) => onChange({ id: field.id, value })}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
