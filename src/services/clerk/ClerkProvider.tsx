'use client'

import {ClerkProvider as OriginalClerkProvider} from "@clerk/nextjs";
import {ReactNode, Suspense} from "react";
import {dark} from "@clerk/themes";
import {useDarkMode} from "@/hooks/use-dark-mode";

export function ClerkProvider({children}: { children: ReactNode }) {

    const isDarkMode = useDarkMode()

    return (
        <Suspense>
            <OriginalClerkProvider appearance={isDarkMode ? {baseTheme: [dark]} : undefined}>
                {children}
            </OriginalClerkProvider>
        </Suspense>

    )
}