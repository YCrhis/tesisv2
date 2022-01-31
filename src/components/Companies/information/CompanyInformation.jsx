import React from 'react'

/* styles */
import './companyInformation.scss'
/* icons */
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CameraIcon from '@material-ui/icons/Camera';
import TwitterIcon from '@material-ui/icons/Twitter';

import { Grid } from '@material-ui/core'

function CompanyInformation({ data }) {

    console.log(data)

    return (
        <div maxwidth="lg" className="companyInformation__container">
            <div className="companyInformation__image">
                <img src={data?.imageUrl} alt={data?.name} />
            </div>
            <div className="companyInformation__information">
                <h1>{data?.name}</h1>
                <p className="companyInformation__gmail"><span >{data?.email}</span></p>
                <p className="companyInformation__description">{data?.description}</p>
                <div className="companyInformation__socialMedia">
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >

                        {data?.youtube === "undefined" ? null :
                            <Grid item lg={2}>
                                <a href={data?.youtube} target="_blank" rel="noreferrer" title="Página de youtube">
                                    <YouTubeIcon />
                                </a>
                            </Grid>
                        }
                        {data?.twitter &&
                            <Grid item lg={2}>
                                <a href={data?.twitter} target="_blank" rel="noreferrer" title="Página de twiter">
                                    <TwitterIcon />
                                </a>
                            </Grid>
                        }
                        {data?.facebook &&
                            <Grid item lg={2}>
                                <a href={data?.facebook} target="_blank" rel="noreferrer" title="Página de facebook">
                                    <FacebookIcon />
                                </a>
                            </Grid>
                        }
                        {data?.instagram &&
                            <Grid item lg={2}>
                                <a href={data?.instagram} target="_blank" rel="noreferrer" title="Página de instagram">
                                    <InstagramIcon />
                                </a>
                            </Grid>
                        }
                        {data?.linkedin &&
                            <Grid item lg={2}>
                                <a href={data?.linkedin} target="_blank" rel="noreferrer" title="Página de linkedin">
                                    <LinkedInIcon />
                                </a>
                            </Grid>
                        }
                        {data?.webPage &&
                            <Grid item lg={2}>
                                <a href={data?.webPage} target="_blank" rel="noreferrer" title="Página de la empresa">
                                    <CameraIcon />
                                </a>
                            </Grid>
                        }
                    </Grid>
                </div>
                <div className="companyInformation__extraInformation">
                    <div className="companyInformation__extraInformationEach">
                        <i className="far fa-user"></i>
                        <div>
                            <p>Trabajadores</p>
                            <p>{data?.workers}</p>
                        </div>
                    </div>
                    <div className="companyInformation__extraInformationEach">
                        <i className="far fa-thumbs-up"></i>
                        <div>
                            <p>Verificado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyInformation
