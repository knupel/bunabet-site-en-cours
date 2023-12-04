/**
 * Render Coffee
 * 2023-2023
 * v 0.0.1
 * 
 * */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";

// APP
import { useNode } from "../utils/hu.tsx";
import { MarkdownHtml } from "../components/hc.tsx";
import { RegionContext } from "./../context";

// need to define properly the any... it's very too much and very lazy !
interface Props {
  // data? : any;
}


export const RenderCoffee: FC<Props> =() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "coffee"}}}) {
          edges {
            node {
              frontmatter {
                categorie
                title
                subtitle
                menu
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
  // console.log("lang", lang);
  const {frontmatter, html} = useNode(data, lang);
  const info = frontmatter;


  return <>
    <h1>{info.title}</h1>
    <MarkdownHtml html={html} />
  </>
}