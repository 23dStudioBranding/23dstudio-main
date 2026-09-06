import "./globals.css";
import CustomCursor from "@/assets/CustomCursor";
import ScrollToTop from "@/assets/ScrollToTop";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "23D Studio",
  description: "Design Firm - Helping brands tell their stories",
  icons: {
    icon: "/logo.png", 
    shortcut: "/logo.png",
    apple: "/logo.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org Organization Markup */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://23dstudio.com",
              logo: "https://23dstudio.com/logo.png",
              name: "23D Studio",
            }),
          }}
        />
      </head>
      <body>
        {/* Custom cursor across whole site */}
        <CustomCursor />

        {/* Auto scroll to top on route change */}
        <ScrollToTop />

        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
