/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          black: '#0A1120',
        },
        transparent: 'transparent',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        neutral: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50: '#F9FAFB',
        },
        sematic: {
          success: '#18BEAC',
          error: '#FB4B69',
        },
        gray: {
          50: '#F9FAFB',
        },
        bgColor: {
          1: '#0D121F',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        4: '16px',
        7.5: '30px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      aspectRatio: {
        '16/9': '16/9',
        '4/3': '4/3',
        '21/9': '21/9',
        '1/1': '1/1',
      },
      fontSize: {
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '28px': '28px',
        '32px': '32px',
        '36px': '36px',
        '40px': '40px',
        '44px': '44px',
        '48px': '48px',
        '52px': '52px',
        '56px': '56px',
        '60px': '60px',
        '64px': '64px',
        '68px': '68px',
        '72px': '72px',
        '76px': '76px',
        '80px': '80px',
        '84px': '84px',
        '88px': '88px',
      },
      spacing: {
        3.25: '13px',
        4.5: '18px',
        6.5: '25px',
        7.5: '30px',
        8.5: '33px',
        15: '60px',
        23: '90px',
        29: '120px',
      },
      borderWidth: {
        10: '10px',
      },
      boxShadow: {
        sm: ' 0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.typo-s64-w400': {
          fontSize: '64px',
          fontWeight: '400',
        },
        '.typo-s56-w800': {
          fontSize: '56px',
          fontWeight: '800',
        },
        '.typo-s48-w400': {
          fontSize: '48px',
          fontWeight: '400',
        },
        '.typo-s40-w700': {
          fontSize: '40px',
          fontWeight: '700',
        },
        '.typo-s32-w700': {
          fontSize: '32px',
          fontWeight: '700',
        },
        '.typo-s32-w400': {
          fontSize: '32px',
          fontWeight: '400',
        },
        '.typo-s24-w700': {
          fontSize: '24px',
          fontWeight: '700',
        },
        '.typo-s24-w600': {
          fontSize: '24px',
          fontWeight: '600',
        },
        '.typo-s24-w500': {
          fontSize: '24px',
          fontWeight: '500',
        },
        '.typo-s24-w400': {
          fontSize: '24px',
          fontWeight: '400',
        },
        '.typo-s20-w700': {
          fontSize: '20px',
          fontWeight: '700',
        },
        '.typo-s20-w600': {
          fontSize: '20px',
          fontWeight: '600',
        },
        '.typo-s20-w500': {
          fontSize: '20px',
          fontWeight: '500',
        },
        '.typo-s20-w400': {
          fontSize: '20px',
          fontWeight: '400',
        },
        '.typo-s18-w700': {
          fontSize: '18px',
          fontWeight: '700',
        },
        '.typo-s18-w600': {
          fontSize: '18px',
          fontWeight: '600',
        },
        '.typo-s18-w500': {
          fontSize: '18px',
          fontWeight: '400',
        },
        '.typo-s18-w400': {
          fontSize: '18px',
          fontWeight: '400',
        },
        '.typo-s16-w700': {
          fontSize: '16px',
          fontWeight: '700',
        },
        '.typo-s16-w600': {
          fontSize: '16px',
          fontWeight: '600',
        },
        '.typo-s16-w500': {
          fontSize: '16px',
          fontWeight: '500',
        },
        '.typo-s16-w400': {
          fontSize: '16px',
          fontWeight: '400',
        },
        '.typo-s14-w700': {
          fontSize: '14px',
          fontWeight: '700',
        },
        '.typo-s14-w600': {
          fontSize: '14px',
          fontWeight: '600',
        },
        '.typo-s14-w500': {
          fontSize: '14px',
          fontWeight: '500',
        },
        '.typo-s14-w400': {
          fontSize: '14px',
          fontWeight: '400',
        },
        '.typo-s12-w700': {
          fontSize: '12px',
          fontWeight: '700',
        },
        '.typo-s12-w600': {
          fontSize: '12px',
          fontWeight: '600',
        },
        '.typo-s12-w500': {
          fontSize: '12px',
          fontWeight: '500',
        },
        '.typo-s12-w400': {
          fontSize: '12px',
          fontWeight: '400',
        },
      })
    }),
  ],
}
