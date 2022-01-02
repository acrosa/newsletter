import {
  HeadersFunction,
  json,
  Link,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from "remix";
import { getSite } from "~/lib/api";
import TimeAgo from "react-timeago";
import { SubscribeBox } from "./subscribe";
import hero from "../../public/images/hero.jpeg";

export const loader: LoaderFunction = async () => {
  const envSitePath = process.env.SITE_PATH as string;
  const site = await getSite({ path: envSitePath });
  return json({
    site: site,
    // headers: {
    //   "Cache-Control": "public, max-age=300, stale-while-revalidate=600",
    // },
  });
};

export const meta: MetaFunction = () => {
  const date = JSON.stringify(Date());
  return {
    title: "Newsletter",
    updated: date,
    description: "Un newsletter de metacrosa",
  };
};

export const headers: HeadersFunction = () => {
  return { "Cache-Control": "public, max-age=300, stale-while-revalidate=600" };
};

export default function Index() {
  const { site } = useLoaderData();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="py-16 px-6">
        <div className="flex items-center">
          <img
            src={hero}
            className="pb-4"
            height={"100%"}
            width={"100%"}
            title="Newsletter de @metacrosa"
          />
        </div>
        <div className="text-center flex">
          <div className="w-full">
            <h2 className="text-base font-semibold text-gray-600 tracking-wide uppercase">
              Newsletter
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {site.site.name}
            </p>
            <p className="mt-5 mx-auto text-xl text-gray-500">
              {site.site.headline}
            </p>
          </div>
        </div>
        <div className="max-w-xl mx-auto mt-8">
          <ul role="list" className="pt-5 divide-y divide-gray-200">
            {site.notes.map((note) => (
              <li key={note.id} className="py-5 px-4">
                <div className="flex justify-between space-x-3">
                  <Link
                    to={`/emails/${note.path}`}
                    prefetch="intent"
                    className="text-2xl font-bold text-gray-900 truncate"
                  >
                    <div className="mt-1 text-xl font-extrabold text-gray-900 sm:2text-xl sm:tracking-tight lg:text-3xl">
                      {note.title}
                    </div>
                    <time
                      dateTime={note.created_at}
                      className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                    >
                      <TimeAgo date={note.created_at} />
                    </time>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <SubscribeBox />
      </div>
    </div>
  );
}
