# Content Management System

This project uses a centralized content management system that allows you to easily update all landing page content from a single location.

## How It Works

All landing page content is stored in `/src/data/content.json`. The content is accessed through custom React hooks in `/src/hooks/useContent.ts`.

## Updating Content

### Local Updates (JSON File)

To update content locally, simply edit the `/src/data/content.json` file:

```json
{
  "hero": {
    "title": {
      "line1": "Your Custom Title",
      "line2": "Subtitle",
      "highlight": "Brand Name"
    },
    "description": "Your description text",
    ...
  }
}
```

### Switching to API

To fetch content from an API instead of the local JSON file, follow these steps:

1. Open `/src/hooks/useContent.ts`
2. Uncomment the API fetch code in the `useContent` hook
3. Replace `'https://your-api.com/api/content'` with your actual API endpoint
4. The API should return JSON in the same structure as `content.json`

Example API integration:

```typescript
useEffect(() => {
  const fetchContent = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://your-api.com/api/content");
      if (!response.ok) throw new Error("Failed to fetch content");
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
```

## Content Structure

The content JSON is organized by sections:

- **hero**: Landing page hero section
- **about**: About us section
- **services**: Services offered
- **pricing**: Membership plans
- **testimonials**: Customer testimonials
- **contact**: Contact information

## Available Hooks

Use these hooks in your components to access content:

- `useContent()` - Get all content
- `useHeroContent()` - Get hero section content
- `useAboutContent()` - Get about section content
- `useServicesContent()` - Get services section content
- `usePricingContent()` - Get pricing section content
- `useTestimonialsContent()` - Get testimonials section content
- `useContactContent()` - Get contact section content

## Example Usage

```tsx
import { useHeroContent } from "@/hooks/useContent";

function Hero() {
  const { content, loading, error } = useHeroContent();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content</div>;

  return (
    <div>
      <h1>{content.title.line1}</h1>
      <p>{content.description}</p>
    </div>
  );
}
```

## Benefits

- **Single Source of Truth**: All content in one place
- **Easy Updates**: Change content without touching component code
- **API Ready**: Easily switch to API-based content management
- **Type Safe**: TypeScript types inferred from JSON structure
- **Scalable**: Add new sections by updating JSON and hooks
