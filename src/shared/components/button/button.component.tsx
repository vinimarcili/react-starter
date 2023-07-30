
import React, { PropsWithChildren, useState } from 'react'
import './button.component.scoped.scss'
import ColorsHelper from '@/shared/helpers/colors.helper'
import Loader from '@/shared/components/loader/loader.component'

interface Props extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  disabled?: boolean
  inverted?: boolean
  invertedHover?: boolean
  rounded?: boolean
  color?: string
  borderStyle?: string
  borderColor?: string
  textColor?: string
  loaderColor?: string
  customPadding?: string
  loading?: boolean
  hideChildrenOnLoading?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  width?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: any) => any
  onHover?: (hover: boolean) => any
}

export default ({
  children,
  hideChildrenOnLoading,
  customPadding,
  width,
  borderStyle,
  id,
  size,
  onHover,
  onClick,
  loading = false,
  disabled = false,
  className = '',
  inverted,
  invertedHover,
  rounded,
  color = 'var(--primary_color)',
  textColor = 'var(--secondary_color)',
  borderColor = 'var(--tertiary_color)',
  loaderColor = 'var(--secondary_color)',
  type = 'button',
  style,
}: Props) => {
  const [hover, setHover] = useState<boolean>(false)
  const colorsHelper = new ColorsHelper()
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const presetColors = [
    'pink',
    'pink-light',
    'pink-dark',
    'lilac',
    'lilac-light',
    'lilac-dark',
    'cian',
    'cian-light',
    'cian-dark',
    'green',
    'green-light',
    'green-dark',
    'yellow',
    'yellow-light',
    'yellow-dark',
    'red',
    'red-light',
    'red-dark',
    'blue',
    'blue-light',
    'blue-dark',
    'pomegranate',
    'pomegranate-light',
    'pomegranate-dark',
    'lemon',
    'lemon-light',
    'lemon-dark',
    'gold',
    'gold-light',
    'gold-dark',
    'pastry',
    'pastry-light',
    'pastry-dark',
    'gray',
    'gray-light',
    'gray-dark',
    'black',
    'black-light',
    'black-dark',
    'white',
  ]

  const handleClick = (event: any) => {
    if (!loading && !disabled && onClick && typeof onClick === 'function') {
      onClick(event)
    }
  }

  const getHover = (color: string) => {
    return colorsHelper?.lightenDarkenColor(colorsHelper?.getCssVariableValue(color), -50)
  }

  const getHoverBg = () => {
    if (invertedHover) {
      return getHover(textColor)
    }
    return getHover(color)
  }

  const getHoverText = () => {
    if (invertedHover) {
      return getHover(color !== 'transparent' ? color : 'var(--white-html)')
    }
    return getHover(textColor !== 'transparent' ? textColor : 'var(--white-html)')
  }

  const hoverToggle = (hover = false) => {
    setHover(hover)
    if (onHover && typeof onHover === 'function') {
      onHover(hover)
    }
  }

  return (
    <button
      type={type}
      onClick={(event) => handleClick(event)}
      onMouseOver={() => hoverToggle(true)}
      onFocus={() => null}
      onMouseLeave={() => hoverToggle(false)}
      className={
        `button button-${color} ` +
        `${rounded ? 'rounded ' : ''}` +
        `${inverted ? 'inverted ' : ''}` +
        `${size ? `button-${size} ` : ''}` +
        `${disabled ? 'disabled ' : ''}` +
        `${loading ? 'loading ' : ''}` +
        `${className}`
      }
      id={id ? id : timestamp}
      style={{
        backgroundColor: !presetColors.includes(color) ? (hover ? getHoverBg() : color) : '',
        borderColor: !presetColors.includes(color) ? (hover ? getHover(borderColor || textColor) : borderColor || textColor) : '',
        borderStyle: borderStyle,
        color: !presetColors.includes(color) ? (hover ? getHoverText() : textColor) : '',
        padding: customPadding,
        width: width,
        ...style,
      }}
      disabled={disabled}
    >
      {hideChildrenOnLoading && loading ? null : children}
      {loading ? <Loader className={`${!hideChildrenOnLoading ? 'ml-3' : ''}`} size="small" color={loaderColor ? loaderColor : color} /> : null}
    </button>
  )
}
