import {
  useLoaderData
} from "/build/_shared/chunk-7HQ4KN4P.js";
import "/build/_shared/chunk-PRMZXFLO.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/alejandrocrosa/Desktop/projects/aleph-blog/app/routes/posts/$slug.tsx?browser
init_react();

// app/routes/posts/$slug.tsx
init_react();
function Post() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, post.slug), /* @__PURE__ */ React.createElement("div", null, post.title));
}
export {
  Post as default
};
//# sourceMappingURL=/build/routes/posts/$slug-QOWNNRFL.js.map
