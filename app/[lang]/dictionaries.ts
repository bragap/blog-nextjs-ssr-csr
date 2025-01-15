
type MyWebSiteContext = {
    logo: string,
    mainContent: string,
    footer: string,
    buttonLabelStart: string,
    buttonLabelStar: string,
    acc: string
}

const dictionaries: { [key: string]: () => Promise<MyWebSiteContext> } = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    'pt-br': () => import('./dictionaries/pt-br.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale]()

