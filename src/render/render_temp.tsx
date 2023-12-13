// REACT
import React, { FC } from "react";
import { useContext } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";
// APP
import { useNode } from "../utils/hu.tsx";
import { LogoBunabet, ButtonNav } from "../components/hc.tsx";
import { RenderOpening, RenderIntro} from "../render/hr.tsx";
import { RegionContext } from "../context.tsx";


interface Props { 
  // Your code
}

export const RenderTemp: FC<Props> = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "temp"}}}) {
          edges {
            node {
              frontmatter {
                misc
                lang
              }
            }
          }
        }
      }
    `
  )
  const { lang } = useContext(RegionContext);
  console.log("lang",lang);
  const {frontmatter } = useNode(data, lang);
  const info = frontmatter;
  return <>
    <LogoBunabet style={{paddingTop: '1em'}}/>
    <RenderIntro/>
    <p>
      <ButtonNav what={info.misc} href="https://cafe-366.myshopify.com"/>
    </p>
    <RenderOpening/>

  </>
}