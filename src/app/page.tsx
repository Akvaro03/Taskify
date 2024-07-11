import AsideProjectsComponent from "@/components/AsideProjectsComponent";
import HeaderComponent from "@/components/HeaderComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <HeaderComponent />
      <AsideProjectsComponent />
    </main>
  );
}
