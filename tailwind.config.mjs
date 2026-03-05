/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                bg: '#0A0A0A',
                surface: '#111111',
                'surface-elevated': '#1A1A1A',
                'text-primary': '#F5F5F0',
                'text-secondary': '#888888',
                accent: '#C8A96E',
                'accent-hover': '#D4B97E',
                border: '#222222',
                'border-hover': '#333333',
                'tag-bg': '#1E1E1E',
                'tag-text': '#AAAAAA',
            },
            fontFamily: {
                display: ['"Cormorant Garamond"', 'serif'],
                body: ['"DM Sans"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            fontSize: {
                hero: ['72px', { lineHeight: '1.05', fontWeight: '700' }],
                h2: ['48px', { lineHeight: '1.1', fontWeight: '600' }],
                h3: ['26px', { lineHeight: '1.3', fontWeight: '600' }],
                body: ['16px', { lineHeight: '1.8', fontWeight: '400' }],
                meta: ['12px', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.08em' }],
            },
            maxWidth: {
                content: '1140px',
            },
            spacing: {
                section: '120px',
                'section-sm': '80px',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) both',
            },
        },
    },
    plugins: [],
};
