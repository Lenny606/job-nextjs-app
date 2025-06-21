import {useEffect, useState} from "react";

/**
 * A React custom hook that determines whether the user has enabled dark mode
 * based on their system's color scheme preferences. It listens for changes
 * in the color scheme and updates the value dynamically.
 *
 * @return {boolean} Returns a boolean indicating if the dark mode is enabled.
 *                   `true` if dark mode is enabled, otherwise `false`.
 */
export function useDarkMode() {

    const controller = new AbortController()

    const [isDarkMode, setIsDarkMode] = useState(
        () => {
            if (typeof window === 'undefined') {
                return false
            }
            return window.matchMedia("(prefers-color-scheme: dark)").matches
        }
    )

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
            "change", e => setIsDarkMode(e.matches),
            {signal: controller.signal} //setup
        )
        //unhooks
        return () => controller.abort()


    }, [])

    return isDarkMode
}
