import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../../assets/css/custom.css";
import { useSelector } from 'react-redux';
import { getTokenDetails } from './tokenSlice';
import PieChart from '../../components/Chart/PieChart';

function TokenResume() {
    const details = useSelector(getTokenDetails);
    return (
        <Grid className='token-main-resume'>
            <Grid className='token-resume-inner'>
                <Grid className='token-heading'>
                    <Typography variant='h4'>Token Resume</Typography>
                </Grid>
                <Grid className='token-resume-content'>
                    <Typography variant='h6'> Template:</Typography>
                    <Typography> {details?.template}</Typography>
                </Grid>
                <Grid className='token-resume-content'>
                    <Typography variant='h6'> Name:</Typography>
                    <Typography> {details?.name}</Typography>
                </Grid>
                <Grid className='token-resume-content'>
                    <Typography variant='h6'> Symbol:</Typography>
                    <Typography> {details?.symbol}</Typography>
                </Grid>
                <Grid className='token-resume-content'>
                    <Typography variant='h6'> Distribution:</Typography>
                    <div>
                        <PieChart id="distribution" chartData={details?.distribution || []} />
                    </div>
                </Grid>
                <Grid className='token-resume-content'>
                    <Typography variant='h6'> Blockchains:</Typography>
                    <div className='block-chain-img'>{details?.chains.map((chain, index) => (
                        <img src={chain.url} alt={index} />
                    ))}
                    </div>
                </Grid>

                <div className='build-btn'>
                    <Button type="submit" variant="contained">
                    Build
                    </Button>

                </div>

            </Grid>
        </Grid >




    )
}

export default TokenResume