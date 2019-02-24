## Fault Tolerance in Centralized Systems

To read about the concept of "Architectural Decentralization", see [this article by Vitalik Buterin of Ethereum](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274)
and see this reply [tweet by Nick Sullivan of Cloudflare](https://twitter.com/grittygrease/status/1042175473822777344).

Check out the **Failure Scenarios** section of [this Cloudflare article](https://blog.cloudflare.com/cloudflares-architecture-eliminating-single-p/).

A fun snippet from the article:

"**Global Thermonuclear War**: would be bad, but CloudFlare may continue to be able to route traffic to whatever portion of the Internet is left. As facilities were vaporized (starting with Las Vegas) their routers would stop announcing routes. As long as some facilities remained connected to whatever remained of the network (maybe Sydney, Australia?) they would provide a path for traffic destined for our customers. We've designed the network such that more than half of it can completely fail and we'll still be able to keep up with the traffic."

If you want to keep reading about fault-tolerance, you can also check out this [paper by Amazon Web Services on creating fault tolerant systems](https://media.amazonwebservices.com/AWS_Building_Fault_Tolerant_Applications.pdf)

Interesting snippet from the paper on how AWS maintains a healthy level of fault-tolerance for your application:

"Auto Scaling enables you to automatically scale your Amazon EC2 capacity up or down. You can define rules that
determine when more (or fewer) server instances are needed, such as:

1. When the number of functioning server instances is above (or below) a certain number, launch (or terminate)
server instances

2. When the resource utilization (i.e. CPU, network or disk) of the server instance fleet is above (or below) a certain
threshold, launch (or terminate) server instances. Such metrics will be collected from the Amazon CloudWatch
service, which monitors Amazon EC2 instances."