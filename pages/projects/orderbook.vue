<template>
  <Project project_name="orderbook">
    <p>
      Upon joining <PlacesCCData/>, I found that the development of an
      <a href="https://ccdata.io/data/order-book" class="link-primary link"
        >orderbook product</a
      >
      was underway. However, there were no established metrics to gauge the
      quality or accuracy of the data used, and no clients were utilizing the
      product.
    </p>

    <p>
      Recognizing these challenges, I set out to create metrics to monitor data
      quality and provide regular updates to the development team. My objective
      was to enhance the product's usability and reliability to a point where it
      would attract client interest.
    </p>

    <p>
      Firstly, I established a system to monitor the data quality of the
      underlying datasets. I tracked crucial parameters such as spread, depth,
      latency, last update time, and consistency. I discovered a high negative
      spread and when a client expressed interest in snapshots of the orderbook,
      I developed an application to clean up the data before delivering it. The
      quality reports I produced were utilized by the team to prioritize their
      efforts and understand the implications of their code changes.
    </p>

    <p>
      Subsequently, another client required metrics like spread, depth, and
      slippage. To fulfill this requirement, I created an application to compute
      these metrics historically on around 100 terabytes of data. The computed
      metrics were delivered daily to the client. This metrics product later
      became a main focus for the team to productionise. Additionally, when
      another client desired the data for backtesting purposes but was unable to
      handle the volume, I implemented smart trimming and wrote a custom replay
      code to facilitate their understanding of the orderbook.
    </p>

    <p>
      As a result of these initiatives, the daily reports enabled the team to
      identify and prioritize bug fixing. The reports proved to be so beneficial
      that I trained an analyst to rewrite the application to provide hourly
      reports. These reports were then stored in a database for ongoing
      monitoring. My efforts in cleaning up the team's data and preparing it for
      clients led to sales that accounted for 3% of the company's annual
      revenue.
    </p>
  </Project>
</template>

<script setup></script>
