import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "emotion-theming"

import { Box, ColorMode, Footer, GlobalStyles, Header, Theme } from "components"

function Layout({ children }) {
  return (
    <ThemeProvider theme={Theme}>
      <ColorMode mode="light">
        <>
          <GlobalStyles />
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Box as="main">{children}</Box>
            <Footer />
          </Box>
        </>
      </ColorMode>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
