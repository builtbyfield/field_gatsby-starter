import { rgba } from "polished";

function buttonStyles(appearance, intent, theme) {
  const intents = {
    default: {
      base: theme.colors.label[0],
      contrast: theme.colors.background[0],
    },
    primary: {
      base: theme.colors.tint.blue,
      contrast: theme.colors.fixed.white,
    },
    success: {
      base: theme.colors.tint.green,
      contrast: theme.colors.fixed.white,
    },
    warning: {
      base: theme.colors.tint.orange,
      contrast: theme.colors.fixed.white,
    },
    danger: {
      base: theme.colors.tint.red,
      contrast: theme.colors.fixed.white,
    },
  };

  switch (appearance) {
    case "primary":
      if (intent === "default")
        return {
          color: theme.colors.label[0],
          backgroundColor: theme.colors.background[2],
          boxShadow:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.1)",
          transition: "background-color 200ms ease-out",
          '&.isHovering, &:focus, &:focus-within, &[aria-expanded="true"]': {
            backgroundColor: theme.colors.background[1],
          },
        };
      else
        return {
          color: intents[intent].contrast,
          backgroundColor: intents[intent].base,
          transition: "background-color 200ms ease-out",
          '&.isHovering, &:focus, &:focus-within, &[aria-expanded="true"]': {
            backgroundColor: rgba(intents[intent].base, 3 / 4),
          },
        };
    case "minimal":
      return {
        color: intents[intent].base,
        backgroundColor: "transparent",
        transition: "background-color 200ms ease-out",
        '&.isHovering, &:focus, &:focus-within, &[aria-expanded="true"]': {
          backgroundColor: theme.colors.fill[2],
        },
      };
    case "subtle":
      return {
        color: intents[intent].base,
        backgroundColor: theme.colors.fill[3],
        transition: "background-color 200ms ease-out",
        '&.isHovering, &:focus, &:focus-within, &[aria-expanded="true"]': {
          backgroundColor: theme.colors.fill[2],
        },
      };
    default:
      return {
        color: intents[intent].base,
        backgroundColor: theme.colors.clear,
        borderWidth: 1,
        borderColor: theme.colors.fill[0],
        transition: "background-color 200ms ease-out",
        '&.isHovering, &:focus, &:focus-within, &[aria-expanded="true"]': {
          backgroundColor: theme.colors.fill[3],
        },
      };
  }
}

export default buttonStyles;
