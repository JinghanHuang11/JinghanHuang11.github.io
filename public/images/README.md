# Images Directory

## Avatar
- `avatar.jpg` - Your profile photo (already added)

## Certificates
- `certificates/DMAI.jpg` - DMAI Certificate (added)
- `certificates/DMAII.jpg` - DMAII Certificate (added)

### Adding New Certificates

When adding new certificates, update `src/data/profile.ts`:

```typescript
certificates: [
  {
    id: 'your-certificate-id',
    name: { en: 'Certificate Name', zh: '证书名称' },
    issuer: { en: 'Issuing Organization', zh: '颁发机构' },
    date: '2024',
    image: '/images/certificates/your-certificate.jpg',
    description: { en: 'Description', zh: '描述' },
  },
  // ...
],
```

## Project Images

Add your project images to the `projects/` subdirectory with the following filenames:

- `financial-dashboard.jpg` - For the Financial Analysis Dashboard project
- `case-studies.jpg` - For the Business Case Studies project
- `ai-agent.jpg` - For the AI Research Assistant project
- `data-viz.jpg` - For the Data Visualization Toolkit project
- `ppt-templates.jpg` - For the Professional Presentation Templates project

### Recommended Image Specifications

- **Format**: JPG or PNG
- **Size**: 1200x800 pixels (16:10 aspect ratio)
- **File Size**: Under 500KB each
- **Style**: Professional, clean, relevant to each project

### Adding New Projects

When adding new projects in `src/data/projects.ts`, update the `image` field to point to your image file:

```typescript
{
  // ...
  image: '/images/projects/your-new-image.jpg',
  // ...
}
```

### Tips

1. Use real screenshots or mockups of your projects
2. Ensure good lighting and clarity
3. Maintain consistent style across all project images
4. Use tools like Canva or Figma for creating professional mockups
