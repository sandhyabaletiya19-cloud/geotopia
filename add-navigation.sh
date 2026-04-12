#!/bin/bash
# FILE: add-navigation.sh
# Run from root of your project: bash add-navigation.sh

echo "🌍 DharaVerse Navigation Injector"
echo "================================="

count=0

# Find all HTML files
find . -name "*.html" -type f | while read file; do
    # Check if already has navigation.css
    if grep -q "navigation.css" "$file"; then
        echo "⏭️  Skip (already has nav): $file"
        continue
    fi

    # Add the CSS and JS links before </head>
    if grep -q "</head>" "$file"; then
        sed -i 's|</head>|<link rel="stylesheet" href="/css/navigation.css">\n<script src="/js/navigation.js" defer></script>\n</head>|' "$file"
        echo "✅ Added nav to: $file"
        count=$((count + 1))
    else
        echo "⚠️  No </head> found: $file"
    fi
done

echo ""
echo "================================="
echo "✅ Done! Navigation added to $count files"
echo "🌍 All pages now connected!"
