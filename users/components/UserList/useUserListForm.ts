import { sleep } from '@/common/utils/helpers/time'

export function useUserListForm() {
    const isLoading = ref(false)
    const isCompleted = ref(false)
    const errorMessage = ref('')

    const { userListForm, userListFormRules } = useFormUserList()
    const { v$, resetValidation } = useFormValidation(userListForm, userListFormRules)

    const save = async () => {
        resetFormValidation()
        isLoading.value = true
        
        await validateForm()

        await sleep(2000)

        isLoading.value = false
    }

    const validateForm = async () => {
        if (!await v$.value.$validate()) {
            isLoading.value = false
        }
    }

    const resetFormValidation = () => {
        errorMessage.value = ''
        resetValidation()
    }

    const setInitialFormValues = () => {
        userListForm.name = ''
        userListForm.age = ''
    }

    setInitialFormValues()

    return {
        v$,
        isLoading,
        isCompleted,
        errorMessage,
        userListForm,
        save,
    }
}
