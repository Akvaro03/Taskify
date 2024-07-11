"use client"
import { usePathname } from "next/navigation";
function SecurePageComponent({ children }: { children: React.ReactNode }) {
    const url = usePathname()
    console.log(url)
    return (children);
}

export default SecurePageComponent; 