# Profile Image Setup Guide

## How to Add Your Profile Image

### Option 1: Using a Local Image File

1. **Prepare your image**
   - Size: 500x600px (or any 5:6 aspect ratio)
   - Format: PNG, JPG, or WebP
   - Name your file: `profile.jpg` or `profile.png`

2. **Add the image to your project**
   - Place the image in the `/public/images/` directory
   - If the directory doesn't exist, create it

3. **Update the image path in hero-section.tsx**
   - Open `components/hero-section.tsx`
   - Find the line with `src="/placeholder.svg?height=600&width=500"`
   - Replace it with: `src="/images/profile.jpg"` (or your filename)

### Option 2: Using an External URL

If you want to use an image hosted online:

1. Open `components/hero-section.tsx`
2. Find the Image component
3. Replace `src="/placeholder.svg?height=600&width=500"` with your image URL
4. Example: `src="https://example.com/your-image.jpg"`

### Option 3: Using Next.js Image Optimization

For best performance, use a service like:
- **Vercel Blob** - Upload and serve images from Vercel
- **Cloudinary** - Free image hosting with optimization
- **ImgBox** - Simple image hosting

Then use the URL in the `src` prop.

## Current Setup

The image component is located in:
- **File**: `components/hero-section.tsx`
- **Line**: Search for the `Image` component after the comment "Right column - Image or ASCII Art"
- **Fallback**: Uses `/placeholder.svg` while you add your actual image

## Image Requirements

- **Dimensions**: 500x600px (portrait)
- **Aspect Ratio**: 5:6
- **Format**: PNG, JPG, or WebP
- **Size**: Under 200KB for optimal performance
- **Background**: Transparent PNG recommended for better integration

## Testing Locally

1. Add your image to `/public/images/profile.jpg`
2. Update the src in `components/hero-section.tsx`
3. Run `npm run dev` or `pnpm dev`
4. Visit `http://localhost:3000` to see your image

## Common Issues

**Image not showing?**
- Check the file path is correct
- Verify the file exists in `/public/` directory
- Clear browser cache and hard refresh (Ctrl+Shift+R)
- Check browser console for image loading errors

**Image stretched or distorted?**
- Ensure image is 5:6 aspect ratio
- Use correct dimensions: 500x600px
- The component has `object-cover` CSS for proper fitting

**Image quality issues?**
- Use PNG for crisp images with transparency
- Use JPG for photographs
- Optimize image size before uploading (use tools like TinyPNG)
