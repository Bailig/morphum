export type Field<TId extends string = string> = {
  id: TId;
  group: string;
  name: string;
} & (
  | { type: "color"; value: string }
  | { type: "text"; value: string }
  | { type: "pairs"; value: [string, string][] }
  | { type: "boolean"; value: boolean }
  | {
      type: "select";
      options: { name: string; value: string }[];
      value: string;
    }
);

export type Schema<TId extends string = string> = Field<TId>[];

export const sendSchema = (schema: Schema) => {
  window.parent.postMessage({ type: "@morphum/schema", schema }, "*");
};

export const receiveSchema = (handler: (schema: Schema) => void) => {
  const listener = (event: MessageEvent) => {
    if (event.data.type === "@morphum/schema") {
      handler(event.data.schema);
    }
  };
  window.addEventListener("message", listener);
  return () => {
    window.removeEventListener("message", listener);
  };
};

export const sendConfig = (
  window: Window,
  config: Record<string, Field["value"]>
) => {
  window.postMessage({ type: "@morphum/config", config }, "*");
};

export const receiveConfig = (
  handler: (config: Record<string, any>) => void
) => {
  const listener = (event: MessageEvent) => {
    if (event.data.type === "@morphum/config") {
      handler(event.data.config);
    }
  };
  window.addEventListener("message", listener);
  return () => {
    window.removeEventListener("message", listener);
  };
};
