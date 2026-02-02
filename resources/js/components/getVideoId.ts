export const getVideoId = (link: string) => {
    return new URL(link).searchParams.get('v') ?? ""
}
