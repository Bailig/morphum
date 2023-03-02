/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from "classnames";
import { forwardRef } from "react";

export type LabelProps = JSX.IntrinsicElements["label"];

export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  props,
  ref
) {
  const { className, ...others } = props;
  return (
    <label
      ref={ref}
      className={classNames("label cursor-pointer", className)}
      {...others}
    />
  );
});
