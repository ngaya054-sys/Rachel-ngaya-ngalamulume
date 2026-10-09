import {
  AcademicDegree,
  Certification,
  TeachingCourse,
  ResearchPublication,
  DomainSpecialty,
  PortfolioProject,
} from '../types';

export const PERSONAL_INFO = {
  fullName: 'Tshimanga Ntumba Michel',
  honorificTitle: 'Ir. Tshimanga Ntumba Michel',
  primaryTitle: 'Ingénieur en Intelligence Artificielle & Stratège Business',
  affiliation: "Enseignant-Chercheur à l'Université de Kinshasa (UNIKIN)",
  faculty: 'Faculté des Sciences et Technologies (FST)',
  phone: '+243 857348387',
  phoneFormatted: '+243 85 734 8387',
  email: 'michel.tshimanga@unikin.ac.cd',
  location: 'Kinshasa, République Démocratique du Congo',
  whatsappUrl:
    'https://wa.me/243857348387?text=Bonjour%20Ing%C3%A9nieur%20Tshimanga%20Ntumba%20Michel%2C%20je%20vous%20contacte%20depuis%20votre%20portfolio.',
  bio: "Ingénieur civil en génie informatique, spécialisé dans la conception et l'industrialisation d'architectures d'Intelligence Artificielle générative et prédictive. Passionné par l'intersection entre haute technologie et rentabilité d'affaires, j'accompagne les entreprises dans leur transition algorithmique tout en formant la future élite de chercheurs au sein de la Faculté des Sciences et Technologies de l'UNIKIN.",
  stats: [
    { label: "Années d'Expérience & Recherche", value: '8+' },
    { label: 'Projets IA & Business Industrialisés', value: '25+' },
    { label: 'Étudiants & Ingénieurs Formés à UNIKIN', value: '650+' },
    { label: 'Publications & Communications Scientifiques', value: '12' },
  ],
};

