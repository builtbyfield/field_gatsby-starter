import React from "react"
import merge from "lodash.merge"
import get from "lodash.get"
import { ThemeProvider } from "emotion-theming"

import { Theme } from "components"

const ColorMode = ({ children, mode }) => {
  return (
    <ThemeProvider
      theme={merge({}, Theme, {
        colors: get(Theme.colors.modes, mode, Theme.colors),
      })}
    >
      {children}
    </ThemeProvider>
  )
}

export default ColorMode
