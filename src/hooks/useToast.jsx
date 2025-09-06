import { useCallback } from 'react'
import { useToastContext } from '../context/ToastContext'


export const useToast = () => {
    useToastContext
    const ctx = useToastContext()
    const builder = useCallback(type => (message, options) => ctx.addToast(type, message, options), [ctx])


    return {
        success: builder('success'),
        error: builder('error'),
        info: builder('info'),
        warning: builder('warning'),
        custom: (content, options) => ctx.addToast('custom', undefined, options, content),
        remove: ctx.removeToast,
        update: ctx.updateToast,
        clear: ctx.clearToasts,
    }
}