<template>
  <Project project_name="dex_integration">
    <p class="pb-2">
      When I was serving as the Head of Data at <PlacesCCData/>, we had
      offerings for both centralized exchange (CEX) and decentralized exchange
      (DEX) data. While CEX data was directly handled by us, the DEX data was
      sourced from a third-party provider. This data represented exchanges
      operating on the blockchain, and we had observed some room for improvement
      in its quality and applicability.
    </p>

    <p class="pb-2">
      In light of the potential for enhancing the DEX data, I was tasked to
      review our current dataset and explore possible ways of making it more
      valuable for our operations and clients.
    </p>

    <p class="pb-2">
      Upon examining the existing DEX data, I discovered various issues like
      missing entries, replicated data, and inaccuracies. In response, I
      designed a proof-of-concept (POC) for an Extract, Transform, Load (ETL)
      pipeline using Python. This POC showed how we could pull data directly
      from the blockchain and perform automatic quality assurance checks.
    </p>

    <p class="pb-2">
      To broaden our understanding and capabilities, I led extensive research
      into the operations of different DEXs and blockchain platforms. This study
      aimed to identify potential methods of integrating with them. I also
      conducted monthly seminars to upskill the company about the on-chain
      environment. These seminars were well-received, with a quarter of the
      company's staff attending regularly.
    </p>

    <p>
      The engineering team used the POC I developed to create
      <a href="https://ccdata.io/data/on-chain-data" class="link-primary link"
        >a new product</a
      >
      that is now offered through our
      <a href="https://developers.cryptocompare.com/" class="link-primary link"
        >API</a
      >. This product dramatically improved the quality of our DEX data. Access
      to on-chain data also enabled us to launch new products, including
      blockchain metrics. Furthermore, the seminars significantly increased the
      company's blockchain competency, enabling other teams to use the data
      directly from the blockchain. This improved understanding and direct data
      usage enhanced the quality of our offerings.
    </p>
  </Project>
</template>

<script setup></script>
