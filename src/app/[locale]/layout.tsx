// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: { template: "%s | GFR Blog", default: "Home | GFR Blog" },
// };

// export default async function RootLayout({
//   children,
//   params: { locale },
// }: Readonly<{
//   children: React.ReactNode;
//   params: { locale: string };
// }>) {
//   const messages = await getMessages();

//   return (
//     <html lang={locale}>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         // className={`antialiased`}
//       >
//         <NextIntlClientProvider messages={messages}>
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }


// import type { Metadata } from "next";
// import "./globals.css";
// import { NextIntlClientProvider } from "next-intl";
// import getMessages from "../../lib/i18n";

// export const metadata: Metadata = {
//   title: { template: "%s | GFR Blog", default: "Home | GFR Blog" },
// };

// export default async function RootLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: { locale: string };
// }) {
//   const { locale } = params; // Acessar `params` dentro do corpo da função
//   const messages = await getMessages({
//     locale,
//     requestLocale: Promise.resolve(locale),
//   });

//   return (
//     <html lang={locale}>
//       <body className="antialiased">
//         <NextIntlClientProvider messages={messages}>
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";


export const metadata: Metadata = {
    title: { template: "%s | GRF Blog", default: "Home | GRF Blog" },
};

export default async function RootLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string }
}>) {
    const messages = await getMessages()

    return (
        <html lang={locale}>
            <body className={`antialiased`}>
                <NextIntlClientProvider messages={messages}>
                   
                        {children}
                    
                </NextIntlClientProvider>
            </body>
        </html>
    );
}