import React from 'react'

export default function ClerkLayout({children}: { children: React.ReactNode }) {
    return (
        <div className={"flex flex-row h-screen w-screen justify-center items-center"}>
            <div>{children}</div>
        </div>
    )
}
