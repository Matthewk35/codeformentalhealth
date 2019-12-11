import * as React from "react";
import {SocialIcon} from "react-social-icons";

export default function Profile(props){
    return (
        <div>
            <h3>
                {props.name}
            </h3>
            <p>
                {props.job} @ {props.employerCurrent}
            </p>
            <p>
                {props.employerPrev.map((emp)=>{return <span className='prevRoleItem'>{emp}</span>})}
            </p>
            <div>
                {
                    props.socials.map((socialUrl)=>{
                        return <SocialIcon url={socialUrl}/>
                    })
                }
            </div>
        </div>
    )
}