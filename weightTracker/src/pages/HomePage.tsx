import WeightChart from "../components/WeightChart";
import { useGetWeightDataByIdQuery } from "../services/api";
import AddWeight from "../components/AddWeight";
import ErrorComponent from "../components/CustomError";
import {
    Box, CircularProgress
} from '@mui/material';

const HomePage = () => {

    const { data, isLoading, error } = useGetWeightDataByIdQuery(1);

    if (isLoading) return <CircularProgress sx={{ color: (theme) => theme.palette.primary.main }} />;
    if (!isLoading && error) {
        if ('status' in error) {
            return (
                <ErrorComponent errorMessage={JSON.stringify(error.data)} />
            )
        } else {
            return (
                <ErrorComponent errorMessage={JSON.stringify(error.message)} />
            )
        }
    }
    if (!data) {
        return (
            <ErrorComponent errorMessage="No weight data found for this user!" />
        )
    } else {
        return (
            <Box sx={{ mt: 10 }}>
                <Box>
                    <Box>
                        < AddWeight />
                    </Box>
                    <Box>
                        <WeightChart data={data} name="Benjamin" />
                    </Box>
                </Box>
            </Box>
        );
    };
}
export default HomePage