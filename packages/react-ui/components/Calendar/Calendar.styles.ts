import * as ColorFunctions from '../../lib/styles/ColorFunctions';
import { css, memoizeStyle } from '../../lib/theming/Emotion';
import { Theme } from '../../lib/theming/Theme';

export const styles = memoizeStyle({
  root(t: Theme) {
    const width = parseInt(t.calendarCellSize) * 7;
    return css`
      display: inline-block;
      background: ${t.calendarBg};
      box-sizing: content-box;
      color: ${t.textColorDefault};
      display: block;
      padding: 0 ${t.calendarPaddingX};
      width: ${width}px;
      overflow: hidden;
      touch-action: none;
    `;
  },

  wrapper() {
    return css`
      font-size: 14px;
      position: relative;
    `;
  },

  separator(t: Theme) {
    const marginX = parseInt(t.calendarMonthTitleMarginX);

    return css`
      position: relative;
      border-bottom: 1px solid ${ColorFunctions.fade(t.calendarMonthTitleBorderBottomColor, 1)};
      margin: 0 ${marginX}px;
    `;
  },
});
