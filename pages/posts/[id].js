import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import { fetch } from 'isomorphic-unfetch';

export default function Posts (props) {
  if(!props.postData || props.postData === null ){
    return 'нет данных'
  }
  return (
    <Layout>
      <Head>
        <title>{props.postData.title}</title>
      </Head>
      {props.postData.title}
      <br />
      {props.postData.id}
      <br />
      <br />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
