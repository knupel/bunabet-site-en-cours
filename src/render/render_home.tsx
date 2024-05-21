/**
 * Render Home
 * 2023-2023
 * v 0.1.0
 * 
 * */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";

// APP
import { useNode } from "../utils/hu.tsx";
import { ButtonNav } from "../components/hc.tsx";
import { RegionContext } from "./../context";


import { RenderOpening, RenderOpeningX, RenderIntro } from "../render/hr.tsx";

// need to define properly the any... it's very too much and very lazy !
interface Props {
  // data? : any;
}

export const RenderHome: FC<Props> =() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "home"}}}) {
          edges {
            node {
              frontmatter {
                title
                subtitle
                message
                misc_a
                misc_b
                misc_c
                lang
              }
            }
          }
        }
      }
    `
  )
  const { lang } = useContext(RegionContext);
  const {frontmatter} = useNode(data, lang);
  const info = frontmatter;

  return <>
      <RenderIntro/>
      <p>
        <ButtonNav what={info.misc_a} href="https://www.deezer.com/fr/profile/5303082/playlists"/>
      </p>
      <p>
        <ButtonNav what={info.misc_b} href="https://cafe-366.myshopify.com"/>
      </p>
      <p>
        <ButtonNav what={info.misc_c} href="http://www.tourdumondeducafe.com"/>
      </p>
      {/* <RenderOpeningX/> */}
      <RenderOpening/>
  </>
}