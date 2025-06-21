import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger
} from "@/components/ui/sidebar";
import {AppSidebarClient} from "@/app/_AppSidebarClient";


export default function Home() {
    return (
        <SidebarProvider className={'overflow-y-hidden'}>
            <AppSidebarClient>
                <Sidebar className={'overflow-hidden'}
                         collapsible={'icon'}>
                    <SidebarHeader className={"flex-row"}>
                        <SidebarTrigger className={''}></SidebarTrigger>
                        <span className={'text-xl text-wrap'}>{process.env.NEXT_PUBLIC_APP_NAME}</span>
                    </SidebarHeader>
                    <SidebarContent>

                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>Button footer</SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
                <main className={'flex-1'}>MAIN CONTENT</main>
            </AppSidebarClient>
        </SidebarProvider>
    );
}
