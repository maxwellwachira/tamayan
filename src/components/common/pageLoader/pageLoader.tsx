import { Box, Loader } from '@mantine/core';

import { colors } from '@/constants/colors';
import  classes from '@/components/common/pageLoader/PageLoader.module.css';

interface PageLoaderProps {
    color?: string;
    type?: string;
}

const PageLoader = ({color, type}: PageLoaderProps) => {

    return (
        <Box className={classes.wrapper}>
            <Loader size="lg" type={type ? type : "bars"} color={color ? color : colors.primaryColor}/>
        </Box>
    );
}

export default PageLoader;