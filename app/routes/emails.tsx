import { Outlet } from "react-router";
import { MetaFunction } from "remix";
import hero from "../../public/images/hero.jpeg";

export const meta: MetaFunction = () => {
  return {
    title: "Newsletter",
    description: "Newsletter de @metacrosa",
    "og:image": `https://newsletter.alejandrocrosa.com/${hero}`,
  };
};

export default function Emails() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="py-16 px-6">
        <div className="text-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
