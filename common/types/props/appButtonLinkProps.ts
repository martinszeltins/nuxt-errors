import { RouteLocationRaw } from 'vue-router'
import { AppButtonProps } from '@/common/types/props/appButtonProps'

export interface AppButtonLinkProps extends AppButtonProps {
    class?: string
    routeLocation: RouteLocationRaw
}
