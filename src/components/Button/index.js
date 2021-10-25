import { Button as Btn } from '@material-ui/core';

export default function Button({ children, variant = 'contained', color = 'primary', disabled = false, ...props }) {
    return (
        <Btn variant={variant} color={color} disabled={disabled} {...props}>
            {children}
        </Btn>
    );
}