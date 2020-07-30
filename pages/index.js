import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../api/posts";
import Link from "next/link";
import { setPosts } from "./../ducks/post";
import { dispatch,getReduxState } from "./../redux/store";
import { useSelector, useDispatch } from 'react-redux';

export default function Home({ todos }) {
  //set in store client side
  const dispatch = useDispatch()
  dispatch(setPosts(todos))
  const data = useSelector(state => state)
  //set and use state
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {todos &&
            todos.map(({ id, completed, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(props) {
  //set are serverSide store [server set]
  const data = await getSortedPostsData();
  await dispatch(setPosts(data));
  return {
    props: {
      todos: getReduxState().post.posts,
    },
  };
}
