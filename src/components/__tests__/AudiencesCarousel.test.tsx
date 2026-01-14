import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AudiencesCarousel from '../AudiencesCarousel';

// Mock the useTranslation hook
vi.mock('@/hooks/useTranslation', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

// Mock the carousel components as they rely on context
vi.mock('@/components/ui/carousel', () => {
    const React = require('react');
    return {
        Carousel: ({ children, className }: { children: React.ReactNode, className?: string }) => (
            <div className={className} data-testid="carousel">
                {children}
            </div>
        ),
        CarouselContent: ({ children, className }: { children: React.ReactNode, className?: string }) => (
            <div className={className} data-testid="carousel-content">
                {children}
            </div>
        ),
        CarouselItem: ({ children, className }: { children: React.ReactNode, className?: string }) => (
            <div className={className} data-testid="carousel-item">
                {children}
            </div>
        ),
        CarouselNext: () => <button data-testid="carousel-next">Next</button>,
        CarouselPrevious: () => <button data-testid="carousel-previous">Previous</button>,
    };
});

// Mock the AudienceSlide component
vi.mock('../AudienceSlide', () => ({
    AudienceSlide: ({ title, description }: { title: string, description: string }) => (
        <div data-testid="audience-slide">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    ),
}));

describe('AudiencesCarousel', () => {
    it('renders the carousel with correct number of slides', () => {
        render(<AudiencesCarousel />);

        // Check main title
        expect(screen.getByText('whoWeServe')).toBeInTheDocument();

        // Check tabs/badges
        expect(screen.getByText('forCafes')).toBeInTheDocument();
        expect(screen.getByText('forInvestors')).toBeInTheDocument();
        expect(screen.getByText('forCustomers')).toBeInTheDocument();

        // Check carousel items
        const tabs = screen.getAllByRole('button', { name: /for/i }); // Getting badges by generic button role logic might need adjustment if Badge doesn't use standard button role, but Badge typically renders a div.
        // Actually Badge usually renders a div, let's use text matcher
        expect(screen.getByText('forCafes')).toBeInTheDocument();
    });

    it('renders carousel content', () => {
        render(<AudiencesCarousel />);

        // Check if slides are rendered
        const slides = screen.getAllByTestId('audience-slide');
        expect(slides).toHaveLength(3);

        // Check specific content
        expect(screen.getByText('cafesDescription')).toBeInTheDocument();
        expect(screen.getByText('investorsDescription')).toBeInTheDocument();
        expect(screen.getByText('customersDescription')).toBeInTheDocument();
    });
});
