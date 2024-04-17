# Tailwind CSS Glassmorphism Plugin

This Tailwind CSS plugin provides a set of utilities for creating glassmorphism effects, a design trend that mimics frosted glass with blur and transparency. It's perfect for adding a modern, aesthetic touch to your web projects.

## Features

- Multiple glassmorphism effects ranging from subtle to intense.
- Compatible with any Tailwind CSS project.
- Easy to use with predefined utility classes.

## Installation

To install the plugin, you need to add it to your Tailwind CSS project. Follow these steps:

1. Install the plugin via npm:

```bash
npm install tailwindcss-glassmorphism --save
```

Or via yarn:

```bash
yarn add tailwindcss-glassmorphism
```

2. Add the plugin to your `tailwind.config.js`:

```js
module.exports = {
  plugins: [require("tailwindcss-glassmorphism")],
};
```

## Usage

Once installed, you can use the glassmorphism utility classes just like any other Tailwind utility. Here are the classes available:

- `glass-sm` - Subtle glassmorphism effect.
- `glass` - Standard glassmorphism effect.
- `glass-md` - Moderate glassmorphism effect.
- `glass-lg` - Enhanced glassmorphism effect.
- `glass-xl` - Strong glassmorphism effect.
- `glass-2xl` - Intense glassmorphism effect.
- `glass-none` - No glassmorphism effect.

### Example Usage

```html
<div class="glass-md p-4">
  <p>This div has a moderate glassmorphism effect.</p>
</div>
```

## Documentation & Demo

For a full demo and interactive documentation, visit: [Link to Documentation Page](https://gkemp94.github.io/tailwindcss-glassmorphism/)

## Contributing

Contributions to the plugin are welcome! Please refer to the contributing guidelines before making pull requests.

## License

This plugin is released under the MIT License.
