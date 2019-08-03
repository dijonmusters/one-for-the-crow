import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Content from './styled/content';

const StyledMenu = styled.embed`
  object-fit: cover;
  flex: 1;
`;

const MenuContainer = styled.div`
  display: flex;
  flex: 1;
`;

const renderMenu = menu => (
  <StyledMenu key={menu.id} src={menu.url} type="application/pdf" />
);

const Menu = () => {
  return (
    <StaticQuery
      query={graphql`
        query MenuQuery {
          allFile(filter: { sourceInstanceName: { eq: "menus" } }) {
            edges {
              node {
                id
                publicURL
              }
            }
          }
        }
      `}
      render={data => {
        const menus = data.allFile.edges.map(menu => ({
          id: menu.node.id,
          url: menu.node.publicURL,
        }));
        return (
          <Content>
            <MenuContainer>{menus.map(renderMenu)}</MenuContainer>
          </Content>
        );
      }}
    />
  );
};

export default Menu;
