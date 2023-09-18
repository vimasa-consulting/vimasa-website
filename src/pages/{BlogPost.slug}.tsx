import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Page(props: PageProps) {
  const { page } = props.data
    return (
    <Layout>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{page.title}</Heading>
        </Container>
      </Box>
    </Layout>
  )
}
