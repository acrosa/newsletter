import {
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Posts"), posts.map((post) => /* @__PURE__ */ React.createElement("div", null, post.title)));
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-HYG3622Z.js.map
