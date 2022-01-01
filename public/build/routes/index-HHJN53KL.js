import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-T7ZW4NNL.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-GHK3HHDO.js";

// browser-route-module:/Users/alejandrocrosa/Desktop/projects/aleph-blog/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// node_modules/react-timeago/es6/index.js
init_react();
var React2 = __toModule(require_react());
var import_react = __toModule(require_react());

// node_modules/react-timeago/es6/defaultFormatter.js
init_react();
function defaultFormatter(value, _unit, suffix) {
  const unit = value !== 1 ? _unit + "s" : _unit;
  return value + " " + unit + " " + suffix;
}

// node_modules/react-timeago/es6/dateParser.js
init_react();
function dateParser(date) {
  const parsed = new Date(date);
  if (!Number.isNaN(parsed.valueOf())) {
    return parsed;
  }
  const parts = String(date).match(/\d+/g);
  if (parts == null || parts.length <= 2) {
    return parsed;
  } else {
    const [firstP, secondP, ...restPs] = parts.map((x) => parseInt(x));
    const correctedParts = [firstP, secondP - 1, ...restPs];
    const isoDate = new Date(Date.UTC(...correctedParts));
    return isoDate;
  }
}

// node_modules/react-timeago/es6/index.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var MINUTE = 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = DAY * 30;
var YEAR = DAY * 365;
function TimeAgo({
  date,
  formatter = defaultFormatter,
  component = "time",
  live = true,
  minPeriod = 0,
  maxPeriod = WEEK,
  title,
  now = () => Date.now(),
  ...passDownProps
}) {
  const forceUpdate = useUpdate();
  (0, import_react.useEffect)(() => {
    if (!live) {
      return;
    }
    let timeoutId;
    const tick = (refresh) => {
      const then2 = dateParser(date).valueOf();
      if (!then2) {
        console.warn("[react-timeago] Invalid Date provided");
        return;
      }
      const timeNow2 = now();
      const seconds2 = Math.round(Math.abs(timeNow2 - then2) / 1e3);
      const unboundPeriod = seconds2 < MINUTE ? 1e3 : seconds2 < HOUR ? 1e3 * MINUTE : seconds2 < DAY ? 1e3 * HOUR : 1e3 * WEEK;
      const period = Math.min(Math.max(unboundPeriod, minPeriod * 1e3), maxPeriod * 1e3);
      if (period) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(tick, period);
      }
      if (!refresh) {
        forceUpdate();
      }
    };
    tick(true);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [date, forceUpdate, live, maxPeriod, minPeriod, now]);
  const Komponent = component;
  const then = dateParser(date).valueOf();
  if (!then) {
    return null;
  }
  const timeNow = now();
  const seconds = Math.round(Math.abs(timeNow - then) / 1e3);
  const suffix = then < timeNow ? "ago" : "from now";
  const [value, unit] = seconds < MINUTE ? [Math.round(seconds), "second"] : seconds < HOUR ? [Math.round(seconds / MINUTE), "minute"] : seconds < DAY ? [Math.round(seconds / HOUR), "hour"] : seconds < WEEK ? [Math.round(seconds / DAY), "day"] : seconds < MONTH ? [Math.round(seconds / WEEK), "week"] : seconds < YEAR ? [Math.round(seconds / MONTH), "month"] : [Math.round(seconds / YEAR), "year"];
  const passDownTitle = typeof title === "undefined" ? typeof date === "string" ? date : dateParser(date).toISOString().substr(0, 16).replace("T", " ") : title;
  const spreadProps = Komponent === "time" ? {
    ...passDownProps,
    dateTime: dateParser(date).toISOString()
  } : passDownProps;
  const nextFormatter = defaultFormatter.bind(null, value, unit, suffix);
  return /* @__PURE__ */ React2.createElement(Komponent, _extends({}, spreadProps, {
    title: passDownTitle
  }), formatter(value, unit, suffix, then, nextFormatter, now));
}
function useUpdate() {
  const [_, setCount] = (0, import_react.useState)(0);
  return (0, import_react.useCallback)(() => {
    setCount((num) => num + 1);
  }, []);
}

// app/routes/index.tsx
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
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/email/${note.path}`,
    className: "text-2xl font-bold text-gray-900 truncate"
  }, note.title)), /* @__PURE__ */ React.createElement("time", {
    dateTime: note.created_at,
    className: "flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
  }, /* @__PURE__ */ React.createElement(TimeAgo, {
    date: note.created_at
  })))))))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-HHJN53KL.js.map
