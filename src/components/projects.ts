export interface Project {
    id: string;
    title: string;
    sub: string;
    description: string;
    github: string;
    demo: string | null;
    techs: string[];
    duration: string;
    roles: string;
    summary: string;
    image1: string | null;
    image2: string | null;
    image3: string | null;
    image4: string | null;
    bg1: string;
    bg2?: string;
    bg3?: string;
    bg4?: string;
    next: string;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "DISTRIBUTED 3D-PARALLEL TRANSFORMER",
        sub: "Distributed Training / Deep Learning",
        description: "A 90M-parameter encoder-decoder Transformer built from scratch in raw PyTorch with native 3D parallelism (tensor + pipeline + data) across 8 GPUs on 4 Azure nodes.",
        github: "https://github.com/Aniket982-ux/3d-parellelism",
        demo: null,
        techs: ["PyTorch", "Distributed Training", "CUDA", "Tensor Parallelism", "Pipeline Parallelism", "W&B", "Azure"],
        duration: "2025",
        roles: "Distributed ML / Systems Engineer",
        summary: "Built a 90M-parameter encoder-decoder Transformer from scratch in raw PyTorch (no HuggingFace/Megatron/DeepSpeed) for English → Italian translation. Implemented 3D parallel training (tensor + pipeline + data) with custom weight sharding, cross-node activation transfer, and gradient sync across 8 GPUs on 4 Azure nodes. Debugged a multi-rank deadlock in cross-node pipeline communication caused by a local vs. global rank mismatch; logged runs via Weights & Biases and stored sharded checkpoints on Azure Files for fault-tolerant Spot VM training.",
        image1: "/3d_parallelism_demo.mp4",
        image2: "/p1_wandb.png",
        image3: null,
        image4: null,
        bg1: "/black_bg.webp",
        bg2: "/concrete_bg.webp",
        next: "2",
    },
    {
        id: "2",
        title: "DEBUGZERO: SELF-IMPROVING MULTI-AGENT RL",
        sub: "Reinforcement Learning & Multi-Agent LLMs",
        description: "A self-improving RL coding environment where a single LLM plays adversarial dual roles (Proposer & Solver), trained with GRPO and dynamic learnability bonus.",
        github: "https://github.com/Aniket982-ux/DebugZero",
        demo: "https://huggingface.co/spaces/The-Fool-09/debugZero",
        techs: ["PyTorch", "GRPO", "Reinforcement Learning", "Multi-Agent Systems", "AST Mutation", "OpenEnv", "Hugging Face"],
        duration: "2025",
        roles: "Reinforcement Learning & LLMs Researcher",
        summary: "Built DebugZero, a self-improving RL environment where a single LLM plays adversarial dual roles: a Proposer that injects subtle bugs via 8 AST-level mutation operators, and a Solver that repairs them using execution feedback. Trained the policy with GRPO (Group Relative Policy Optimization) over an OpenEnv-compliant sandboxed state machine, improving the Solver's pass rate from 80% to 100% in 200 steps while completion length compressed by 65%. Designed a non-hackable reward function combining AST Levenshtein similarity with a dynamic learnability bonus keeping the Solver in a 20–80% success zone.",
        image1: "/p2_arch.png",
        image2: "/p2_dashboard.png",
        image3: "/p2_story.png",
        image4: null,
        bg1: "/sea_bg.webp",
        bg2: "/paper_bg.webp",
        bg3: "/sunset_bg.webp",
        next: "3",
    },
    {
        id: "3",
        title: "TRUTHGUARD: MULTI-CHANNEL FACT-VERIFICATION",
        sub: "Agentic Systems & Real-time AI",
        description: "Multi-channel verification platform powered by Google ADK triaging news, facts, and scams across WhatsApp, Chrome Extension, React console, and Electron desktop app.",
        github: "https://github.com/Aniket982-ux/TruthGuardAgent",
        demo: null,
        techs: ["Google ADK", "GCP Vertex AI", "FastAPI", "React", "Electron", "Chrome Extension", "Speech-to-Text"],
        duration: "2025",
        roles: "GenAI & Systems Architect",
        summary: "Built a multi-channel fact-verification platform using Google's Agent Developer Kit (ADK), with a router agent that triages claims into three specialized verification lanes (news, fact, scam) and decomposes them into atomic sub-claims verified against GNews, Google FactCheck, VirusTotal, and Perplexity APIs. Shipped across four client surfaces: a FastAPI backend with WhatsApp/Telegram webhook integrations, a Chrome Extension (Manifest V3) with client-side PDF report generation, a React web console, and an Electron desktop app for real-time audio fact-checking via Google Cloud Speech-to-Text deployed on GCP Vertex AI Reasoning Engine.",
        image1: "/p3_arch.png",
        image2: "/p3_extension.png",
        image3: null,
        image4: null,
        bg1: "/concrete_bg.webp",
        bg2: "/black_bg.webp",
        next: "4",
    },
    {
        id: "4",
        title: "STABLE DIFFUSION: TEXT-TO-IMAGE PIPELINE",
        sub: "Generative AI / Diffusion Models",
        description: "A 1.07B-parameter Stable Diffusion pipeline built from scratch in PyTorch—custom VAE, CLIP, and UNet—with memory optimizations cutting VRAM by ~65%.",
        github: "https://github.com/Aniket982-ux/Stable-diffusion",
        demo: null,
        techs: ["PyTorch", "Diffusion Models", "CLIP", "UNet", "VAE", "Mixed Precision", "8-bit AdamW"],
        duration: "2025",
        roles: "Deep Learning Engineer",
        summary: "Built a 1.07B-parameter Stable Diffusion pipeline from scratch in PyTorch—custom VAE, CLIP text encoder, UNet, and noise scheduler—without using HuggingFace diffusers. Trained the 859M-parameter UNet on 2x Tesla T4 GPUs by engineering a memory optimization stack (gradient checkpointing, 8-bit AdamW, mixed precision), cutting VRAM usage by ~65% to avoid OOM crashes.",
        image1: "/stable_diffusion_demo.mp4",
        image2: null,
        image3: null,
        image4: null,
        bg1: "/sunset_bg.webp",
        next: "5",
    },
    {
        id: "5",
        title: "MULTIMODAL COST PREDICTION (VISION + TEXT)",
        sub: "Computer Vision, NLP & MLOps",
        description: "End-to-end multimodal price prediction pipeline fusing ViT-B16 images and SentenceTransformer text embeddings with DVC and MLflow tracking.",
        github: "https://github.com/Aniket982-ux/mlops-pipeline",
        demo: null,
        techs: ["PyTorch", "ViT-B16", "SentenceTransformers", "LightGBM", "DVC", "MLflow", "GitHub Actions", "GCP"],
        duration: "2025",
        roles: "Multimodal ML & MLOps Engineer",
        summary: "Built an end-to-end multimodal price prediction pipeline fusing product text (SentenceTransformer embeddings) and images (ViT-B16) into a shared representation across 75K+ image-text pairs. Designed a custom fusion decoder to align text and image embeddings into a price-relevant latent space, feeding a LightGBM regressor optimized for SMAPE (0.45 train / 0.47 val). Automated training with DVC Pipelines and MLflow tracking, cutting retraining time 40% vs. manual workflows, with CI/CD via GitHub Actions deploying to a GCP VM.",
        image1: "/p5_embedding_space.png",
        image2: "/p5_training_inference.png",
        image3: "/p5_cicd_pipeline.png",
        image4: "/p5_tech_stack.png",
        bg1: "/cloth_bg.webp",
        bg2: "/black_bg.webp",
        bg3: "/concrete_bg.webp",
        bg4: "/wheel_bg.webp",
        next: "1",
    },
];
