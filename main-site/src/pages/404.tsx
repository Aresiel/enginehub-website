import React from 'react';

import Layout from '../components/layout.component';
import SEO from '../components/seo.component';
import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';

interface NotFoundData {
    file: {
        childImageSharp: {
            fixed: FixedObject;
        }
    };
}

const NotFoundPage = ({ data }: { data: NotFoundData }) => (
    <Layout>
        <SEO title="Missing Page" image={data.file.childImageSharp.fixed.src} />
        <h1>Missing Page</h1>
        <p>Sorry, the page or resource that you are looking for cannot be found.</p>
    </Layout>
);

export default NotFoundPage;

export const query = graphql`
    query {
        file(name: { eq: "enginehub-logo" }) {
            childImageSharp {
                fixed(width: 100, height: 100, quality: 100) {
                    ...GatsbyImageSharpFixed_tracedSVG
                }
            }
        }
    }
`;
