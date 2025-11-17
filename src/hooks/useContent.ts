import { useState } from 'react';
import contentData from '@/data/content.json';

export type ContentData = typeof contentData;

/**
 * Hook to fetch content data
 * Currently loads from local JSON, but can be easily modified to fetch from an API
 * 
 * To use with API:
 * 1. Replace the import with fetch call
 * 2. Add API endpoint URL
 * 3. Handle loading and error states
 * 
 * Example API usage:
 * const response = await fetch('https://your-api.com/content');
 * const data = await response.json();
 */
export function useContent() {
    const [content] = useState<ContentData>(contentData);
    const [loading] = useState(false);
    const [error] = useState<Error | null>(null);

    // For now, we're using local JSON
    // To switch to API, use setContent, setLoading, setError in useEffect:
    /*
    const [content, setContent] = useState<ContentData>(contentData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    
    useEffect(() => {
        const fetchContent = async () => {
          setLoading(true);
          try {
            const response = await fetch('https://your-api.com/api/content');
            if (!response.ok) throw new Error('Failed to fetch content');
            const data = await response.json();
            setContent(data);
          } catch (err) {
            setError(err as Error);
          } finally {
            setLoading(false);
          }
        };
        
        fetchContent();
    }, []);
    */

    return { content, loading, error };
}

// Helper function to get specific section content
export function useHeroContent() {
    const { content, loading, error } = useContent();
    return { content: content.hero, loading, error };
}

export function useAboutContent() {
    const { content, loading, error } = useContent();
    return { content: content.about, loading, error };
}

export function useServicesContent() {
    const { content, loading, error } = useContent();
    return { content: content.services, loading, error };
}

export function usePricingContent() {
    const { content, loading, error } = useContent();
    return { content: content.pricing, loading, error };
}

export function useTestimonialsContent() {
    const { content, loading, error } = useContent();
    return { content: content.testimonials, loading, error };
}

export function useContactContent() {
    const { content, loading, error } = useContent();
    return { content: content.contact, loading, error };
}
