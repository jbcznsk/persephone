import { Plant } from '../Plant/Plant'
import './PlantLine.css'
import { Grid } from '@mui/material'

export const PlantLine = (props) => {
    return (
        <div>
            <Grid container spacing={3} alignItems={'center'} alignContent={'center'} alignSelf={'center'}>
                <Grid item xs={3} >
                    <Plant
                        name="monstera"
                        src='monstera.jpg'>
                    </Plant>
                </Grid>
                <Grid item xs={3}>
                    <Plant
                        name="alocasia"
                        src='alocasia.jpg'>
                    </Plant>
                </Grid>
                <Grid item xs={3}>
                    <Plant
                        name="girasol"
                        src='girasol.jpg'>
                    </Plant>
                </Grid>
                <Grid item xs={3}>
                    <Plant
                        name="cacto"
                        src='cacto.jpg'>
                    </Plant>
                </Grid>
            </Grid>
        </div>
    )
}