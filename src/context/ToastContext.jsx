import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


const ToastContext = createContext(undefined)

export const useToastContext = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToastContext must be used within a ToastProvider');
    }
    return context;
}


export const ToastProvider = ({ children, maxToasts = 5, defaultDuration = 5000 }) => {
    const [toasts, setToasts] = useState([])
    const defaultDurationRef = useRef(defaultDuration)


    useEffect(() => { defaultDurationRef.current = defaultDuration }, [defaultDuration])


    const addToast = useCallback((type, title, options = {}, content = null) => {
        const id = options.id ?? uuidv4()
        setToasts(prev => {
            if (prev.some(t => t.id === id)) return prev
            const t = {
                id,
                type,
                title,
                description: options.description,
                duration: options.duration ?? defaultDurationRef.current,
                action: options.action ?? null,
                closable: options.closable ?? true,
                position: options.position ?? 'bottom-right',
                variant: options.variant ?? 'solid',
                createdAt: Date.now(),
                onOpen: options.onOpen ?? null,
                onClose: options.onClose ?? null,
                content,
            }
            const newList = [...prev, t]
            if (newList.length > maxToasts) newList.shift()
            return newList
        })
        return id
    }, [maxToasts])


    const removeToast = useCallback(id => {
        setToasts(prev => {
            const t = prev.find(p => p.id === id)
            if (t && t.onClose) { try { t.onClose() } catch { } }
            return prev.filter(p => p.id !== id)
        })
    }, [])


    const updateToast = useCallback((id, partial) => {
        setToasts(prev => prev.map(t => t.id === id ? { ...t, ...partial } : t))
    }, [])


    const clearToasts = useCallback(() => setToasts([]), [])


    const value = useMemo(() => ({ toasts, maxToasts, addToast, removeToast, updateToast, clearToasts }), [toasts, maxToasts, addToast, removeToast, updateToast, clearToasts])


    useEffect(() => {
        const onKey = e => {
            if (e.key === 'Escape') {
                setToasts(prev => {
                    if (prev.length === 0) return prev
                    const last = prev[prev.length - 1]
                    if (last.closable) {
                        try { last.onClose && last.onClose() } catch { }
                        return prev.slice(0, -1)
                    }
                    return prev
                })
            }
        }
        if (typeof window !== 'undefined') window.addEventListener('keydown', onKey)
        return () => { if (typeof window !== 'undefined') window.removeEventListener('keydown', onKey) }
    }, [])


    return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}
