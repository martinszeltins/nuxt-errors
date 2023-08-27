type ButtonType = 'p-button-primary' | 'p-button-secondary' | 'p-button-text' 
type ButtonColor = '' | 'p-button-positive' | 'p-button-negative' | 'p-button-warning' | 'p-button-info'

export interface AppButtonProps {
    buttonType?: ButtonType
    buttonColor?: ButtonColor
    isCircle?: boolean
    isCircleBig?: boolean
    icon?: [string, string]
    iconStyle?: string
    text?: string
    textStyle?: string
    isLoading?: boolean
    isDisabled?: boolean
    isCompleted?: boolean
    completedText?: string
}
