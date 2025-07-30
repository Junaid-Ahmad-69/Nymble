import localFont from "next/font/local";
import "./globals.css";
import {cn} from "@/lib/utils";
import {Inter} from "next/font/google";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const poppins = Inter({subsets: ['latin'], variable: '--font-poppins'})


export const metadata = {
    title: "Nymble |  Platform for Learning",
    description: "Nymble is a platform for learning LMS systems.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={cn(`${geistSans.variable} ${geistMono.variable} antialiased, poppins.className`)}
        >
        {children}
        </body>
        </html>
    );
}
