import React from 'react';
import { render, screen } from '@testing-library/react';
import MarkdownRenderer from './MarkdownRenderer';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';

// Mock next-mdx-remote and Next.js Head
jest.mock('next-mdx-remote', () => ({
    MDXRemote: jest.fn(({ ...props }) => <div data-testid="mdx-remote" {...props} />),
}));

jest.mock('next/head', () => ({
    __esModule: true,
    default: jest.fn(({ children }) => <>{children}</>),
}));

describe('MarkdownRenderer', () => {
    const mockMdxSource = {
        compiledSource: 'mock-compiled-source',
        frontmatter: {},
    };

    const mockTitle = 'Test Page';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the title in Next.js Head', () => {
        render(
            <MarkdownRenderer title={mockTitle} mdxSource={mockMdxSource} />
        );

        // Check if Head component received the correct title
        expect(Head).toHaveBeenCalled();
        expect(document.title).toBe(`${mockTitle} | Mehran Codes`);
    });

    it('passes mdxSource to MDXRemote', () => {
        render(
            <MarkdownRenderer title={mockTitle} mdxSource={mockMdxSource} />
        );

        expect(MDXRemote).toHaveBeenCalledWith(
            expect.objectContaining({
                ...mockMdxSource,
            }),
            expect.anything()
        );
    });

    it('applies the wrapper className', () => {
        const { container } = render(
            <MarkdownRenderer title={mockTitle} mdxSource={mockMdxSource} />
        );

        expect(container.querySelector('div.wrapper')).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(
            <MarkdownRenderer title={mockTitle} mdxSource={mockMdxSource} />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('throws error when required props are missing', () => {
        // @ts-ignore - Testing invalid props
        const renderWithoutProps = () => render(
            <MarkdownRenderer title={mockTitle} mdxSource={mockMdxSource}/>
        );
        expect(renderWithoutProps).toThrow();
    });
});