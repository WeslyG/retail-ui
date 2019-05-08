import defaultThemeVariables from './themes/DefaultTheme';
import { ITheme, IThemeIn } from './Theme';
import { isDevelopmentEnv } from '../../components/internal/currentEnvironment';
import isEqual from 'lodash.isequal';
import warning from 'warning';

class ThemesCache {
  public static has(key: IThemeIn) {
    if (isDevelopmentEnv) {
      const hasSameShape = this.keys.some(themeIn => isEqual(key, themeIn));
      warning(
        !hasSameShape,
        `ThemesCache already has object with shape: ${JSON.stringify(key)}.` +
          '\n' +
          `Consider using the same object reference for performance reasons`,
      );
    }
    return this.keys.includes(key);
  }

  public static get(key: IThemeIn) {
    const index = this.keys.indexOf(key);
    return this.values[index];
  }

  public static set(key: IThemeIn, value: ITheme) {
    this.keys.push(key);
    this.values.push(value);
  }

  private static keys: IThemeIn[] = [];
  private static values: ITheme[] = [];
}

export default class ThemeFactory {
  public static create(theme: IThemeIn) {
    return Object.freeze(Object.assign({}, defaultThemeVariables, theme)) as ITheme;
  }

  public static getOrCreate(theme: IThemeIn) {
    if (!ThemesCache.has(theme)) {
      const fullTheme = this.create(theme);
      ThemesCache.set(theme, fullTheme);
    }

    return ThemesCache.get(theme);
  }

  public static getDefaultTheme() {
    return this.defaultTheme;
  }

  public static overrideDefaultTheme(...themes: IThemeIn[]) {
    themes.forEach(themePartial => {
      Object.keys(themePartial).forEach(variableName => {
        const descriptor = Object.getOwnPropertyDescriptor(themePartial, variableName)!;
        Object.defineProperty(this.defaultTheme, variableName, descriptor);
      });
    });
  }

  private static defaultTheme = Object.assign({}, defaultThemeVariables) as ITheme;
}
