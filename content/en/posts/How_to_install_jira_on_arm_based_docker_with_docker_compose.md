---
title: "How to Install Jira on ARM Based Docker with Docker Compose"
date: 2022-04-17T17:49:47Z
tags: ["Note", "Jira", "Docker", "Docker Compose", "ARM Based"]
categories: ["Note", "Jira", "Docker", "ARM"]
author: "Andrew Wu"
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: true
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowCodeCopyButtons: true
---
Here is note to talk about How to install Jira on ARM Based Docker machine.

I use docker compose to install Jira on my ARM Docker.

My image uses dchevell/jira-software-arm64

```
version: '3'

services:
  jira:
    depends_on:
      - postgresql
    image: dchevell/jira-software-arm64
    networks:
      - jiranet
    volumes:
      - jiradata:/var/atlassian/jira
    ports:
      - '8081:8080'
    environment:
      - 'JIRA_DATABASE_URL=postgresql://jira@postgresql/jiradb'
      - 'JIRA_DB_PASSWORD=jellyfish'
      - 'SETENV_JVM_MINIMUM_MEMORY=2048m'
      - 'SETENV_JVM_MAXIMUM_MEMORY=4096m'
      - 'JIRA_PROXY_NAME='
      - 'JIRA_PROXY_PORT='
      - 'JIRA_PROXY_SCHEME='
    logging:
      # limit logs retained on host to 25MB
      driver: "json-file"
      options:
        max-size: "500k"
        max-file: "50"

  postgresql:
    image: postgres:9.5-alpine
    networks:
      - jiranet
    volumes:
      - postgresqldata:/var/lib/postgresql/data
    environment:
      - 'POSTGRES_USER=jira'
      # CHANGE THE PASSWORD!
      - 'POSTGRES_PASSWORD=Postgres_password'
      - 'POSTGRES_DB=jiradb'
      - 'POSTGRES_ENCODING=UNICODE'
      - 'POSTGRES_COLLATE=C'
      - 'POSTGRES_COLLATE_TYPE=C'
    logging:
      # limit logs retained on host to 25MB
      driver: "json-file"
      options:
        max-size: "500k"
        max-file: "50"

volumes:
  jiradata:
    external: false
  postgresqldata:
    external: false

networks:
  jiranet:
    driver: bridge
```

Before use this compose you have to make sure your environment already installed Java you can run `java -version` to check your java version.

After checked your java installation, you can use above docker compose to install Jira on your machine.