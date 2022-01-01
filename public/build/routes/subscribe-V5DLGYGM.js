import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/alejandrocrosa/Desktop/projects/aleph-blog/app/routes/subscribe.tsx?browser
init_react();

// app/routes/subscribe.tsx
init_react();
function SubscribeBox() {
  return /* @__PURE__ */ React.createElement("form", {
    action: "https://tinyletter.com/metacrosa",
    method: "post",
    target: "popupwindow"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "tlemail"
  }, "Enter your email address")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "email",
    id: "tlemail"
  })), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    value: "1",
    name: "embed"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "Subscribe"
  }), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://tinyletter.com",
    target: "_blank"
  }, "powered by TinyLetter")));
}
export {
  SubscribeBox
};
//# sourceMappingURL=/build/routes/subscribe-V5DLGYGM.js.map
