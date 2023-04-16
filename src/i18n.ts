import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import enGlobal from '@assets/locales/en.json'
import esGlobal from '@assets/locales/es.json'
import ptGlobal from '@assets/locales/pt.json'

export const defaultNS = 'default'
export const resources = {
  en: {
    default: enGlobal,
  },
  pt: {
    default: ptGlobal,
  },
  es: {
    default: esGlobal,
  },
} as const

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    defaultNS,
    ns: ['default'],
    load: 'all',
    supportedLngs: ['en', 'es', 'pt'],
    lng: navigator.language?.split('-')[0] || 'en',
    fallbackLng: 'en',
    debug: false,
    cache: {
      enabled: false,
    },
    resources,
  })

export default i18n
