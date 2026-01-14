/**
 * Application configuration using environment variables
 * Provides type-safe access to all configuration values
 */

export const config = {
    // App URLs
    appUrl: import.meta.env.VITE_APP_URL || 'https://loyalist.app',
    webAppUrl: import.meta.env.VITE_WEB_APP_URL || 'https://testployalist.web.app',

    // API Configuration
    apiUrl: import.meta.env.VITE_API_URL,

    // Feature Flags
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    enableChatWidget: import.meta.env.VITE_ENABLE_CHAT_WIDGET !== 'false',

    // Social Links
    social: {
        facebook: import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com',
        twitter: import.meta.env.VITE_TWITTER_URL || 'https://x.com',
        instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com',
        telegram: import.meta.env.VITE_TELEGRAM_URL || 'https://t.me/loyalist',
    },
} as const;

export type Config = typeof config;
