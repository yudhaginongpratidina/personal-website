import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Forum",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}