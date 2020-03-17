import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/addons';
import React from 'react';
import { CSFStory } from 'creevey';

import { InternalDateOrder, InternalDateSeparator } from '../../../lib/date/types';
import { Button } from '../../Button';
import { Gapped } from '../../Gapped';
import { MockDate } from '../../../lib/MockDate';
import { Tooltip } from '../../Tooltip';
import { DatePicker } from '../DatePicker';
import { LocaleContext, LangCodes } from '../../../lib/locale';
import { delay } from '../../../lib/utils';

class DatePickerWithError extends React.Component<any, any> {
  public state = {
    value: '15.08.2014',
    error: false,
    tooltip: false,
  };

  public render() {
    return (
      <Gapped>
        <Tooltip
          trigger={this.state.tooltip ? 'opened' : 'closed'}
          render={() => 'Такой даты не существует'}
          onCloseClick={this.removeTooltip}
        >
          <LocaleContext.Provider
            value={{
              locale: { DatePicker: { order: InternalDateOrder.MDY } },
            }}
          >
            <DatePicker
              {...this.props}
              disabled={this.props.disabled}
              size={this.props.size}
              error={this.state.error}
              value={this.state.value}
              minDate="15.08.2003"
              maxDate="21.10.2006"
              onValueChange={this.handleChange}
              onFocus={this.invalidate}
              onBlur={this.validate}
              enableTodayLink
            />
          </LocaleContext.Provider>
        </Tooltip>
        <Button onClick={() => this.setState({ value: null, error: null, tooltip: false })}>Clear</Button>
        <Button onClick={() => this.setState({ value: '99.99.9999' })}>Set &quot;99.99.9999&quot;</Button>
        <Button onClick={() => this.setState({ value: '99.hello' })}>Set &quot;99.hello&quot;</Button>
        <Button onClick={() => this.setState({ value: '10.3' })}>Set &quot;10.3&quot;</Button>
      </Gapped>
    );
  }

  private handleChange = (value: any) => {
    action('change')(value);
    this.setState({ value });
  };

  private invalidate = () => {
    this.setState({ error: false, tooltip: false });
  };

  private validate = () => {
    const currentValue = this.state.value;
    this.setState(() => {
      const error =
        !!currentValue && !DatePicker.validate(currentValue, { minDate: '08.15.2003', maxDate: '10.21.2006' });
      return {
        error,
        tooltip: error,
      };
    });
  };

  private removeTooltip = () => {
    this.setState({
      tooltip: false,
    });
  };
}

class DatePickerWithMinMax extends React.Component<any, any> {
  public state = {
    min: '02.07.2017',
    max: '30.01.2020',
    value: '02.07.2017',
    order: InternalDateOrder.DMY,
    separator: InternalDateSeparator.Dot,
  };

  public render(): React.ReactNode {
    return (
      <Gapped vertical gap={10}>
        <label>
          Начало периода:{' '}
          <input
            type="text"
            value={this.state.min}
            placeholder="min"
            onChange={e => this.setState({ min: e.target.value })}
          />
        </label>
        <label>
          Окончание периода:{' '}
          <input
            type="text"
            value={this.state.max}
            placeholder="max"
            onChange={e => this.setState({ max: e.target.value })}
          />
        </label>
        <LocaleContext.Provider
          value={{
            locale: { DatePicker: { order: this.state.order, separator: this.state.separator } },
          }}
        >
          <DatePicker
            width={200}
            value={this.state.value}
            minDate={this.state.min}
            maxDate={this.state.max}
            onValueChange={action('change')}
          />
        </LocaleContext.Provider>
      </Gapped>
    );
  }
}

const dateForMock = new Date('2017-01-02');

export default {
  title: 'DatePicker',
  decorators: [
    (story: StoryFn<JSX.Element>) =>
      process.env.NODE_ENV === 'test' ? (
        <div>
          <h2>Mocked date {dateForMock.toDateString()}</h2>
          <MockDate date={dateForMock} />
          {story()}
        </div>
      ) : (
        <div>{story()}</div>
      ),
  ],
};

