import type { Metadata } from "next";
import { ThemeProvider } from "@/components/AccessibilityComponents/ThemeProvider";
import AccessibilityPlugin from "@/components/AccessibilityComponents/AccessibilityPlugin";
import { PluginLanguageProvider } from "@/contexts/AccessibilityContexts/PluginLanguageContext";
import { AccessibilityProvider } from "@/contexts/AccessibilityContexts/AccessibilityContext";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Blog with Next.js created to practice SSR e CSR",
    description: "Simple blog with Next.js created to practice SSR e CSR by Pedro Braga",
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
                <body className="antialiased h-screen">
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
                        <PluginLanguageProvider>
                            {children}
                            <AccessibilityPlugin />
                        </PluginLanguageProvider>
                    </ThemeProvider>
                </body>
            </html >
        </AccessibilityProvider >
    );
}