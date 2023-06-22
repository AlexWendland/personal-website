<template>
  <Project project_name="data_infrastructure">
    <p>
      When I joined
      <a href="https://ccdata.io/" class="link-primary link">CC Data</a> I
      observed several challenges in our data infrastructure. The data team, who
      worked in python, was heavily reliant on a central
      <a href="https://github.com/" class="link-primary link">GitHub</a>
      monorepo. There was widespread duplication of code, often involving minor
      modifications to copied scripts. Client deliveries were conducted via
      these scripts, resulting in client complaints due to inconsistent service.
      This lead to hesitations in deploying revenue-generating Python scripts.
      Lack of robust package management, absent application tests, and intricate
      data storage architecture were also posing significant problems. Moreover,
      the monitoring of our data quality was not up to par.
    </p>

    <p>To address these issues, I set the following objectives:</p>
    <ol class="list-outside list-decimal pl-4">
      <li class="pb-1">Minimize code duplication</li>
      <li class="pb-1">
        Implement an infrastructure where data could be instantaneously
        accessed, and computations could be conducted where the data was stored
      </li>
      <li class="pb-1">
        Reduce client complaints by incorporating logging and event warnings
      </li>
      <li>Create a reliable deployment system to win the CTO's trust</li>
    </ol>
    <p>
      I began by restructuring our monorepo by product to make it more
      organized. I then developed libraries to standardize our solutions to
      recurring issues. In collaboration with the DevOps team, we transitioned
      our deployment process to
      <a href="https://kubernetes.io/" class="link-primary link">Kubernetes</a>
      using
      <a href="https://www.docker.com/" class="link-primary link">Docker</a>
      containers. We established a Continuous Integration/Continuous Deployment
      (CI/CD) pipeline using
      <a
        href="https://argo-cd.readthedocs.io/en/stable/"
        class="link-primary link"
        >ArgoCD</a
      >
      for CD and
      <a href="https://github.com/features/actions" class="link-primary link"
        >GitHub Actions</a
      >
      for CI.
    </p>

    <p>
      Next, we incorporated
      <a href="https://grafana.com/oss/loki/" class="link-primary link"
        >Grafana Loki</a
      >
      for logging and
      <a href="https://home.robusta.dev/" class="link-primary link">Robusta</a>
      for event management. We set up data quality monitoring services running
      at different frequencies and trained our 24/7 support team to oversee
      this. I introduced the use of
      <a href="https://python-poetry.org/" class="link-primary link">Poetry</a>
      for package management and ran seminars on building Docker containers,
      followed by one-on-one pair coding sessions to facilitate the transition
      to Kubernetes. I provided thorough documentation and training resources in
      <a href="https://www.notion.so/" class="link-primary link">Notion</a>.
    </p>

    <p>
      To abstract the complexity of our data storage, I wrapped data retrieval
      from
      <a href="https://azure.microsoft.com/en-us/" class="link-primary link"
        >Azure</a
      >
      blobs, allowing analysts to access data without understanding the
      underlying infrastructure. I started shifting regular data operations to
      <a href="https://cloud.google.com/bigquery" class="link-primary link"
        >Google Big Query</a
      >
      for SQL access and introduced standardized testing for production
      operations.
    </p>

    <p>
      As a result, we launched about 20 data quality microservices, which
      contributed to a monthly data quality report and showed a decrease in
      data-related issues. The CTO gave us the green light to run two production
      microservices in the Kubernetes infrastructure, which generated new
      datasets for clients. Additionally, the analysts found it easier to use
      data in Google Big Query and advocated for moving more datasets over.
      These actions streamlined our data processes, improved the quality of our
      client service, and increased the efficiency of our data team.
    </p>
  </Project>
</template>

<script setup></script>
