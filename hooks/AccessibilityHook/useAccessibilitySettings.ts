'use client'

import { useState, useEffect } from 'react'

export const useAccessibilitySettings = () => {
    const [fontSize, setFontSize] = useState(false)
    const [contrast, setContrast] = useState('normal')
    const [lineHeight, setLineHeight] = useState(1.5)
    const [letterSpacing, setLetterSpacing] = useState(0)
    const [saturation, setSaturation] = useState(100)
    const [colorsPage, setColorsPage] = useState('normal')
    const [highlightedLetters, setHighlightedLetters] = useState(false)

    const toggleIncreaseFontSize = () => setFontSize(prev => !prev)
    const toggleContrast = () => setContrast(prev => prev === 'normal' ? 'high' : 'normal')
    const toggleLineHeight = () => setLineHeight(prev => prev === 1.5 ? 2 : 1.5)
    const toggleLetterSpacing = () => setLetterSpacing(prev => prev === 0 ? 1 : 0)
    const toggleSaturation = () => setSaturation(prev => prev === 100 ? 0 : 100)
    const toggleColorsPage = () => setColorsPage(prev => prev === 'normal' ? 'dark' : 'normal')
    const toggleHighlightedLetters = () => setHighlightedLetters(prev => !prev)

    const applySettings = () => {
        document.documentElement.style.setProperty('--font-size', fontSize ? '120%' : '100%')
        document.documentElement.style.setProperty('--line-height', `${lineHeight}`)
        document.documentElement.style.setProperty('--letter-spacing', `${letterSpacing}px`)
        document.documentElement.style.setProperty('--saturation', `${saturation}%`)
        document.documentElement.style.setProperty('--contrast', contrast === 'high' ? '150%' : '100%')
        document.documentElement.classList.toggle('dark-mode', colorsPage === 'dark')
        document.documentElement.classList.toggle('highlighted-letters', highlightedLetters)
    }

    useEffect(() => {
        applySettings()
    }, [fontSize, contrast, lineHeight, letterSpacing, saturation, colorsPage, highlightedLetters])

    return {
        fontSize,
        contrast,
        lineHeight,
        letterSpacing,
        saturation,
        colorsPage,
        highlightedLetters,
        toggleHighlightedLetters,
        toggleIncreaseFontSize,
        toggleContrast,
        toggleLineHeight,
        toggleLetterSpacing,
        toggleSaturation,
        toggleColorsPage
    }
}

