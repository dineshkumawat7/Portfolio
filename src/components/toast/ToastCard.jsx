import React, { useEffect, useRef, useState } from 'react'
import { X, CheckCircle, AlertTriangle, Info as InfoIcon, BellRing } from 'lucide-react'
import { useToastContext } from '../../context/ToastContext.jsx'

const typeIcon = type => {
    switch (type) {
        case 'success': return <CheckCircle className="w-5 h-5" />
        case 'error': return <AlertTriangle className="w-5 h-5" />
        case 'info': return <InfoIcon className="w-5 h-5" />
        case 'warning': return <BellRing className="w-5 h-5" />
        default: return null
    }
}

const variantClasses = {
    solid: 'text-white',
    soft: '',
    outline: 'bg-transparent border',
}

const typeClasses = {
    success: 'bg-green-600 border-green-800',
    error: 'bg-red-600 border-red-800',
    info: 'bg-blue-600 border-blue-800',
    warning: 'bg-yellow-600 border-yellow-800',
    custom: 'bg-gray-800',
}

const ToastCard = ({ toast }) => {
    const { removeToast } = useToastContext()
    const { id, title, description, type, duration, action, closable, content, variant } = toast
    const [hover, setHover] = useState(false)
    const mounted = useRef(true)


    useEffect(() => { mounted.current = true; return () => { mounted.current = false } }, [])


    useEffect(() => {
        if (!duration || duration <= 0) return
        if (hover) return
        const timeout = setTimeout(() => { removeToast(id) }, duration)
        return () => clearTimeout(timeout)
    }, [duration, hover, id, removeToast])


    const base = `w-full max-w-sm p-3 text-white rounded shadow-lg flex items-start gap-3 border`
    const variantCls = variantClasses[variant] ?? ''
    const typeCls = typeClasses[type] ?? 'bg-gray-800'


    return (
        <div
            role={type === 'error' ? 'alert' : 'status'}
            aria-live={type === 'error' ? 'assertive' : 'polite'}
            className={`${base} ${variant === 'outline' ? 'bg-white/80 dark:bg-black/60' : type === 'custom' ? 'bg-gray-900 text-white' : ''} ${variant === 'solid' ? typeCls : ''} ${variant === 'soft' ? 'bg-white dark:bg-gray-800' : ''}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="flex-shrink-0 mt-0.5">
                <div className={`p-1 rounded-full ${variant === 'solid' ? 'bg-white/10' : ''}`}>{typeIcon(type)}</div>
            </div>
            <div className="flex-1">
                {content ? content : (
                    <>
                        {title && <div className="font-semibold">{title}</div>}
                        {description && <div className="mt-1 text-sm opacity-90">{description}</div>}
                        {action && (
                            <div className="mt-2">
                                <button onClick={() => { action.onClick(); removeToast(id) }} className="underline text-sm">{action.label}</button>
                            </div>
                        )}
                    </>
                )}
            </div>
            <div className="flex flex-col items-center gap-2 ml-2">
                {closable && (
                    <button aria-label="Close notification" onClick={() => removeToast(id)} className="p-1 rounded hover:bg-white/10">
                        <X className="w-4 h-4" />
                    </button>
                )}
                {duration > 0 && (
                    <div className="w-14 h-1 rounded overflow-hidden bg-white/20">
                        <div className={`h-full bg-white/50 animate-progress`} style={{ animationDuration: `${duration}ms`, animationPlayState: hover ? 'paused' : 'running' }} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ToastCard;