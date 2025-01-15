import Image from "next/image";
import Link from "next/link";
import { Github, Sparkles } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";
import { getDictionary } from '@/app/[lang]/dictionaries';
import LanguageToggle from '@/components/AccessibilityComponents/HomeLanguageToggle';


export default async function Home({ params: { lang } }: { params: { lang: string } }) {
    const dict = await getDictionary(lang);

    return (
        <main className="bg-gradient-light dark:bg-gradient-dark min-h-screen">
            <section className="w-[95%] md:w-[80%] mx-auto p-10">
                <header className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Image src="/logo.png" width={70} height={70} alt="Logo" />
                        <p className="hidden md:block">/</p>
                        <h1 className={`${montserrat.className} font-bold text-lg hidden md:block`}> {dict.logo}</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <LanguageToggle currentLang={lang} />
                        <Link href="https://github.com/bragap" target="_blank" className="p-3 rounded-full bg-card hover:bg-card-foreground hover:text-background hover:duration-200"><Github /></Link>
                    </div>
                </header>

                <article className=" mt-10 p-0 md:p-10 text-center space-y-10">
                    <h1 className="text-3xl md:text-5xl font-semibold">{dict.mainContent}</h1>

                    <div className="flex items-center justify-center flex-wrap">
                        <p className="flex items-center gap-4 flex-wrap justify-center text-center sm:text-left">
                            {["Next.js", "TailwindCSS", "Shadcn/UI", "ESLint", "SEO", `${dict.acc}`, "TypeScript"].map((tech, index) => (
                                <span key={index} className="flex items-center gap-1 mb-2 sm:mb-0">
                                    {tech} <Sparkles strokeWidth={0.5} fill="true" />
                                </span>
                            ))}
                        </p>
                    </div>

                </article>


                <nav className="mt-5 md:mt-0 text-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="https://nextjs-accessibility.gitbook.io/get-ready" target="_blank" className="py-2 px-4 border border-border rounded-full hover:text-background bg-destructive hover:bg-primary hover:duration-200" >{dict.buttonLabelStart}</Link>
                        <Link href="https://github.com/bragap/nextjs-accessibility" target="_blank" className="py-2 px-4 border border-border rounded-full bg-card hover:bg-card-foreground hover:text-background hover:duration-200">{dict.buttonLabelStar}</Link>
                    </div>
                </nav>


                <footer className="mt-5 text-center">
                    <p>© 2025 {dict.footer} Pedro Braga</p>
                </footer>

            </section>
        </main>
    );
}
