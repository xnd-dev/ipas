import { IconProps } from '@phosphor-icons/react'
import React from 'react'

export type InfoData = {
  icon: React.ComponentType<IconProps>
  value: string
  description: string
}
