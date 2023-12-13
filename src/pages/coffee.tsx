/**
 * Index
 * 2023-2023
 * v 0.0.3
 * 
 * */
// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
// APP
import { RenderCoffee } from "../render/hr.tsx";
import { Layout, SeoTitle } from "../components/hc.tsx";


interface Props {
  data: any;
}

const Coffee: FC<PageProps> = ({data}) => {
  return (
    <Layout>
      <RenderCoffee/>
    </Layout>
  )
}

export default Coffee;

export const Head: HeadFC = ({data}) => <SeoTitle title={data.allMarkdownRemark.edges[0].node.frontmatter.title}/>

export const myQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "coffee"}}}) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`