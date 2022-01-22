import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mack Bowes</title>
        <link rel="icon" type="image/x-icon" href="/mesmrt.png"></link>
      </Head>
      <Box
        sx={{
          display: `grid`,
          placeItems: `center`,
          width: `100vw`,
          height: `100vh`,
          backgroundColor: `#CC252C`,
          color: `#F9E6E6`,
          position: `relative`,
          userSelect: `none`,
          overflowY: `hidden`,
          padding: [`2vh`, `0`],
        }}
      >
        <Box>
          <Image
            src="/mesmrt.png"
            alt="Mack Bowes"
            sx={{
              position: `absolute`,
              right: `0`,
              bottom: `0`,
              opacity: `0.5`,
              mixBlendMode: `luminosity`,
              userSelect: `none`,
              zIndex: `0`,
            }}
            draggable="false"
          />
          <Box sx={{ position: `relative`, zIndex: `2`}}>
            <Heading as="h1" sx={{ fontSize: [`3rem`, `6rem`] }}>
              Mack Bowes
            </Heading>
            <Heading as="h3">React | Node | Solidity | Shilling</Heading>
            <Text sx={{ margin: `1rem 0` }}>
              Member of{" "}
              <Link
                href="https://app.daohaus.club/dao/0x64/0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f"
                target="_blank"
                rel="noreferrer"
                sx={{ fontWeight: `700`, transition: `all 0.25s` }}
                _hover={{ color: `#1089CC` }}
              >
                Raidguild
              </Link>
              {" and "}
              <Link
                href="https://app.daohaus.club/dao/0x64/0x50d9fbebdd7fd36c0716fc1faaa9248bab6bbcc0"
                target="_blank"
                rel="noreferrer"
                sx={{ fontWeight: `700`, transition: `all 0.25s` }}
                _hover={{ color: `#1089CC` }}
              >
                Shillshop
              </Link>
              {" DAOs."}
              <br />
              Currently working on SW DAO, STOA, METL, The Green Pill, and
              ShillShop Podcast/Twitter Spaces.
              <br />
              Looking to create a Decentralized Web3 enabled Spotify alternative
              2022.
              <br />
              Feel free to reach out for a podcast/twitter spaces appearance or
              product consult.
            </Text>
            <Box sx={{ minHeight: `1rem` }}></Box>
            <Box
              sx={{
                display: `flex`,
                flexDirection: [`column`, `row`],
                gap: `1rem`,
                alignItems: `center`,
                zIndex: `3`,
                position: `relative`,
              }}
            >
              <a
                href="https://twitter.com/mackenziepbowes"
                target="_blank"
                rel="noreferrer"
              >
                <Box
                  sx={{
                    fontSize: `1rem`,
                    border: `2px solid #F9E6E6`,
                    borderRadius: `2rem`,
                    padding: `.5rem 3rem`,
                    display: `inline-block`,
                    transition: `all 0.25s`,
                    backgroundColor: [`#CC252C`, `#cc252c`],
                  }}
                  _hover={{
                    backgroundColor: `#F9E6E6`,
                    cursor: `pointer`,
                    color: `#CC252C`,
                  }}
                >
                  Twitter →
                </Box>
              </a>
              <a
                href="https://github.com/mackbowes"
                target="_blank"
                rel="noreferrer"
              >
                <Text
                  sx={{
                    fontSize: `1rem`,
                    border: `2px solid #F9E6E6`,
                    borderRadius: `2rem`,
                    padding: `.5rem 3rem`,
                    display: `inline-block`,
                    transition: `all 0.25s`,
                    backgroundColor: [`#CC252C`, `transparent`],
                  }}
                  _hover={{
                    backgroundColor: `#F9E6E6`,
                    cursor: `pointer`,
                    color: `#CC252C`,
                  }}
                >
                  Github →
                </Text>
              </a>
              <a
                href="https://www.raidguild.org/"
                target="_blank"
                rel="noreferrer"
              >
                <Text
                  sx={{
                    fontSize: `1rem`,
                    border: `2px solid #F9E6E6`,
                    borderRadius: `2rem`,
                    padding: `.5rem 3rem`,
                    display: `inline-block`,
                    transition: `all 0.25s`,
                    backgroundColor: [`#CC252C`, `transparent`],
                  }}
                  _hover={{
                    backgroundColor: `#F9E6E6`,
                    cursor: `pointer`,
                    color: `#CC252C`,
                  }}
                >
                  Raidguild →
                </Text>
              </a>
              <Text
                sx={{
                  fontSize: `1rem`,
                  border: `2px solid #F9E6E6`,
                  borderRadius: `2rem`,
                  padding: `.5rem 3rem`,
                  display: `inline-block`,
                  transition: `all 0.25s`,
                  backgroundColor: [`#CC252C`, `transparent`],
                }}
                _hover={{
                  backgroundColor: `#F9E6E6`,
                  cursor: `pointer`,
                  color: `#CC252C`,
                }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    "0xBc4A2b0B65e39bAE9bedad1798B824EAf0A60639"
                  );
                  toast.success("Address Copied to Clipboard", {
                    style: {
                      border: "1px solid #CC252C",
                      padding: "16px",
                      color: "#CC252C",
                      backgroundColor: `#F9E6E6`,
                    },
                    iconTheme: {
                      primary: "#CC252C",
                      secondary: "#FFFAEE",
                    },
                  });
                }}
              >
                Wallet →
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
