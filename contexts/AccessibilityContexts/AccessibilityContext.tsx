'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface AccessibilityContextType {
    fontSize: boolean
    contrast: 'normal' | 'high'
    lineHeight: number
    letterSpacing: number
    saturation: number
    toggleFontSize: () => void
    toggleContrast: () => void
    toggleLineHeight: () => void
    toggleLetterSpacing: () => void
    toggleSaturation: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const loadFromLocalStorage = () => {
        const storedData = localStorage.getItem('accessibility-settings')
        return storedData ? JSON.parse(storedData) : {}
    }

    const {
        fontSize: storedFontSize,
        contrast: storedContrast,
        lineHeight: storedLineHeight,
        letterSpacing: storedLetterSpacing,
        saturation: storedSaturation,
    } = loadFromLocalStorage()

    const [fontSize, setFontSize] = useState(storedFontSize ?? false)
    const [contrast, setContrast] = useState<'normal' | 'high'>(storedContrast ?? 'normal')
    const [lineHeight, setLineHeight] = useState(storedLineHeight ?? 1.5)
    const [letterSpacing, setLetterSpacing] = useState(storedLetterSpacing ?? 0)
    const [saturation, setSaturation] = useState(storedSaturation ?? 100)

    const toggleFontSize = () => setFontSize((prev: boolean) => !prev)
    const toggleContrast = () => setContrast(prev => prev === 'normal' ? 'high' : 'normal')
    const toggleLineHeight = () => setLineHeight((prev: number) => prev === 1.5 ? 3 : 1.5)
    const toggleLetterSpacing = () => setLetterSpacing((prev: number) => prev === 0 ? 1.9 : 0)
    const toggleSaturation = () => setSaturation((prev: number) => prev === 100 ? 0 : 100)


    useEffect(() => {
        const accessibilitySettings = {
            fontSize,
            contrast,
            lineHeight,
            letterSpacing,
            saturation,
        }
        localStorage.setItem('accessibility-settings', JSON.stringify(accessibilitySettings))

        document.documentElement.style.setProperty('--a11y-font-size', fontSize ? '140%' : '100%')
        document.documentElement.style.setProperty('--a11y-line-height', `${lineHeight}`)
        document.documentElement.style.setProperty('--a11y-letter-spacing', `${letterSpacing}px`)
        document.documentElement.style.setProperty('--a11y-saturation', `${saturation}%`)
        document.documentElement.style.setProperty('--a11y-contrast', contrast === 'high' ? '150%' : '100%')

    }, [fontSize, contrast, lineHeight, letterSpacing, saturation])

    return (
        <AccessibilityContext.Provider
            value={{
                fontSize,
                contrast,
                lineHeight,
                letterSpacing,
                saturation,
                toggleFontSize,
                toggleContrast,
                toggleLineHeight,
                toggleLetterSpacing,
                toggleSaturation
            }}
        >
            {children}
        </AccessibilityContext.Provider>
    )
}

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext)
    if (context === undefined) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider')
    }
    return context
}
