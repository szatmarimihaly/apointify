// Avatar color palette
const AVATAR_COLORS = [
    '#9333ea', // purple
    '#ea580c', // orange
    '#2563eb', // blue
    '#dc2626', // red
    '#059669', // green
    '#7c3aed', // violet
    '#db2777', // pink
    '#0891b2', // cyan
];

/**
 * Generate a consistent color based on a string input
 * Same input will always return the same color
 */
export const generateAvatarColor = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

/**
 * Generate an avatar data URL with the first letter and a background color
 * @param name - User's name
 * @param email - User's email (used for color generation)
 * @returns Data URL of the generated SVG avatar
 */
export const generateAvatar = (name: string, email: string): string => {
    const letter = (name || email).charAt(0).toUpperCase();
    const bgColor = generateAvatarColor(email);
    
    // Create SVG avatar
    const svg = `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${bgColor}"/>
            <text 
                x="50%" 
                y="50%" 
                font-size="100" 
                fill="#000000" 
                font-family="Arial, sans-serif" 
                font-weight="600"
                text-anchor="middle" 
                dominant-baseline="central"
            >${letter}</text>
        </svg>
    `;
    
    // Convert SVG to data URL
    return `data:image/svg+xml;base64,${btoa(svg)}`;
}