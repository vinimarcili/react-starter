import Loader from '@/shared/components/loader/loader.component'
import ValidatorHelper from '@/shared/helpers/validator.helper'
import React, { useEffect, useMemo, useState } from 'react'
import './input.component.scoped.scss'
import './input.component.scss'

const DELAY_TIME_FOR_TYPING_PAUSE = 800

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label?: any
  disabled?: boolean
  readOnly?: boolean
  errorSpan?: boolean
  noCounting?: boolean
  maxLength?: number
  loading?: boolean
  required?: boolean
  externalError?: any
  errorIcon?: any
  id?: string
  name?: string
  type?:
    | 'text'
    | 'number'
    | 'textarea'
    | 'email'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'datetime-local'
    | 'time'
    | 'month'
    | 'week'
    | 'color'
    | 'password'
    | 'hidden'
  leftLabel?: any
  rightLabel?: any
  externalIcon?: any
  value?: any
  placeholder?: string
  min?: number | string
  max?: number | string
  backgroundColor?: string
  autoComplete?: string
  requiredOnLoad?: boolean
  autoFocus?: boolean
  onChange?: (event: any) => any
  onValidate?: (event: any) => any
  onTimeout?: (event: any) => any
  showPasswordEye?: boolean
}

export interface State {
  error: string
  value: any
  timer?: any
  type: string
}

export default ({
  label,
  disabled = false,
  readOnly = false,
  errorSpan = true,
  noCounting = false,
  maxLength,
  loading,
  required,
  requiredOnLoad = false,
  externalError,
  errorIcon = <i className="fa-regular fa-triangle-exclamation" />,
  id,
  name,
  type = 'text',
  leftLabel,
  rightLabel,
  externalIcon,
  value = '',
  placeholder,
  min,
  max,
  backgroundColor = '',
  autoComplete = 'off',
  className = '',
  autoFocus = false,
  onChange,
  onValidate,
  onTimeout,
  style,
  showPasswordEye = false
}: Props) => {
  const timestamp = `random-id-${(1 + Date.now() + Math.random()).toString().replace('.', '')}`
  const validatorHelper = useMemo(() => new ValidatorHelper(), [])
  const [timer, setTimer] = useState<any>(null)
  const [state, setState] = useState<State>({
    value: value,
    error: '',
    type: type,
  })

  useEffect(() => {
    if (state.value !== value) {
      handleChange(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, state.value])

  useEffect(() => {
    if (state.type !== type) {
      setState({ ...state, type: type })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [timer])

  const handleChange = (event: any) => {
    state.value = event?.target?.value || (event?.length ? event : '')
    if (externalError) {
      state.error = ''
    } else if (!!required && (!state.value || state.value.length < 1) && state.value !== 0) {
      state.error = 'Campo obrigatório'
    } else if (type === 'email' && !validatorHelper.email(state.value)) {
      state.error = 'E-mail inválido'
    } else if (type === 'tel' && !validatorHelper.phone(state.value)) {
      state.error = 'Telefone inválido'
    } else if (type === 'url' && state.value && state.value.length && !validatorHelper.url(state.value)) {
      state.error = 'URL inválida'
    } else {
      state.error = ''
    }

    setState({ ...state })

    if (onValidate && typeof onValidate === 'function') {
      onValidate(!state.error && !externalError)
    }
    if (onChange && typeof onChange === 'function') {
      onChange(state.value)
    }

    if (onTimeout && typeof onTimeout === 'function') {
      onTimeout(false)
      if (timer) {
        clearTimeout(timer)
      }
      setTimer(
        setTimeout(() => {
          onTimeout(true)
        }, DELAY_TIME_FOR_TYPING_PAUSE)
      )
    }
  }

  return (
    <div className={`wrapper-all-inside-input ${className}`}>
      {label ? (
        <label className={'label ' + `${externalError || state.error ? 'error ' : ''}`} htmlFor={id || timestamp}>
          {label}
        </label>
      ) : null}
      <div
        className={
          'no-padding wrapper-input wrapper-input-squid ' +
          `${externalError || state.error ? 'error ' : ''}` +
          `${type === 'textarea' ? 'textarea ' : ''}`
        }
      >
        {leftLabel ? <span className="input-group-text">{leftLabel}</span> : null}
        {type !== 'textarea' ? (
          <input
            className={
              'col input ' +
              `${readOnly ? 'readonly ' : ''}` +
              `${disabled ? 'disabled ' : ''}` +
              `${loading ? 'loading ' : ''}` +
              `${type === 'number' ? 'has-icon-extra-padding ' : ''}` +
              `${externalError || state.error ? 'error ' : ''}` +
              `${externalIcon ? 'has-icon-external ' : ''}`
            }
            style={{
              backgroundColor: backgroundColor,
              ...style,
            }}
            id={id || timestamp}
            type={state.type || 'text'}
            name={name || timestamp}
            placeholder={placeholder || ''}
            value={state.value}
            maxLength={maxLength}
            required={required}
            disabled={disabled}
            readOnly={readOnly || loading}
            min={min}
            max={max}
            onChange={handleChange}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
          />
        ) : (
          <textarea
            className={
              'col textarea scrollbar ' +
              `${externalError || state.error ? 'error ' : ''}` +
              `${readOnly ? 'readonly ' : ''}` +
              `${disabled ? 'disabled ' : ''}` +
              `${loading ? 'loading ' : ''}` +
              `${externalIcon ? 'has-icon-external ' : ''}`
            }
            style={{
              backgroundColor: backgroundColor,
            }}
            id={id || timestamp}
            name={name || timestamp}
            placeholder={placeholder || ''}
            maxLength={maxLength}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            onChange={handleChange}
            value={state.value}
            autoFocus={autoFocus}
          />
        )}
        {rightLabel ? <span className="input-group-text">{rightLabel}</span> : null}
      </div>
      {loading ? <Loader size="small" color='var(--text_color)' className={`display-block loader-input ${!label ? 'no-label' : ''}`} /> : null}
      {externalIcon && !loading ? (
        <span className={'icon icon-external ' + `${type === 'textarea' ? 'textarea-icon ' : ''}` + `${!label ? 'no-label ' : ''}`}>
          {externalIcon}
        </span>
      ) : null}
      {showPasswordEye ?
        <button
          className={`button-show-password ${!label ? 'no-label' : ''}`}
          type="button"
          title={(state.type === 'password' ? 'Mostrar Senha' : 'Esconder Senha') as string}
          onClick={() => setState({ ...state, type: state.type === 'password' ? 'text' : 'password' })}
        >
          {state.type === 'password' ? <i className="fa-regular fa-eye" /> : <i className="fa-regular fa-eye-slash" />}
        </button>
      : null}
      {errorSpan ? (
        <div className={'box-validation box-invalid show ' + `${maxLength ? 'has-max-length ' : ''}`}>
          {requiredOnLoad && !state.value && !state.error && !externalError ? (
            <>
              <i className="fa-solid fa-diamond-exclamation gold" />
              Preencha este campo
            </>
          ) : null}
          {state.error || externalError ? errorIcon || <i className="fa-regular fa-triangle-exclamation" /> : null}
          {externalError ? externalError : ''}
          {state.error && !externalError ? state.error : ''}
          {maxLength && !noCounting ? <span className="max-length-name">{maxLength - state.value?.length}</span> : null}
        </div>
      ) : null}
    </div>
  )
}
