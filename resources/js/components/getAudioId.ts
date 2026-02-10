export const getAudioId = (url: string): string => {
    return new URL(url).pathname.split('/').pop() ?? "";
};