export const WithMouseeventHandlers: CSFStory<JSX.Element> = () => (
  <div style={{ padding: '200px 150px 350px 0px' }}>
    <DatePicker
      width={200}
      value="02.07.2017"
      onMouseEnter={() => console.count('enter')}
      onMouseLeave={() => console.count('leave')}
      onValueChange={action('change')}
    />
  </div>
);
WithMouseeventHandlers.story = {
  name: 'with mouseevent handlers',
  parameters: {
    creevey: {
      tests: {
        async opened() {
          await this.browser
            .actions({
              bridge: true,
            })
            .click(this.browser.findElement({ css: '[data-comp-name~="DatePicker"]' }))
            .perform();
          await this.expect(await this.takeScreenshot()).to.matchImage('opened');
        },
        async ['DateSelect month']() {
          await this.browser
            .actions({
              bridge: true,
            })
            .click(this.browser.findElement({ css: '[data-comp-name~="DatePicker"]' }))
            .perform();
          await delay(1000);
          await this.browser
            .actions({ bridge: true })
            .click(
              this.browser.findElement({
                css:
                  '[data-tid="MonthView__month"]:first-child [data-tid="MonthView__headerMonth"] [data-tid="DateSelect__caption"]',
              }),
            )
            .perform();
          await this.expect(await this.takeScreenshot()).to.matchImage('DateSelect month');
        },
        async ['DateSelect year']() {
          await this.browser
            .actions({
              bridge: true,
            })
            .click(this.browser.findElement({ css: '[data-comp-name~="DatePicker"]' }))
            .perform();
          await delay(1000);
          await this.browser
            .actions({ bridge: true })
            .click(
              this.browser.findElement({
                css:
                  '[data-comp-name~="MonthView"]:first-child [data-tid="MonthView__headerYear"] [data-tid="DateSelect__caption"]',
              }),
            )
            .perform();
          await this.expect(await this.takeScreenshot()).to.matchImage('DateSelect year');
        },
      },
    },
  },
};

export const _DatePickerWithError = () => <DatePickerWithError />;
_DatePickerWithError.story = { name: 'DatePickerWithError', parameters: { creevey: { skip: [true] } } };

export const DatePickerDisabled = () => <DatePickerWithError disabled />;
DatePickerDisabled.story = { name: 'DatePicker disabled', parameters: { creevey: { skip: [true] } } };

export const DatePickerMedium = () => <DatePickerWithError size="medium" />;
DatePickerMedium.story = { name: 'DatePicker medium', parameters: { creevey: { skip: [true] } } };

export const DatePickerLarge = () => <DatePickerWithError size="large" />;
DatePickerLarge.story = { name: 'DatePicker large', parameters: { creevey: { skip: [true] } } };

export const DatePickerWithMinMaxDate: CSFStory<JSX.Element> = () => (
  <div style={{ padding: '200px 150px 350px 0px' }}>
    <DatePickerWithMinMax />
  </div>
);
DatePickerWithMinMaxDate.story = {
  name: 'DatePicker with min max date',
  parameters: {
    creevey: {
      tests: {
        async ['DateSelect months']() {
          await this.browser
            .actions({
              bridge: true,
            })
            .click(this.browser.findElement({ css: '[data-comp-name~="DatePicker"]' }))
            .perform();
          await delay(1000);
          await this.browser
            .actions({ bridge: true })
            .click(
              this.browser.findElement({
                css:
                  '[data-tid="MonthView__month"]:first-child [data-tid="MonthView__headerMonth"] [data-tid="DateSelect__caption"]',
              }),
            )
            .perform();
          await this.expect(await this.takeScreenshot()).to.matchImage('DateSelect months');
        },
        async ['DateSelect years']() {
          await this.browser
            .actions({
              bridge: true,
            })
            .click(this.browser.findElement({ css: '[data-comp-name~="DatePicker"]' }))
            .perform();
          await delay(1000);
          await this.browser
            .actions({ bridge: true })
            .click(
              this.browser.findElement({
                css:
                  '[data-comp-name~="MonthView"]:first-child [data-tid="MonthView__headerYear"] [data-tid="DateSelect__caption"]',
              }),
            )
            .perform();
          await this.expect(await this.takeScreenshot()).to.matchImage('DateSelect years');
        },
      },
    },
  },
};

export const DatePickerLocaleProvider = () => {
  return (
    <div style={{ paddingTop: 200 }}>
      <LocaleContext.Provider value={{ langCode: LangCodes.en_GB }}>
        <DatePicker
          value="02.07.2017"
          minDate="02.07.2017"
          maxDate="30.01.2020"
          onValueChange={action('change')}
          enableTodayLink={true}
        />
      </LocaleContext.Provider>
    </div>
  );
};
DatePickerLocaleProvider.story = { name: 'DatePicker LocaleProvider', parameters: { creevey: { skip: [true] } } };
