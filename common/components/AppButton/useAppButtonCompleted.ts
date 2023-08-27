import { sleep } from '@/common/utils/helpers/time'

export function useAppButtonCompleted(emit: Function, isCompleted: Ref<boolean>, isLoading: Ref<boolean>) {
    const isCompletedTextVisible = ref(false)
    const isCompletedTextInserted = ref(false)
    const isCompletedBackgroundVisible = ref(false)

    const showCompletedAnimation = async () => {
        showPositiveBackground()

        await sleep(400)

        await insertCompletedText()

        await sleep(200)

        showCompletedText()

        await sleep(1400)

        emit('update:isCompleted', false)
        resetCompletedState()
    }

    const resetCompletedState = () => {
        isCompletedTextVisible.value = false
        isCompletedTextInserted.value = false
        isCompletedBackgroundVisible.value = false
    }

    const showPositiveBackground = () => {
        isCompletedBackgroundVisible.value = true
    }

    const showCompletedText = () => {
        isCompletedTextVisible.value = true
    }

    const insertCompletedText = () => {
        isCompletedTextInserted.value = true
    }

    watch(isCompleted, _isCompleted => {
        if (_isCompleted) showCompletedAnimation()
    })

    watch(isLoading, _isLoading => {
        if (_isLoading === false) emit('update:isCompleted', true)
    })
    
    return {
        isCompletedTextVisible,
        isCompletedTextInserted,
        isCompletedBackgroundVisible,
        showCompletedAnimation,
    }
}
