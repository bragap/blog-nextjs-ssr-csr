import type { Metadata } from "next";
import { montserrat } from '@/app/ui/fonts';
import { ThemeProvider } from "@/components/AccessibilityComponents/ThemeProvider";
import AccessibilityPlugin from "@/components/AccessibilityComponents/AccessibilityPlugin";
import { PluginLanguageProvider } from "@/contexts/AccessibilityContexts/PluginLanguageContext";
import { AccessibilityProvider } from "@/contexts/AccessibilityContexts/AccessibilityContext";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Accessibility NextJS Starter Kit by Pedro Braga",
    description: "Simple and easy to use nextjs 14 starter template with a plugin focus on accessibility made by Pedro Braga.",
    metadataBase: new URL('https://nextjs.adarshdubey.com'),
    openGraph: {
        title: 'Accessibility NextJS Starter Kit by Pedro Braga',
        description:
            'Simple and easy to use nextjs 14 starter template with a plugin focus on accessibility made by Pedro Braga.',
        url: 'https://nextjs.adarshdubey.com',
        siteName: 'Accessibility NextJS Starter Kit by Pedro Braga',
        images: {
            url: '/logo.png',
            width: 1920,
            height: 960,
            alt: "The only nexjs starter kit with focus on accessibility you'll ever heard.",
        },
    },
};


export default function RootLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode
    params: { lang: string }
}) {
    return (
        <AccessibilityProvider>
            <html lang={lang} suppressHydrationWarning>
                <body className={`${montserrat.className} antialiased`}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
                        <PluginLanguageProvider>
                            {children}
                            <AccessibilityPlugin />
                        </PluginLanguageProvider>
                    </ThemeProvider>
                </body>
            </html >
        </AccessibilityProvider>
    );
}
