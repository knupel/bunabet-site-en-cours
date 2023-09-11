/**
 * Index
 * 2023-2023
 * v 0.0.2
 * 
 * */



// WARNING
// Flash of Unstyled Content (FOUC)

// https://www.digitalocean.com/community/tutorials/how-to-handle-async-data-loading-lazy-loading-and-code-splitting-with-react
// https://stackoverflow.com/questions/59572173/flash-of-unstyled-content-fouc-when-using-gatsby-with-emotion






// REACT
import React, { FC } from "react";
// GATSBY
import type { HeadFC, PageProps } from "gatsby";
// APP
import { RenderOpening, RenderHome, RenderAbout } from "../render/hr.tsx";
import { Layout } from "../components/hc.tsx";


const IndexPage: FC<PageProps> = () => {
  return (
    <Layout menu_is={false}>
      {/* <RenderHome/> */}
      <RenderOpening/>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Buna Bet</title>