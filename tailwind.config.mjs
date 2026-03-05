/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                background: '#FAFAF8',
                surface: '#FFFFFF',
                'text-primary': '#111111',
                'text-secondary': '#6B6B6B',
                accent: '#1A1A2E',
                'accent-hover': '#2E2E4E',
                border: '#E8E8E3',
                tag: '#F0F0EA',
                'footer-bg': '#F5F5F0',
            },
            fontFamily: {
                display: ['"Playfair Display"', 'Georgia', 'serif'],
                body: ['"DM Sans"', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            fontSize: {
                'hero': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
                'h2': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
                'h3': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
                'body': ['17px', { lineHeight: '1.75', fontWeight: '400' }],
                'meta': ['13px', { lineHeight: '1.5', fontWeight: '400' }],
            },
            maxWidth: {
                'content': '1100px',
                'reading': '720px',
            },
            spacing: {
                'section-desktop': '120px',
                'section-mobile': '80px',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.6s ease forwards',
            },
        },
    },
    plugins: [],
};
