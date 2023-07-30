import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  customSize?: string
  size?: 'small' | 'bigger' | 'big' | ''
  borderSize?: string
}

export default ({ color = 'var(--tertiary_color)', customSize, size = '', borderSize, className = '', style, ...rest }: Props) => {
  return (
    <div
      className={`loader ${size} ${className}`}
      role="status"
      style={{
        borderWidth: borderSize,
        height: customSize,
        width: customSize,
        borderColor: color,
        ...style
      }}
      {...rest}
    >
      <span className="visually-hidden">Carregando</span>
    </div>
  )
}
