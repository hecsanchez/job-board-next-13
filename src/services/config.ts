const api = {
    get: (url: string) => fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`),
    post: (url: string, params: RequestInit | undefined ) => fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, params)
}

export default api;
