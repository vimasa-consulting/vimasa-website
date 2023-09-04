import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Nudge,
  Container,
  Section,
  Heading,
  Text,
  ButtonList,
  Kicker,
  HomepageLink,
  HomepageImage,
} from "./ui"
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';
const MyForm = () => {
  const { loaded, error, formCreated } = useHubspotForm({
      portalId: '40189755',
      formId: '0456d5f3-bada-467f-9a5b-dbb91b7f431e',
      target: '#contact-us'
  });

  return (
      <div>
          <div id="contact-us"></div>
      </div>
  )
}
export interface CtaProps {
  id: string
  kicker?: string
  heading: string
  text: string
  links: HomepageLink[]
  image?: HomepageImage
}

export default function HomepageCta(props: CtaProps) {
  return (
    <Container width="fullbleed">
      <Section padding={5} radius="large" background="primary">
        <Heading center>
          {props.kicker && <Kicker center>{props.kicker}</Kicker>}
          {props.heading}
        </Heading>
        <Text as="p" center variant="lead">
          {props.text}
        </Text>
        <ButtonList links={props.links} variant="center" reversed />
        {props.image && (
          <Nudge left={5} right={5} bottom={5}>
            <GatsbyImage
              alt={props.image.alt}
              image={getImage(props.image.gatsbyImageData)}
            />
          </Nudge>
        )}
        <HubspotProvider>
          <MyForm />
        </HubspotProvider>
      </Section>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageCtaContent on HomepageCta {
    id
    kicker
    heading
    text
    image {
      alt
      id
      gatsbyImageData
    }
    links {
      id
      href
      text
    }
  }
`
