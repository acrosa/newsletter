import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-T7ZW4NNL.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-GHK3HHDO.js";

// browser-route-module:/Users/alejandrocrosa/Desktop/projects/aleph-blog/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
function Index() {
  const { site, notes } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-base font-semibold text-indigo-600 tracking-wide uppercase"
  }, "Newsletter"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
  }, site.site.name), /* @__PURE__ */ React.createElement("p", {
    className: "max-w-xl mt-5 mx-auto text-xl text-gray-500"
  }, site.site.headline), /* @__PURE__ */ React.createElement("p", {
    className: "pt-5"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/posts",
    className: "bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  }, "Archive")))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-XJN6UG37.js.map