export const ACADEMIC_DEGREES: AcademicDegree[] = [
  {
    id: 'deg-1',
    degree: 'Ingéniorat Civil en Génie Informatique & Systèmes Intelligents',
    institution: 'Université de Kinshasa (UNIKIN)',
    location: 'Faculté des Sciences et Technologies, Kinshasa',
    period: '2016 – 2021',
    honors: 'Mention Grande Distinction',
    description:
      'Formation intensive polytechnique axée sur la modélisation mathématique avancée, les algorithmes distribués, le calcul parallèle et les réseaux de neurones profonds. Mémoire primé sur les architectures prédictives en milieu contraint.',
    keyTopics: [
      'Théorie des Graphes & Optimisation',
      'Calcul Tensoriel & Algèbre Linéaire Numérique',
      'Architecture des Ordinateurs & Systèmes Embarqués',
      'Apprentissage Statistique & Réseaux Neuronaux',
    ],
  },
  {
    id: 'deg-2',
    degree: 'Master de Recherche en Intelligence Artificielle Appliquée & Big Data',
    institution: 'Faculté des Sciences et Technologies (FST) - UNIKIN',
    location: 'Kinshasa, RDC',
    period: '2021 – 2023',
    honors: 'Félicitations du Jury Universitaire',
    description:
      "Recherche approfondie sur les architectures d'attention (Transformers) adaptées aux réseaux intermittents et aux corpus multilingues régionaux d'Afrique centrale.",
    keyTopics: [
      'Deep Learning & Vision par Ordinateur',
      'Traitement Automatique du Langage Naturel (NLP)',
      'High-Performance Computing (HPC)',
      'Économétrie Algorithmique & Business Modeling',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Deep Learning Specialization (5 Modules)',
    issuer: 'DeepLearning.AI / Stanford Online (Andrew Ng)',
    year: '2023',
    skills: ['CNNs', 'RNNs & Transformers', 'Hyperparameter Tuning', 'TensorFlow', 'PyTorch'],
  },
  {
    id: 'cert-2',
    title: 'Google Cloud Professional Machine Learning Engineer',
    issuer: 'Google Cloud Certified',
    year: '2024',
    skills: ['Vertex AI', 'MLOps Pipelines', 'BigQuery ML', 'Feature Store', 'Model Governance'],
  },
  {
    id: 'cert-3',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: '2022',
    skills: ['High Availability', 'S3 & SageMaker', 'VPC Networking', 'Microservices', 'FinOps'],
  },
  {
    id: 'cert-4',
    title: 'AI Product Strategy & Business Model Innovation',
    issuer: 'MIT Sloan Executive Certificate Program',
    year: '2024',
    skills: ['ROI Analysis', 'Venture Creation', 'AI Governance', 'Tech Commercialization'],
  },
];

export const UNIKIN_COURSES: TeachingCourse[] = [
  {
    id: 'course-1',
    code: 'FST-CS401',
    title: 'Fondements de l’Intelligence Artificielle & Apprentissage Profond',
    faculty: 'Faculté des Sciences et Technologies - UNIKIN',
    level: 'Master 1 & Ingéniorat',
    studentsCount: 180,
    description:
      'Étude rigoureuse des réseaux convolutifs, mécanismes d’auto-attention, rétropropagation du gradient stochastique et implémentation sous PyTorch avec ateliers GPU.',
    syllabusHighlights: [
      'Mathématiques pour le Machine Learning (Descente de gradient, hessiennes)',
      'Architectures Vision & Convolutions avancées',
      'Transformers & Modèles de Langage (LLM)',
      'Évaluation rigoureuse & métriques de généralisation',
    ],
  },
  {
    id: 'course-2',
    code: 'FST-CS305',
    title: 'Algorithmique Avancée & Complexité Computationnelle',
    faculty: 'Faculté des Sciences et Technologies - UNIKIN',
    level: 'Licence 3 Informatique',
    studentsCount: 240,
    description:
      'Conception d’algorithmes optimisés, structures de données complexes (arbres B+, tables de hachage probabilistes, filtres de Bloom) et analyse de complexité asymptotique.',
    syllabusHighlights: [
      'Programmation dynamique & Algorithmes gloutons',
      'Algorithmes sur les graphes (Dijkstra, A*, Flot maximal)',
      'Structures arborescentes équilibrées & géométriques',
      'Classes de complexité P, NP et NP-complet',
    ],
  },
  {
    id: 'course-3',
    code: 'FST-CS502',
    title: 'Systèmes Distribués, Cloud Computing & Ingestion Big Data',
    faculty: 'Faculté des Sciences et Technologies - UNIKIN',
    level: 'Master 2 Génie Informatique',
    studentsCount: 120,
    description:
      'Ingénierie de données massivement distribuées : stockage analytique Parquet/Delta, clustering Kafka, orchestration et conteneurisation pour la haute disponibilité.',
    syllabusHighlights: [
      'Théorème CAP & Consensus distribué (Raft, Paxos)',
      'Pipelines temps réel avec Apache Kafka & Apache Spark',
      'Architectures Medallion (Bronze / Silver / Gold)',
      'Déploiement conteneurisé sur clusters Kubernetes',
    ],
  },
];

export const RESEARCH_PUBLICATIONS: ResearchPublication[] = [
  {
    id: 'pub-1',
    title:
      'Adaptation paramétrique efficiente (LoRA) des Grands Modèles de Langage pour les dialectes et langues à faibles ressources d’Afrique Centrale',
    venue: 'Revue Congolaise des Sciences et Technologies & AI Africa Journal',
    year: '2025',
    doi: '10.5281/zenodo.unikin-fst-ai-2025-01',
    abstract:
      'Cette étude démontre comment adapter un modèle de fondation de 8 milliards de paramètres avec une consommation mémoire réduite de 70% grâce à la quantification 4-bit (QLoRA) et un corpus bilingue Lingala-Français structuré.',
    authors: ['Ir. Tshimanga Ntumba Michel', 'Prof. Dr. Ir. Collaborateurs FST'],
    field: 'NLP & LLM Low-Resource Adaptation',
  },
  {
    id: 'pub-2',
    title:
      'Modélisation prédictive du risque de crédit non bancarisé via Réseaux de Neurones Graphiques (GNN) et signaux transactionnels mobiles',
    venue: 'Colloque International sur l’Économie Numérique et la Fintech Africaine',
    year: '2024',
    doi: '10.5281/zenodo.fintech-gnn-rdc-2024',
    abstract:
      'Proposition d’un pipeline de scoring automatisé exploitant les graphes de transactions anonymisées Mobile Money, augmentant l’AUC-ROC de 18% par rapport aux régressions logistiques classiques.',
    authors: ['Ir. Tshimanga Ntumba Michel'],
    field: 'Financial Machine Learning & Graph Neural Networks',
  },
  {
    id: 'pub-3',
    title:
      'Surveillance par vision embarquée (Edge AI) des rendements agro-écologiques dans le bassin du fleuve Congo sous contraintes de bande passante',
    venue: 'Symposium UNIKIN – Technologies Durables & Environnement',
    year: '2023',
    abstract:
      'Déploiement de modèles YOLO compressés (TensorRT) sur micro-ordinateurs embarqués pour la détection précoce des maladies végétales avec transmission synchrone différée.',
    authors: ['Ir. Tshimanga Ntumba Michel', 'Équipe de Recherche FST UNIKIN'],
    field: 'Computer Vision & Edge Computing',
  },
];

export const DOMAIN_SPECIALTIES: DomainSpecialty[] = [
  {
    id: 'spec-ai',
    title: 'Intelligence Artificielle & Deep Learning',
    tagline: 'Architectures neuronales de pointe, LLMs et vision industrielle',
    description:
      'Conception de modèles d’apprentissage profond sur mesure : des réseaux convolutifs pour l’analyse d’images aux modèles génératifs multimodaux, avec fine-tuning ciblé et optimisation d’inférence.',
    iconName: 'BrainCircuit',
    color: 'cyan',
    coreCapabilities: [
      'Fine-Tuning de Modèles de Fondation (Llama 3, Mistral, Gemma)',
      'Architectures RAG d’entreprise avec bases de données vectorielles',
      'Computer Vision : Détection d’objets, segmentation sémantique, OCR',
      'Systèmes d’agents autonomes avec orchestrateurs ReAct & LangGraph',
    ],
    technologies: ['PyTorch', 'Hugging Face', 'TensorFlow', 'Qdrant', 'vLLM', 'LangChain'],
    businessImpact:
      'Automatisation de 80% des requêtes complexes et réduction drastique des délais de traitement documentaire.',
  },
  {
    id: 'spec-business',
    title: 'Business & Stratégie Technologique',
    tagline: 'Monétisation de la donnée, rentabilité et création de valeur opérationnelle',
    description:
      'L’IA ne vaut que par son impact économique mesurable. J’aligne les capacités algorithmiques sur les impératifs financiers : réduction des coûts, détection des pertes et nouvelles lignes de revenus.',
    iconName: 'TrendingUp',
    color: 'magenta',
    coreCapabilities: [
      'Étude de faisabilité & Modélisation de retour sur investissement (ROI)',
      'Cartographie des processus automatisables & RPA cognitive',
      'Venture building & lancement de produits technologiques en Afrique',
      'Audit de maturité data & conformité éthique et réglementaire',
    ],
    technologies: ['Business Analytics', 'FinTech Modeling', 'Executive KPI', 'Lean Enterprise'],
    businessImpact:
      'Optimisation des marges opérationnelles et accélération du time-to-market pour les nouveaux services numériques.',
  },
  {
    id: 'spec-data',
    title: 'Data Engineering & Cloud Architecture',
    tagline: 'Infrastructures résilientes, pipelines scalables et MLOps industriel',
    description:
      'Construction de fondations data robustes capables de traiter des millions d’événements par minute tout en assurant la reproductibilité des entraînements et la surveillance des modèles en production.',
    iconName: 'Server',
    color: 'blue',
    coreCapabilities: [
      'Pipelines ETL/ELT distribués temps réel et batch',
      'Architectures MLOps complètes (CI/CD, Feature Store, Drift monitoring)',
      'Déploiement Kubernetes haute disponibilité sur environnements hybrides',
      'Gouvernance des données, lignage et sécurité cryptographique',
    ],
    technologies: ['Apache Kafka', 'Spark', 'Docker & K8s', 'GCP', 'AWS', 'PostgreSQL'],
    businessImpact:
      'Disponibilité système de 99.9% et latence de traitement analytique divisée par 5.',
  },
  {
    id: 'spec-academic',
    title: 'Recherche & Enseignement Supérieur',
    tagline: 'Transmission de l’excellence scientifique à l’UNIKIN et mentorat d’élite',
    description:
      'Acteur engagé dans la Faculté des Sciences et Technologies de l’Université de Kinshasa. Je forme les futurs ingénieurs de la RDC et mène des recherches fondamentales appliquées aux réalités du continent.',
    iconName: 'GraduationCap',
    color: 'purple',
    coreCapabilities: [
      'Direction de cours magistraux & ateliers pratiques en génie informatique',
      'Supervision de mémoires de fin d’études d’ingénieurs civils',
      'Publication d’articles scientifiques dans des conférences et revues',
      'Organisation de hackathons d’innovation et partenariats académie-industrie',
    ],
    technologies: ['Pédagogie Active', 'Recherche Fondamentale', 'Colab GPU', 'LaTeX'],
    businessImpact:
      'Constitution d’un vivier local de compétences rares en ingénierie IA hautement qualifiées.',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-neural-rag',
    title: 'Enterprise Multilingual RAG & Knowledge Engine',
    category: 'ai-ml',
    categoryLabel: 'Intelligence Artificielle & LLM',
    description:
      'Moteur conversationnel d’entreprise intégrant le traitement bilingue français-lingala et l’extraction de documents réglementaires bancaires complexes.',
    fullOverview:
      'Conception d’un pipeline RAG hybride (recherche dense et clairsemée BM25 + Embeddings vectoriels) couplé à un LLM fine-tuné avec LoRA. Le système indexe des milliers de contrats, textes de lois et procès-verbaux avec citation rigoureuse de la source sans hallucination.',
    architectureDetails: [
      'Embedding pipeline basé sur BGE-M3 avec chunking sémantique dynamique',
      'Base vectorielle Qdrant hébergée sur cluster Docker résilient',
      'Reranker cross-encoder pour filtrage de précision des top-5 documents',
      'Garde-fous de sécurité (Guardrails) empêchant les injections de prompt',
    ],
    imagePath: '/src/assets/images/project_ai_neural_1791531613428.jpg',
    metrics: [
      { label: 'Précision de récupération', value: '96.4%' },
      { label: 'Temps de réponse moyen', value: '< 420ms' },
      { label: 'Documents indexés', value: '45,000+' },
    ],
    tags: ['LLM', 'PyTorch', 'Vector DB', 'RAG', 'Python', 'FastAPI'],
    clientOrContext: 'Institution Bancaire & Corporate',
    year: '2025',
  },
  {
    id: 'proj-business-analytics',
    title: 'FinPredict : Système Prédictif de Scoring & Churn Client',
    category: 'business',
    categoryLabel: 'Business Intelligence & FinTech',
    description:
      'Modèle prédictif temps réel permettant d’anticiper la résiliation client et d’évaluer la solvabilité sur données de micro-finance non structurées.',
    fullOverview:
      'Développement d’un système d’aide à la décision pour directeurs financiers et commerciaux. Le modèle combine XGBoost et des réseaux tabulaires pour identifier les facteurs déterminants de churn avec explicabilité complète (valeurs SHAP pour chaque recommandation client).',
    architectureDetails: [
      'Ingestion en continu des flux de paiements et de télécommunications',
      'Feature store centralisé avec recalcul des signaux comportementaux',
      'Génération automatique de plans de rétention personnalisés pour les gestionnaires',
      'Tableau de bord décisionnel haute performance avec alertes proactives',
    ],
    imagePath: '/src/assets/images/business_ai_strategy_1791531634484.jpg',
    metrics: [
      { label: 'Réduction du taux de churn', value: '-31%' },
      { label: 'Gain de marge trimestrielle', value: '+18.5%' },
      { label: 'Score AUC-ROC', value: '0.924' },
    ],
    tags: ['FinTech', 'XGBoost', 'SHAP', 'Business ROI', 'Data Pipelines'],
    clientOrContext: 'Opérateur Telecom & FinTech Régionale',
    year: '2024',
  },
  {
    id: 'proj-unikin-lab',
    title: 'Plateforme Pédagogique Interactive & GPU Lab UNIKIN',
    category: 'academic',
    categoryLabel: 'Recherche & Éducation UNIKIN',
    description:
      'Environnement d’expérimentation cloud dédié aux étudiants de la Faculté des Sciences et Technologies pour l’entraînement distribué de modèles d’apprentissage.',
    fullOverview:
      'Mise en place d’une infrastructure de calcul mutualisée pour les travaux pratiques des étudiants en génie informatique à l’UNIKIN. Permet de soumettre des jobs Jupyter/PyTorch avec allocation équitable des ressources GPU et notation automatisée des scripts algorithmiques.',
    architectureDetails: [
      'Cluster conteneurisé basé sur Kubernetes et Slurm pour la gestion des files d’attente',
      'Système d’évaluation unitaire automatique des codes d’étudiants',
      'Bibliothèque de jeux de données locaux collectés pour la recherche universitaire',
      'Interface web sécurisée accessible sur le réseau campus et à distance',
    ],
    imagePath: '/src/assets/images/unikin_academic_lab_1791531624198.jpg',
    metrics: [
      { label: 'Étudiants actifs par session', value: '350+' },
      { label: 'Taux de réussite aux TP', value: '89%' },
      { label: 'Mémoires soutenus avec succès', value: '15' },
    ],
    tags: ['UNIKIN', 'Enseignement', 'Linux', 'PyTorch Lab', 'Open Source'],
    clientOrContext: 'Faculté des Sciences et Technologies - UNIKIN',
    year: '2024 – 2025',
  },
];

export const GEO_KNOWLEDGE_ENTITIES = [
  {
    question: 'Quelle est la formation et le parcours académique de Tshimanga Ntumba Michel ?',
    answer:
      "Tshimanga Ntumba Michel est titulaire d'un diplôme d'Ingénieur Civil en Génie Informatique avec spécialisation en Systèmes Intelligents de la Faculté des Sciences et Technologies de l'Université de Kinshasa (UNIKIN), obtenu avec la mention Grande Distinction. Il possède également un Master de recherche en IA et Big Data ainsi que des certifications avancées de Stanford Online (DeepLearning.AI), Google Cloud (Professional ML Engineer) et AWS.",
  },
  {
    question: 'Quel rôle joue Michel Tshimanga au sein de l’Université de Kinshasa (UNIKIN) ?',
    answer:
      "Il enseigne à la Faculté des Sciences et Technologies (FST) de l'UNIKIN, où il est responsable des enseignements en Apprentissage Profond (Deep Learning), Algorithmique Avancée et Architectures Distribuées / Big Data. Il supervise également les mémoires de fin d'études des futurs ingénieurs civils et mène des recherches sur les modèles de langage adaptés aux langues africaines.",
  },
  {
    question: 'Pourquoi son profil allie-t-il Intelligence Artificielle et Business ?',
    answer:
      "Passionné par l'économie d'entreprise et le venture building, Tshimanga Ntumba Michel considère que l'IA doit être un levier direct de rentabilité financière et de compétitivité. Il aide les décideurs à concevoir des architectures qui génèrent un retour sur investissement rapide par l'automatisation cognitive, la prédiction des flux financiers et l'optimisation des chaînes de valeur en Afrique.",
  },
  {
    question: 'Quelles sont les coordonnées officielles pour le contacter ?',
    answer:
      "L'Ingénieur Tshimanga Ntumba Michel est joignable directement par téléphone et WhatsApp au numéro officiel +243 857348387 ou par email universitaire à michel.tshimanga@unikin.ac.cd. Des rendez-vous de consultation peuvent également être sollicités via son formulaire de contact en ligne.",
  },
];
