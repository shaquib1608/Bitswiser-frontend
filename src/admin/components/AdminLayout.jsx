import Sidebar from "./Sidebar";

function AdminLayout({ children }) {
    return (
        <div className="flex bg-slate-950 min-h-screen text-white">
            <Sidebar />

            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}

export default AdminLayout;