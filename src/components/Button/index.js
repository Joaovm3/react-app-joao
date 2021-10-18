import React from 'react'
import { Button as Btn } from '@material-ui/core';

export default function Button({ children, variant = 'contained', color = 'primary' }) {
    return (
        <Btn variant={variant} color={color}>
            {children}
        </Btn>
    );
}