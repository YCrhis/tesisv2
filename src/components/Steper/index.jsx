import { Step, StepLabel, Stepper, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    step: {
        width: '60%'
    }
}));


const MyStepper = ({ activeStep }) => {
    const classes = useStyles();

    return (
        <>
            <Stepper activeStep={activeStep} className={classes.step} alternativeLabel>
                <Step>
                    <StepLabel>Ingresar datos</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Esperar Aprobación</StepLabel>
                </Step>
            </Stepper>
        </>
    )
}
export default MyStepper