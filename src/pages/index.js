import React from "react"
import { Link } from "gatsby"

import {
  Box,
  Card,
  Column,
  Columns,
  Heading,
  Paragraph,
  SEO,
  Text,
  VStack,
  Wrapper,
} from "components"

const IndexPage = () => (
  <>
    <SEO
      title="Field Gatsby Starter"
      description="Opinionated starter by Field for the Gatsby framework. Using dependencies like Emotion, styled-system, and Polished to deliver high quality and performant interfaces with a great developer experience."
    />

    <Wrapper pt={{ _: "layout.5", md: "layout.6" }}>
      <VStack space={{ _: "layout.5", md: "layout.6" }} dividers={true}>
        <Paragraph size={600} maxWidth={960 / 1.25}>
          Opinionated starter by Field for the Gatsby framework. Using
          dependencies like Emotion, styled-system, and Polished to deliver high
          quality and performant interfaces with a great developer experience.
        </Paragraph>
        <Columns space="layout.3">
          <Column width={{ _: 1 / 1, md: 1 / 2 }}>
            <VStack space="layout.1">
              <Heading size={600}>Who we are</Heading>
              <Paragraph size={400} maxWidth={960 / 2.5} color="text.alt">
                Field is a Calgary-based technology and design consultancy with
                an eye for design and mind for strategic execution. We focus on
                making great new digital experiences and helping existing
                companies refocus on digital. For more information, please{" "}
                <Box
                  as="a"
                  href="https://builtbyfield.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontWeight={600}
                  color="brand.primary"
                >
                  visit our website
                </Box>
                .
              </Paragraph>
            </VStack>
          </Column>
          <Column width={{ _: 1 / 1, md: 1 / 2 }}>
            <VStack space="layout.1">
              <Heading size={600}>What we do</Heading>
              <Paragraph size={400} maxWidth={960 / 2.5} color="text.alt">
                We see the opportunity to approach digital products as
                experiences. A well built digital experience is the outcome of
                equal parts design, engineering, and strategy, and isn't just
                websites. We consult on technology, build websites and web apps,
                design interfaces, and create design systems.
              </Paragraph>
            </VStack>
          </Column>
        </Columns>
        <Columns space="layout.1">
          <Column width={{ _: 1 / 1, md: 1 / 2 }}>
            <Link to="/pages/">
              <Card p={{ _: "layout.1", md: "layout.3" }} bg="brand.primary">
                <VStack space="layout.5">
                  <Text size={300} color="text.alt">
                    How it works
                  </Text>
                  <Heading size={700}>Pages</Heading>
                </VStack>
              </Card>
            </Link>
          </Column>
          <Column width={{ _: 1 / 1, md: 1 / 2 }}>
            <Link to="/styles/">
              <Card p={{ _: "layout.1", md: "layout.3" }} bg="brand.primary">
                <VStack space="layout.5">
                  <Text size={300} color="text.alt">
                    How it works
                  </Text>
                  <Heading size={700}>Styles</Heading>
                </VStack>
              </Card>
            </Link>
          </Column>
        </Columns>
      </VStack>
    </Wrapper>
  </>
)

export default IndexPage
