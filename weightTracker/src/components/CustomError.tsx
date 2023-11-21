import { Alert, AlertTitle } from '@mui/material';

const CustomError = ({ errorMessage }: { errorMessage: string }) => {
    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {errorMessage}
        </Alert>
    );
};

export default CustomError;