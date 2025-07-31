import { Alex_Brush, Geist, Geist_Mono } from "next/font/google";

const AlexBrush = Alex_Brush({
  variable: '--font-alex-brush',
  subsets: ['latin'],
  weight: '400',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({children}) {
    return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${AlexBrush.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
