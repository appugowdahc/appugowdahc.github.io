export const personal = {
  name: 'Appu Gowda H C',
  initials: 'AG',
  role: 'Software Engineer',
  roles: ['Software Engineer', 'Full-Stack Developer', 'Cloud & DevOps Engineer', 'Agentic AI Builder'],
  tagline: 'Building production-grade systems at the intersection of cloud, AI, and network automation.',
  bio: `Software engineer with 4+ years of end-to-end product engineering experience at Criterion Networks. I design and ship systems that scale — from serverless AWS automation to real-time Agentic AI platforms for enterprise network operations. Equally comfortable in React frontends, Python backends, cloud infrastructure, and distributed systems.`,
  location: 'Bengaluru, India',
  email: 'appugowda558@gmail.com',
  phone: '+91 9164774147',
  github: 'https://github.com/appugowdahc/',
  linkedin: 'https://www.linkedin.com/in/appugowdahc/',
  resumeUrl: '/resume.pdf',
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Systems Built', value: '12+' },
    { label: 'Cloud Platforms', value: '2+' },
    { label: 'Provisioning Time Cut', value: '80%' },
  ],
}

export interface Skill {
  name: string
  level: number
  icon: string
}

export interface SkillCategory {
  id: string
  label: string
  color: string
  gradient: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React', level: 92, icon: '⚛️' },
      { name: 'TypeScript', level: 85, icon: '🔷' },
      { name: 'JavaScript', level: 90, icon: '🟡' },
      { name: 'HTML / CSS', level: 88, icon: '🎨' },
      { name: 'MUI (Material UI)', level: 88, icon: '🎭' },
      { name: 'Redux', level: 82, icon: '🔄' },
      { name: 'Tailwind CSS', level: 85, icon: '💨' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#6366f1',
    gradient: 'from-indigo-500 to-violet-500',
    skills: [
      { name: 'Python', level: 95, icon: '🐍' },
      { name: 'FastAPI', level: 92, icon: '⚡' },
      { name: 'Django', level: 88, icon: '🎸' },
      { name: 'Node.js', level: 78, icon: '🟢' },
      { name: 'Express.js', level: 75, icon: '🚂' },
      { name: 'Java', level: 72, icon: '☕' },
      { name: 'REST APIs', level: 95, icon: '🔌' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    color: '#f59e0b',
    gradient: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'AWS', level: 90, icon: '☁️' },
      { name: 'Google Cloud', level: 85, icon: '🌐' },
      { name: 'Docker', level: 92, icon: '🐳' },
      { name: 'Terraform', level: 85, icon: '🏗️' },
      { name: 'CI/CD (Bitbucket)', level: 88, icon: '🔁' },
      { name: 'Linux', level: 90, icon: '🐧' },
      { name: 'Puppet', level: 70, icon: '🎪' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Agentic',
    color: '#a855f7',
    gradient: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'LangChain', level: 85, icon: '🦜' },
      { name: 'LangGraph', level: 82, icon: '🕸️' },
      { name: 'Temporal', level: 78, icon: '⏱️' },
      { name: 'MCP (Model Context Protocol)', level: 80, icon: '🔗' },
      { name: 'Agentic AI Design', level: 82, icon: '🤖' },
      { name: 'Prompt Engineering', level: 80, icon: '✍️' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases & Messaging',
    color: '#10b981',
    gradient: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'PostgreSQL', level: 88, icon: '🐘' },
      { name: 'MySQL', level: 85, icon: '🐬' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'Redis', level: 85, icon: '🔴' },
      { name: 'RabbitMQ', level: 82, icon: '🐰' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Methods',
    color: '#ec4899',
    gradient: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Git / GitHub', level: 92, icon: '🔧' },
      { name: 'Jira / Confluence', level: 85, icon: '📋' },
      { name: 'Bitbucket', level: 85, icon: '🪣' },
      { name: 'Agile / Scrum', level: 88, icon: '🏃' },
      { name: 'System Design', level: 85, icon: '🏛️' },
      { name: 'DSA', level: 82, icon: '📊' },
    ],
  },
]

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  type: string
  color: string
  summary: string
  highlights: {
    category: string
    items: string[]
  }[]
  tech: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'criterion',
    company: 'Criterion Networks Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Jun 2022 – Present',
    location: 'Bengaluru, India',
    type: 'Full-time',
    color: '#6366f1',
    summary: 'Full-stack engineer and cloud/infra automation specialist. Shipped 12+ production systems spanning agentic AI, real-time infra tooling, multi-cloud automation, and enterprise network operations platforms.',
    highlights: [
      {
        category: 'Agentic AI Platform',
        items: [
          'Built full-stack Agentic AI platform (React + FastAPI + PostgreSQL) deployed on AWS ECS with ALB, VPC isolation, and IAM least-privilege security',
          'Implemented AI agents using LangChain + LangGraph for SD-WAN/SDA diagnostics — root cause analysis and automated remediation at scale',
          'Integrated Temporal for fault-tolerant, long-running workflow orchestration; ServiceNow for auto-ticketing; Splunk for log correlation; ThousandEyes for network path visibility',
          'Leveraged Model Context Protocol (MCP) to standardize AI agent tool interactions across the platform',
        ],
      },
      {
        category: 'Cloud & Infrastructure Automation',
        items: [
          'Developed AWS Lambda + API Gateway functions (Python) to automate VM provisioning on GCP — reduced creation downtime and eliminated manual intervention',
          'Automated full VM lifecycle: suspend, resume, snapshot, failover mechanisms across GCP environments',
          'Scaled 300-node network topology using distributed Terraform-provisioned GCP instances — resolved efficiency, timing, and resource-management bottlenecks',
          'Automated AWS resource lifecycle (users, roles, VPCs, VPNs) using Boto3; built Cloud Run cleanup function to optimize cost management',
        ],
      },
      {
        category: 'Backend Systems & Real-Time Infra',
        items: [
          'Designed real-time push notification system using WebSockets and cloud notification services — instant user feedback for critical events across web and mobile',
          'Built Email + Cisco Webex notification pipeline using Redis (in-memory queuing) and RabbitMQ (durable message brokering) with configurable routing rules',
          'Developed Cluster Monitoring Tool with FastAPI + WebSockets for real-time KVM device resource visualization and auto-scaling',
          'Automated Cisco controller/router registration and configuration with Python multi-threading/multiprocessing — cut provisioning time by 80%',
        ],
      },
      {
        category: 'Full-Stack Product Engineering',
        items: [
          'Built end-to-end network device onboarding system (React MUI + Django + GCP resumable uploads) handling 50GB+ qcow2 files with chunked upload reliability',
          'Containerized all microservices with Docker; built Bitbucket-based CI/CD pipelines for staging → beta → production',
          'Optimized 10+ backend APIs via query tuning, reducing DB load and improving response times',
          'Shrunk AWS RDS database disks across all environments using blue/green deployment strategies with zero-downtime transitions',
        ],
      },
    ],
    tech: [
      'Python', 'React', 'FastAPI', 'Django', 'TypeScript', 'PostgreSQL', 'AWS', 'GCP',
      'Docker', 'Terraform', 'LangChain', 'LangGraph', 'Temporal', 'Redis', 'RabbitMQ',
      'WebSockets', 'CI/CD', 'MCP', 'ServiceNow', 'Splunk',
    ],
  },
]

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  category: string
  color: string
  impact: string[]
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  architecture?: string[]
}

