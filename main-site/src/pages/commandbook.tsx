import { graphql } from 'gatsby';
import Layout from '../components/layout.component';
import SEO from '../components/seo.component';
import React from 'react';
import { ContainerPadded } from '../components/container.component';
import Row from '../components/grid/row.component';
import ColumnsQuarter, {
    ColumnsThreeQuarter,
} from '../components/grid/columns-4.component';
import SidebarHeading from '../components/sidebar/sidebar-heading.component';
import { FixedObject } from 'gatsby-image';
import SidebarIcon from '../components/sidebar/sidebar-icon.component';
import {
    SidebarNavList,
    SidebarNavListItem,
} from '../components/sidebar/sidebar-nav.component';
import { MainOutboundLink, MainLink } from '../components/link.component';
import SidebarDivider from '../components/sidebar/sidebar-divider.component';
import SubtleText from '../components/subtle-text.component';
import JumbotronContainer, {
    JumbotronText,
    JumbotronButtonBox,
} from '../components/jumbotron.component';
import SectionHeading from '../components/section-heading.component';
import GitHubButton from 'react-github-btn';
import PlatformBanner from '../components/platform-banner.component';
import {
    GrayOutboundButton,
    BlueButton,
    BlueOutboundButton,
} from '../components/button.component';
import { WarningLabel, InfoLabel } from '../components/label.component';

interface CommandBookPageData {
    file: {
        childImageSharp: {
            fixed: FixedObject;
        };
    };
    allFile: {
        nodes: {
            childImageSharp: {
                fixed: FixedObject;
            };
            name: string;
        }[];
    };
}

