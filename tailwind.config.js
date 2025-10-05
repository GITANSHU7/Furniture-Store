module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        /* Primary Colors */
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          dark: "var(--primary-dark)",
          accent: "var(--primary-accent)"
        },
        /* Secondary Colors */
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          muted: "var(--secondary-muted)"
        },
        /* Text Colors */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          light: "var(--text-light)"
        },
        /* Background Colors */
        background: {
          main: "var(--bg-main)",
          secondary: "var(--bg-secondary)",
          accent: "var(--bg-accent)",
          dark: "var(--bg-dark)",
          success: "var(--bg-success)"
        },
        /* Border Colors */
        border: {
          primary: "var(--border-primary)",
          accent: "var(--border-accent)",
          dark: "var(--border-dark)"
        },
        /* Component-specific Colors */
        header: {
          background: "var(--header-bg)",
          text: "var(--header-text)"
        },
        button: {
          background: "var(--button-bg)",
          text: "var(--button-text)",
          border: "var(--button-border)"
        },
        footer: {
          background: "var(--footer-bg)"
        },
        line: {
          background: "var(--line-bg)"
        }
      },
      /* Typography */
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)'
      },
      /* Spacing */
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
        '8xl': 'var(--spacing-8xl)'
      },
      /* Border Radius */
      borderRadius: {
        'none': 'var(--radius-none)',
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        'full': 'var(--radius-full)'
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    }
  },
  plugins: []
};