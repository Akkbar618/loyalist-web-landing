/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_URL: string;
    readonly VITE_WEB_APP_URL: string;
    readonly VITE_API_URL?: string;
    readonly VITE_ENABLE_ANALYTICS: string;
    readonly VITE_ENABLE_CHAT_WIDGET: string;
    readonly VITE_FACEBOOK_URL: string;
    readonly VITE_TWITTER_URL: string;
    readonly VITE_INSTAGRAM_URL: string;
    readonly VITE_TELEGRAM_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
