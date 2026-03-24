// Quick image URL fixer
function fixImageURL(oldURL) {
    // Default working images for each topic
    const imageMap = {
        'himalayas': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=',
        'mountain': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=',
        'peak': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=',
        'everest': 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=',
        'andes': 'https://images.unsplash.com/photo-1521307698990-2c7d0e4c9a3e?w=',
        'alps': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=',
        'rocky': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w='
    };
    
    // Extract search term from old URL
    const match = oldURL.match(/\?(.+)/);
    if (match) {
        const term = match[1].split(',')[0];
        return imageMap[term] || imageMap['mountain'];
    }
    
    return imageMap['mountain']; // Fallback
}
