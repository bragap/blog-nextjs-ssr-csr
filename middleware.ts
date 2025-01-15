import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'pt-br']
const defaultLocale = 'en'

function getLocale(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const locale = locales.find(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
    return locale || defaultLocale
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const locale = getLocale(request)

    if (!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`) {
        const newUrl = new URL(`/${locale}${pathname}`, request.url)
        return NextResponse.redirect(newUrl)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!_next).*)',
    ],
}

