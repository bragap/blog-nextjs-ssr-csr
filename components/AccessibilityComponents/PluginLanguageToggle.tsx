'use client'

import React from 'react';
import { useModalLanguage } from '@/contexts/AccessibilityContexts/PluginLanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import brasil from '@/public/brasil.png'
import eua from '@/public/eua.png'

export const PluginLanguageToggle: React.FC = () => {
    const { language, setLanguage } = useModalLanguage();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className=" justify-between">
                    {language === 'pt-BR' ? (
                        <>
                            <Image src={brasil} width={20} height={20} alt="Brazil Flag" />
                            Português
                        </>
                    ) : (
                        <>
                            <Image src={eua} width={20} height={20} alt="USA Flag" />
                            English
                        </>
                    )}
                    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('pt-BR')}>
                    <Image src={brasil} width={20} height={20} alt="Brazil Flag" />
                    Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                    <Image src={eua} width={20} height={20} alt="USA Flag" />
                    English
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

