import * as React from "react";
import PurposeSingle from "./PurposeSingle";
import SubHeader from "./SubHeader";
import {BanyanMhUrl, HarveyNashUrl, NhsUkUrl} from "../Constants/SingleLinks";

export default class Purpose extends React.Component {
    render() {
        return (
            <section
                className={'purpose_section'}
            >
                <SubHeader
                    title={"Our Purpose"}
                    desc={"We aim to create a safe space where programmers, techies, IT professionals, 'nerds' and generally anyone, can come and reflect, contribute and learn."}
                />
                <p>
                    Our aims
                </p>
                <div
                    className={'purpose_purposeList'}
                >
                    <PurposeSingle
                        headline={"Reflect"}
                        desc={"It's very easy to feel alone and isolated whilst struggling with mental health issues. " +
                                "We hope that this site can be used as a place to read and understand that you're far from alone" +
                                ", help is always available and it's not 'one size fits all'. There are many ways of dealing" +
                                " with mental health concerns. Hopefully you'll find some here."
                        }
                        quote={"Half of tech professionals in the UK (+600,000) have been concerned about their " +
                                "state of mental health due to work"
                        }
                        quoteSource={"Harvey Nash"}
                        quoteUrl={HarveyNashUrl}
                    />
                    <PurposeSingle
                        headline={"Contribute"}
                        desc={"Share if you're ready, program if you're not. This site has been purposefully left rather basic. " +
                                "We'd love for all the content, design and techie features to be build by the community. " +
                                "Our guide on contributing both code and personal experiences can be found at the link below."
                        }
                        quote={"By talking about mental illness on a more regular basis, we as a society will hopefully unveil the false notions that plague this topic." +
                                " When these myths are debunked, it should help remove the stigma surrounding mental health."
                        }
                        quoteSource={"Banyan Mental Health"}
                        quoteUrl={BanyanMhUrl}
                    />
                    <PurposeSingle
                        headline={"Learn"}
                        desc={"Understanding mental health issues can go a long way, whether it is understanding your own thoughts and feelings, " +
                                "or being able to empathise with a friend or colleagues. This site hopes to share knowledge and resources on " +
                                "mental health."}
                        quote={"Research shows that learning new skills can also improve your mental wellbeing by: " +
                                "boosting self-confidence and raising self-esteem, " +
                                "helping you to build a sense of purpose, " +
                                "helping you to connect with others"
                        }
                        quoteSource={"NHS"}
                        quoteUrl={NhsUkUrl}
                    />
                </div>
                <p>
                    Let's talk about mental health
                </p>
                <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/hashtag/talkaboutmentalhealth"}>
                    #TalkAboutMentalHealth
                </a>
            </section>
        )
    }
}