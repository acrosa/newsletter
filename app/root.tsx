import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import hero from "../public/images/hero.jpeg";
import back from "../public/images/back.svg";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "Newsletter" };
};

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="max-w-3xl mx-auto">
          <div className="py-16 px-6">
            <Link to="/">
              <img src={back} />
            </Link>
            <div className="text-center flex">
              <div className="w-full">
                <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Oops
                </p>
                <p className="mt-5 mx-auto text-xl text-gray-500">
                  {error.message}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={hero}
                className="pt-4"
                height={"100%"}
                width={"100%"}
                title="Newsletter de @metacrosa"
              />
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBoundary({ error }: { error: Error }) {
  return (
    <html>
      <head>
        <title>Not found!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="max-w-3xl mx-auto">
          <div className="py-16 px-6">
            <Link to="/">
              <img src={back} />
            </Link>
            <div className="text-center flex">
              <div className="w-full">
                <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  404
                </p>
                <p className="mt-5 mx-auto text-xl text-gray-500">
                  No se encontro la pagina.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={hero}
                className="pt-4"
                height={"100%"}
                width={"100%"}
                title="Newsletter de @metacrosa"
              />
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
