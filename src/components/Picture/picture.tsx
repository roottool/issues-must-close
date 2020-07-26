import React, { FC } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

type Props = {
  imageName: string;
  imageAlt: string;
};

const Picture: FC<Props> = (props) => {
  const query = graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fixed(width: 400) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const { imageName: imagePath, imageAlt } = props;
        const image = data.images.edges.find((n) => {
          return n.node.relativePath.includes(imagePath);
        });

        if (!image) return;

        return <Img fixed={image.node.childImageSharp.fixed} alt={imageAlt} />;
      }}
    />
  );
};

export default Picture;
