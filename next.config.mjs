const isProd = process.env.NODE_ENV === 'production';

export const output = 'export';
export const images = {
    unoptimized: true, // Required for GitHub Pages
};
export const basePath = isProd ? '/app-portal' : '';
export const assetPrefix = isProd ? '/app-portal/' : '';