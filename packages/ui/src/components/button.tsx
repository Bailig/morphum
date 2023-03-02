import classNames from "classnames";
import { forwardRef } from "react";

type ExtraButtonProps = {
  color?: "primary" | "secondary" | "default" | "none";
  loading?: boolean;
};

export type ButtonProps = JSX.IntrinsicElements["button"] & ExtraButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      color = "default",
      className,
      children,
      loading = false,
      disabled,
      ...others
    } = props;
    const _disabled = loading || disabled;

    return (
      <button
        ref={ref}
        className={classNames(
          "btn relative",
          {
            "btn-primary": color === "primary",
            "btn-secondary": color === "secondary",
            "btn-ghost": color === "none",
            "btn-disabled": _disabled,
            loading: loading,
          },
          className
        )}
        disabled={_disabled}
        {...others}
      >
        {children}
      </button>
    );
  }
);

export type LinkButtonProps = JSX.IntrinsicElements["a"] &
  Required<Pick<JSX.IntrinsicElements["a"], "href">> &
  ExtraButtonProps;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  function LinkButton(props, ref) {
    const {
      color = "default",
      className,
      children,
      loading = false,
      ...others
    } = props;

    return (
      <a
        ref={ref}
        className={classNames(
          "btn relative",
          {
            "btn-primary": color === "primary",
            "btn-secondary": color === "secondary",
            "btn-ghost": color === "none",
            "btn-disabled": loading,
            loading: loading,
          },
          className
        )}
        {...others}
      >
        {children}
      </a>
    );
  }
);
