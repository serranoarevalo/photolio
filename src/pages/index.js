import React from "react";
import styled from "styled-components";

const getDays = date => {
  var oneDay = 24 * 60 * 60 * 1000;
  var firstDate = new Date();
  var secondDate = new Date(date);

  var diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
  );
  return diffDays;
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 700;
`;

const Key = styled.span`
  color: #999;
`;

const Emphasys = styled.span`
  color: #fc4746;
`;

const IndexPage = ({ data: { site: { siteMetadata }, allMarkdownRemark } }) => (
  <Container>
    <div>
      <Title>Serrano Arévalo</Title>
      <Text>
        <Emphasys>{getDays(siteMetadata.travelStart)}</Emphasys> days traveling
        the world
      </Text>
      <Text>
        <Key>Currently: </Key>
        {siteMetadata.location}
      </Text>
    </div>
  </Container>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        location
        travelStart
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            city
            flag
          }
        }
      }
    }
  }
`;

export default IndexPage;
