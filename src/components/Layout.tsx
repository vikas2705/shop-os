import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="gap-1 w-full bg-gray-100 p-6">{children}</div>
    </div>
  );
};

export default Layout;
