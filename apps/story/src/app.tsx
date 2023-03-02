import classNames from "classnames";
import { useState } from "react";
import { storyMap, storyNames } from "./stories";

export const App = () => {
  const [selected, setSelected] = useState(storyNames[0]!);

  return (
    <div className="grid h-screen grid-cols-[auto_1fr]">
      <aside className="h-full w-80 bg-base-200 p-10">
        <ul className="menu gap-4">
          {storyNames.map((name) => (
            <li key={name}>
              <button
                type="button"
                className={classNames("rounded-lg capitalize", {
                  active: selected === name,
                })}
                onClick={() => setSelected(name)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="h-full p-10">
        <div className="mockup-window h-full border bg-base-300">
          <div
            className="h-full p-10"
            style={{
              backgroundImage:
                "radial-gradient(hsla(var(--bc)/.2) .5px,hsla(var(--b2)/1) .5px)",
              backgroundSize: "5px 5px",
            }}
          >
            {storyMap[selected]}
          </div>
        </div>
      </div>
    </div>
  );
};
