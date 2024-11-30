# Chimney Calculator Embedding Instructions

## WordPress Shortcodes

Install the provided PHP file as a WordPress plugin, then use these shortcodes:

```
[chimney_repair_calculator]
[chimney_building_calculator]
[chimney_creosote_calculator]
[chimney_maintenance_calculator]
[chimney_flue_calculator]
```

## HTML Embed Code

Copy the appropriate iframe code for each calculator:

### Repair Calculator
```html
<iframe 
    src="YOUR_NETLIFY_URL/repair-calculator" 
    width="100%" 
    height="800" 
    frameborder="0" 
    style="border: none; width: 100%; min-height: 800px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    title="Chimney Repair Cost Calculator"
    loading="lazy">
</iframe>
```

### Building Calculator
```html
<iframe 
    src="YOUR_NETLIFY_URL/building-calculator" 
    width="100%" 
    height="800" 
    frameborder="0" 
    style="border: none; width: 100%; min-height: 800px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    title="Chimney Building Calculator"
    loading="lazy">
</iframe>
```

### Creosote Estimator
```html
<iframe 
    src="YOUR_NETLIFY_URL/creosote-estimator" 
    width="100%" 
    height="800" 
    frameborder="0" 
    style="border: none; width: 100%; min-height: 800px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    title="Creosote Buildup Estimator"
    loading="lazy">
</iframe>
```

### Maintenance Calculator
```html
<iframe 
    src="YOUR_NETLIFY_URL/maintenance-estimator" 
    width="100%" 
    height="800" 
    frameborder="0" 
    style="border: none; width: 100%; min-height: 800px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    title="Maintenance Cost Calculator"
    loading="lazy">
</iframe>
```

### Flue Size Calculator
```html
<iframe 
    src="YOUR_NETLIFY_URL/flue-calculator" 
    width="100%" 
    height="800" 
    frameborder="0" 
    style="border: none; width: 100%; min-height: 800px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" 
    title="Flue Size Calculator"
    loading="lazy">
</iframe>
```

## Installation Instructions

1. Replace `YOUR_NETLIFY_URL` with your actual deployed URL
2. For WordPress:
   - Install the PHP file as a plugin
   - Use shortcodes in any post or page
3. For HTML:
   - Copy the iframe code
   - Paste into your website's HTML
   - Adjust height/width as needed

## Notes

- The calculators are responsive and will adjust to container width
- Minimum height is set to 800px but can be adjusted
- Loading is set to "lazy" for better performance
- Includes basic styling for consistent appearance