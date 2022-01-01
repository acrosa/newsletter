import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

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
//# sourceMappingURL=/build/_shared/chunk-GBSBEE7W.js.map
