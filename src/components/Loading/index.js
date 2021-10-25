

import { CircularProgress, Box } from '@mui/material';

export default function Loading() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )
}
