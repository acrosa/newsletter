import { Outlet } from "react-router";

export default function Emails() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-16 px-4">
        <div className="text-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
