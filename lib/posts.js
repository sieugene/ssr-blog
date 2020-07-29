import fetch from "isomorphic-unfetch";

export async function getSortedPostsData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    return todos;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostData(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todos = await res.json();
    return todos;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPostIds() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    return todos.map((t) => {
      return {
        params: {
          id: t.id.toString(),
          title: t.title,
        },
      };
    });
  } catch (error) {
    console.log(error);
  }
}
