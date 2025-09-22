import Sidebar from "../shared/sidebar";

export const metadata = {
  title: "Kids",
};

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
