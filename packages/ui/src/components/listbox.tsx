import { Transition as TransitionBase } from "@headlessui/react";
import classNames from "classnames";
import React, { forwardRef, Fragment } from "react";
import type { ReactNode } from "react";

export type ListboxProps = {
  className?: string;
} & React.HTMLAttributes<HTMLUListElement>;

const _Listbox = forwardRef(function Listbox(
  props: ListboxProps,
  ref: React.LegacyRef<HTMLUListElement>
) {
  const { className = "", ...others } = props;
  return (
    <ul
      ref={ref}
      className={classNames(
        "menu grid max-h-60 overflow-auto rounded-lg bg-base-100 py-1 shadow",
        className
      )}
      {...others}
    />
  );
});

const Option = forwardRef(function Option(
  props: React.HTMLAttributes<HTMLLIElement>,
  ref: React.LegacyRef<HTMLLIElement>
) {
  const { className, children, ...others } = props;

  return (
    <li ref={ref} className={className} {...others}>
      {children}
    </li>
  );
});

const Transition = ({ children }: { children: ReactNode }) => (
  <TransitionBase
    as={Fragment}
    enter="transition ease-out duration-150"
    enterFrom="transform opacity-0 scale-90"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-100"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-90"
  >
    {children}
  </TransitionBase>
);

const NoOption = (props: React.HTMLAttributes<HTMLLIElement>) => {
  const { className, children = "No options", ...others } = props;
  return (
    <li
      className={classNames(
        "select-none px-3 py-2 text-base-content/40",
        className
      )}
      {...others}
    >
      {children}
    </li>
  );
};

export const Listbox = Object.assign(_Listbox, {
  Option,
  Transition,
  NoOption,
});
