import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-heading',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-body',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Voxelbound - Read a Chapter, Build a World',
    description: 'Voxelbound is a cozy productivity sandbox that gamifies reading. As you read real books, your virtual voxel world comes alive with plants, furniture, and cozy vibes.',
    keywords: ['voxelbound', 'cozy game', 'productivity game', 'reading game', 'voxel', 'indie game'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
            <body>{children}</body>
        </html>
    );
}
