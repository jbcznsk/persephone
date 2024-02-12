import { Plant } from '../Plant/Plant'
import './PlantLine.css'
import { Grid } from '@mui/material'

export const PlantLine = (props) => {
    return (
        <div>
            <Grid container spacing={3} alignItems={'center'} alignContent={'center'} alignSelf={'center'}>
                <Grid item xs={3} >
                    <Plant
                        name={props.p1name}
                        src={props.p1src}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Plant
                        name={props.p2name}
                        src={props.p2src}
                    />
                </Grid>
                <Grid item xs={3}>
                <Plant
                        name={props.p3name}
                        src={props.p3src}
                    />
                </Grid>
                <Grid item xs={3}>
                <Plant
                        name={props.p4name}
                        src={props.p4src}
                    />
                </Grid>
            </Grid>
        </div>
    )
}