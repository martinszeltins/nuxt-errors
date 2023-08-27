import { HttpOptions } from '@apollo/client/core'
import { createHttpLink } from '@apollo/client/core'
import { ApiRequestOptions } from '@/common/types/api'

export function useApi() {
    const { clients } = useApollo()
    const config = useRuntimeConfig()

    const setApiRequestOptions = (options: ApiRequestOptions) => {
        const httpLinkOptions: HttpOptions = {}

        if (options.uri)     httpLinkOptions.uri = options.uri
        if (options.headers) httpLinkOptions.headers = options.headers

        const httpLink = createHttpLink(httpLinkOptions)

        if (clients?.default) {
            clients.default.setLink(httpLink)
        }
    }

    const getGraphQLEndpoint = (apiName: string) => {
        return `${config.public.API_BASE_URL}/graphql?api=${apiName}`
    }

    const getDefaultHeaders = (): Record<string, any> => {
        const headers: Record<string, string> = {}
    
        headers['Authorization'] = 'Bearer 123456789'
        
        return headers
    }

    const getErrorMessage = (error: any): string => {
        return error?.networkError?.result?.customErrors?.General?.[0]
            || error?.networkError?.result?.customErrors?.Exception?.[0]
            || error?.networkError?.result?.customErrors?.security?.[0]
            || 'An unknown error occurred. Please try again.'
    }

    return {
        setApiRequestOptions, getGraphQLEndpoint, getDefaultHeaders,
        getErrorMessage
    }
}
