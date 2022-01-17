import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

export default function Home() {
  return (
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
          }}
          draggable="false"
        />
        <Heading as="h1" sx={{ fontSize: [`3rem`, `6rem`] }}>
          Mack Bowes
        </Heading>
        <Heading as="h3">
          React | Node | Solidity | Tokenomics | Audits | Shilling
        </Heading>
        <Text sx={{ margin: `1rem 0` }}>
          Member of Raidguild, Shillshop, and Quiver DAOs.
          <br />
          Currently working on SW DAO, STOA, METL, The Green Pill, and ShillShop
          Podcast/Twitter Spaces.
          <br />
          Looking to create a Decentralized Web3 enabled Spotify alternative
          2022.
          <br />
          Feel free to reach out for a podcast/twitter spaces appearance or
          product consult.
        </Text>
        <Box sx={{ minHeight: `1rem` }}></Box>
        <Box sx={{ display: `flex`, gap: `1rem` }}>
          <a
            href="https://twitter.com/mackenziepbowes"
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
              }}
              _hover={{
                backgroundColor: `#F9E6E6`,
                cursor: `pointer`,
                color: `#CC252C`,
              }}
            >
              Twitter →
            </Text>
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
        </Box>
      </Box>
    </Box>
  );
}
