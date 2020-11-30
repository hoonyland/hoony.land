import { memo } from "react";
import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllProjectsForHome } from "../lib/api";

export default memo(({ preview, projects }) => {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Hoonynori.Land 🦦</title>
        </Head>
        <Container>
          <Intro projects={projects} />
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}

          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  );
});

export async function getStaticProps({ preview = false }) {
  // const allPosts = (await getAllPostsForHome(preview)) ?? [];
  const projects = (await getAllProjectsForHome(preview)) ?? [];
  return {
    props: { preview, projects },
  };
}
