import classNames from "classnames";
import { FaSpinner } from "react-icons/fa";

export type LoadingProps = {
  color?: "primary" | "secondary" | "default";
  className?: string;
};

export const Loading = (props: LoadingProps) => {
  const { color = "default", className = "" } = props;
  return (
    <div
      className={`grid h-full w-full place-items-center ${className}`}
      role="progressbar"
    >
      <FaSpinner
        className={classNames("animate-spin", {
          "text-primary": color === "primary",
          "text-secondary": color === "secondary",
          "text-base-content": color === "default",
        })}
      />
    </div>
  );
};
