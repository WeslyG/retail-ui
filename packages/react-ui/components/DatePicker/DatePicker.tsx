import PropTypes from 'prop-types';
import React from 'react';

import { InternalDate } from '../../lib/date/InternalDate';
import { MAX_FULLDATE, MIN_FULLDATE } from '../../lib/date/constants';
import { InternalDateOrder, InternalDateSeparator, InternalDateValidateCheck } from '../../lib/date/types';
import { Nullable } from '../../typings/utility-types';
import { DateInput } from '../DateInput';
import { DropdownContainer, DropdownContainerProps } from '../../internal/DropdownContainer';
import { filterProps } from '../../lib/filterProps';
import { CommonWrapper, CommonProps, CommonWrapperRestProps } from '../../internal/CommonWrapper';
import { isMobile } from '../../lib/client';
import { NativeDateInput } from '../../internal/NativeDateInput';
import { getRootNode, rootNode, TSetRootNode } from '../../lib/rootNode';
import { isNonNullable } from '../../lib/utils';
import { createPropsGetter } from '../../lib/createPropsGetter';
import { CalendarProps } from '../Calendar';
import { ThemeContext } from '../../lib/theming/ThemeContext';
import { Theme } from '../../lib/theming/Theme';

import { Picker } from './Picker';
import { styles } from './DatePicker.styles';

const INPUT_PASS_PROPS = {
  autoFocus: true,
  disabled: true,
  warning: true,
  error: true,
  size: true,
  onKeyDown: true,
};

export const MIN_WIDTH = 120;

export interface DatePickerProps
  extends Pick<DropdownContainerProps, 'menuPos'>,
    Pick<CalendarProps, 'isHoliday' | 'minDate' | 'maxDate'>,
    CommonProps {
  autoFocus?: boolean;
  disabled?: boolean;
  enableTodayLink?: boolean;
  /**
   * Состояние валидации при ошибке.
   */
  error?: boolean;
  menuAlign?: 'left' | 'right';
  size?: 'small' | 'medium' | 'large';
  value?: string | null;
  /**
   * Состояние валидации при предупреждении.
   */
  warning?: boolean;
  width?: number | string;
  onBlur?: () => void;
  /**
   * Вызывается при изменении `value`
   *
   * @param value - строка в формате `dd.mm.yyyy`.
   */
  onValueChange: (value: string) => void;
  onFocus?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<any>) => void;
  onMouseEnter?: (e: React.MouseEvent<any>) => void;
  onMouseLeave?: (e: React.MouseEvent<any>) => void;
  onMouseOver?: (e: React.MouseEvent<any>) => void;
  /**
   * Использовать на мобильных устройствах нативный календарь для выбора дат.
   *
   * - На iOS нативный календарь не умеет работать с minDate и maxDate
   */
  useMobileNativeDatePicker?: boolean;
}

export interface DatePickerState {
  opened: boolean;
  canUseMobileNativeDatePicker: boolean;
}

export const DatePickerDataTids = {
  root: 'DatePicker__root',
  input: 'DatePicker__input',
  label: 'DatePicker__label',
  pickerRoot: 'Picker__root',
  pickerTodayWrapper: 'Picker__todayWrapper',
} as const;

type DefaultProps = Required<Pick<DatePickerProps, 'minDate' | 'maxDate'>>;

@rootNode
export class DatePicker extends React.PureComponent<DatePickerProps, DatePickerState> {
  public static __KONTUR_REACT_UI__ = 'DatePicker';

  public static propTypes = {
    autoFocus: PropTypes.bool,

    disabled: PropTypes.bool,

    /**
     * Включает кнопку сегодня в календаре
     */
    enableTodayLink: PropTypes.bool,

    error: PropTypes.bool,

    /**
     * Максимальная дата в календаре.
     */
    maxDate: PropTypes.string.isRequired,

    menuAlign: PropTypes.oneOf(['left', 'right']),

    /**
     * Минимальная дата в календаре.
     */
    minDate: PropTypes.string.isRequired,

    /**
     * Строка формата `dd.mm.yyyy`
     */
    value: PropTypes.string,

    warning: PropTypes.bool,

    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

    onBlur: PropTypes.func,

    onValueChange: PropTypes.func.isRequired,

    onFocus: PropTypes.func,

    onKeyDown: PropTypes.func,

    onMouseEnter: PropTypes.func,

    onMouseLeave: PropTypes.func,

    onMouseOver: PropTypes.func,

    isHoliday: PropTypes.func,
  };

  public static defaultProps: DefaultProps = {
    minDate: MIN_FULLDATE,
    maxDate: MAX_FULLDATE,
  };

