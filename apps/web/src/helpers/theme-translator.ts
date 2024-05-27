export type Theme = 'light' | 'dark' | 'system'

export const themeTranslator: { [key in Theme]: string } = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
}
