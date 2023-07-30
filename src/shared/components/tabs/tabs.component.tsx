import React, { useCallback, useState } from 'react'
import './tabs.component.scoped.scss'

interface PropsTab extends React.HTMLAttributes<HTMLLIElement> {
  title?: any
  active?: boolean
  disabled?: boolean
  height?: string
  onClick?: (event: any) => any
  tabIndex?: number
  backgroundColor?: string
}

const Tab = ({ title = '', active, disabled, height, className = '', onClick, tabIndex, backgroundColor = 'transparent' }: PropsTab) => {
  const handleClick = useCallback((e: any) => {
    if (onClick && typeof onClick === 'function' && !disabled) {
      onClick(e)
    }
  }, [disabled, onClick])

  return (
    <li
      style={{ height: height, backgroundColor: backgroundColor }}
      key={tabIndex}
      className={`${className} tab ${active ? 'active ' : ''} ${disabled ? 'disabled ' : ''}`}
      onClick={(e) => handleClick(e)}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role='button'
    >
      {title}
    </li>
  )
}

/* --------------------------------------------------- */

interface PropsTabs extends React.HTMLAttributes<HTMLDivElement> {
  noContent?: boolean
  height?: string
  maxWidth?: string
  margin?: string
  boxShadow?: boolean
  selectStyle?: boolean
  lineStyle?: boolean
  tabsCenter?: boolean
  tabsWidth?: boolean
  defaultActiveIndex?: number
  onChange?: (event: any) => any
  children: any
  backgroundColor?: string
}

interface StateTabs {
  activeIndex: number
}

const Tabs = ({
  noContent,
  height,
  maxWidth = 'initial',
  margin = '0',
  boxShadow = false,
  selectStyle = false,
  lineStyle = false,
  tabsCenter = false,
  tabsWidth = false,
  defaultActiveIndex = 0,
  children,
  className = '',
  backgroundColor = 'transparent',
  onChange,
}: PropsTabs) => {
  const [state, setState] = useState<StateTabs>({
    activeIndex: defaultActiveIndex,
  })

  const handleTabClick = (tabIndex: number, onClickTab?: (event: any) => any) => {
    if (tabIndex !== state.activeIndex) {
      setState({ activeIndex: tabIndex })
      if (onChange && typeof onChange === 'function') {
        onChange(tabIndex)
      }
      if (onClickTab && typeof onClickTab === 'function') {
        onClickTab(tabIndex)
      }
    }
  }

  const cloneTabElement = (tab: any, index = 0) => {
    return (
      <Tab
        {...tab.props}
        height={height}
        onClick={() => handleTabClick(index, tab.props.onClick)}
        tabIndex={index}
        active={index === state.activeIndex}
        key={index}
        backgroundColor={backgroundColor}
      />
    )
  }

  const renderChildrenTabs = () => {
    if (!Array.isArray(children)) {
      return cloneTabElement(children, 0)
    }

    return children?.map((tab, index) => cloneTabElement(tab, index))
  }

  const renderActiveTabContent = () => {
    if (children && children[state.activeIndex]) {
      return children[state.activeIndex].props.children
    }

    return (children as any)?.props?.children
  }

  return (
    <section className={`tabs-squid ${className}`}>
      <div className={'tabs-container'}>
        <div className={'wrapper ' + `${boxShadow ? 'box-shadow ' : ''}`}>
          <ul
            className={
              'tabs-header ' +
              `${selectStyle ? 'select-style ' : ''}` +
              `${lineStyle ? 'line-style ' : ''}` +
              `${tabsCenter ? 'tabs-center ' : ''}` +
              `${tabsWidth ? 'tabs-width ' : ''}`
            }
            style={{
              width: tabsWidth ? '100%' : 'initial',
              maxWidth: maxWidth,
              margin: margin,
              backgroundColor: backgroundColor,
            }}
          >
            {renderChildrenTabs()}
          </ul>
        </div>
        {!noContent ? <div className="tabs-wrapper-content">{renderActiveTabContent()}</div> : null}
      </div>
    </section>
  )
}

Tabs.Tab = Tab
export default Tabs
