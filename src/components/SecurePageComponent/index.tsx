"use client"
import { usePathname } from "next/navigation";
function SecurePageComponent({ children }: { children: React.ReactNode }) {
    const url = usePathname()
    return (children);
}

export default SecurePageComponent; 