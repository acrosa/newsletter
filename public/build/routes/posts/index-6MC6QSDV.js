import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-24QIVDKE.js";
import "/build/_shared/chunk-6QH5KI2V.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/alejandrocrosa/Desktop/projects/aleph-blog/app/routes/posts/index.tsx?browser
init_react();

// app/routes/posts/index.tsx
init_react();
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("div", null, "Something broke at the posts component");
}
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
  ErrorBoundary,
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-6MC6QSDV.js.map
