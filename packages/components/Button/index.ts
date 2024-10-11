import type { Component } from 'vue'
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import { withInstall } from '@yehan-ui/utils'

export const YeButton = withInstall(Button as Component)
export const YeButtonGroup = withInstall(ButtonGroup as Component)

export * from './types'
