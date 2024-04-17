import { PluginCreator } from "tailwindcss/types/config";

type Strength = {
  blur: string;
  opacity: string;
  boxShadow: string;
};

const strength: Record<string, Strength> = {
  "glass-sm": { blur: "4px", opacity: "0.95", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
  glass: {
    blur: "6px",
    opacity: "0.85",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
  },
  "glass-md": {
    blur: "8px",
    opacity: "0.8",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  },
  "glass-lg": {
    blur: "10px",
    opacity: "0.75",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  },
  "glass-xl": {
    blur: "12px",
    opacity: "0.7",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  },
  "glass-2xl": { blur: "14px", opacity: "0.65", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" },
  "glass-none": { blur: "0px", opacity: "1", boxShadow: "none" },
};

const glassmorphismPlugin: PluginCreator = ({ addUtilities }) => {
  const utilities = Object.fromEntries(
    Object.entries(strength).map(([name, { blur, opacity, boxShadow }]) => [
      `.${name}`,
      {
        backdropFilter: `blur(${blur})`,
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        boxShadow,
      },
    ])
  );

  addUtilities(utilities);
};

export default glassmorphismPlugin;
