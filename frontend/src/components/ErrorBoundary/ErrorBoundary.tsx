import React, { Component, ErrorInfo, ReactNode } from 'react';
import ErrorFallback from './ErrorFallback';

interface StateInterface {
    hasError: boolean;
}

class ErrorBoundary extends Component<Record<string, ReactNode>, StateInterface> {
    constructor(props: Record<string, ReactNode> | Readonly<Record<string, ReactNode>>) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <ErrorFallback />;
        }

        return children;
    }
}

export default ErrorBoundary;
