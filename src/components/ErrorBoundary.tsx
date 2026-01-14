import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

/**
 * Error Boundary component to catch JavaScript errors anywhere in the child
 * component tree and display a fallback UI instead of crashing the whole app.
 */
class ErrorBoundaryClass extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Log the error to an error reporting service
        console.error('Error caught by ErrorBoundary:', error, errorInfo);

        // TODO: Send to error reporting service like Sentry
        // if (import.meta.env.PROD) {
        //   reportError(error, errorInfo);
        // }
    }

    handleRetry = (): void => {
        this.setState({ hasError: false, error: null });
    };

    render(): ReactNode {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <ErrorFallback
                    error={this.state.error}
                    onRetry={this.handleRetry}
                />
            );
        }

        return this.props.children;
    }
}

// Functional component for the fallback UI with translations
interface ErrorFallbackProps {
    error: Error | null;
    onRetry: () => void;
}

function ErrorFallback({ error, onRetry }: ErrorFallbackProps): JSX.Element {
    return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center">
            <div className="max-w-md space-y-4">
                <div className="text-6xl">😵</div>
                <h2 className="text-2xl font-bold text-foreground">
                    Something went wrong
                </h2>
                <p className="text-muted-foreground">
                    We're sorry, but something unexpected happened. Please try again.
                </p>
                {import.meta.env.DEV && error && (
                    <details className="text-left text-sm bg-destructive/10 p-4 rounded-lg">
                        <summary className="cursor-pointer font-medium text-destructive">
                            Error details (dev only)
                        </summary>
                        <pre className="mt-2 overflow-auto text-xs">
                            {error.message}
                            {'\n\n'}
                            {error.stack}
                        </pre>
                    </details>
                )}
                <div className="flex gap-4 justify-center pt-4">
                    <Button onClick={onRetry} variant="default">
                        Try Again
                    </Button>
                    <Button
                        onClick={() => window.location.href = '/'}
                        variant="outline"
                    >
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ErrorBoundaryClass;
export { ErrorBoundaryClass as ErrorBoundary };
