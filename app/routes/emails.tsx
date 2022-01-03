import { Outlet } from "react-router";

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
