import { receiveSchema, sendConfig } from "@morphum/messenger";
import { group } from "@morphum/utils";
import { useEffect, useMemo, useRef, useState } from "react";
import { Controls } from "./components";
import type { ControlChangeEvent } from "./components/controls";
import type { Schema, Field } from "@morphum/messenger";

const schemaToConfig = (schema: Schema): Record<string, Field["value"]> => {
  const entries = schema.map((field) => [field.id, field.value]);
  return Object.fromEntries(entries);
};

export const App = () => {
  const [schema, setSchema] = useState<Schema>([]);
  const [config, setConfig] = useState<Record<string, Field["value"]>>({});
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const fieldGroups = useMemo(() => {
    const groups = group(schema, (field) => field.group);
    return Object.entries(groups);
  }, [schema]);

  useEffect(() => {
    const removeReserver = receiveSchema((schema) => {
      setSchema(schema);
      setConfig(schemaToConfig(schema));
    });
    return () => removeReserver();
  }, []);

  const handleChange = ({ id, value }: ControlChangeEvent) => {
    setConfig((config) => {
      const newConfig = { ...config, [id]: value };
      sendConfig(iframeRef.current!.contentWindow!, newConfig);
      return newConfig;
    });
  };

  return (
    <div className="grid h-screen grid-cols-[1fr_auto] bg-base-200">
      <div className="py-4 pl-4">
        <div className="mockup-window h-full border">
          <iframe
            ref={iframeRef}
            src="http://localhost:3001"
            className="h-full w-full"
            title="site"
          />
        </div>
      </div>
      <div className="w-96 overflow-y-auto p-4">
        <Controls fieldGroups={fieldGroups} onChange={handleChange} />
      </div>
    </div>
  );
};
