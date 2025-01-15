'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { type LucideIcon } from 'lucide-react'

interface AccessibilityButtonProps {
    icon: LucideIcon
    label: string
    onClick: () => void
    isActive?: boolean
}

export const AccessibilityButton: React.FC<AccessibilityButtonProps> = ({
    icon: Icon,
    label,
    onClick,
    isActive = false
}) => {
    return (
        <Button
            className="h-auto"
            variant={isActive ? "default" : "outline"}
            onClick={onClick}
        >
            <div className="flex flex-wrap items-center gap-2 text-left justify-start w-full">
                <div className="block w-full">
                    <Icon />
                </div>
                <div className="block w-full">
                    {label}
                </div>
                <div>
                    <span className={`text-xs ${isActive ? 'text-primary-foreground' : 'text-acc-blue'}`}>
                        {isActive ? 'Ativo' : 'Padrão'}
                    </span>
                </div>
            </div>
        </Button>
    )
}

