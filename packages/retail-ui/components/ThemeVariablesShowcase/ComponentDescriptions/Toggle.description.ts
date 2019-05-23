export default {
  handle: {
    contents: "css`\n  background: ${t.toggleBg};\n`",
    variables: [
      "toggleBg"
    ]
  },
  container: {
    contents: "css`\n  border: 1px solid ${t.toggleBorderColor};\n\n  .${styles.isDisabled} & {\n    background: ${t.toggleBgDisabled};\n  }\n  .${styles.input}:checked ~ & {\n    border-color: ${t.toggleBgChecked};\n    background: ${t.toggleBgChecked};\n  }\n`",
    variables: [
      "toggleBorderColor",
      "toggleBgDisabled",
      "toggleBgChecked"
    ]
  },
  focused: {
    contents: "css`\n  .${styles.container}& {\n    box-shadow: 0 0 0 1px ${t.outlineColorFocus}, 0 0 0 3px ${t.toggleFocusShadowColor};\n  }\n`",
    variables: [
      "outlineColorFocus",
      "toggleFocusShadowColor"
    ]
  },
  activeBackground: {
    contents: "css`\n  .${styles.isLoading} & {\n    background: ${t.toggleBgActive};\n  }\n\n  .${styles.input}:checked ~ .${styles.container} & {\n    background: ${t.toggleBgChecked};\n  }\n`",
    variables: [
      "toggleBgActive",
      "toggleBgChecked"
    ]
  },
  isLoading: {
    contents: "css`\n  .${styles.input}:checked ~ .${styles.container}& {\n    background: ${t.toggleBorderColor};\n    border-color: ${t.toggleBorderColor};\n  }\n`",
    variables: [
      "toggleBorderColor"
    ]
  },
  isWarning: {
    contents: "css`\n  .${styles.input}:checked ~ .${styles.container}& {\n    background: ${t.toggleBgWarning};\n    border-color: ${t.toggleBgWarning};\n\n    .${styles.activeBackground} {\n      background: ${t.toggleBgWarning};\n    }\n  }\n`",
    variables: [
      "toggleBgWarning"
    ]
  },
  isError: {
    contents: "css`\n  .${styles.input}:checked ~ .${styles.container}& {\n    background: ${t.toggleBgError};\n    border-color: ${t.toggleBgError};\n\n    .${styles.activeBackground} {\n      background: ${t.toggleBgError};\n    }\n  }\n`",
    variables: [
      "toggleBgError"
    ]
  },
  wrapper: {
    contents: "css`\n  &:hover {\n    .${styles.handle} {\n      background: ${t.toggleBgHover};\n    }\n  }\n`",
    variables: [
      "toggleBgHover"
    ]
  }
};