export const projects: Project[] = [
  {
    id: 'agentic-platform',
    title: 'Agentic AI Platform for SD-WAN & SDA',
    subtitle: 'Enterprise Network Operations Intelligence',
    description: 'Production-grade Agentic AI platform enabling network engineers to autonomously diagnose and resolve failures across SD-WAN and SDA environments. Integrates LangChain agents, Temporal workflows, and enterprise tooling.',
    category: 'AI Platform',
    color: '#8b5cf6',
    impact: [
      'Autonomous root cause analysis and remediation for network failures',
      'Integrated ServiceNow, Splunk, ThousandEyes, and device config APIs',
      'Temporal-backed fault-tolerant multi-step workflow orchestration',
      'MCP-standardized tool interactions for agent extensibility',
    ],
    tech: ['React', 'FastAPI', 'PostgreSQL', 'LangChain', 'LangGraph', 'Temporal', 'AWS ECS', 'Redis', 'MCP', 'ServiceNow', 'Splunk', 'ThousandEyes'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'cluster-monitor',
    title: 'Cluster Monitor Tool',
    subtitle: 'Real-Time KVM Network Infrastructure Dashboard',
    description: 'Real-time dashboard for managing overlay network devices on KVM. Dynamically allocates CPU, RAM, storage, and network resources with WebSocket-based auto-scaling and instant event alerting.',
    category: 'Infra Tooling',
    color: '#06b6d4',
    impact: [
      'Real-time auto-scaling via WebSocket + Cloud API integration',
      'Dynamic resource allocation across KVM-hosted network devices',
      'Instant alerts for device state changes, resource exhaustion, network failures',
      'Interactive MUI dashboard for live topology and health visualization',
    ],
    tech: ['React', 'MUI', 'FastAPI', 'Python', 'WebSockets', 'KVM', 'GCP APIs', 'Redis'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'network-onboarding',
    title: 'Automated Network Device Onboarding',
    subtitle: 'End-to-End Device Configuration Platform',
    description: 'Replaced 100% manual device onboarding with an automated pipeline. Handles qcow2 file uploads up to 50GB, auto-configures device properties, and integrates with GCP cloud storage — all from a React interface.',
    category: 'Full-Stack',
    color: '#10b981',
    impact: [
      'GCP resumable upload with chunking — reliable 50GB+ file handling',
      'Zero-error device property configuration via automated pipeline',
      'Eliminated all manual steps in the network device onboarding workflow',
      'Scalable to onboard multiple devices simultaneously',
    ],
    tech: ['React', 'MUI', 'Django', 'Python', 'GCP Storage', 'REST API', 'PostgreSQL'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'aws-automation',
    title: 'AWS Infrastructure Automation',
    subtitle: 'Serverless Resource Lifecycle Management',
    description: 'End-to-end AWS infrastructure automation using Boto3 and Lambda. Provisions users, roles, VPCs, subnets, gateways, and VPNs; a Cloud Run cleanup function automatically reclaims unused resources.',
    category: 'Cloud Automation',
    color: '#f59e0b',
    impact: [
      'Zero manual intervention for AWS resource provisioning workflows',
      'Cloud Run serverless cleanup reduces infrastructure cost waste',
      'Event-driven Lambda + API Gateway architecture for VM lifecycle',
      'Failover mechanisms minimize VM setup failures and downtime',
    ],
    tech: ['Python', 'AWS Lambda', 'API Gateway', 'Boto3', 'GCP Cloud Run', 'Terraform', 'IAM', 'VPC'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'notification-system',
    title: 'Real-Time Notification Platform',
    subtitle: 'Multi-Channel Event Messaging at Scale',
    description: 'Production notification system supporting WebSockets, Email, and Cisco Webex channels. Redis handles fast in-memory queuing while RabbitMQ provides durable message brokering with retry handling.',
    category: 'Backend Systems',
    color: '#ec4899',
    impact: [
      'Sub-second delivery for critical infrastructure alerts via WebSockets',
      'RabbitMQ guarantees message durability, ordering, and retry for failures',
      'Redis caches notification state for low-latency high-priority delivery',
      'Configurable routing rules: engineers subscribe per event type and channel',
    ],
    tech: ['Python', 'FastAPI', 'Redis', 'RabbitMQ', 'WebSockets', 'Cisco Webex API', 'SMTP', 'Docker'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'cisco-automation',
    title: 'Cisco Device Automated Registration',
    subtitle: 'Large-Scale Network Onboarding Pipeline',
    description: 'Automated registration and configuration system for Cisco controllers and routers using Python multi-threading and multiprocessing. Parallelizes device discovery, credential push, and config deployment.',
    category: 'Network Automation',
    color: '#6366f1',
    impact: [
      'Reduced end-to-end provisioning time by 80% via parallel execution',
      'Eliminated all manual device setup steps across large-scale topologies',
      'Concurrent credential push and config deployment across device fleet',
      'Consistent, auditable onboarding workflows replacing ad-hoc manual processes',
    ],
    tech: ['Python', 'Multi-threading', 'Multiprocessing', 'Cisco APIs', 'SSH/Netmiko', 'FastAPI'],
    githubUrl: 'https://github.com',
  },
]

export interface SystemDesignCase {
  id: string
  title: string
  subtitle: string
  color: string
  challenge: string
  architecture: {
    title: string
    components: string[]
  }[]
  keyDecisions: {
    decision: string
    rationale: string
  }[]
  scale: string[]
  diagram: string
}

export const systemDesignCases: SystemDesignCase[] = [
  {
    id: 'distributed-topology',
    title: 'Distributed 300-Node Network Topology',
    subtitle: 'Scaling from Single-Instance to Multi-Instance Architecture',
    color: '#6366f1',
    challenge: 'Managing all network topology devices on a single GCP VM caused efficiency, timing, reliability, and resource-management failures at scale. The system needed to support 300-node topologies without degradation.',
    architecture: [
      {
        title: 'Decomposition Layer',
        components: ['Topology partitioning by node groups', 'Terraform state isolation per partition', 'Independent GCP VM instances per segment'],
      },
      {
        title: 'Orchestration Layer',
        components: ['Terraform for simultaneous multi-instance deployment', 'Event-driven VM lifecycle automation', 'Failover mechanisms per instance group'],
      },
      {
        title: 'Resource Management',
        components: ['Dynamic CPU/RAM allocation via KVM APIs', 'Snapshot-based recovery points', 'Cloud monitoring + alerting per instance'],
      },
    ],
    keyDecisions: [
      { decision: 'Horizontal VM partitioning over vertical scaling', rationale: 'Reduces blast radius of single-VM failures; enables independent scaling of topology segments' },
      { decision: 'Terraform for declarative provisioning', rationale: 'Reproducible infrastructure state; rollback-safe; parallel provisioning of all instances' },
      { decision: 'Event-driven lifecycle management', rationale: 'Eliminates polling overhead; immediate response to VM state changes' },
    ],
    scale: ['300+ network nodes', '~10 GCP VMs in parallel', 'Zero manual provisioning steps'],
    diagram: `
┌─────────────────────────────────────────────────┐
│              Terraform Orchestrator             │
│         (Parallel Multi-Instance Deploy)         │
└──────┬────────────┬────────────┬────────────────┘
       │            │            │
  ┌────▼────┐  ┌────▼────┐  ┌───▼────┐
  │  GCP VM │  │  GCP VM │  │ GCP VM │  ...
  │  Node   │  │  Node   │  │  Node  │
  │ Group 1 │  │ Group 2 │  │Group 3 │
  │(~30 dev)│  │(~30 dev)│  │(~30dev)│
  └────┬────┘  └────┬────┘  └───┬────┘
       │            │            │
  ┌────▼────────────▼────────────▼────┐
  │        Cluster Monitor Tool        │
  │   WebSocket Real-Time Dashboard    │
  │  (Resource Metrics · Auto-Scale)   │
  └────────────────────────────────────┘`,
  },
  {
    id: 'agentic-architecture',
    title: 'Agentic AI Platform Architecture',
    subtitle: 'Production-Grade AI Agent Orchestration on AWS',
    color: '#8b5cf6',
    challenge: 'Build a fault-tolerant, scalable Agentic AI platform for enterprise network operations — supporting long-running diagnostic workflows, multi-tool agent interactions, and integration with ServiceNow, Splunk, and ThousandEyes.',
    architecture: [
      {
        title: 'Frontend Layer',
        components: ['React + TypeScript SPA', 'Real-time status via WebSocket', 'Agent task management dashboard'],
      },
      {
        title: 'API & Agent Layer',
        components: ['FastAPI REST/WebSocket gateway', 'LangGraph multi-agent orchestration', 'MCP-standardized tool interfaces', 'LangChain tool definitions for each integration'],
      },
      {
        title: 'Workflow & State Layer',
        components: ['Temporal for durable long-running workflows', 'PostgreSQL for agent session state', 'Redis for ephemeral task caching'],
      },
      {
        title: 'AWS Infrastructure',
        components: ['ECS Fargate for containerized services', 'ALB for traffic distribution + health checks', 'VPC with public/private subnet isolation', 'IAM least-privilege roles per service'],
      },
    ],
    keyDecisions: [
      { decision: 'LangGraph over simple chain', rationale: 'Enables stateful multi-step agent workflows with conditional branching and human-in-the-loop support' },
      { decision: 'Temporal for workflow orchestration', rationale: 'Provides durable execution guarantees, automatic retries, and state persistence for long-running diagnostic tasks' },
      { decision: 'MCP for tool standardization', rationale: 'Decouples agent logic from tool implementations; enables runtime tool discovery and versioning' },
      { decision: 'ECS Fargate over EC2', rationale: 'No capacity management overhead; scales per-service independently; pay-per-use for variable agent workloads' },
    ],
    scale: ['AWS ECS multi-service deployment', 'VPC-isolated networking', 'Enterprise integrations: ServiceNow · Splunk · ThousandEyes'],
    diagram: `
   React SPA ──► ALB ──► FastAPI (ECS)
                            │
           ┌────────────────┼────────────────┐
           │                │                │
      LangGraph          Temporal         PostgreSQL
      (Agents)          (Workflows)        (State)
           │                │                │
    ┌──────┼──────┐         │            Redis Cache
    │      │      │         │
  MCP    MCP    MCP    Retry/Fault
  Tool   Tool   Tool   Tolerance
    │      │      │
ServiceNow Splunk ThousandEyes`,
  },
  {
    id: 'notification-design',
    title: 'High-Throughput Notification System',
    subtitle: 'Multi-Channel Messaging with Guaranteed Delivery',
    color: '#10b981',
    challenge: 'Design a notification system that delivers real-time alerts to web, mobile, Email, and Cisco Webex channels with guaranteed message delivery, retry handling for failures, and configurable per-user routing rules.',
    architecture: [
      {
        title: 'Producer Layer',
        components: ['Event emitters across all platform services', 'Typed event schema with severity levels', 'Async publish via FastAPI background tasks'],
      },
      {
        title: 'Broker Layer',
        components: ['RabbitMQ exchanges for event routing', 'Dead letter queues for failed delivery', 'Message TTL and priority queuing'],
      },
      {
        title: 'Delivery Layer',
        components: ['Redis pub/sub for WebSocket broadcast', 'SMTP workers for email delivery', 'Cisco Webex Webhook integration', 'Per-channel worker pools with retry logic'],
      },
    ],
    keyDecisions: [
      { decision: 'RabbitMQ over Kafka', rationale: 'Message-level acknowledgment and TTL fit notification semantics better than log-structured event streaming' },
      { decision: 'Redis for WebSocket state', rationale: 'Low-latency pub/sub for real-time delivery; temporary storage fits ephemeral notification lifecycle' },
      { decision: 'Dead letter queues', rationale: 'Failed notifications are not silently dropped; retry logic with exponential backoff prevents cascade failures' },
    ],
    scale: ['Multi-channel: WebSocket · Email · Webex', 'Configurable per-user routing rules', 'Durable delivery with retry and dead-letter handling'],
    diagram: `
  Platform Events
  (alerts, tasks, failures)
         │
         ▼
   ┌─────────────┐     ┌──────────────────────────┐
   │  FastAPI    │────►│       RabbitMQ            │
   │  Producer   │     │  Exchange → Queues        │
   └─────────────┘     │  (Dead Letter + Retry)    │
                       └──────────────┬────────────┘
                                      │
              ┌───────────────┬───────┴────────────┐
              │               │                     │
         ┌────▼────┐    ┌─────▼─────┐    ┌─────────▼──┐
         │  Redis  │    │   Email   │    │  Cisco     │
         │Pub/Sub  │    │  Worker   │    │  Webex     │
         └────┬────┘    └─────┬─────┘    └─────────┬──┘
              │               │                     │
         WebSocket          SMTP              Webex API
         Clients           Gateway            Webhook`,
  },
]

export interface Certification {
  id: string
  name: string
  issuer: string
  status: 'earned' | 'in-progress' | 'planned'
  color: string
  icon: string
  year?: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    id: 'aws-saa',
    name: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    status: 'in-progress',
    color: '#f59e0b',
    icon: '☁️',
  },
  {
    id: 'aws-dva',
    name: 'AWS Developer Associate',
    issuer: 'Amazon Web Services',
    status: 'planned',
    color: '#f59e0b',
    icon: '🔧',
  },
  {
    id: 'terraform-assoc',
    name: 'HashiCorp Terraform Associate',
    issuer: 'HashiCorp',
    status: 'planned',
    color: '#8b5cf6',
    icon: '🏗️',
  },
  {
    id: 'ckad',
    name: 'Certified Kubernetes App Developer',
    issuer: 'CNCF',
    status: 'planned',
    color: '#06b6d4',
    icon: '⚓',
  },
]

export const strengths = [
  {
    icon: '⚡',
    title: 'End-to-End Ownership',
    description: 'From frontend UI to cloud infrastructure — I own the full delivery lifecycle.',
  },
  {
    icon: '🏗️',
    title: 'Systems Thinking',
    description: 'Designing distributed systems with reliability, observability, and scale in mind.',
  },
  {
    icon: '🤖',
    title: 'Agentic AI Engineering',
    description: 'LangChain, LangGraph, Temporal, and MCP for production AI agent workflows.',
  },
  {
    icon: '☁️',
    title: 'Multi-Cloud Automation',
    description: 'AWS + GCP infrastructure automation with Terraform, Lambda, and Docker.',
  },
  {
    icon: '⚙️',
    title: 'Network Automation',
    description: 'Automated Cisco device provisioning, reducing manual steps by 80%.',
  },
  {
    icon: '🚀',
    title: 'Production-First Mindset',
    description: 'CI/CD, containerization, observability, and zero-downtime deployment strategies.',
  },
]
