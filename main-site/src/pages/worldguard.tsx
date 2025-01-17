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
import { WarningLabel } from '../components/label.component';

interface WorldGuardPageData {
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

const WorldGuardPage = ({ data }: { data: WorldGuardPageData }) => {
    const logoMap = new Map(
        data.allFile.nodes.map(node => [node.name, node.childImageSharp.fixed])
    );
    return (
        <Layout>
            <SEO
                title="WorldGuard"
                description="WorldGuard lets you and players guard areas of land against griefers and undesirables, as well as tweak and disable various gameplay features of Minecraft."
                image={data.file.childImageSharp.fixed.src}
            />
            <ContainerPadded>
                <Row>
                    <ColumnsQuarter>
                        <SidebarIcon
                            image={data.file.childImageSharp.fixed}
                            alt={'WorldGuard Logo'}
                        />
                        <SidebarHeading>WorldGuard</SidebarHeading>
                        <SidebarNavList>
                            <SidebarNavListItem>
                                <MainLink to={'/worldguard/#features'}>
                                    Features
                                </MainLink>
                            </SidebarNavListItem>
                            <SidebarNavListItem>
                                <MainLink to={'/worldguard/#videos'}>
                                    Videos
                                </MainLink>
                            </SidebarNavListItem>
                            <SidebarNavListItem>
                                <MainLink to={'/worldguard/#downloads'}>
                                    Downloads
                                </MainLink>
                            </SidebarNavListItem>
                            <SidebarNavListItem>
                                <MainOutboundLink href="https://worldguard.rtfd.io">
                                    Documentation
                                </MainOutboundLink>
                            </SidebarNavListItem>
                            <SidebarNavListItem>
                                <MainOutboundLink href="https://discord.gg/enginehub">
                                    Discord
                                </MainOutboundLink>
                            </SidebarNavListItem>
                            <SidebarNavListItem>
                                <MainOutboundLink href="https://dev.enginehub.org/youtrack/issues/WORLDGUARD">
                                    Bug / Feature Tracker
                                </MainOutboundLink>
                            </SidebarNavListItem>
                            <SidebarNavListItem>
                                <MainOutboundLink href="https://github.com/EngineHub/WorldGuard">
                                    Source Code
                                </MainOutboundLink>
                            </SidebarNavListItem>
                        </SidebarNavList>
                        <SidebarDivider />
                        <SubtleText>
                            Project lead:{' '}
                            <MainOutboundLink href="https://twitter.com/the_me4502">
                                Me4502
                            </MainOutboundLink>
                        </SubtleText>
                        <GitHubButton
                            href="https://github.com/EngineHub/worldguard"
                            data-icon="octicon-star"
                            data-show-count="true"
                            aria-label="Star EngineHub/worldguard on GitHub"
                        >
                            Star
                        </GitHubButton>
                    </ColumnsQuarter>
                    <ColumnsThreeQuarter>
                        <JumbotronContainer>
                            <JumbotronText>
                                WorldGuard lets you and players guard areas of
                                land against griefers and undesirables, as well
                                as tweak and disable various gameplay features
                                of Minecraft.
                            </JumbotronText>
                            <JumbotronButtonBox>
                                <BlueButton to={'/worldguard/#downloads'}>
                                    List downloads
                                </BlueButton>
                            </JumbotronButtonBox>
                        </JumbotronContainer>
                        <SectionHeading id="features">Features</SectionHeading>
                        <ul>
                            <li>
                                Block creeper and wither block damage, falling
                                damage, etc.
                            </li>
                            <li>
                                Disable fire spread, lava fire spread, ice
                                formation, Endermen picking up blocks, etc.
                            </li>
                            <li>
                                Blacklist certain items and blocks so they can't
                                be used.
                            </li>
                            <li>
                                Warn moderators when certain items and blocks
                                are used.
                            </li>
                            <li>
                                Protect areas of your world so only certain
                                people can build in them.
                            </li>
                            <li>
                                Set areas where PVP, TNT, mob damage, and other
                                features are disabled.
                            </li>
                            <li>
                                Protect your server from various 'exploits' like
                                magical obsidian creation machines.
                            </li>
                            <li>
                                Disable, or enable, various Minecraft features,
                                like sponges from classic.
                            </li>
                            <li>
                                Add useful commands like an immediate "STOP ALL
                                FIRE SPREAD" command.
                            </li>
                            <li>
                                Enable only features you want! Everything is off
                                by default.
                            </li>
                        </ul>
                        <SectionHeading id="videos">
                            Watch it in action
                        </SectionHeading>
                        <iframe
                            width="100%"
                            height="410"
                            src="https://www.youtube.com/embed/2BaA6ma8L-E?theme=light&amp;rel=0"
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
                            <p>We officially support WorldGuard for Bukkit.</p>
                            <p>
                                <BlueOutboundButton
                                    href={
                                        'http://dev.bukkit.org/bukkit-plugins/worldguard/files/'
                                    }
                                >
                                    Latest release for Bukkit
                                </BlueOutboundButton>
                            </p>
                            <p>
                                <GrayOutboundButton
                                    href={
                                        'http://builds.enginehub.org/job/worldguard'
                                    }
                                >
                                    Experimental builds for Bukkit
                                </GrayOutboundButton>
                            </p>
                            <p>
                                <WarningLabel>Note!</WarningLabel> WorldGuard
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

export default WorldGuardPage;

export const query = graphql`
    query {
        file(name: { eq: "worldguard-icon" }) {
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
