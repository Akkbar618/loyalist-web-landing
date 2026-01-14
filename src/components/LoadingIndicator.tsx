import React from 'react';

/**
 * Loading indicator component shown during initial page load
 * and route transitions. Uses CSS animation for smooth appearance.
 */
export function LoadingIndicator(): JSX.Element {
    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
            role="progressbar"
            aria-label="Loading"
            aria-busy="true"
        >
            <div className="flex flex-col items-center gap-4">
                {/* Animated logo/spinner */}
                <div className="relative">
                    <div className="w-12 h-12 rounded-full border-4 border-muted animate-pulse" />
                    <div className="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-t-primary animate-spin" />
                </div>

                {/* Brand name */}
                <span className="text-lg font-semibold text-foreground animate-pulse">
                    Loyalist
                </span>
            </div>
        </div>
    );
}

export default LoadingIndicator;
