import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "emotion-theming"

import { Box, GlobalStyles, Theme } from "components"

function Layout({ children }) {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Box as="main">{children}</Box>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
