import Vue from 'vue'

export interface ReCaptchaOptions {
  /**
   * Toggles badge element visibility (v3)
   */
  hideBadge?: boolean

  /**
   * ReCaptcha mode.
   */
  mode?: 'base' | 'enterprise'

  /**
   * Site key to send requests
   */
  siteKey: string

  /**
   * Version
   */
  version: number
}

export interface ReCaptchaInstance {
  /**
   * Options
   */
  options: ReCaptchaOptions

  /**
   * Destroy ReCaptcha
   */
  destroy(): void

  /**
   * Returns a verify token (v3)
   * @param action
   */
  execute(action: string): Promise<string>

  /**
   * Returns a verify token (v2)
   */
  getResponse(widgetId?: number): Promise<string>

  /**
   * Initialize ReCaptcha
   */
  init(): Promise<any>

  /**
   * Reset ReCaptcha (v2)
   */
  reset(widgetId?: number): void

  /**
   * Render ReCaptcha (v2)
   */
  render(reference: string, { sitekey, theme } : { sitekey: string, theme?: string }): number
}

declare module 'vue/types/vue' {
  interface Vue {
    $recaptcha: ReCaptchaInstance
  }
}
