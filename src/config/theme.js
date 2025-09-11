// Theme Configuration
// Change these values to customize your blog's colors

export const theme = {
  colors: {
    // Primary brand color (used for links, buttons, accents)
    primary: {
      light: '37 99 235',      // blue-600
      lightHover: '59 130 246', // blue-500
      dark: '96 165 250',       // blue-400
      darkHover: '147 197 253', // blue-300
    },
    
    // Background colors
    background: {
      light: '255 255 255',     // white
      dark: '17 24 39',         // gray-900
      secondaryLight: '249 250 251', // gray-50
      secondaryDark: '31 41 55',     // gray-800
    },
    
    // Text colors
    text: {
      light: '17 24 39',        // gray-900
      dark: '243 244 246',      // gray-100
      secondaryLight: '75 85 99',    // gray-600
      secondaryDark: '156 163 175',  // gray-400
    },
    
    // Border colors
    border: {
      light: '229 231 235',     // gray-200
      dark: '75 85 99',         // gray-600
    }
  }
};

// Generate CSS custom properties
export function generateCSSVariables() {
  return `
    :root {
      --color-primary: ${theme.colors.primary.light};
      --color-primary-hover: ${theme.colors.primary.lightHover};
      --color-primary-dark: ${theme.colors.primary.dark};
      --color-primary-dark-hover: ${theme.colors.primary.darkHover};
      
      --color-bg: ${theme.colors.background.light};
      --color-bg-dark: ${theme.colors.background.dark};
      --color-bg-secondary: ${theme.colors.background.secondaryLight};
      --color-bg-secondary-dark: ${theme.colors.background.secondaryDark};
      
      --color-text: ${theme.colors.text.light};
      --color-text-dark: ${theme.colors.text.dark};
      --color-text-secondary: ${theme.colors.text.secondaryLight};
      --color-text-secondary-dark: ${theme.colors.text.secondaryDark};
      
      --color-border: ${theme.colors.border.light};
      --color-border-dark: ${theme.colors.border.dark};
    }
  `;
}
