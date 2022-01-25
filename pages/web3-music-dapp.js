import Head from "next/head";
import { Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unnamed Web3 Music Dapp | Mack Bowes</title>
        <link rel="icon" type="image/x-icon" href="/mesmrt.png"></link>
      </Head>
      <Box
        sx={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          width: `100vw`,
          backgroundColor: `#CC252C`,
          color: `#F9E6E6`,
          position: `relative`,
          userSelect: `none`,
          padding: [`2vh`, `0`],
        }}
      >
        <Page>
          <Heading as="h1">Unnamed Web3 Music Dapp</Heading>
          <Heading as="h3" sx={{ fontSize: `1.66rem` }}>
            The music industry has a compensation issue.
          </Heading>
          <Text sx={{ fontSize: `1rem`, maxWidth: `70ch` }}>
            Most music is enjoyed on ad-supported streaming networks globally
            now.
            <br />
            The protocol owners collect funds from advertisers, pay themselves
            first, and split crumbs between the artists that work tirelessly to
            create the art that draws people to the platform.
            <br />
            This stifles innovation and contributes to an ongoing mental health
            crises and deaths of despair.
            <br />
            At the same time, the two largest protocol owners (
            <Link
              href="https://www.forbes.com/sites/thomasbrewster/2020/12/22/google-promised-not-to-use-its-ai-in-weapons-so-why-is-alphabet-investing-in-ai-satellite-startups-with-military-contracts/?sh=61d678047595"
              target="_blank"
              rel="noreferrer"
              sx={{ fontWeight: `700`, transition: `all 0.25s` }}
              _hover={{ color: `#1089CC` }}
            >
              Google
            </Link>
            {" & "}
            <Link
              href="https://www.vice.com/en/article/epxxkn/musicians-are-dragging-spotifys-ceo-for-funding-a-military-ai-company"
              target="_blank"
              rel="noreferrer"
              sx={{ fontWeight: `700`, transition: `all 0.25s` }}
              _hover={{ color: `#1089CC` }}
            >
              Spotify
            </Link>
            ) are selecting to commit their profits to developing destructive
            technologies like AI powered autonomous weaponry. (See links.)
            <br />
            This brief synopsis of music-as-an-industry sounds like a B-Movie
            sci fi plot... but it quite literal.
            <br />
          </Text>
          <Heading as="h3" sx={{ fontSize: `1.66rem` }}>
            Web3 can redirect funds from warmongers and send it directly to
            artists.
          </Heading>
          <Text sx={{ fontSize: `1rem`, maxWidth: `70ch` }}>
            This page outlines how.
          </Text>
        </Page>
        <Page>
          <Heading as="h2">The New Tech Enabling This</Heading>
          <Text sx={{ fontSize: `1rem`, maxWidth: `70ch` }}>
            Most people see cryptocurrencies as 'stonks,' essentially a casino
            game where you attempt to time your purchases and sales to maximize
            a return of local fiat currency.
            <br />
            This makes sense... the people with easy access to computers and the
            internet live in a state of near perpetual overwhelm and aim to
            simplify wherever they can.
            <br />
            But it's an incomplete view. I can't speak to the Bitcoin side, but
            on Ethereum and Ethereum compatible networks, the cryptocurrency
            represents access to processing power on a global, decentralized,
            and open computer.
            <br />
          </Text>
          <Heading as="h4" sx={{ fontSize: `1.66rem` }}>
            Reading an Open Book
          </Heading>
          <Text sx={{ fontSize: `1rem`, maxWidth: `70ch` }}>
            The openness is the key enabling factor here.
            <br />
            People are able to see not only that other people are paying for
            music, but how much, and to whom.
            <br />
            The exact distribution of funds for the experience of listening to a
            recorded artefact is plainly visible to everyone via apps called
            BlockScanners that read blockchains and transmute the information
            they contain to human readable versions.
            <br />
            This goes a long way to eliminate corruption, prove that companies
            and organizations do what they say they're doing, and introduces
            sociological network effects that have ramifications that have not
            been fully explored.
            <br />
          </Text>
        </Page>
        <Page>
          <Heading as="h2">
            Micropayment Channels, SFT Rundles, NFT Albums
          </Heading>
          <Text>
            Blockchains have come a long way since their inception.
            <br />
            The core idea of openness is a great promise, but is insufficient
            for effecting social and economic change without specific enabling
            processes and technologies.
            <br />
            Thankfully, Ethereum has introduced exactly the required processes
            and technologies, and they simply have not yet been combined to
            solve music streaming.
            <br />
          </Text>
          <Heading as="h4" sx={{ fontSize: `1.33rem` }}>
            Micropayments
          </Heading>
          <Text>
            The Solidity (Ethereum programming language) documentation describes
            a pattern they call a{" "}
            <Link
              href="https://docs.soliditylang.org/en/v0.8.11/solidity-by-example.html#writing-a-simple-payment-channel"
              target="_blank"
              rel="noreferrer"
              sx={{ fontWeight: `700`, transition: `all 0.25s` }}
              _hover={{ color: `#1089CC` }}
            >
              "Payment Channel."
            </Link>{" "}
            This pattern enables off-chain payment authorization - words, right?
            In essence, this would allow a user to send a sum of money to a
            smart contract once, and authorize specific payments while using an
            app normally - watching videos, streaming music, saving artwork...
            any SaaS offering that has a computational cost can now benefit
            directly from streaming payments.
            <br />
            The pattern also has the added benefit of 'rage-quitting' - at any
            time, the sender of funds can exit their position and spend their
            remaining money with a different service, if they so chose.
            <br />
            This means no more overbilling for users, and no more power users
            taking up more than their fair share for SaaS founders.
            <br />
            Additionally, it means significantly lower UX friction for users -
            instead of signing a payment transaction for each stream, they can
            pay once to 'top up' their balance, and the payments for each stream
            are deducted automatically.
            <br />
          </Text>
          <Heading as="h4" sx={{ fontSize: `1.33rem` }}>
            SFT Rundles
          </Heading>
          <Text>
            Another payment stream option is to more directly copy existing UX
            flows.
            <br />
            The ERC-1155 specification allows for "semi-fungible tokens" -
            cryptographic entities that contain an index and metadata like an
            NFT, but multiple instances may exist and be traded equally.
            <br />
            This allows for the creation of on-chain rundles - recurring bundles
            - by using web3 authentication techniques to ensure a user currently
            holds a specific ERC-1155 at a specific index before accessing
            streaming data... while the service operator is ensuring that the
            required ERC-1155 index is incrementing periodically.
            <br />
            This arrangement would look and feel like a trade-able "battle pass"
            - a user would pay to mint an ERC-1155 to gain access to a service
            for a month, but if they decided they didn't want the service they
            could sell the ERC-1155 at a reduced rate to reflect the lowered
            utility of the slightly used "subscription".
            <br />
            This kind of thing seems strange when discussing music, but the UX
            is so similar to existing infrastructure that it may make onboarding
            easier, and can exist in tandem with direct payments.
            <br />
          </Text>
          <Heading as="h4" sx={{ fontSize: `1.33rem` }}>
            NFT Albums
          </Heading>
          <Text>
            This idea is exciting to the market, but I'm currently unsure of the
            long-term feasibility.
            <br />
            An NFT Album would involve an artist launching a restricted index
            set of ERC-721 tokens, with a payable 'mint' function (ie, an album
            'sale'), which would enable the listener to stream the music
            digitally free of charge.
            <br />
            At a certain point in time, perhaps after 100,000 streams per NFT,
            the costs of providing further streams outstrip the revenue
            generated by an NFT sale.
            <br />
            This runs counter to the idea of an NFT, and perhaps counter to the
            idea of an open internet in general.
            <br />
            I'm not quite sure how to implement this technology into music in a
            sustainable way.
            <br />
          </Text>
        </Page>
        <Page>
          <Heading as="h2">
            Imperfect Confidence Solved By DAOs &amp; Direct Democracy
          </Heading>
          <Text>
            I do not and can not know everything.
            <br />
            Even in the previous section, I was openly musing on how I'm not
            sure that NFTs, one of the core primitives that onboarded thousands
            of users in recent years, may not be compatible with music.
            <br />A single person shouldn't be in charge of the problem we
            listed in the first section - first, it's a difficult problem one
            person is unlikely to solve on their own, and second, if one person
            did manage such a protocol, it would invariably lead to a repeat of
            the corruption we see with the CEO model in web2.<br />
            This is why Decentralized Autonomous Organizations are key 
          </Text>
        </Page>
      </Box>
    </>
  );
}

const Page = (props) => {
  return (
    <Box
      sx={{
        display: `grid`,
        placeItems: `center`,
        width: `100vw`,
        minHeight: `100vh`,
      }}
    >
      <Box
        sx={{
          display: `flex`,
          flexDirection: `column`,
          gap: `1rem`,
          maxWidth: [`90vw`, `650px`],
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};
