/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Label,
  Listbox,
  Button,
  Select,
  Loading,
  LinkButton,
} from "@morphum/ui";
import { useState } from "react";

const ButtonStory = () => {
  return (
    <div className="grid grid-cols-[repeat(5,200px)] gap-6">
      <h1>Primary</h1>
      <h1>Secondary</h1>
      <h1>Default</h1>
      <h1>Transparent</h1>
      <h1>Link Button</h1>

      <Button color="primary">Click me</Button>
      <Button color="secondary">Click me</Button>
      <Button color="default">Click me</Button>
      <Button color="none">Click me</Button>
      <LinkButton href="#">Click me</LinkButton>
    </div>
  );
};

const OPTIONS = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
  "Option 8",
];

const LabelStory = () => {
  return (
    <div>
      <Label>Label</Label>
    </div>
  );
};

const ListboxStory = () => {
  return (
    <div className="grid grid-cols-[repeat(3,16rem)] items-start gap-6">
      <h1>With Options as Buttons</h1>
      <h1>With Options Links</h1>
      <h1>Without Options</h1>
      <Listbox>
        {OPTIONS.map((o) => (
          <Listbox.Option key={o}>
            <button>{o}</button>
          </Listbox.Option>
        ))}
      </Listbox>

      <Listbox>
        {OPTIONS.map((o) => (
          <Listbox.Option key={o}>
            <a href="#">{o}</a>
          </Listbox.Option>
        ))}
      </Listbox>

      <Listbox>
        <Listbox.NoOption />
      </Listbox>
    </div>
  );
};

const SelectStory = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-wrap items-start gap-10 [&>div]:grid [&>div]:gap-6">
      <div>
        <h1>Default</h1>
        <Select
          options={OPTIONS.map((option) => ({
            value: option,
            content: option,
          }))}
          onChange={setValue}
        />
      </div>

      <div>
        <h1>With Default Value</h1>
        <Select
          options={OPTIONS.map((option) => ({
            value: option,
            content: option,
          }))}
          defaultValue={OPTIONS[3]}
          onChange={setValue}
        />
      </div>

      <div>
        <h1>Controlled</h1>
        <Select
          options={OPTIONS.map((option) => ({
            value: option,
            content: option,
          }))}
          value={value}
          onChange={setValue}
        />
      </div>

      <div>
        <h1>With Placeholder</h1>
        <Select
          placeholder="Select an option"
          options={OPTIONS.map((option) => ({
            value: option,
            content: option,
          }))}
          onChange={setValue}
        />
      </div>

      <div>
        <h1>With Loading</h1>
        <Select
          options={OPTIONS.map((option) => ({
            value: option,
            content: option,
          }))}
          loading
          onChange={setValue}
        />
      </div>
    </div>
  );
};

const LoadingStory = () => {
  return (
    <div className="w-56">
      <h1 className="mb-4 text-center">Primary</h1>
      <Loading color="primary" />
      <h1 className="mt-8 mb-4 text-center">Secondary</h1>
      <Loading color="secondary" />
      <h1 className="mt-8 mb-4 text-center">Default</h1>
      <Loading color="default" />
    </div>
  );
};

export const storyMap = {
  Button: <ButtonStory />,
  Label: <LabelStory />,
  Listbox: <ListboxStory />,
  Loading: <LoadingStory />,
  Select: <SelectStory />,
};

export const storyNames = Object.keys(storyMap) as (keyof typeof storyMap)[];
