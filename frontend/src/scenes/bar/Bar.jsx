import { Box } from "@mui/system"
import Header from "../../components/Header"
import BarChart from "../../components/BarChart"

const Bar = () => {
    return (
        <Box m="20px" >
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box height="75vh" m="40px 0 0 0" >
                <BarChart />
            </Box>
        </Box>
    )
}

export default Bar