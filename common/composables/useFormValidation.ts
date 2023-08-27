import useVuelidate, { ServerErrors } from '@vuelidate/core'

export function useFormValidation(form: Record<string, any>, formRules: Record<string, object>) {
    const $externalResults = ref()
    
    const v$ = useVuelidate(formRules, form, { $externalResults })

    const setExternalValidationResults = (violations: ServerErrors) => {
        if (violations) $externalResults.value = violations
    }

    const resetValidation = () => {
        v$.value.$reset()
        v$.value.$clearExternalResults()
    }

    return { v$, setExternalValidationResults, resetValidation }
}
