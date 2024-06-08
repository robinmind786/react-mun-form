'use client';

import React from 'react';
import {
  CSSProperties,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  useRef,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface RatingChangeEvent {
  value: number | null;
  originalEvent: MouseEvent | KeyboardEvent;
}

interface RatingRef {
  getElement: () => HTMLDivElement | null;
}

interface RatingProps {
  id?: string;
  value?: number;
  disabled?: boolean;
  readOnly?: boolean;
  stars?: number;
  cancel?: boolean;
  style?: CSSProperties;
  className?: string;
  tooltip?: string;
  onChange?: (e: RatingChangeEvent) => void;
  onIcon?: ReactElement;
  offIcon?: ReactElement;
  cancelIcon?: ReactElement;
}

const StarIcon: React.FC = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 576 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
  </svg>
);

const StarFillIcon: React.FC = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 576 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
  </svg>
);

const BanIcon: React.FC = () => <span>✖</span>;

const Rating = forwardRef<RatingRef, RatingProps>(
  (
    {
      id,
      value: propValue,
      disabled,
      readOnly,
      stars = 5,
      cancel = true,
      style,
      className = '',
      tooltip,
      onChange,
      onIcon,
      offIcon,
      cancelIcon,
    },
    ref
  ) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState<number | null>(propValue ?? null);

    const enabled = !disabled && !readOnly;
    const tabIndex = enabled ? 0 : -1;

    const handleMouseClick = (event: MouseEvent, i: number) => {
      if (enabled) {
        setValue(i);

        if (onChange) {
          onChange({ value: i, originalEvent: event });
        }
      }
    };

    const handleKeyDown = (event: KeyboardEvent, i: number) => {
      if (enabled && (event.key === 'Enter' || event.key === '')) {
        event.preventDefault();
        setValue(i);

        if (onChange) {
          onChange({ value: i, originalEvent: event });
        }
      }
    };

    const handleClearMouseClick = (event: MouseEvent) => {
      if (enabled) {
        setValue(null);
        if (onChange) {
          onChange({ value: null, originalEvent: event });
        }
        event.preventDefault();
      }
    };

    const handleClearKeyDown = (event: KeyboardEvent) => {
      if (enabled && (event.key === 'Enter' || event.key === ' ')) {
        setValue(null);
        if (onChange) {
          onChange({ value: null, originalEvent: event });
        }
        event.preventDefault();
      }
    };

    const createIcons = () => {
      return Array.from({ length: stars }, (_, i) => i + 1).map((i) => {
        const active = i <= (value ?? 0);
        const IconComponent = active
          ? onIcon || <StarFillIcon />
          : offIcon || <StarIcon />;

        return (
          <button
            key={i}
            onClick={(e) => handleMouseClick(e as MouseEvent, i)}
            onKeyDown={(e) => handleKeyDown(e as KeyboardEvent, i)}
            tabIndex={tabIndex}
            className="border-none outline-none"
            type="button"
          >
            {IconComponent}
          </button>
        );
      });
    };

    const createCancelIcon = () => {
      if (cancel) {
        const IconComponent = cancelIcon || <BanIcon />;
        return (
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            tabIndex={tabIndex}
            onClick={handleClearMouseClick}
            onKeyDown={handleClearKeyDown}
            role="button"
            aria-label="Cancel rating"
            style={{ display: 'inline-block' }}
          >
            {IconComponent}
          </div>
        );
      }
      return null;
    };

    return (
      <div
        ref={elementRef}
        id={id}
        style={style}
        className={twMerge(
          'inline-flex items-center gap-1.5 text-yellow-500',
          className
        )}
        title={tooltip}
      >
        {createCancelIcon()}
        {createIcons()}
      </div>
    );
  }
);

export default Rating;
