<template>
    <AppLink :to="props.routeLocation">
        <AppButton v-bind="props">
            <slot></slot>
        </AppButton>
    </AppLink>
</template>

<script setup lang="ts">
    import { AppButtonLinkProps } from '@/common/types/props/appButtonLinkProps'

    const props = defineProps<AppButtonLinkProps>()
</script>



