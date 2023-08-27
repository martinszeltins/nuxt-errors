<template>
    <PrimeButton :class="buttonClasses" :disabled="props.isDisabled">
        <!-- Completed Background Overlay -->
        <div
            class="opacity-0 absolute-center bg-green-500 w-1 h-1 rounded-md transition-all duration-500 z-10"
            :class="{ 'h-[200%] w-[200%] opacity-100': isCompletedBackgroundVisible }">
        </div>

        <!-- Completed Status Text -->
        <div
            v-if="isCompletedTextInserted"
            class="text-white z-20 whitespace-nowrap relative transition-all"
            :class="{ 'opacity-0': !isCompletedTextVisible, 'opacity-100': isCompletedTextVisible }">

            {{ (props.completedText) ? props.completedText : 'Changes saved' }}
        </div>
        
        <!-- Button Content -->
        <slot v-if="!isCompletedTextInserted">
            <FontAwesome 
                v-if="props.isLoading" 
                :class="iconStyle" 
                :icon="['fas', 'circle-notch']" 
                spin 
            />

            <FontAwesome 
                v-if="props.icon && !props.isLoading" 
                :class="iconStyle" 
                :icon="props.icon" 
            />

            <span 
                v-if="props.text" 
                :class="textStyle">
                
                {{ props.text }}
            </span>
        </slot>
    </PrimeButton>
</template>

<script setup lang="ts">
    /* eslint-disable prefer-const */
    import { twMerge } from 'tailwind-merge'
    import type { AppButtonProps } from '@/common/types/props/appButtonProps'

    const props = withDefaults(defineProps<AppButtonProps>(), {
        buttonType: 'p-button-primary',
        buttonColor: '',
        isCircle: false,
        isCircleBig: false,
        icon: undefined,
        iconStyle: '',
        text: '',
        textStyle: '',
        isLoading: false,
        isDisabled: false
    })

    const emit = defineEmits<{
        (event: 'update:isCompleted', payload: boolean): void
    }>()

    const attrs = useAttrs()
    const { isCompleted, isLoading } = toRefs(props)

    const { isCompletedTextVisible, isCompletedTextInserted,
            isCompletedBackgroundVisible } = useAppButtonCompleted(emit, isCompleted, isLoading)

    const getClassesFromProps = () => {
        return [
            props.buttonType,
            props.buttonColor,
            props.isCircle || props.isCircleBig
                ? 'p-button-rounded min-w-[40px] min-h-[40px] justify-center'
                : '',
            props.isCircleBig ? 'text-lg w-12' : '',
            props.icon || props.isLoading ? 'gap-2' : ''
        ]
    }

    const buttonClasses = computed(() => {
        const completedStateClasses = []

        if (isCompletedBackgroundVisible.value) {
            completedStateClasses.push('border-positive p-border-positive')
        }

        return twMerge(
            'justify-center',
            ...getClassesFromProps(),
            attrs.class as string,
            completedStateClasses,
        )
    })
</script>
