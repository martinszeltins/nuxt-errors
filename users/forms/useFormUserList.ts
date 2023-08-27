import { required } from '@vuelidate/validators'
import UserListForm from '@/users/types/userListForm'

export function useFormUserList() {
    const defaultFormValues: UserListForm = {
        name: '',
        age: '',
    }
    
    const userListForm = reactive<UserListForm>({ ...defaultFormValues })
    
    const userListFormRules = {
        name: { required },
        age:  { required },
    }
    
    const resetForm = () => {
        for (const [key] of Object.entries(userListForm)) {
            // @ts-ignore
            userListForm[key] = defaultFormValues[key]
        }
    }
    
    return { userListForm, defaultFormValues, userListFormRules, resetForm }
}
