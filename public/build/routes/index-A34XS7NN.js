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
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  }, "Archive"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "divide-y divide-gray-200"
  }, site.notes.map((note) => /* @__PURE__ */ React.createElement("li", {
    key: note.id,
    className: "relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between space-x-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "block focus:outline-none"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "absolute inset-0",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl font-bold text-gray-900 truncate"
  }, note.title))), /* @__PURE__ */ React.createElement("time", {
    dateTime: note.created_at,
    className: "flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
  }, note.created_at))))))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-A34XS7NN.js.map
