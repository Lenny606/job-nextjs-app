import React from 'react'

export default function ClerkLayout({children}: { children: React.ReactNode }) {
    return (
        <div className={"flex h-screen w-screen items-center"}>
            <div>{children}</div>
        </div>
    )
}
