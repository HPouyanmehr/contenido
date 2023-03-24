// Types
import type {
  PaletteOptions,
  ThemeOptions,
  TypeBackground,
} from '@mui/material';

export type ThemeMode = 'light' | 'dark';

export interface CustomTypeBackground extends TypeBackground {
  card: string;
}

export interface CustomPaletteOptions
  extends Omit<PaletteOptions, 'background'> {
  background?: Partial<CustomTypeBackground>;
}

export interface CustomThemeOptions extends Omit<ThemeOptions, 'palette'> {
  palette?: CustomPaletteOptions;
}
