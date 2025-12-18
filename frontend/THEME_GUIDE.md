# WorkBoard Theme Guide

This project centralizes UI styling (colors, gradients, fonts, radii, spacing, and core components) so you can change the whole app UI from one place.

## Where the theme lives

- `src/theme/colors.js`
  - Base palette (primary, gray, etc.)
- `src/theme/typography.js`
  - Font families
- `src/theme/theme.js`
  - Light + Dark themes
  - Global tokens: `colors`, `gradient`, `radius`, `spacing`, `typography`
- `src/theme/ThemeProvider.js`
  - Theme context provider + hook
- `src/theme/index.js`
  - Exports for easy imports

## How to change the global app gradient

Edit:
- `src/theme/theme.js`

### Light mode gradient
Update:
- `themes.light.gradient.main.colors`
- `themes.light.gradient.main.locations`

### Dark mode gradient
Update:
- `themes.dark.gradient.main.colors`
- `themes.dark.gradient.main.locations`

The gradient is applied globally in `App.js` inside `MobileSizeWrapper`.

## How to change the whole app colors

Edit:
- `src/theme/colors.js` (base palette)
- `src/theme/theme.js` (semantic tokens)

Recommended approach:
- Keep raw colors in `colors.js`
- Map them into semantic tokens in `theme.js`, like:
  - `theme.colors.background`
  - `theme.colors.surface`
  - `theme.colors.text.primary`
  - `theme.colors.border`
  - `theme.colors.button.*`

Then components should read from `useTheme()` (NOT hardcoded colors).

## Light/Dark mode

Current provider is mounted in:
- `App.js` via `<ThemeProvider initialMode="light">`

To switch to dark mode:
- Change `initialMode` to `"dark"`

You can also toggle mode from any component:

```js
import { useTheme } from "../theme";

const { toggle, setMode } = useTheme();
```

## Fonts

Fonts are centralized in:
- `src/theme/typography.js`

If you change font family names here, ensure the font is loaded in your app (Expo font loading).

## Buttons

Primary button is centralized here:
- `src/components/PrimaryButton.js`

It uses theme tokens:
- `theme.radius.xl`
- `theme.colors.button.primaryBg`
- `theme.colors.button.primaryBgDisabled`
- `theme.colors.button.primaryText`
- `theme.typography.family.semibold`

To change the primary button style globally:
- Edit these tokens in `src/theme/theme.js`

## Cards

Card component:
- `src/components/Card.js`

It uses theme tokens:
- `theme.colors.surface`
- `theme.colors.border`
- `theme.radius.xl`
- `theme.spacing.md`

Use it like:

```js
import Card from "../components/Card";

<Card>
  ...content...
</Card>
```

## Rules / Guidelines for future UI

- Use `useTheme()` for colors and typography in new shared components.
- Avoid hardcoding colors like `bg-white` for top-level screen containers if you want the global gradient to be visible.
- Prefer:
  - `theme.colors.surface` for card/sheet backgrounds
  - `theme.colors.background` for page background
  - `theme.colors.text.primary` for headings
  - `theme.colors.text.secondary` for body text

## Production note (mobile wrapper)

The app is currently displayed in a centered mobile frame for desktop preview:
- Max width: `415px`
- Max height: `915px`

This is controlled in:
- `App.js` (`MobileSizeWrapper`)

You can remove/disable the wrapper for production later.
