import React from "react";
import { Toaster } from "@/components/ui/sonner";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main id="admin-dashboard">
      <div className="max-w-7xl mx-auto xl:p-12 md:p-8 p-4">{children}</div>
      <Toaster richColors closeButton />
    </main>
  );
}

export default AdminLayout;
