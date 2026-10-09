export interface AcademicDegree {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  honors?: string;
  keyTopics: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  skills: string[];
}

export interface TeachingCourse {
  id: string;
  code: string;
  title: string;
  faculty: string;
  level: string;
  studentsCount: number;
  description: string;
  syllabusHighlights: string[];
}

export interface ResearchPublication {
  id: string;
  title: string;
  venue: string;
  year: string;
  doi?: string;
  abstract: string;
  authors: string[];
  field: string;
}

export interface DomainSpecialty {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  color: 'cyan' | 'purple' | 'blue' | 'magenta';
  coreCapabilities: string[];
  technologies: string[];
  businessImpact: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'ai-ml' | 'business' | 'academic' | 'data-cloud';
  categoryLabel: string;
  description: string;
  fullOverview: string;
  architectureDetails: string[];
  imagePath: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  clientOrContext: string;
  year: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  userType: 'enterprise' | 'academic' | 'investor' | 'individual';
  serviceType: 'ai-consulting' | 'business-automation' | 'academic-course' | 'research-partnership';
  timeline: 'urgent' | '1-3months' | 'long-term';
  budgetEstimate: string;
  projectDescription: string;
}
