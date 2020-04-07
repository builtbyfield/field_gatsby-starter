import React from "react"
import { Link } from "gatsby"

import { Box, Heading, Paragraph, SEO, VStack, Wrapper } from "components"

const NotFoundPage = () => (
  <>
    <SEO
      title="Page not found - Field Gatsby Starter"
      description="Opinionated starter by Field for the Gatsby framework. Using dependencies like Emotion, styled-system, and Polished to deliver high quality and performant interfaces with a great developer experience."
    />
    <Wrapper pt={{ _: "layout.5", md: "layout.6" }}>
      <VStack space={{ _: "layout.5", md: "layout.6" }} dividers={true}>
        <Heading size={800}>404</Heading>
        <Paragraph size={600}>
          This page does not exist.{" "}
          <Box as={Link} to="/" fontWeight={600} color="brand.primary">
            Go home
          </Box>
          .
        </Paragraph>
      </VStack>
    </Wrapper>
  </>
)

export default NotFoundPage
