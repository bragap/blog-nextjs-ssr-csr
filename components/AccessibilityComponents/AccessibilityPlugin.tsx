'use client'

import React from 'react'
import { PersonStanding, Type, Contrast, UnfoldVertical as LineHeight, UnfoldHorizontal as LetterSpacing, AArrowUp, Eclipse } from 'lucide-react'
import { ModeToggle } from "./ToggleDarkMode"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog-accessibility"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { PluginLanguageToggle } from "./PluginLanguageToggle"
import { useModalLanguage } from "@/contexts/AccessibilityContexts/PluginLanguageContext"
import { AccessibilityButton } from "./AccessibilityButton"
import { useAccessibility } from "@/contexts/AccessibilityContexts/AccessibilityContext"


export default function AccessibilityPlugin() {
    const { t } = useModalLanguage()
    const {
        fontSize,
        contrast,
        lineHeight,
        letterSpacing,
        saturation,
        toggleFontSize,
        toggleContrast,
        toggleLineHeight,
        toggleLetterSpacing,
        toggleSaturation,
    } = useAccessibility()

    return (
        <Dialog>
            <DialogTrigger className="fixed top-[50%] right-0 h-9 w-9">
                <div className="h-[40px] bg-acc-blue rounded-none rounded-l-md flex items-center justify-center border border-acc-white">
                    <PersonStanding className="text-acc-white w-full h-[30px] text-xs " />
                </div>
            </DialogTrigger>
            <DialogContent className="bg-acc-gray text-primary" >
                <DialogTitle className="bg-card">
                    <div className="flex justify-around items-center gap-5">
                        <div className="flex items-center gap-2">
                            <Image src="/logo.png" width={25} height={25} alt="Logo" />
                            {t('title')}
                        </div>
                        <div>
                            <PluginLanguageToggle />
                        </div>
                    </div>
                </DialogTitle>
                <div className="px-4 ">
                    <h2 className="font-semibold w-full">{t('firstTitle')}</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <AccessibilityButton
                            icon={AArrowUp}
                            label={t('firstButton')}
                            onClick={toggleFontSize}
                            isActive={fontSize}
                        />
                        <AccessibilityButton
                            icon={LineHeight}
                            label={t('thirdButton')}
                            onClick={toggleLineHeight}
                            isActive={lineHeight > 1.5}
                        />
                        <AccessibilityButton
                            icon={LetterSpacing}
                            label={t('fourthButton')}
                            onClick={toggleLetterSpacing}
                            isActive={letterSpacing > 0}
                        />
                    </div>
                </div>
                <Separator />
                <div className="px-4 pb-2">
                    <h2 className="font-semibold w-full">{t('secondTitle')}</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <AccessibilityButton
                            icon={Contrast}
                            label={t('fifthButton')}
                            onClick={toggleContrast}
                            isActive={contrast === 'high'}
                        />
                        <AccessibilityButton
                            icon={Eclipse}
                            label={t('seventhButton')}
                            onClick={toggleSaturation}
                            isActive={saturation < 100}
                        />
                        <ModeToggle />

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

