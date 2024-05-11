import React from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <div className="bg-indigo-300">Sidemenu</div>
      <main className="bg-red-300 flex-1 overflow-auto">{children}</main>
    </div>
  );
}
