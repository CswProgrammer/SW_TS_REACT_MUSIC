import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return <h2>App Footer</h2>
}

export default memo(AppFooter)
