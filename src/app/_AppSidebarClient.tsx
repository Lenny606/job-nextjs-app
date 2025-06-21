"use client"
import {ReactNode} from "react";
import {useIsMobile} from "@/hooks/use-mobile";
import {SidebarTrigger} from "@/components/ui/sidebar";

//wraps sidebar
export function AppSidebarClient({children}: { children: ReactNode }) {
    const isMobile = useIsMobile() //used cuz ShadCN uses too

    if (isMobile) {
        return (
            <div className={'flex flex-col w-full'}>
                <div className={'p-2 border-b flex items-center gap-1'}>
                    <SidebarTrigger></SidebarTrigger>
                    <span className={'text-xl'}>{process.env.NEXT_PUBLIC_APP_NAME}</span>
                </div>
                <div className={'flex-1 flex'}>{children}</div>
            </div>)
    }

    return children
}