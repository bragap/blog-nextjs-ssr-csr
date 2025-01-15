'use client'

import React, { createContext, useState, useContext } from 'react';

type Language = 'pt-BR' | 'en';

type Translations = {
    [key: string]: {
        [key in Language]: string;
    };
};

type PluginLanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
};

const translations: Translations = {
    title: {
        'pt-BR': 'Acessibilidade',
        'en': 'Accessibility',
    },
    firstTitle: {
        'pt-BR': 'Controle de fonte',
        'en': 'Font control',
    },
    secondTitle: {
        'pt-BR': 'Controle de cor',
        'en': 'Color control',
    },
    firstButton: {
        'pt-BR': 'Tamanho de fonte',
        'en': 'Font size',
    },
    secondButton: {
        'pt-BR': 'Letras destacadas',
        'en': 'Highlighted letters',
    },
    thirdButton: {
        'pt-BR': 'Espaço entre linhas',
        'en': 'Space between lines',
    },
    fourthButton: {
        'pt-BR': 'Espaço entre letras',
        'en': 'Space between letters',
    },
    fifthButton: {
        'pt-BR': 'Contraste',
        'en': 'Contrast',
    },
    seventhButton: {
        'pt-BR': 'Saturação',
        'en': 'Saturation',
    },

    darkMode: {
        'pt-BR': 'Modo escuro',
        'en': 'Dark mode',
    },
    lightMode: {
        'pt-BR': 'Modo claro',
        'en': 'Light mode',
    },
    colorPage: {
        'pt-BR': 'Cores da página',
        'en': 'Page colors',
    }
};

const PluginLanguageContext = createContext<PluginLanguageContextType | undefined>(undefined);

export const PluginLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string) => {
        if (!translations[key]) {
            return key;
        }
        return translations[key][language] || key;
    }

    return (
        <PluginLanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </PluginLanguageContext.Provider>
    );
};

export const useModalLanguage = () => {
    const context = useContext(PluginLanguageContext);
    if (context === undefined) {
        throw new Error('useModalLanguage must be used within a PluginLanguageProvider');
    }
    return context;
};

