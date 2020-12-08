import { memo } from "react";
import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Posts from "../components/posts";
import { getAllPostsForHome, getAllProjectsForHome } from "../lib/api";

export default memo(({ preview, posts, projects }) => {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Hoony.Land 🦦</title>
        </Head>
        <Container>
          <Intro projects={projects} />

          <Posts posts={posts} />
        </Container>
      </Layout>
    </>
  );
});

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) ?? [];
  const projects = (await getAllProjectsForHome(preview)) ?? [];
  return {
    props: { preview, posts, projects },
  };
}
