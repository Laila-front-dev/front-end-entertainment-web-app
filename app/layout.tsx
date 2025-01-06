import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Provider from "@/context/Provider";
import Search from "./(movie-app)/search/components/search";
import { Suspense } from "react";

const outfitLight = localFont({
  src: "./fonts/OutfitLight.woff",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Entertainment movie app",
  description: "Entertainment movie app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider
        session={{
          user: { id: "", name: null, email: null, image: null },
          expires: "",
        }}
      >
        <body
          className={`${outfitLight.className} bg-primary-900 text-primary-100`}
        >
          <div className="lg:flex">
            <Header />
            <main className="overflow-hidden">
              <Suspense>
                <Search />
              </Suspense>
              {children}
            </main>
          </div>
        </body>
      </Provider>
    </html>
  );
}
