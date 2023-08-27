import { defu } from 'defu'
import User from '@/users/types/user'
import { ApiType, ApiStatus, ApiOptions } from '@/common/types/api'

const API_TYPE: ApiType = 'query'
const API_NAME          = 'loadUsers'

export async function useUsersApi(options: ApiOptions, initialArgs: Record<string, any> = {}) {
    const users = ref<User[]>([])
    const usersError = ref('')
    const isUsersLoading = ref(false)

    const apiEvent = useEventBus<string>('api')
    const { setApiRequestOptions, getGraphQLEndpoint, getDefaultHeaders, getErrorMessage } = useApi()

    const loadUsers = async (args: any[] = []) => {
        const finalArgs = defu(initialArgs, ...args)

        dispatchApiEvent('start')
        
        usersError.value = ''
        isUsersLoading.value = true
        
        try {
            setApiRequestOptions({
                uri: getGraphQLEndpoint('users.loadUsers'),
                headers: { ...getDefaultHeaders() }
            })

            const { data, error } = await useAsyncQuery<User[]>(options.query, finalArgs)

            if (!error.value) {
                onSuccess(data.value)
            } else {
                onError(error.value)
            }
        } catch (error) {
            onError(error)
        } finally {
            dispatchApiEvent('end')
        }
    }

    const onSuccess = (data: User[]) => {
        users.value = data
        isUsersLoading.value = false

        dispatchApiEvent('success')
    }

    const onError = (error: any) => {
        isUsersLoading.value = false
        usersError.value = getErrorMessage(error)

        dispatchApiEvent('error')
    }

    const dispatchApiEvent = (status: ApiStatus) => {
        apiEvent.emit(`${API_TYPE}.${status}.${API_NAME}`)
    }

    if (!options.lazy) {
        await loadUsers()
    }

    return { users, usersError, isUsersLoading, loadUsers }
}

export const QUERY_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
            }
        }
    }
`
