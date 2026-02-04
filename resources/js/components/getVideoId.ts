export const getVideoId = (link: string) => {
    const url = new URL(link);

    if (url.hostname === "youtu.be") {
        return url.pathname.slice(1)
    }

    return url.searchParams.get('v') ?? ""
}
