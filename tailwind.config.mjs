/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                bg: '#FAFAFA',
                surface: '#FFFFFF',
                'text-primary': '#1A1A2E',
                'text-secondary': '#6B7280',
                accent: '#7C3AED',
                'accent-hover': '#6D28D9',
                border: '#E5E7EB',
                'border-light': '#F3F4F6',
                'tag-bg': '#F3F0FF',
                'tag-text': '#7C3AED',
                'tag-border': '#DDD6FE',
                'stats-bg': '#F5F3FF',
                'footer-bg': '#1A1A2E',
                'footer-text': '#9CA3AF',
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                hero: ['56px', { lineHeight: '1.1', fontWeight: '800' }],
                h2: ['40px', { lineHeight: '1.15', fontWeight: '700' }],
                h3: ['22px', { lineHeight: '1.35', fontWeight: '600' }],
                body: ['16px', { lineHeight: '1.75', fontWeight: '400' }],
                nav: ['15px', { lineHeight: '1.5', fontWeight: '500' }],
                meta: ['12px', { lineHeight: '1.5', fontWeight: '600', letterSpacing: '0.06em' }],
            },
            maxWidth: {
                content: '1140px',
            },
            borderRadius: {
                card: '16px',
                btn: '10px',
                photo: '24px',
                pill: '999px',
                stats: '12px',
            },
            boxShadow: {
                card: '0 4px 24px rgba(124, 58, 237, 0.08)',
                'card-hover': '0 8px 40px rgba(124, 58, 237, 0.15)',
                photo: '0 20px 60px rgba(0, 0, 0, 0.12)',
            },
            spacing: {
                section: '100px',
                'section-sm': '64px',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.5s ease both',
            },
        },
    },
    plugins: [],
};
