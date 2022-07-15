import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { Group } from '../Group';
import { Input, InputProps, InputType } from '../Input';
import { CurrencyInput, CurrencyInputProps } from '../CurrencyInput';
import { createPropsGetter } from '../../lib/createPropsGetter';
import { Override } from '../../typings/utility-types';
import { FunctionIcon, UndoIcon } from '../../internal/icons/16px';
import { CommonWrapper, CommonProps, CommonWrapperRestProps } from '../../internal/CommonWrapper';
import { rootNode, TSetRootNode } from '../../lib/rootNode';

export interface FxInputProps
  extends CommonProps,
    Override<
      CurrencyInputProps,
      {
        /** Авто-режим */
        auto?: boolean;
        /** Тип инпута */
        type?: 'currency' | InputProps['type'];
        /** onRestore */
        onRestore?: () => void;
        /** onValueChange */
        onValueChange: CurrencyInputProps['onValueChange'] | InputProps['onValueChange'];
        /** Значение */
        value?: React.ReactText;
        /** ref Input'а */
        refInput?: (element: CurrencyInput | Input | null) => void;
        /** Убрать лишние нули после запятой */
        hideTrailingZeros?: boolean;
      }
    > {}

export const FxInputDataTids = {
  root: 'FxInput__root',
} as const;

type DefaultProps = Required<Pick<FxInputProps, 'width' | 'type' | 'value'>>;

/** Принимает все свойства `Input`'a */
@rootNode
export class FxInput extends React.Component<FxInputProps> {
  public static __KONTUR_REACT_UI__ = 'FxInput';

  public static propTypes = {
    auto: PropTypes.bool,
    type: PropTypes.string,
  };

  public static defaultProps: DefaultProps = {
    width: 250,
    type: 'text',
    value: '',
  };

  private input: Input | CurrencyInput | null = null;

  private getProps = createPropsGetter(FxInput.defaultProps);
  private setRootNode!: TSetRootNode;

  public render() {
    return (
      <CommonWrapper rootNodeRef={this.setRootNode} {...this.props}>
        {this.renderMain}
      </CommonWrapper>
    );
  }

  public renderMain = (props: CommonWrapperRestProps<FxInputProps>) => {
    const { type, onRestore, auto, refInput, ...rest } = props;
    const typeWithDefaultValue = this.getProps().type;
    const value = this.getProps().value;
    const inputProps: Partial<CurrencyInputProps> = {
      align: 'right',
    };

    let button = null;

    if (auto) {
      inputProps.leftIcon = <FunctionIcon />;
    } else {
      button = (
        <Button
          size={this.props.size}
          narrow
          onClick={this.props.onRestore}
          borderless={this.props.borderless}
          disabled={this.props.disabled}
        >
          <UndoIcon />
        </Button>
      );
    }

    return (
      <Group data-tid={FxInputDataTids.root} width={this.getProps().width}>
        {button}
        {typeWithDefaultValue === 'currency' ? (
          <CurrencyInput
            {...inputProps}
            {...rest}
            type={typeWithDefaultValue as InputType}
            width={'100%'}
            ref={this.refInput}
            value={value as CurrencyInputProps['value']}
            onValueChange={this.props.onValueChange as CurrencyInputProps['onValueChange']}
          />
        ) : (
          <Input
            {...inputProps}
            {...rest}
            width={'100%'}
            ref={this.refInput}
            type={typeWithDefaultValue as InputType}
            value={value as InputProps['value']}
            onValueChange={this.props.onValueChange as InputProps['onValueChange']}
          />
        )}
      </Group>
    );
  };

  /**
   * @public
   */
  public focus = () => {
    if (this.input) {
      this.input.focus();
    }
  };

  /**
   * @public
   */
  public blur = () => {
    if (this.input) {
      this.input.blur();
    }
  };

  private refInput = (element: Input | CurrencyInput | null) => {
    this.input = element;

    if (this.props.refInput) {
      this.props.refInput(this.input);
    }
  };
}
