import React from 'react'

/* styles */
import './companyInformation.scss'
/* icons */
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ChatIcon from '@material-ui/icons/Chat';
function CompanyInformation({ data }) {
    return (
        <div className="company__information">
            {data &&
                <div className="company__information__container">
                    <img src={data.image} alt="" />
                    <div className="company__information__text">
                        <h2>{data.name}</h2>
                        {/* {data.webPage
                            <a href=""></a>
                        } */}

                        <p>{data.description}</p>
                        <div className="company-social-medias">
                            {/* <button>Iniciar Converzacion <ChatIcon /></button> */}
                            {data.linkedin &&
                                <LinkedInIcon className="icon-social" />
                            }
                            {data.facebook &&
                                <FacebookIcon className="icon-social" />
                            }
                            {data.instagram &&
                                <InstagramIcon className="icon-social" />
                            }
                            {data.youtube &&
                                <YouTubeIcon className="icon-social" />
                            }

                        </div>
                    </div>
                </div>
            }

        </div >
    )
}

export default CompanyInformation
