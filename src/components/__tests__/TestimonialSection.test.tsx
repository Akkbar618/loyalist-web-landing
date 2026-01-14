import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TestimonialSection from '../TestimonialSection';

// Mock the useTranslation hook
vi.mock('@/hooks/useTranslation', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className }: { children: React.ReactNode, className?: string }) => (
            <div className={className}>{children}</div>
        ),
    },
}));

// Mock the carousel components
vi.mock('@/components/ui/carousel', () => {
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

describe('TestimonialSection', () => {
    it('renders the section title', () => {
        render(<TestimonialSection />);
        expect(screen.getByText('whatPartnersSay')).toBeInTheDocument();
    });

    it('renders testimonials carousel', () => {
        render(<TestimonialSection />);

        // Check if carousel wrapper is present
        expect(screen.getByTestId('carousel')).toBeInTheDocument();

        // Check if navigation buttons are present
        expect(screen.getByTestId('carousel-next')).toBeInTheDocument();
        expect(screen.getByTestId('carousel-previous')).toBeInTheDocument();
    });

    it('renders individual testimonials', () => {
        render(<TestimonialSection />);

        // Check for some specific testimonial content keys (mocked translation returns key)
        expect(screen.getAllByText('testimonial1')).toHaveLength(1);
        expect(screen.getAllByText('testimonial1Author')).toHaveLength(1);
        expect(screen.getAllByText('testimonial1Role')).toHaveLength(1);
    });
});
