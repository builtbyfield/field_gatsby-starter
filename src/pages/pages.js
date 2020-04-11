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

const PagesPage = () => (
  <>
    <SEO
      title="Pages - Field Gatsby Starter"
      description="Opinionated starter by Field for the Gatsby framework. Using dependencies like Emotion, styled-system, and Polished to deliver high quality and performant interfaces with a great developer experience."
    />

    <Wrapper pt={{ _: "layout.5", md: "layout.6" }}>
      <VStack space={{ _: "layout.5", md: "layout.6" }} dividers={true}>
        <Heading size={800}>Pages</Heading>
        <Paragraph size={600} maxWidth={960 / 1.25}>
          Pages are very simple to create. Any JavaScript file with an export
          should create a new page within Gatsby. Hot tip: use a underscore (_)
          to have that file ignored. Manual file creation is just one way of
          creating new pages though.
        </Paragraph>
        <Columns space="layout.3">
          <Column width={{ _: 1 / 1, md: 1 / 2 }}>
            <VStack space="layout.1">
              <Heading size={600}>Sources</Heading>
              <Paragraph size={400} maxWidth={960 / 2.5} color="text.alt">
                We can use any number of{" "}
                <Box
                  as="a"
                  href="https://www.gatsbyjs.org/tutorial/part-five/"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontWeight={600}
                  color="brand.primary"
                >
                  sources
                </Box>{" "}
                to grab content from all over the web and use that content to
                create new pages. Examples of sources might be a content
                management system (CMS) like Wordpress or Prismic, or more non
                traditional sources like Airtable.
              </Paragraph>
            </VStack>
          </Column>
          <Column width={{ _: 1 / 1, md: 1 / 2 }}>
            <VStack space="layout.1">
              <Heading size={600}>Templates</Heading>
              <Paragraph size={400} maxWidth={960 / 2.5} color="text.alt">
                Generated pages uses templates to display their content.
                Templates are assigned for each page type. A template can be
                configured to display content from a source on the web or an
                internal piece of data like a markdown (.md) file or JSON.
                There's a lot of flexibility available here.
              </Paragraph>
            </VStack>
          </Column>
        </Columns>
        <Columns space="layout.1">
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
          <Column width={{ _: 1 / 1, md: 1 / 2 }}>
            <Link to="/">
              <Card p={{ _: "layout.1", md: "layout.3" }} bg="surface.wash">
                <VStack space="layout.5">
                  <Text size={300} color="text.alt">
                    Index
                  </Text>
                  <Heading size={700}>Home</Heading>
                </VStack>
              </Card>
            </Link>
          </Column>
        </Columns>
      </VStack>
    </Wrapper>
  </>
)

export default PagesPage
