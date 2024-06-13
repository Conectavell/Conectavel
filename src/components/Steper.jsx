import React from 'react'
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

const Steper = () => {
    const [infoTrabalho, setInfoTrabalho] = React.useState(false);
    const [infoPessoais, setInfoPessoais] = React.useState(false)
    return (

        <Stepper
            orientation="horizontal"
            sx={{
                '--Stepper-horizontalGap': '2.5rem',
                '--StepIndicator-size': '2.5rem',
                '--Step-gap': '1rem',
                '--Step-connectorInset': '0.5rem',
                '--Step-connectorRadius': '1rem',
                '--Step-connectorThickness': '4px',
                '--joy-palette-success-solidBg': 'var(--joy-palette-success-400)',
                [`& .${stepClasses.completed}`]: {
                    '&::after': { bgcolor: 'success.solidBg' },
                },
                [`& .${stepClasses.active}`]: {
                    [`& .${stepIndicatorClasses.root}`]: {
                        border: '4px solid',
                        borderColor: '#fff',
                        boxShadow: (theme) =>
                            `0 0 0 1px ${theme.vars.palette.primary[500]}`,
                    },
                },
                [`& .${stepClasses.disabled} *`]: {
                    color: 'neutral.softDisabledColor',
                },
                [`& .${typographyClasses['title-sm']}`]: {
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '10px',
                },
            }}
            style={{ marginTop: '2rem' }}
        >
            <Step
                indicator={
                    <StepIndicator variant="solid" color="success">
                        <StepIndicator variant="solid" color={infoPessoais ? 'success' : 'primary'}>
                            {infoPessoais ? (
                                <CheckRoundedIcon onClick={() => setInfoPessoais(!infoPessoais)} />
                            ) : (
                                <AppRegistrationRoundedIcon onClick={() => setInfoPessoais(!infoPessoais)} />
                            )}
                        </StepIndicator>
                    </StepIndicator>
                }
            >
                <div>
                    <Typography level="title-sm">Passo 1</Typography>
                    Informações pessoais
                </div>
            </Step>

            <Step
                completed
                indicator={
                    <StepIndicator variant="solid" color={infoTrabalho ? 'success' : 'primary'}>
                        {infoTrabalho ? (
                            <CheckRoundedIcon onClick={() => setInfoTrabalho(!infoTrabalho)} />
                        ) : (
                            <AppRegistrationRoundedIcon onClick={() => setInfoTrabalho(!infoTrabalho)} />
                        )}
                    </StepIndicator>
                }>
                <div>
                    <Typography level="title-sm">Passo 2</Typography>
                    Informações de trabalho
                </div>
            </Step>
        </Stepper>
    )
}

export default Steper
