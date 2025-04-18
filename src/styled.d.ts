// src/styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string
      secondary: string
    }
    size: {
      [key: string]: string
    }
    mixin: {
      wrapv1: string
      // 可继续扩展更多 mixin
    }
  }
}
