'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import brasil from '@/public/brasil.png'
import eua from '@/public/eua.png'

export default function LanguageToggle({ currentLang }: { currentLang: string }) {
    const router = useRouter()
    const pathname = usePathname()

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'pt-br' : 'en'
        const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`)
        router.push(newPathname)
    }

    return (
        <Button onClick={toggleLanguage} variant='language'>
            {currentLang === 'en' ? <div className="flex items-center gap-1">
                <Image src={brasil} width={20} height={20} alt="Brazil Flag" />
                PT-BR
            </div> : <div className="flex items-center gap-1">
                <Image src={eua} width={20} height={20} alt="USA Flag" />
                EN
            </div>}
        </Button >
    )
}

