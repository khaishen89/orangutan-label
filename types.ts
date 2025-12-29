
export interface LabelConfig {
  themeColor: string;
  accentColor: string;
  textColor: string;
  variant: 'Original' | 'Tea Tree' | 'Eucalyptus' | 'Lavender';
  title: string;
  subtitle: string;
  description: string;
  ingredients: string[];
}

export enum ViewMode {
  FLAT = 'FLAT',
  MOCKUP = 'MOCKUP'
}
