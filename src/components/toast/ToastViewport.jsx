import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useToastContext } from '../../context/ToastContext'
import ToastCard from './ToastCard'

const positionMap = {
    'top-right': 'top-4 right-4 items-end',
    'top-left': 'top-4 left-4 items-start',
    'bottom-right': 'bottom-4 right-4 items-end',
    'bottom-left': 'bottom-4 left-4 items-start',
}

export const ToastViewport = () => {
    const { toasts } = useToastContext()
    const groups = toasts.reduce((acc, t) => {
        acc[t.position] = acc[t.position] || []
        acc[t.position].push(t)
        return acc
    }, {})

    return (
        <>
            {Object.entries(groups).map(([position, items]) => (
                <div key={position} className={`fixed z-50 flex flex-col ${positionMap[position]} space-y-2 max-w-sm`} aria-live="polite" aria-atomic="true">
                    <AnimatePresence initial={false}>
                        {items.map(t => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.18 }}
                                layout
                            >
                                <ToastCard toast={t} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            ))}
        </>
    )
}