import React from "react"

import { Box } from "components"

function Footer() {
  return (
    <Box
      data-component-id="footer"
      as="footer"
      mt="auto"
      pt={{ _: "layout.5", md: "layout.6" }}
    >
      <Box height="4px" bg="brand.primary" />
    </Box>
  )
}

export default Footer
