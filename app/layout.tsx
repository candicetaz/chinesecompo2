import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "中文句子工具箱｜Chinese Sentence Toolkit",
  description: "Primary 5 Chinese sentence-building guides for structural words, prepositions, connectors and clear composition writing.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