  private getProps = createPropsGetter(DatePicker.defaultProps);
  private theme!: Theme;

  public static validate = (value: Nullable<string>, range: { minDate?: string; maxDate?: string } = {}) => {
    if (!value) {
      return false;
    }

    const { minDate = MIN_FULLDATE, maxDate = MAX_FULLDATE } = range;
    const internalDate = new InternalDate({
      order: InternalDateOrder.DMY,
      separator: InternalDateSeparator.Dot,
    })
      .setRangeStart(new InternalDate({ value: minDate }))
      .setRangeEnd(new InternalDate({ value: maxDate }))
      .parseValue(value);

    return internalDate.validate({
      checks: [
        InternalDateValidateCheck.NotNull,
        InternalDateValidateCheck.Number,
        InternalDateValidateCheck.Native,
        InternalDateValidateCheck.Limits,
        InternalDateValidateCheck.Range,
      ],
    });
  };

  public state: DatePickerState = { opened: false, canUseMobileNativeDatePicker: false };

  private input: DateInput | null = null;
  private focused = false;
  private setRootNode!: TSetRootNode;

  public componentDidMount() {
    if (this.props.useMobileNativeDatePicker && isMobile) {
      this.setState({
        canUseMobileNativeDatePicker: true,
      });
    }
    if (this.props.autoFocus) {
      this.focus();
    }
  }

  public componentDidUpdate() {
    const { disabled } = this.props;
    const { opened } = this.state;
    if (disabled && opened) {
      this.close();
    }
  }

  /**
   * @public
   */
  public blur() {
    if (this.input) {
      this.input.blur();
    }
    this.handleBlur();
  }

  /**
   * @public
   */
  public focus() {
    if (this.props.disabled) {
      return;
    }
    if (this.input) {
      this.input.focus();
    }
    this.handleFocus();
  }

  /**
   * Закрывает выпадашку выбора дня
   * @public
   */
  public close() {
    this.setState({ opened: false });
  }

  public render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          this.theme = theme;
          return (
            <CommonWrapper rootNodeRef={this.setRootNode} {...this.props}>
              {this.renderMain}
            </CommonWrapper>
          );
        }}
      </ThemeContext.Consumer>
    );
  }

  public renderMain = (props: CommonWrapperRestProps<DatePickerProps>) => {
    let picker = null;

    const { minDate, maxDate } = this.getProps();

    if (this.state.opened) {
      picker = (
        <DropdownContainer
          menuPos={this.props.menuPos}
          data-tid={DatePickerDataTids.root}
          getParent={this.getParent}
          offsetY={parseInt(this.theme.datePickerMenuOffsetY)}
          align={this.props.menuAlign}
        >
          <Picker
            date={this.props.value}
            minDate={minDate}
            maxDate={maxDate}
            onDateChange={this.handleValueChange}
            onSelect={this.handleSelect}
            enableTodayLink={this.props.enableTodayLink}
            isHoliday={this.props.isHoliday}
          />
        </DropdownContainer>
      );
    }

    return (
      <label
        className={styles.root()}
        style={this.getRootStyle()}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onMouseOver={this.props.onMouseOver}
        data-tid={DatePickerDataTids.label}
      >
        <DateInput
          {...filterProps(props, INPUT_PASS_PROPS)}
          ref={this.getInputRef}
          value={this.props.value || ''}
          width="100%"
          withIcon
          minDate={minDate}
          maxDate={maxDate}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onValueChange={this.props.onValueChange}
          data-tid={DatePickerDataTids.input}
        />
        {this.state.canUseMobileNativeDatePicker && (
          <NativeDateInput
            onValueChange={this.props.onValueChange}
            value={this.props.value || ''}
            minDate={minDate}
            maxDate={maxDate}
            disabled={this.props.disabled}
          />
        )}
        {!this.state.canUseMobileNativeDatePicker && picker}
      </label>
    );
  };

  public getParent = () => {
    return getRootNode(this);
  };

  private getRootStyle = () => {
    const { width } = this.props;
    return isNonNullable(width) ? { width } : { minWidth: MIN_WIDTH };
  };

  private getInputRef = (ref: DateInput | null) => {
    this.input = ref;
  };

  private handleFocus = () => {
    if (this.focused) {
      return;
    }

    this.focused = true;

    this.setState({ opened: true });

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  private handleBlur = () => {
    if (!this.focused) {
      return;
    }

    this.focused = false;
    this.close();

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  private handleValueChange = (value: string) => {
    this.handleSelect(value);
    this.blur();
  };

  private handleSelect = (value: string | null) => {
    if (!value) {
      return null;
    }

    if (this.props.onValueChange) {
      this.props.onValueChange(value);
    }
  };
}
