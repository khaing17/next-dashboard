import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        defaultSize={10}
        maxSize={15}
        minSize={5}
        className="min-h-screen"
      >
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <Navbar />
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
