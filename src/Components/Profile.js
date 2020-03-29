import * as React from "react";
import {SocialIcon} from "react-social-icons";

export default function Profile(props){
    return (
        <div>
            <div
                className="profile_personalDetails"
            >
                {
                    props.image &&
                        <div
                            className="profile_personalDetails-imageWrapper"
                        >
                            <img
                                className="profile_personalDetails-image"
                                alt={"profile"}
                                src={props.image}
                            />
                        </div>
                }

                <div>
                    <h3>
                        {props.name}
                    </h3>
                    <p>
                        {props.job} @ {props.employerCurrent}
                    </p>
                    <p>
                        {props.employerPrev && props.employerPrev.map((emp)=>{
                            return <span className='profile_personalDetails-prevRoleItem'>{emp}</span>
                        })}
                    </p>
                </div>
            </div>

            <div
                className="profile_personalDetails-socialsWrapper"
            >
                {
                    props.socials && props.socials.map((socialUrl)=>{
                        return <SocialIcon url={socialUrl} target="_blank" rel="noopener noreferrer"/>
                    })
                }
            </div>
        </div>
    )
}