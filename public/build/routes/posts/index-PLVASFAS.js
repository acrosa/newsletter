import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-T7ZW4NNL.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-GHK3HHDO.js";

// browser-route-module:/Users/alejandrocrosa/Desktop/projects/aleph-blog/app/routes/posts/index.tsx?browser
init_react();

// app/routes/posts/index.tsx
init_react();
function Posts() {
  const posts = useLoaderData();
  console.log(posts);
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-10"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-normal leading-normal mt-0 mb-2"
  }, "Posts"), JSON.stringify(process.env.API_KEY), posts.map((post) => /* @__PURE__ */ React.createElement("div", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, post.title))));
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-PLVASFAS.js.map
