import React from "react";
import Sidebar from "@/components/global/sidebar";
import InfoBar from "@/components/infobar";
import {ClerkProvider} from "@clerk/nextjs"

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        <div className="border h-full rounded-tl-2xl">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
