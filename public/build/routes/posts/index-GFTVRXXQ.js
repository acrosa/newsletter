import {
  Link,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-2THHQEKS.js";

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
  }, "Posts"), posts.map((post) => /* @__PURE__ */ React.createElement("div", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, post.title))));
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-GFTVRXXQ.js.map
