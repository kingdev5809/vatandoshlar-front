import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components'
import { ReactNode } from 'react'

const theme: DefaultTheme = {
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider