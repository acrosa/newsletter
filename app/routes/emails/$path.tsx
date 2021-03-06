import {
  HeadersFunction,
  Link,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from "remix";
import { getRenderedNote } from "~/lib/api";
import { RenderedNote } from "~/lib/note";
import styles from "./../../css/tailwind.css";
import back from "./../../../public/images/back.svg";
import hero from "../../../public/images/hero.jpeg";

export const headers: HeadersFunction = () => {
  return { "Cache-Control": "public, max-age=300, stale-while-revalidate=600" };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = ({ data }) => {
  return {
    title: "Newsletter",
    description: data.note.summary,
    "og:image": data.note.poster
      ? data.note.poster
      : `https://newsletter.alejandrocrosa.com/${hero}`,
    "twitter:card": "Newsletter de @metacrosa",
    "twitter:title": data.note.title,
    "twitter:description": data.note.headline,
    "twitter:site": "@metacrosa",
    "twitter:creator": "@metacrosa",
  };
};

export const loader: LoaderFunction = ({ params }) => {
  const envSitePath = process.env.SITE_PATH as string;
  const path = params.path as string;
  const note = getRenderedNote({ site_path: envSitePath, path: path });
  if (note == undefined) {
    throw new Response("Not Found", {
      status: 404,
    });
  } else {
    return note;
  }
};

export default function Note() {
  const note: RenderedNote = useLoaderData();

  return (
    <div className="note">
      <Link to="/">
        <img src={back} />
      </Link>
      <div dangerouslySetInnerHTML={{ __html: note.body }} />
    </div>
  );
}
