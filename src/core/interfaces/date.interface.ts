import { Moment } from "moment-jalaali";
import React from "react";
import { ColorSchema, Date, Language, Mode } from "../types";

type MonthValue = {
  name: string;
  value: number;
};

export type PanelDate = {
  days: Date[];
  dayLabels: string[];
  selected?: Date;
};

export interface DatePickerProps {
  /** @param `value` */
  value?: Moment | undefined | null;

  /** @param `defaultValue` */
  defaultValue?: Moment | undefined | null;

  /**
   * The `onChange` method which will be executed when date changes.
   *
   * @param `date`
   * @param `dateString`
   */
  onChange?(date: Moment | undefined | null, dateString: string): void;

  /**
   * The `onDayChange` method which will be executed when day changes.
   *
   * @param `day`
   */
  onDayChange?(day: number): void;

  /**
   * The `onMonthChange` method which will be executed when month changes.
   *
   * @param `month`
   */
  onMonthChange?(month: MonthValue): void;

  /**
   * The `onYearChange` method which will be executed when year changes.
   *
   * @param `year`
   */
  onYearChange?(year: number): void;

  /**
   * To set the date format, refer to `momentjs`, selected value is formatting to a string
   *
   * @default `jYYYY-jMM-jDD`
   * @see https://momentjs.com/docs
   */
  format?: string | ((value: Moment) => string);

  /**
   * The `locale` that can be configures the language of datepicker.
   *
   * @default `fa`
   */
  locale?: Language;

  /**
   * The `disableDates` method that can specify the dates that cannot be selected
   *
   * @param `current`
   * @returns `boolean`
   */
  disabledDates?(current: Moment): boolean;

  /**
   * The `onModeChange` method which will be called when panel mode changes.
   *
   * @param `mode`
   */
  onModeChange?(mode: Mode): void;

  /**
   * The `panelRender` callback used to render custom node for panel component.
   *
   * @param `data` `PanelDate`
   * @param `panelNode` `React.ReactNode`
   * @returns `React.ReactNode`
   */
  panelRender?(data: PanelDate, panelNode: React.ReactNode): React.ReactNode;

  /**
   * The `footerRender` callback used to render custom node for footer component.
   *
   * @param `current` `Date`
   * @param `footerNode` `React.ReactNode`
   * @returns `React.ReactNode`
   */
  footerRender?(
    current: Date | null,
    footerNode: React.ReactNode,
  ): React.ReactNode;

  /**
   * The `headerRender` callback used to render custom node for header component.
   *
   * @param `current` `Date`
   * @param `headerNode` `React.ReactNode`
   * @returns `React.ReactNode`
   */
  headerRender?(
    current: Date | null,
    headerNode: React.ReactNode,
  ): React.ReactNode;

  /**
   * The `dayLabelRender` callback used to render custom node for day labels component.
   *
   * @param `labels` `string[]`
   * @param `labelNode` `React.ReactNode`
   * @returns `React.ReactNode`
   */
  dayLabelRender?(
    labels: string[],
    labelNode: React.ReactNode,
  ): React.ReactNode;

  /**
   * The `highlightDays` can be used to determines which dates should be
   * highlighted. it accepts array of `moments` or a callback function.
   */
  highlightDays?: Moment[] | ((date: Moment) => boolean);

  /**
   * If `highlightWeekend` set to `true`, its turn weekend days to highlighted
   *
   * @default true
   */
  highlightWeekend?: boolean;

  /** The `customColors` can be used to overrides the default colors */
  customColors?: ColorSchema;

  /** The custom next icon */
  nextIcon?: React.ReactNode;

  /** The custom previous icon */
  prevIcon?: React.ReactNode;

  /** The custom super next icon */
  superNextIcon?: React.ReactNode;

  /** The custom super previous icon */
  superPrevIcon?: React.ReactNode;

  /** If `true`, renders loading component in calendar instead of calendar panel */
  loading?: boolean;

  /** Set custom loading indicator */
  loadingIndicator?: React.ReactNode;

  style?: React.CSSProperties;

  className?: string;
}

interface PanelProps
  extends Pick<
    DatePickerProps,
    | "panelRender"
    | "footerRender"
    | "headerRender"
    | "highlightDays"
    | "dayLabelRender"
    | "onModeChange"
    | "highlightWeekend"
    | "defaultValue"
    | "style"
    | "className"
    | "loading"
    | "loadingIndicator"
  > {}

export interface PickerProps extends PanelProps {}

interface DatePickerPickable
  extends Pick<
    DatePickerProps,
    | "value"
    | "onChange"
    | "onDayChange"
    | "onMonthChange"
    | "onYearChange"
    | "format"
    | "locale"
    | "disabledDates"
    | "highlightWeekend"
    | "defaultValue"
    | "customColors"
  > {}

type InputBuiltInProps = Omit<
  React.HtmlHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "defaultValue"
>;

type InputDatePickerPickable = InputBuiltInProps & DatePickerPickable;

export interface InputDatePickerProps extends InputDatePickerPickable {
  /** Popup calendar props */
  pickerProps?: PickerProps;
  /** To set `open` the popup calendar */
  open?: boolean;
  /** To set `disable` the popup calendar */
  disabled?: boolean;

  /** If `true`, the input will indicate an error */
  error?: boolean;

  /** Input custom prefix icon */
  prefixIcon?: React.ReactNode;
  /** Input custom suffix icon */
  suffixIcon?: React.ReactNode;
  /** The position where the popup calendar box pops up */
  placement?: "top" | "bottom" | "right" | "left";
  /**
   * The mounted node for popup calendar
   *
   * @default `document.body`
   */
  getPopupContainer?: HTMLElement | (() => HTMLElement) | string;

  /** Callback function, can be executed whether the popup calendar is popped up or closed */
  onOpenChange?: (open: boolean) => void;

  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;
}
