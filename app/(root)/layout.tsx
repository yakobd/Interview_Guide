import React, { ReactNode } from "react";
import RootLayout from "../layout";
import Link from "next/link";
import Image from "next/image";

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      {/* Navigation  */}
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">Company Name</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Rootlayout;
