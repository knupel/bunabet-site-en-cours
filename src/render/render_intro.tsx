/**
 * Render Contact
 * 2023-2024
 * v 0.0.2
 * 
 * */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";

// APP
import { useNode } from "../utils/hu.tsx";
import { MarkdownHtml, LogoBunabet } from "../components/hc.tsx";
import { RegionContext } from "../context.tsx";


const title_style = {
  marginTop: 8,
  marginBottom: 2,
}

interface Props {
  // data? : any;
}

export const RenderIntro: FC<Props> =() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "intro"}}}) {
          edges {
            node {
              frontmatter {
                categorie
                title
                message
                lang
              }
              html
            }
          }
        }
      }
    `
  )
  const { lang } = useContext(RegionContext);
  const {frontmatter, html} = useNode(data, lang);
  const info = frontmatter;
  // const content = html;

  return <>
    <h2 style={title_style}> {info.title}</h2>
    <h4 style={title_style}>{info.message}</h4>
    {/*<p> <MarkdownHtml html={content} /> </p>*/}
  </>
}