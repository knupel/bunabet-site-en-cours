/**
 * Render Home
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
import { RegionContext } from "../context.tsx";
import { get_css_value } from "../utils/hu.tsx";
// import { ButtonCodeNav } from "../components/hc.tsx";
// import { LogoBunabet } from "../components/hc.tsx";
import { MarkdownHtml, LogoBunabet, NavCellBox } from "../components/hc.tsx";

// need to define properly the any... it's very too much and very lazy !
interface Props {
  // data? : any;
}

const style_logo = {
  fontFamily: get_css_value("--font_logo"),
  marginTop: 24,
  maxWidth: 600,
}

const style_titles = {
  fontFamily: get_css_value("--font_title"),
  marginTop: 24,
  maxWidth: 600,
}
const style_subtitles = {
  color: get_css_value("--font_title"),
  marginTop: -24,
  marginLeft: 128,
  marginBottom: 42,
}
const question_styles = {
  // marginLeft: 24,
  marginBottom: -8,
}

export const RenderOpening: FC<Props> =() => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {categorie: {eq: "opening"}}}) {
          edges {
            node {
              frontmatter {
                title
                subtitle
                message
                misc
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

  return <>
      <LogoBunabet style={{paddingTop: '1em'}}/>
      <h2 style={question_styles}>{info.message}</h2>
      <MarkdownHtml html={html} />
      <p>
        {/* <ButtonCodeNav what={info.misc} to="/contact"/> */}
        <NavCellBox href="https://cafe-366.myshopify.com/">{info.misc}</NavCellBox>
      </p>
  </>
}