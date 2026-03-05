# Image Setup Guide for Expensive Code Portfolio

## Profile Image (Hero Section)

Your profile image displays in the hero section at the top of the homepage.

### How to Update:

1. **Prepare your image**: Save a high-quality headshot or profile photo (recommended: 500x600px or similar aspect ratio)
2. **Add to public folder**: 
   - Upload your image to `/public` folder
   - Name it something like `profile.jpg` or `abraham.jpg`
3. **Update the hero section**:
   - Open `/components/hero-section.tsx`
   - Find line 91: `src="/placeholder.svg?height=600&width=500"`
   - Replace with: `src="/your-image-name.jpg"` (use your actual filename)

### Example:
```tsx
<Image
  src="/profile.jpg"  // Change this to your image filename
  alt="Expensive Code - Abraham Samuel"
  width={500}
  height={600}
  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
  priority
/>
```

## Project Images

Each project in the projects grid displays a screenshot or thumbnail image.

### How to Update:

1. **Prepare project images**: Screenshot or mockup of each project (recommended: 600x400px)
2. **Save images to public folder**:
   - `/public/masa-project.jpg` - MASA Web Application
   - `/public/listify-project.jpg` - Listify To-Do App
   - `/public/nft-marketplace.jpg` - NFT Marketplace
   - `/public/aristiec-website.jpg` - Aristiec Company Website

3. **Update project data**:
   - For homepage: Open `/components/projects-grid.tsx`
   - For projects page: Open `/components/public/projects/projects-page-content.tsx`
   - Find the `image:` field for each project
   - Replace the placeholder paths with your image filenames

### Example:
```tsx
{
  id: 0,
  title: "MASA Web Application",
  description: "E-commerce platform for skincare and perfume products...",
  image: "/masa-project.jpg",  // Update this with your image filename
  tags: ["React", "Tailwind CSS", "REST APIs", "Payment Gateway"],
  // ... rest of project data
}
```

## Recommended Image Sizes

- **Profile Image**: 500x600px (portrait orientation)
- **Project Images**: 600x400px (landscape orientation)

All images should be compressed for optimal performance.

## Supported Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp` (recommended for best performance)
- `.svg`

## Current Placeholders

All images currently use placeholder.svg which is a generic placeholder. Simply replace these with your actual images by following the steps above.