const CommandBookPage = ({ data }: { data: CommandBookPageData }) => {
    const logoMap = new Map(
        data.allFile.nodes.map(node => [node.name, node.childImageSharp.fixed])
    );
    return (
        <Layout>
            <SEO
                title="CommandBook"
                description="CommandBook provides a long list of basic, 'default' commands for you and your players on any Bukkit server."
                image={data.file.childImageSharp.fixed.src}
            />
            <ContainerPadded>
                <Row>
                    <ColumnsQuarter>
                        <SidebarIcon
                            image={data.file.childImageSharp.fixed}
                            alt={'CommandBook Logo'}
                        />
                        <SidebarHeading>CmdBook</SidebarHeading>
                        <SidebarNavList>
                            <SidebarNavListItem>
                                <MainLink to={'/commandbook/#features'}>
                                    Features
                                </MainLink>
                            </SidebarNavListItem>
                            <SidebarNavListItem>
                                <MainLink to={'/commandbook/#videos'}>
                                    Videos
                                </MainLink>
                            </SidebarNavListItem>
                            <SidebarNavListItem>
                                <MainLink to={'/commandbook/#downloads'}>
                                    Downloads
                                </MainLink>
                            </SidebarNavListItem>
                            <SidebarNavListItem>
                                <MainOutboundLink href="http://wiki.sk89q.com/wiki/commandbook">
                                    Documentation
                                </MainOutboundLink>
                            </SidebarNavListItem>
                            <SidebarNavListItem>
                                <MainOutboundLink href="https://discord.gg/enginehub">
                                    Discord
                                </MainOutboundLink>
                            </SidebarNavListItem>
                            <SidebarNavListItem>
                                <MainOutboundLink href="https://dev.enginehub.org/youtrack/issues/CMDBOOK">
                                    Bug / Feature Tracker
                                </MainOutboundLink>
                            </SidebarNavListItem>
                            <SidebarNavListItem>
                                <MainOutboundLink href="https://github.com/EngineHub/CommandBook">
                                    Source Code
                                </MainOutboundLink>
                            </SidebarNavListItem>
                        </SidebarNavList>
                        <SidebarDivider />
                        <SubtleText>Project lead: Dark_Arc</SubtleText>
                        <GitHubButton
                            href="https://github.com/EngineHub/commandbook"
                            data-icon="octicon-star"
                            data-show-count="true"
                            aria-label="Star EngineHub/commandbook on GitHub"
                        >
                            Star
                        </GitHubButton>
                    </ColumnsQuarter>
                    <ColumnsThreeQuarter>
                        <JumbotronContainer>
                            <JumbotronText>
                                CommandBook provides a long list of basic,
                                "default" commands for you and your players on
                                any Bukkit server.
                            </JumbotronText>
                            <JumbotronButtonBox>
                                <BlueButton to={'/commandbook/#downloads'}>
                                    List downloads
                                </BlueButton>
                            </JumbotronButtonBox>
                        </JumbotronContainer>
                        <SectionHeading id="features">Features</SectionHeading>
                        <ul>
                            <li>
                                Modular, and extremely light on your server.
                            </li>
                            <li>
                                Add multiple types of easy-to-use teleportation
                                commands.
                            </li>
                            <li>
                                Change time without having to remember the
                                numbers (/time 3am works)
                            </li>
                            <li>
                                Add support for homes and warps for your
                                players.
                            </li>
                            <li>Change weather with ease.</li>
                            <li>
                                Play with your players using commands like
                                /slap.
                            </li>
                            <li>Ban and kick users that are troublesome.</li>
                            <li>Do more! The list of features is below.</li>
                            <li>
                                Enable features that you need, disable ones that
                                you don't
                            </li>
                        </ul>
                        <p>
                            <InfoLabel>Did you know?</InfoLabel> CommandBook was the first addon for
                            Minecraft that let you enter expressions (such as{' '}
                            <code>#near</code>) and natural language parameters
                            ("3am" rather than "15450") for commands.
                        </p>
                        <SectionHeading id="videos">
                            Watch it in action
                        </SectionHeading>
                        <iframe
                            width="100%"
                            height="410"
                            src="https://www.youtube.com/embed/CFJ2D_Wpcxk?theme=light&amp;rel=0"
                            frameBorder={0}
                            allowFullScreen={true}
                        />
                        <SectionHeading id="downloads">
                            Downloads
                        </SectionHeading>
                        <p>Please choose a download for your platform.</p>
                        <PlatformBanner
                            logo={logoMap.get('bukkit-logo')!}
                            alt={'Bukkit'}
                        >
                            <p>We officially support CommandBook for Bukkit.</p>
                            <p>
                                <BlueOutboundButton
                                    href={
                                        'http://dev.bukkit.org/bukkit-plugins/commandbook/files/'
                                    }
                                >
                                    Latest release for Bukkit
                                </BlueOutboundButton>
                            </p>
                            <p>
                                <GrayOutboundButton
                                    href={
                                        'http://builds.enginehub.org/job/commandbook'
                                    }
                                >
                                    Experimental builds for Bukkit
                                </GrayOutboundButton>
                            </p>
                            <p>
                                <WarningLabel>Note!</WarningLabel> CommandBook
                                requires that{' '}
                                <MainLink to={'/worldedit/'}>
                                    WorldEdit
                                </MainLink>{' '}
                                is installed.
                            </p>
                            <ol>
                                <li>
                                    Find the <em>plugins</em> folder inside your
                                    Bukkit server's folder.
                                </li>
                                <li>
                                    Place the downloaded ".jar" file in your
                                    plugins folder.
                                </li>
                                <li>
                                    Start your server as you may have done
                                    before.
                                </li>
                                <li>
                                    Either configure your permissions plugin (if
                                    you are using one); otherwise, use{' '}
                                    <b>/op your_name</b> to make yourself a
                                    server operator.
                                </li>
                            </ol>
                        </PlatformBanner>
                    </ColumnsThreeQuarter>
                </Row>
            </ContainerPadded>
        </Layout>
    );
};

export default CommandBookPage;

export const query = graphql`
    query {
        file(name: { eq: "commandbook-icon" }) {
            childImageSharp {
                fixed(width: 100, height: 100, quality: 100) {
                    ...GatsbyImageSharpFixed_tracedSVG
                }
            }
        }
        allFile(filter: { name: { in: ["bukkit-logo"] } }) {
            nodes {
                childImageSharp {
                    fixed(width: 150, quality: 100) {
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
                name
            }
        }
    }
`;
