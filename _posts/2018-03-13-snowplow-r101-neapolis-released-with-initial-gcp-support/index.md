---
layout: post
title: "Snowplow R101 Neapolis released with initial GCP support"
title-short: Snowplow R101 Neapolis
tags: [google pubsub, google cloud platform, realtime]
author: Ben
category: Releases
permalink: /blog/2018/03/13/snowplow-r101-neapolis-with-gcp-support/
---

We are tremendously excited to announce the release of [Snowplow R101 Neapolis][release-notes].
This realtime release marks the first step in our journey towards making Snowplow
[Google Cloud Platform][gcp]-native, evolving it into a truly multi-cloud platform.

Read on for more information on R101 Neapolis, named after
[the archeological site in Sicily, Italy where the Greek theatre of Syracuse is located][neapolis]:

<!--more-->

1. [Why bring Google Cloud Platform support to Snowplow?](#why)
2. [Adding GCP support to Stream Collector and Stream Enrich](#gcp-delta)
3. [Miscellaneous changes](#misc)
4. [Upgrading](#upgrading)
5. [Roadmap](#roadmap)
6. [Help](#help)

![neapolis][neapolis-img]

<h2 id="why">1. Why bring Google Cloud Platform support to Snowplow?</h2>

Historically, the Snowplow platform has been closely tied to Amazon Web Services and to a lesser
extent on-premise (largely through Apache Kafka support). In order to make the platform accessible to
all, it is important to make it as much cloud-agnostic as possible.

This process begins with porting the realtime pipeline to Google Cloud Platform, the hugely popular public cloud offering - and this release is the first step on this journey.

The next releases in our journey to GCP will focus on porting the streaming enrichment process to
[Google Cloud Dataflow][dataflow] and making loading Snowplow events into [BigQuery][bq] a reality.

For more information regarding our overall plans for Google Cloud Platform, please check out our [RFC][rfc] on the subject.

<h2 id="gcp-delta">2. Adding GCP support to Stream Collector and Stream Enrich</h2>

To those familiar with the current Snowplow streaming pipeline achitecture, this release will look straightforward: we simply take our existing components and adds support for *publishing* and *subscribing* to [Google Cloud PubSub][pubsub] topics.

Specifically, we took our Scala Stream Collector and added support for publishing raw Snowplow wevents to a [Google Cloud PubSub][pubsub] topic. Similarly, we updated our Stream Enrich component to read those raw events off Google Cloud PubSub,
enrich them and publish them back to another PubSub topic.

We have written dedicated guides to setting up those microservices in the following wiki articles:

- Setting up the Scala Stream Collector on GCP ADD LINK
- Setting up Stream Enrich on GCP ADD LINK

Huge thanks to our former intern, [Guilherme Pires][colobas], for laying the foundations for this
release.

<h2 id="misc">3. Miscellaneous changes</h2>

<h3 id="split">3.1 Splitting up the different jars</h3>

BEN - THIS ISN'T MISC. THIS SHOULD BE A TOP-LEVEL H2 ALL ON ITS OWN. IT'S A FUNDAMENTAL CHANGE IN HOW WE THINK ABOUT STREAM ENRICH.

As we become multi-cloud and support a growing number of different platforms, it is becoming increasingly important
to split the different artifacts according to their targeted streaming technology, in order to:

1. Keep the JAR sizes from getting out of hand
2. Prevent a combinatorial explosion of different source and sink technologies requiring testing (e.g. Kinesis source to Google Cloud PubSub sink)

Therefore, from this release onwards, there will be four different artifacts for the Scala Stream Collector, and four for Stream Enrich.

For the Scala Stream Collector:

| JAR                                                   | Targeted platform             |
| ----------------------------------------------------- | ----------------------------- |
| snowplow-stream-collector-google-pubsub-*version*.jar | [Google Cloud PubSub][pubsub] |
| snowplow-stream-collector-kinesis-*version*.jar       | [Amazon Kinesis][kinesis]     |
| snowplow-stream-collector-kafka-*version*.jar         | [Apache Kafka][kafka]         |
| snowplow-stream-collector-nsq-*version*.jar           | [NSQ][nsq]                    |

For Stream Enrich:

| JAR                                                | Targeted platform             |
| -------------------------------------------------- | ----------------------------- |
| snowplow-stream-enrich-google-pubsub-*version*.jar | [Google Cloud PubSub][pubsub] |
| snowplow-stream-enrich-kinesis-*version*.jar       | [Amazon Kinesis][kinesis]     |
| snowplow-stream-enrich-kafka-*version*.jar         | [Apache Kafka][kafka]         |
| snowplow-stream-enrich-nsq-*version*.jar           | [NSQ][nsq]                    |

BEN - WHAT ABOUT STDIN/STDOUT OPTION - DO ALL ARTIFACTS SUPPORT THIS?

This approach reduces artifact size and simplifies testing, at the cost of some flexibility for Stream Enrich. If you were previously running a "hybrid-cloud" Stream Enrich (reading and writing to different streaming technologies), then we suggest setting up a dedicated app downstream of Stream Enrich to bridge the enriched events to the other stream system. 

<h3 id="jmx">3.2 Exposing the number of requests made to the collector through JMX</h3>

Thanks to [GitHub user jspc][jspc], the Scala Stream Collector now exposes some valuable metrics through
[JMX][jmx] via the new MBean `com.snowplowanalytics.snowplow:type=StreamCollector`, containing
the following attributes:

- `Requests`: total number of requests
- `SuccessfulRequests`: total number of successful requests
- `FailedRequests`: total number of failed requests

You can turn on JMX by launching the collector in the following manner:

{% highlight bash %}
java \
  -Dcom.sun.management.jmxremote \
  -Dcom.sun.management.jmxremote.port=9010 \
  -Dcom.sun.management.jmxremote.local.only=false \
  -Dcom.sun.management.jmxremote.authenticate=false \
  -Dcom.sun.management.jmxremote.ssl=false \
  -jar snowplow-stream-collector-google-pubsub-0.13.0.jar --config config.hocon
{% endhighlight %}

For more information on setting JMX up, refer to [this guide][jmx-setup].

<h3 id="kafka">3.3 Upgrading to Kafka 1.0.1</h3>

We've taken advantage of this release to upgrade the Kafka artifacts to Kafka 1.0.1.

<h2 id="upgrading">4. Upgrading</h2>

<h3 id="upg-ssc">4.1 Scala Stream Collector</h3>

The latest version of the Scala Stream Collector is available from our Bintray [here][ssc].

<h4 id="upg-ssc-conf">4.1.1 Updating the configuration</h4>

For non-Google Cloud PubSub users, the only minor change was made to the `collector.crossDomain`
section: it's now non-optional but has an `enabled` flag:

{% highlight yaml %}
crossDomain {
  enabled = false
  domain = "acme.com"
  secure = true
}
{% endhighlight %}

However, if you want to leverage Google Cloud PubSub, you'll need to change the
`collector.streams.sink` section to something akin to the following:

{% highlight yaml %}
sink {
  enabled = googlePubSub

  googleProjectId = ID

  # values are in milliseconds
  backoffPolicy {
    minBackoff = 50
    maxBackoff = 1000
    totalBackoff = 10000 # must be >= 10000
    multiplier = 2
  }
}
{% endhighlight %}

WHAT ABOUT AUTHENTICATION - HOW DOES THAT WORK?

For a complete example, see [our sample config.hocon template][ssc-config].

ADD DOCO LINK (NEED TO EXPLAIN multiplier etc)

<h4 id="upg-ssc-launch">4.1.2 Launching</h4>

As explained in [section 3.1](#split), there is now one JAR per platform, as such you'll need to
use one of the following commands to launch the collector:

{% highlight bash %}
java -jar snowplow-stream-collector-google-pubsub-0.13.0.jar --config config.hocon
java -jar snowplow-stream-collector-kinesis-0.13.0.jar --config config.hocon
java -jar snowplow-stream-collector-kafka-0.13.0.jar --config config.hocon
java -jar snowplow-stream-collector-nsq-0.13.0.jar --config config.hocon
{% endhighlight %}

<h3 id="upg-se">4.2 Stream Enrich</h3>

The latest version of Stream Enrich is available from our Bintray [here][se].

<h4 id="upg-se-conf">4.2.1 Updating the configuration</h4>

Configuration for Stream Enrich has been remodeled in order to only allow a source and a sink
on the same platform and, for example, disallow reading events from a Kafka topic and writing out
enriched events to a Kinesis stream.

As such, the configuration, if you're using Kinesis, now looks like:

{% highlight bash %}
enrich {
  streams {
    in { ... }                         # UNCHANGED
    out { ... }                        # UNCHANGED
    sourceSink {                       # NEW SECTION
      enabled = kinesis
      region = eu-west-1
      aws {
        accessKey = iam
        secretKey = iam
      }
      maxRecords = 10000
      initialPosition = TRIM_HORIZON
      backoffPolicy {
        minBackoff = 50
        maxBackoff = 1000
      }
    }
    buffer { ... }                     # UNCHANGED
    appName = ""                       # UNCHANGED
  }
  monitoring { ... }                   # UNCHANGED
}
{% endhighlight %}

If you want to leverage Google Cloud PubSub, it should look like the following:

{% highlight bash %}
enrich {
  streams {
    in { ... }                         # UNCHANGED
    out { ... }                        # UNCHANGED
    sourceSink {                       # NEW SECTION
      enabled = googlePubSub
      googleProjectId = id
      backoffPolicy {
        minBackoff = 50
        maxBackoff = 1000
        totalBackoff = 10000 # must be >= 10000
        multiplier = 2
      }
    }
    buffer { ... }                     # UNCHANGED
    appName = ""                       # UNCHANGED
  }
  monitoring { ... }                   # UNCHANGED
}
{% endhighlight %}

WHAT ABOUT AUTHENTICATION - HOW DOES THAT WORK?

For a complete example, see [our sample config.hocon template][se-config].

ADD DOCO LINK (NEED TO EXPLAIN multiplier etc)

<h4 id="upg-se-launch">4.2.2 Launching</h4>

Same as for the collector, there is now one JAR per targeted platform:

{% highlight bash %}
java -jar snowplow-stream-enrich-google-pubsub-0.15.0.jar --config config.hocon --resolver file:iglu.json
java -jar snowplow-stream-enrich-kinesis-0.15.0.jar --config config.hocon --resolver file:iglu.json
java -jar snowplow-stream-enrich-kafka-0.15.0.jar --config config.hocon --resolver file:iglu.json
java -jar snowplow-stream-enrich-nsq-0.15.0.jar --config config.hocon --resolver file:iglu.json
{% endhighlight %}

<h2 id="roadmap">5. Roadmap</h2>

Upcoming Snowplow releases will include:

* [R102 Afontova Gora][r102-bat], various stability, security and data quality improvements for the batch pipeline
* [R103 [STR] PII Enrichment phase 2][r103-pii], enhancing our recently-released GDPR-focused PII Enrichment for the realtime pipeline 

Furthermore, this release is only the beginning for Google Cloud Platform support in Snowplow!

As discussed in our RFC, we plan on porting our streaming enrichment process to [Google Cloud Dataflow][dataflow], leveraging the [Apache Beam APIs][beam] (see [this milestone][r151-beam] for details). In parallel, we are also busy designing our new Snowplow event loader for [BigQuery][bq].

We look forward to your feedback as we continue to roll out and extend our GCP capabilities!

<h2 id="help">6. Getting help</h2>

For more details on this release, please check out the [release notes][release-notes] on GitHub.

If you have any questions or run into any problems, please visit [our Discourse forum][discourse].

[neapolis]: https://en.wikipedia.org/wiki/Greek_Theatre_of_Syracuse
[neapolis-img]: /assets/img/blog/2018/03/neapolis.jpg

[release-notes]: https://github.com/snowplow/snowplow/releases/tag/r101-neapolis
[discourse]: http://discourse.snowplowanalytics.com/

[r102-bat]: https://github.com/snowplow/snowplow/milestone/155
[r103-pii]: https://github.com/snowplow/snowplow/milestone/153
[r151-beam]: https://github.com/snowplow/snowplow/milestone/151

[gcp]: https://cloud.google.com/
[dataflow]: https://cloud.google.com/dataflow/
[beam]: https://beam.apache.org/
[bq]: https://cloud.google.com/bigquery/
[pubsub]: https://cloud.google.com/pubsub/

[kinesis]: https://aws.amazon.com/kinesis/
[kafka]: http://kafka.apache.org/
[nsq]: http://nsq.io/
[jmx]: http://www.oracle.com/technetwork/java/javase/tech/best-practices-jsp-136021.html
[jmx-setup]: https://docs.oracle.com/javase/6/docs/technotes/guides/management/agent.html

[ssc]: https://bintray.com/snowplow/snowplow-generic/snowplow-scala-stream-collector/0.13.0#files
[se]: https://bintray.com/snowplow/snowplow-generic/snowplow-stream-enrich/0.15.0#files
[ssc-config]: https://github.com/snowplow/snowplow/blob/r101-neapolis/2-collectors/scala-stream-collector/examples/config.hocon.sample
[se-config]: https://github.com/snowplow/snowplow/blob/r101-neapolis/3-enrich/stream-enrich/examples/config.hocon.sample

[rfc]: https://discourse.snowplowanalytics.com/t/porting-snowplow-to-google-cloud-platform/1505

[colobas]: https://github.com/colobas
[jspc]: https://github.com/jspc