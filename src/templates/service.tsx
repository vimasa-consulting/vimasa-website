import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { StructuredText } from 'react-datocms/structured-text';
import { Container } from '../components/ui';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../../theme.scss';

export default function Service({ data }: { data: any }) {
  console.log(data);

  return (
    <Layout>
      <Container>
        <div className='blog'>
          <h2 className='heading'>
            {data.datoCmsServicepage.title}
          </h2>
          <GatsbyImage alt={data.datoCmsServicepage.bannerImage.alt} image={getImage(data.datoCmsServicepage.bannerImage)} />
          <StructuredText data={data.datoCmsServicepage.content.value}></StructuredText>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ServicePage($slug: String!) {
	  datoCmsServicepage(slug: { eq: $slug }) {
      id
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }    
      bannerImage {
        alt
        gatsbyImageData
      }
      content {
        value
      }
      title
     slug
    }
  }
`
