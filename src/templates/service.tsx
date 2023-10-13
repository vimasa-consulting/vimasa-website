import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { Container } from '../components/ui';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as sections from "../components/sections"
import '../../theme.scss';
import Fallback from '../components/fallback';

interface ServicePage {
  data: {
    servicePage: {
      id: string
      title: string
      description: string
      image: { id: string; url: string, alt: string }
      blocks: sections.HomepageBlock[]
    }
  }
}

export default function Service({ data }: ServicePage) {
  console.log(data);
  return (
    <Layout>
      <Container>
        <div className='blog'>
          <h2 className='heading'>
            {data.servicePage.title}
          </h2>
          {data.servicePage.image && <GatsbyImage alt={data.servicePage.image.alt} image={getImage(data.servicePage.image)} />}
          {data.servicePage.blocks.map((block) => {
            const { id, blocktype, ...componentProps } = block
            const Component = sections[blocktype] || Fallback
            return <Component key={id} {...(componentProps as any)} />
          })}
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ServicePage($slug: String!) {
	  servicePage(slug: { eq: $slug }) {
      id
      title
      slug
      image {
        alt
        gatsbyImageData
      }     
      blocks: content {
        id
        blocktype
        ...AboutHeroContent
        ...AboutStatListContent
        ...HomepageProductListContent
        ...AboutLeadershipContent
        ...HomepageBenefitListContent
        ...AboutLogoListContent
        ...HomepageCtaContent
      }
    }
  }
`
