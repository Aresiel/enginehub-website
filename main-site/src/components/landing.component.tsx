import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Navbar from './navbar.component';
import { Container } from './container.component';

interface LandingProps {
    discordOverride?: string;
}

const HeaderWrapper = styled.div`
    overflow: hidden;
    height: 32rem;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 430px) {
        height: 24rem;
    }
`;

const HeaderImg = styled(Img)`
    width: 100%;
    height: 100%;
`;

const HeaderContent = styled.div`
    position: absolute;
    top: 1rem;
    width: 100%;
    height: 24rem;
    padding-top: 0px;
    padding-bottom: 30px;
`;

const LandingText = styled.div`
    padding: 50px 0;
    text-align: center;
`;

const Title = styled.h1`
    color: #ffffff;
    line-height: 1.2;
    font-size: 30px;
    margin-top: 23px;
    margin-bottom: 11.5px;
    font-weight: 500;
    max-width: 720px;

    @media (min-width: 768px) {
        font-size: 36px;
        max-width: 940px;
    }
`;

const Subtitle = styled.h2`
    color: #b4a1d3;
    font-size: 14px;
    margin: 0 0 11.5px;
    line-height: 1.7;
    font-weight: 400;
    max-width: 720px;

    @media (min-width: 768px) {
        font-size: 16px;
        max-width: 940px;
    }
`;

// tslint:disable: jsx-no-lambda
export const Landing: FunctionComponent<LandingProps> = (props) => {
    return (
        <>
            <HeaderWrapper>
                <StaticQuery
                    query={query}
                    render={data => {
                        return (
                            <HeaderImg
                                fluid={data.file.childImageSharp.fluid}
                            />
                        );
                    }}
                />
                
                <HeaderContent>
                    <Navbar inverted={true} discordOverride={props.discordOverride} />
                    <LandingText>
                        <Container>
                            <Title>
                                Open-source mods for and by the Minecraft community
                            </Title>
                            <Subtitle>
                                We're a collection of mods, plugins, and tools created
                                for Minecraft by members of the community. Our projects
                                are all open source and power all varieties of servers —
                                from the large to the family-sized. Many of our projects
                                are available, officially or unofficially, for Bukkit,
                                Sponge, Minecraft Forge, MinecraftEdu, LiteLoader, and
                                other platforms.
                            </Subtitle>
                        </Container>
                    </LandingText>
                </HeaderContent>
            </HeaderWrapper>
        </>
    );
};

const query = graphql`
    query {
        file(relativePath: { eq: "landing-bg.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;
