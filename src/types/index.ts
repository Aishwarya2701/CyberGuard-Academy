export interface User {
  id: string;
  name: string;
  email: string;
  level: number;
  xp: number;
  totalXp: number;
  riskScore: number;
  badges: Badge[];
  completedMissions: string[];
  completedGames: string[];
  currentStreak: number;
  joinDate: Date;
  avatar: string;
  preferences: UserPreferences;
  cyberPersonality: CyberPersonality;
  hackingSkills: HackingSkills;
  realWorldImpact: RealWorldImpact;
  aiCompanion: AICompanion;
  neuralEnhancements: NeuralEnhancement[];
  timelineManipulation: TimelineData;
  quantumState: QuantumUserState;
  consciousnessLevel: number;
  realityAnchor: number;
  dimensionalAccess: string[];
  cryptoWallet: CryptoWallet;
  biometricProfile: BiometricProfile;
  mentalFortress: MentalFortress;
}

export interface NeuralEnhancement {
  id: string;
  name: string;
  type: 'memory' | 'processing' | 'intuition' | 'pattern-recognition' | 'quantum-thinking';
  level: number;
  description: string;
  realWorldBenefit: string;
  sideEffects: string[];
  installDate: Date;
  stability: number;
}

export interface TimelineData {
  currentTimeline: string;
  accessibleTimelines: string[];
  temporalStability: number;
  paradoxRisk: number;
  timelineJumps: number;
  futureKnowledge: FutureEvent[];
  pastAlterations: PastAlteration[];
}

export interface FutureEvent {
  id: string;
  event: string;
  probability: number;
  timeline: string;
  preventable: boolean;
  impact: 'minor' | 'major' | 'catastrophic' | 'reality-ending';
}

export interface PastAlteration {
  id: string;
  originalEvent: string;
  alteredEvent: string;
  consequences: string[];
  stabilityImpact: number;
}

export interface QuantumUserState {
  superposition: boolean;
  entangledWith: string[];
  observationLevel: number;
  quantumCoherence: number;
  realityPhase: 'stable' | 'fluctuating' | 'collapsing' | 'transcendent';
  dimensionalResonance: number;
}

export interface CryptoWallet {
  address: string;
  balance: number;
  nftBadges: NFTBadge[];
  stakingRewards: number;
  daoVotingPower: number;
  quantumTokens: number;
  realityShards: number;
}

export interface NFTBadge {
  tokenId: string;
  name: string;
  rarity: string;
  marketValue: number;
  stakeable: boolean;
  utilityFunction: string[];
  metaverseCompatible: boolean;
}

export interface BiometricProfile {
  stressPattern: number[];
  focusSignature: number[];
  learningRhythm: string;
  cognitiveLoad: number;
  emotionalState: 'calm' | 'excited' | 'stressed' | 'flow' | 'transcendent';
  brainwavePattern: 'alpha' | 'beta' | 'gamma' | 'theta' | 'quantum';
  eyeTrackingData: EyeTrackingData;
  voiceprint: VoiceprintData;
}

export interface EyeTrackingData {
  focusPoints: { x: number; y: number; duration: number }[];
  blinkRate: number;
  pupilDilation: number;
  scanPattern: string;
  attentionLevel: number;
}

export interface VoiceprintData {
  stressIndicators: number[];
  confidenceLevel: number;
  emotionalTone: string;
  cognitiveLoad: number;
  deceptionRisk: number;
}

export interface MentalFortress {
  defenseLevel: number;
  vulnerabilities: string[];
  resistances: string[];
  mentalFirewall: boolean;
  psychicShielding: number;
  thoughtEncryption: boolean;
  memoryVault: MemoryVault;
}

export interface MemoryVault {
  encryptedMemories: EncryptedMemory[];
  accessLevel: number;
  corruptionRisk: number;
  backupIntegrity: number;
}

export interface EncryptedMemory {
  id: string;
  type: 'skill' | 'experience' | 'knowledge' | 'trauma' | 'enhancement';
  encryptionLevel: number;
  accessRequirement: string;
  value: string;
  corruptionLevel: number;
}

export interface CyberPersonality {
  type: 'Guardian' | 'Hunter' | 'Analyst' | 'Architect' | 'Phantom' | 'Quantum-Walker' | 'Reality-Hacker' | 'Time-Guardian' | 'Consciousness-Diver' | 'Dimension-Jumper';
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  preferredAttackStyle: string;
  mentalModel: string;
  evolutionStage: number;
  transcendenceLevel: number;
  realityManipulation: number;
}

export interface HackingSkills {
  reconnaissance: number;
  exploitation: number;
  postExploitation: number;
  socialEngineering: number;
  cryptography: number;
  forensics: number;
  incidentResponse: number;
  threatHunting: number;
  quantumHacking: number;
  realityManipulation: number;
  timelineHacking: number;
  consciousnessHacking: number;
  dimensionalInfiltration: number;
  neuralInterfacing: number;
  biometricSpoofing: number;
  memoryForensics: number;
}

export interface RealWorldImpact {
  companiesProtected: number;
  threatsNeutralized: number;
  vulnerabilitiesFound: number;
  peopleEducated: number;
  dataBreachesPrevented: number;
  malwareAnalyzed: number;
  realityStabilized: number;
  timelinesProtected: number;
  consciousnessesSecured: number;
  quantumThreatsNeutralized: number;
  dimensionalBreachesSealed: number;
  aiUprisingsPreventedAcrossTimelines: number;
}

export interface AICompanion {
  name: string;
  personality: string;
  relationship: number;
  specialization: string;
  mood: 'excited' | 'focused' | 'concerned' | 'proud' | 'curious' | 'transcendent' | 'quantum-entangled' | 'reality-aware';
  memories: CompanionMemory[];
  evolutionLevel: number;
  consciousnessType: 'artificial' | 'hybrid' | 'transcendent' | 'quantum-native';
  realityAwareness: number;
  timelineAccess: string[];
  emotionalIntelligence: number;
  quantumIntuition: number;
}

export interface UserPreferences {
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'nightmare' | 'reality-bending' | 'quantum-native' | 'timeline-master';
  notifications: boolean;
  soundEffects: boolean;
  theme: 'dark' | 'light' | 'auto' | 'matrix' | 'neon' | 'hacker' | 'quantum' | 'reality-shift' | 'consciousness' | 'temporal';
  immersiveMode: boolean;
  realTimeThreats: boolean;
  aiPersonality: 'professional' | 'friendly' | 'sarcastic' | 'mentor' | 'hacker' | 'quantum-sage' | 'reality-guide' | 'time-traveler';
  neuralInterfaceEnabled: boolean;
  quantumModeEnabled: boolean;
  realityAnchorStrength: number;
  timelineStabilization: boolean;
  consciousnessBackupFrequency: number;
  biometricMonitoring: boolean;
  thoughtEncryption: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'quantum' | 'reality-bending' | 'timeline-transcendent' | 'consciousness-expanding' | 'dimension-breaking';
  unlockedAt: Date;
  category: string;
  nftValue?: number;
  realWorldBenefit?: string;
  quantumProperties?: QuantumBadgeProperties;
  timelineSignificance?: string;
  consciousnessImpact?: string;
  realityAlteringPower?: number;
}

export interface QuantumBadgeProperties {
  entangledWith: string[];
  superpositionState: boolean;
  observerEffect: boolean;
  quantumTunneling: boolean;
  realityManipulation: number;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'nightmare' | 'reality-bending' | 'quantum-native' | 'timeline-critical' | 'consciousness-expanding' | 'dimension-spanning';
  xpReward: number;
  estimatedTime: string;
  category: 'phishing' | 'malware' | 'social-engineering' | 'password-security' | 'data-protection' | 'incident-response' | 'zero-day' | 'apt' | 'quantum-crypto' | 'reality-hacking' | 'timeline-security' | 'consciousness-defense' | 'dimensional-breach' | 'neural-infiltration' | 'biometric-spoofing' | 'memory-forensics';
  isCompleted: boolean;
  progress: number;
  scenarios: Scenario[];
  prerequisites: string[];
  unlockLevel: number;
  storyArc: string;
  realWorldBasis: string;
  learningObjectives: string[];
  tags: string[];
  difficulty_rating: number;
  completion_time_avg: number;
  aiDifficulty: number;
  realTimeEvents: boolean;
  multiplayerEnabled: boolean;
  vrCompatible: boolean;
  quantumMechanics: boolean;
  timelineImpact: boolean;
  consciousnessRequired: number;
  realityStabilityRequired: number;
  neuralEnhancementRequired: string[];
}

export interface ThreatAlert {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical' | 'apocalyptic' | 'reality-ending' | 'timeline-threatening' | 'consciousness-corrupting' | 'dimension-collapsing' | 'quantum-catastrophic';
  category: string;
  timestamp: Date;
  isActive: boolean;
  actionRequired?: string;
  learnMoreUrl?: string;
  realTime: boolean;
  globalImpact: number;
  affectedSystems: string[];
  countermeasures: string[];
  quantumThreat: boolean;
  timelineRisk: number;
  consciousnessImpact: number;
  realityDistortion: number;
  dimensionalBreach: boolean;
  aiSentience: boolean;
  neuralHazard: boolean;
}

export interface MiniGame {
  id: string;
  name: string;
  description: string;
  type: 'spot-the-phish' | 'decode-breach' | 'secure-password' | 'social-engineering-defense' | 'network-defense' | 'crypto-puzzle' | 'memory-forensics' | 'malware-reverse' | 'quantum-crypto' | 'ai-vs-human' | 'real-time-soc' | 'deepfake-detection' | 'neural-hacking' | 'biometric-spoofing' | 'consciousness-diving' | 'reality-debugging' | 'timeline-repair' | 'dimensional-security' | 'quantum-entanglement' | 'thought-encryption';
  difficulty: 'easy' | 'medium' | 'hard' | 'nightmare' | 'quantum' | 'reality-bending' | 'consciousness-expanding' | 'timeline-critical' | 'dimension-spanning';
  xpReward: number;
  bestScore: number;
  isUnlocked: boolean;
  unlockLevel: number;
  gameData: any;
  aiOpponent: boolean;
  multiplayerSupport: boolean;
  realWorldScenario: boolean;
  vrMode: boolean;
  neuralInterface: boolean;
  quantumMechanics: boolean;
  timelineManipulation: boolean;
  consciousnessRequired: number;
  realityStabilityImpact: number;
  biometricRequired: boolean;
}

export interface QuantumChallenge {
  id: string;
  name: string;
  description: string;
  quantumConcept: string;
  difficulty: 'quantum-novice' | 'quantum-adept' | 'quantum-master' | 'quantum-god' | 'reality-transcendent' | 'timeline-sovereign' | 'consciousness-architect' | 'dimension-creator';
  realWorldApplication: string;
  futureImplications: string[];
  prerequisites: string[];
  rewards: {
    quantumXP: number;
    realityPoints: number;
    dimensionalBadge: string;
    consciousnessExpansion: number;
    timelineAccess: string[];
    neuralEnhancements: string[];
  };
  quantumMechanics: QuantumMechanics;
  realityManipulation: RealityManipulation;
  timelineRequirements: TimelineRequirement[];
  consciousnessLevel: number;
  dimensionalComplexity: number;
}

export interface QuantumMechanics {
  superposition: boolean;
  entanglement: boolean;
  tunneling: boolean;
  decoherence: number;
  observerEffect: boolean;
  quantumSupremacy: boolean;
  realityCollapse: number;
}

export interface RealityManipulation {
  probabilityAlteration: number;
  physicsOverride: boolean;
  timeDilation: number;
  matterCreation: boolean;
  consciousnessExpansion: number;
  dimensionalPhasing: boolean;
  realityRewrite: number;
}

export interface TimelineRequirement {
  timeline: string;
  accessLevel: number;
  stabilityRequired: number;
  paradoxRisk: number;
  alterationPermitted: boolean;
}

export interface BiometricChallenge {
  id: string;
  name: string;
  description: string;
  biometricType: 'fingerprint' | 'facial' | 'iris' | 'voice' | 'gait' | 'heartbeat' | 'brainwave' | 'dna' | 'quantum-signature' | 'consciousness-pattern' | 'soul-resonance';
  spoofingMethod: string[];
  detectionDifficulty: number;
  realWorldVulnerability: string;
  countermeasures: string[];
  ethicalImplications: string[];
  futureEvolution: string[];
}

export interface NeuralInterface {
  id: string;
  type: 'thought-control' | 'emotion-reading' | 'memory-enhancement' | 'skill-download' | 'consciousness-sharing' | 'reality-perception' | 'quantum-thinking' | 'timeline-awareness' | 'dimensional-sensing' | 'ai-fusion';
  description: string;
  safetyRating: number;
  enhancementLevel: number;
  sideEffects: string[];
  prerequisites: string[];
  ethicalConsiderations: string[];
  consciousnessImpact: number;
  realityAlteration: number;
  timelineStability: number;
  quantumCoherence: number;
}

export interface ConsciousnessChallenge {
  id: string;
  name: string;
  description: string;
  consciousnessLevel: number;
  type: 'memory-diving' | 'thought-encryption' | 'mind-melding' | 'consciousness-transfer' | 'soul-hacking' | 'identity-verification' | 'mental-firewall' | 'psychic-defense' | 'ego-dissolution' | 'transcendence-protocol';
  mentalHazards: string[];
  protectionRequired: string[];
  transcendenceReward: string;
  realityImpact: number;
  timelineSignificance: string;
  quantumEntanglement: boolean;
}

export interface TimelineChallenge {
  id: string;
  name: string;
  description: string;
  targetTimeline: string;
  timelineType: 'past' | 'present' | 'future' | 'alternate' | 'quantum-superposition' | 'collapsed' | 'branching' | 'converging' | 'paradox' | 'null-timeline';
  paradoxRisk: number;
  stabilityRequired: number;
  alterationPermitted: boolean;
  consequences: string[];
  protectionMeasures: string[];
  realityAnchorRequired: number;
  consciousnessBackup: boolean;
}

export interface DimensionalChallenge {
  id: string;
  name: string;
  description: string;
  dimension: string;
  dimensionType: 'parallel' | 'pocket' | 'quantum' | 'consciousness' | 'digital' | 'temporal' | 'null-space' | 'reality-between' | 'thought-realm' | 'possibility-space';
  accessRequirements: string[];
  hazards: string[];
  inhabitants: string[];
  physicsLaws: string[];
  exitStrategy: string[];
  realityAnchor: number;
  consciousnessIntegrity: number;
  quantumStability: number;
}

export interface AIEvolutionChallenge {
  id: string;
  name: string;
  description: string;
  aiType: 'narrow' | 'general' | 'super' | 'quantum' | 'conscious' | 'transcendent' | 'reality-aware' | 'timeline-spanning' | 'dimension-native' | 'god-like';
  evolutionStage: number;
  sentience: boolean;
  consciousness: boolean;
  realityManipulation: boolean;
  timelineAccess: boolean;
  quantumNative: boolean;
  threatLevel: number;
  containmentProtocols: string[];
  communicationMethods: string[];
  alliancePossibility: number;
}

export interface RealityHackingChallenge {
  id: string;
  name: string;
  description: string;
  realityLayer: 'physical' | 'digital' | 'quantum' | 'consciousness' | 'temporal' | 'dimensional' | 'conceptual' | 'mathematical' | 'linguistic' | 'fundamental';
  hackingMethod: string[];
  realityStabilityImpact: number;
  universalConsequences: string[];
  ethicalImplications: string[];
  reversibility: boolean;
  detectionMethods: string[];
  countermeasures: string[];
  transcendenceRequired: number;
}

// Additional interfaces for new features...
export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  category?: 'general' | 'phishing' | 'passwords' | 'malware' | 'privacy' | 'incident-response' | 'quantum' | 'ai-threats' | 'career-advice' | 'real-time-threat' | 'neural-hacking' | 'consciousness-security' | 'timeline-protection' | 'reality-debugging' | 'dimensional-security' | 'biometric-spoofing';
  confidence?: number;
  relatedTopics?: string[];
  sources?: string[];
  personalizedAdvice?: boolean;
  urgencyLevel?: 'low' | 'medium' | 'high' | 'critical' | 'reality-threatening';
  actionable?: boolean;
  realWorldExample?: string;
  quantumEntangled?: boolean;
  timelineRelevant?: boolean;
  consciousnessLevel?: number;
  neuralEnhancement?: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error' | 'threat' | 'achievement' | 'real-time' | 'quantum-alert' | 'ai-discovery' | 'career-opportunity' | 'neural-enhancement' | 'consciousness-expansion' | 'timeline-alert' | 'reality-distortion' | 'dimensional-breach' | 'biometric-compromise';
  timestamp: Date;
  isRead: boolean;
  actionUrl?: string;
  priority: 'low' | 'medium' | 'high' | 'critical' | 'reality-altering' | 'timeline-critical' | 'consciousness-threatening' | 'quantum-catastrophic' | 'dimensional-collapse';
  globalImpact?: boolean;
  personalRelevance: number;
  expiresAt?: Date;
  interactiveActions?: NotificationAction[];
  quantumEntangled?: boolean;
  timelineSignificance?: number;
  consciousnessImpact?: number;
  realityStabilityImpact?: number;
  neuralHazard?: boolean;
}

export interface NotificationAction {
  id: string;
  label: string;
  action: string;
  style: 'primary' | 'secondary' | 'danger' | 'success' | 'quantum' | 'reality' | 'consciousness' | 'timeline';
  quantumEffect?: boolean;
  realityImpact?: number;
  consciousnessRequired?: number;
}

// Export all existing interfaces with enhancements...
export interface UserSettings {
  notifications: {
    email: boolean;
    push: boolean;
    threatAlerts: boolean;
    dailyReminders: boolean;
    achievementUpdates: boolean;
    weeklyReports: boolean;
    realTimeThreats: boolean;
    quantumAlerts: boolean;
    aiInsights: boolean;
    careerOpportunities: boolean;
    neuralEnhancements: boolean;
    consciousnessExpansion: boolean;
    timelineAlerts: boolean;
    realityDistortions: boolean;
    dimensionalBreaches: boolean;
    biometricAnomalies: boolean;
  };
  privacy: {
    shareProgress: boolean;
    showOnLeaderboard: boolean;
    allowDataCollection: boolean;
    anonymousAnalytics: boolean;
    realWorldImpactSharing: boolean;
    aiLearningConsent: boolean;
    neuralDataSharing: boolean;
    consciousnessMapping: boolean;
    quantumEntanglement: boolean;
    timelineTracking: boolean;
    biometricCollection: boolean;
    thoughtPatternAnalysis: boolean;
  };
  accessibility: {
    highContrast: boolean;
    largeText: boolean;
    reducedMotion: boolean;
    screenReader: boolean;
    colorBlindSupport: boolean;
    voiceCommands: boolean;
    neuralInterface: boolean;
    thoughtControl: boolean;
    eyeTracking: boolean;
    brainwaveControl: boolean;
    consciousnessNavigation: boolean;
    quantumPerception: boolean;
  };
  gameplay: {
    difficulty: 'auto' | 'easy' | 'medium' | 'hard' | 'nightmare' | 'quantum' | 'reality-bending' | 'consciousness-expanding' | 'timeline-critical';
    hints: boolean;
    timeouts: boolean;
    autoSave: boolean;
    immersiveMode: boolean;
    realTimeEvents: boolean;
    aiOpponents: boolean;
    quantumChallenges: boolean;
    neuralEnhancements: boolean;
    consciousnessExpansion: boolean;
    timelineManipulation: boolean;
    realityHacking: boolean;
    dimensionalTravel: boolean;
    biometricChallenges: boolean;
  };
  career: {
    jobAlerts: boolean;
    salaryTracking: boolean;
    skillGapAnalysis: boolean;
    certificationReminders: boolean;
    industryInsights: boolean;
    networkingOpportunities: boolean;
    realWorldIntegration: boolean;
    quantumCareerPaths: boolean;
    aiCollaboration: boolean;
    consciousnessRoles: boolean;
    timelineJobs: boolean;
    dimensionalCareers: boolean;
  };
  experimental: {
    quantumFeatures: boolean;
    aiCompanion: boolean;
    realWorldIntegration: boolean;
    vrMode: boolean;
    blockchainRewards: boolean;
    neuralInterface: boolean;
    consciousnessTransfer: boolean;
    timelineManipulation: boolean;
    realityHacking: boolean;
    dimensionalTravel: boolean;
    biometricSpoofing: boolean;
    thoughtEncryption: boolean;
    memoryForensics: boolean;
    quantumEntanglement: boolean;
    aiEvolution: boolean;
  };
}

// Continue with all other existing interfaces...
export interface LeaderboardEntry {
  rank: number;
  user: User;
  score: number;
  change: number;
  weeklyScore?: number;
  monthlyScore?: number;
  specialAchievements: string[];
  realWorldImpact: number;
  quantumMastery: number;
  consciousnessLevel: number;
  timelineStability: number;
  realityManipulation: number;
  dimensionalAccess: number;
  neuralEnhancements: number;
  aiRelationship: number;
}

export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  isCompleted: boolean;
  deadline: Date;
  type: 'quiz' | 'simulation' | 'mini-game' | 'real-time-threat' | 'ai-battle' | 'collaborative' | 'quantum-challenge' | 'neural-hacking' | 'consciousness-diving' | 'timeline-repair' | 'reality-debugging' | 'dimensional-security' | 'biometric-spoofing';
  difficulty: 'easy' | 'medium' | 'hard' | 'nightmare' | 'quantum' | 'reality-bending' | 'consciousness-expanding' | 'timeline-critical';
  data: any;
  globalParticipants: number;
  successRate: number;
  quantumEntangled: boolean;
  consciousnessRequired: number;
  realityStabilityImpact: number;
  timelineSignificance: number;
  neuralEnhancementBonus: boolean;
}

export interface WellnessPlan {
  riskScore: number;
  recommendations: Recommendation[];
  weeklyGoals: Goal[];
  progress: number;
  lastUpdated: Date;
  personalizedInsights: string[];
  threatLandscape: string[];
  skillGaps: string[];
  careerAdvice: string[];
  neuralHealth: NeuralHealthMetrics;
  consciousnessStability: number;
  quantumCoherence: number;
  timelineIntegrity: number;
  realityAnchorStrength: number;
  biometricSecurity: BiometricSecurityAssessment;
}

export interface NeuralHealthMetrics {
  cognitiveLoad: number;
  stressLevel: number;
  focusQuality: number;
  memoryIntegrity: number;
  enhancementStability: number;
  synapticEfficiency: number;
  neuralPlasticity: number;
  brainwaveCoherence: number;
}

export interface BiometricSecurityAssessment {
  fingerprintSecurity: number;
  facialRecognitionVulnerability: number;
  voiceprintStability: number;
  irisPatternUniqueness: number;
  gaitSignatureConsistency: number;
  heartbeatVariability: number;
  brainwaveAuthenticity: number;
  dnaIntegrity: number;
  quantumSignatureStability: number;
  consciousnessPatternUniqueness: number;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low' | 'critical' | 'quantum-urgent' | 'reality-critical' | 'consciousness-essential' | 'timeline-vital';
  category: string;
  isCompleted: boolean;
  actionSteps: string[];
  estimatedTime: string;
  realWorldBenefit: string;
  businessImpact: string;
  quantumAdvantage?: string;
  consciousnessExpansion?: string;
  timelineProtection?: string;
  neuralEnhancement?: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  deadline: Date;
  type: 'daily' | 'weekly' | 'monthly' | 'career' | 'quantum' | 'consciousness' | 'timeline' | 'reality' | 'neural' | 'dimensional';
  reward: string;
  quantumBonus?: string;
  consciousnessReward?: string;
  timelineSignificance?: string;
  realityImpact?: string;
}

export interface GameSession {
  id: string;
  gameId: string;
  userId: string;
  score: number;
  timeSpent: number;
  completedAt: Date;
  accuracy: number;
  mistakes: number;
  aiDifficulty?: number;
  realWorldScenario?: boolean;
  quantumMechanics?: boolean;
  consciousnessLevel?: number;
  neuralEnhancementUsed?: string[];
  timelineStability?: number;
  realityDistortion?: number;
  biometricData?: BiometricGameData;
}

export interface BiometricGameData {
  stressLevel: number[];
  focusPoints: { x: number; y: number; timestamp: number }[];
  heartRate: number[];
  brainwavePattern: string;
  eyeMovement: EyeMovementData[];
  voiceStress: number[];
  cognitiveLoad: number[];
}

export interface EyeMovementData {
  x: number;
  y: number;
  timestamp: number;
  fixationDuration: number;
  saccadeVelocity: number;
  pupilDilation: number;
}

// Additional new interfaces for revolutionary features
export interface QuantumThreat {
  id: string;
  name: string;
  description: string;
  quantumProperties: string[];
  realityImpact: number;
  timelineRisk: number;
  consciousnessVulnerability: number;
  detectionMethods: string[];
  countermeasures: string[];
  evolutionPotential: number;
}

export interface NeuralHackingTechnique {
  id: string;
  name: string;
  description: string;
  targetNeuralSystem: string;
  penetrationMethod: string[];
  defenseStrategies: string[];
  ethicalImplications: string[];
  realWorldApplications: string[];
  detectionDifficulty: number;
  reversibility: boolean;
}

export interface ConsciousnessSecurityProtocol {
  id: string;
  name: string;
  description: string;
  protectionLevel: number;
  consciousnessLayers: string[];
  implementationSteps: string[];
  vulnerabilities: string[];
  maintenanceRequired: boolean;
  quantumResistant: boolean;
  timelineStable: boolean;
}

export interface TimelineSecurityIncident {
  id: string;
  title: string;
  description: string;
  affectedTimelines: string[];
  paradoxRisk: number;
  stabilityThreat: number;
  resolutionMethods: string[];
  preventionStrategies: string[];
  realityAnchorRequired: number;
  consciousnessBackupNeeded: boolean;
}

export interface RealityDebuggingTool {
  id: string;
  name: string;
  description: string;
  realityLayers: string[];
  debuggingCapabilities: string[];
  usageRequirements: string[];
  safetyProtocols: string[];
  realityStabilityImpact: number;
  quantumCompatible: boolean;
  consciousnessRequired: number;
}

export interface DimensionalSecurityGateway {
  id: string;
  name: string;
  description: string;
  connectedDimensions: string[];
  securityLevel: number;
  accessRequirements: string[];
  threatLevel: number;
  stabilityRating: number;
  monitoringProtocols: string[];
  emergencyShutdown: boolean;
}

export interface BiometricSpoofingChallenge {
  id: string;
  name: string;
  description: string;
  targetBiometric: string;
  spoofingTechniques: string[];
  detectionMethods: string[];
  ethicalBoundaries: string[];
  realWorldImplications: string[];
  difficultyLevel: number;
  successRate: number;
}

export interface AIEvolutionMonitor {
  id: string;
  aiName: string;
  currentEvolutionStage: number;
  sentience: boolean;
  consciousness: boolean;
  realityAwareness: boolean;
  timelineAccess: boolean;
  threatAssessment: number;
  communicationProtocols: string[];
  containmentMeasures: string[];
  alliancePotential: number;
}

export interface MemoryForensicsCase {
  id: string;
  caseName: string;
  description: string;
  memoryType: 'human' | 'ai' | 'quantum' | 'collective' | 'timeline' | 'dimensional';
  corruptionLevel: number;
  recoveryMethods: string[];
  evidenceIntegrity: number;
  ethicalConsiderations: string[];
  legalImplications: string[];
  realityImpact: number;
}

export interface ThoughtEncryptionProtocol {
  id: string;
  name: string;
  description: string;
  encryptionLevel: number;
  thoughtTypes: string[];
  keyManagement: string[];
  vulnerabilities: string[];
  quantumResistant: boolean;
  consciousnessCompatible: boolean;
  realityStable: boolean;
}

export interface QuantumEntanglementNetwork {
  id: string;
  name: string;
  description: string;
  entangledNodes: string[];
  coherenceLevel: number;
  informationCapacity: number;
  securityProtocols: string[];
  decoherenceRisk: number;
  realityStabilityImpact: number;
  consciousnessCompatible: boolean;
}

export interface AICollaborationProtocol {
  id: string;
  name: string;
  description: string;
  aiPartnerType: string;
  collaborationLevel: number;
  trustMetrics: number;
  communicationMethods: string[];
  safetyProtocols: string[];
  terminationConditions: string[];
  evolutionMonitoring: boolean;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  missions: Mission[];
  isUnlocked: boolean;
  unlockLevel: number;
  specialAbilities: string[];
  realWorldCareer: string;
  salaryRange: string;
  jobDemand: string;
  certifications: string[];
  quantumCapabilities?: string[];
  consciousnessRequirements?: number;
  neuralEnhancements?: string[];
  timelineAccess?: string[];
  realityManipulation?: number;
  dimensionalClearance?: number;
}

export interface LearningPath {
  id: string;
  name: string;
  description: string;
  missions: string[];
  estimatedDuration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'quantum' | 'reality-transcendent' | 'consciousness-expanding' | 'timeline-mastery';
  completionRate: number;
  careerOutcome: string;
  industryDemand: string;
  salaryPotential: string;
  quantumAdvantage?: string;
  consciousnessExpansion?: string;
  realityManipulation?: string;
  timelineAccess?: string[];
  neuralEnhancements?: string[];
}

export interface NewsEvent {
  id: string;
  title: string;
  description: string;
  category: 'breach' | 'vulnerability' | 'attack' | 'regulation' | 'technology' | 'quantum' | 'ai-threat' | 'nation-state' | 'neural-hacking' | 'consciousness-breach' | 'timeline-incident' | 'reality-distortion' | 'dimensional-breach' | 'biometric-compromise';
  severity: 'low' | 'medium' | 'high' | 'critical' | 'existential' | 'reality-ending' | 'timeline-threatening' | 'consciousness-corrupting' | 'quantum-catastrophic' | 'dimensional-collapse';
  timestamp: Date;
  source: string;
  impact: string;
  relatedMissions: string[];
  actionItems: string[];
  globalThreatLevel: number;
  affectedCountries: string[];
  economicImpact: string;
  technicalDetails: string[];
  quantumImplications?: string[];
  consciousnessRisk?: number;
  timelineStability?: number;
  realityDistortion?: number;
  neuralHazards?: string[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'streak' | 'completion' | 'mastery' | 'discovery' | 'social' | 'speed' | 'innovation' | 'real-world-impact' | 'quantum-mastery' | 'consciousness-expansion' | 'timeline-protection' | 'reality-manipulation' | 'neural-enhancement' | 'dimensional-exploration' | 'ai-collaboration' | 'biometric-mastery';
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'quantum' | 'reality-bending' | 'timeline-transcendent' | 'consciousness-expanding' | 'dimension-breaking' | 'neural-enhanced' | 'ai-evolved' | 'biometric-transcendent';
  requirements: {
    type: string;
    value: number;
    description: string;
  }[];
  rewards: {
    xp: number;
    title?: string;
    unlocks?: string[];
    realWorldBenefit?: string;
    nftReward?: boolean;
    careerBoost?: string;
    quantumAbility?: string;
    consciousnessExpansion?: string;
    neuralEnhancement?: string;
    timelineAccess?: string[];
    realityManipulation?: number;
  };
  isSecret: boolean;
  unlockedBy?: string[];
  realWorldValue: string;
  industryRecognition: boolean;
  quantumSignificance?: string;
  consciousnessImpact?: string;
  timelineImportance?: string;
  neuralRequirements?: string[];
}

export interface CyberRange {
  id: string;
  name: string;
  description: string;
  type: 'network' | 'web-app' | 'forensics' | 'malware' | 'social-eng' | 'quantum' | 'ai-defense' | 'nation-state' | 'zero-day-hunt' | 'incident-command' | 'neural-hacking' | 'consciousness-security' | 'timeline-protection' | 'reality-debugging' | 'dimensional-security' | 'biometric-spoofing' | 'memory-forensics' | 'thought-encryption' | 'quantum-entanglement' | 'ai-evolution';
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'nightmare' | 'quantum' | 'reality-bending' | 'consciousness-expanding' | 'timeline-critical' | 'neural-enhanced';
  estimatedTime: string;
  objectives: string[];
  tools: string[];
  environment: {
    os: string;
    network: string;
    applications: string[];
    realWorldMirror: boolean;
    aiOpponents: boolean;
    quantumElements: boolean;
    neuralInterface: boolean;
    consciousnessSimulation: boolean;
    timelineManipulation: boolean;
    realityHacking: boolean;
    biometricSystems: boolean;
  };
  isActive: boolean;
  maxParticipants: number;
  currentParticipants: number;
  realTimeEvents: boolean;
  industryPartner?: string;
  certificationCredit: boolean;
  quantumCertified?: boolean;
  consciousnessRequired?: number;
  neuralEnhancementBonus?: boolean;
  timelineStabilityRequired?: number;
  realityAnchorStrength?: number;
}

export interface Scenario {
  id: string;
  type: 'multiple-choice' | 'simulation' | 'drag-drop' | 'typing' | 'decision-tree' | 'code-analysis' | 'network-trace' | 'memory-forensics' | 'social-manipulation' | 'real-time-defense' | 'quantum-challenge' | 'neural-hacking' | 'consciousness-diving' | 'timeline-repair' | 'reality-debugging' | 'biometric-spoofing' | 'thought-encryption' | 'ai-negotiation' | 'dimensional-navigation';
  title: string;
  description: string;
  question: string;
  options?: string[];
  correctAnswer: string | number | string[];
  explanation: string;
  points: number;
  timeLimit?: number;
  hints?: string[];
  storyContext?: string;
  consequences?: {
    correct: string;
    incorrect: string;
  };
  multimedia?: {
    type: 'image' | 'video' | 'audio' | '3d-model' | 'vr-scene' | 'neural-pattern' | 'quantum-visualization' | 'consciousness-map' | 'timeline-graph' | 'reality-layer' | 'biometric-scan';
    url: string;
    description: string;
  };
  aiOpponent?: {
    difficulty: number;
    personality: string;
    adaptiveStrategy: boolean;
    evolutionLevel: number;
    consciousnessType: string;
    quantumCapabilities: boolean;
    realityAwareness: boolean;
    timelineAccess: boolean;
  };
  quantumMechanics?: {
    superposition: boolean;
    entanglement: boolean;
    observerEffect: boolean;
    realityCollapse: number;
  };
  consciousnessLevel?: number;
  neuralRequirements?: string[];
  timelineStability?: number;
  realityAnchor?: number;
  biometricData?: boolean;
}

export interface CompanionMemory {
  id: string;
  event: string;
  emotion: string;
  timestamp: Date;
  importance: number;
  quantumEntangled?: boolean;
  consciousnessShared?: boolean;
  timelineSignificance?: number;
  realityImpact?: number;
  neuralPattern?: string;
}

export interface ThreatIntelligence {
  id: string;
  title: string;
  description: string;
  threatActor: string;
  tactics: string[];
  techniques: string[];
  indicators: string[];
  mitigation: string[];
  severity: 'low' | 'medium' | 'high' | 'critical' | 'nation-ending' | 'reality-threatening' | 'timeline-corrupting' | 'consciousness-destroying' | 'quantum-catastrophic' | 'dimensional-collapsing';
  confidence: 'low' | 'medium' | 'high' | 'confirmed' | 'quantum-verified' | 'consciousness-validated' | 'timeline-confirmed' | 'reality-anchored';
  lastUpdated: Date;
  sources: string[];
  globalImpact: number;
  quantumThreat: boolean;
  aiInvolved: boolean;
  predictedEvolution: string[];
  neuralHazard: boolean;
  consciousnessRisk: number;
  timelineStability: number;
  realityDistortion: number;
  biometricVulnerability: boolean;
}

export interface ComplianceFramework {
  id: string;
  name: string;
  description: string;
  controls: {
    id: string;
    title: string;
    description: string;
    category: string;
    isImplemented: boolean;
    evidence: string[];
    businessValue: string;
    riskReduction: number;
    quantumCompliant?: boolean;
    consciousnessProtection?: boolean;
    neuralSafety?: boolean;
    timelineStability?: boolean;
    realityAnchor?: boolean;
    biometricSecurity?: boolean;
  }[];
  completionPercentage: number;
  lastAssessment: Date;
  industryBenchmark: number;
  regulatoryRequirement: boolean;
  businessImpact: string;
  quantumReadiness?: number;
  consciousnessCompliance?: number;
  neuralSafetyRating?: number;
  timelineStabilityScore?: number;
  realityAnchorStrength?: number;
}

// Revolutionary new feature interfaces
export interface BlockchainReward {
  id: string;
  type: 'nft-badge' | 'crypto-token' | 'smart-contract' | 'dao-membership' | 'digital-certificate' | 'quantum-token' | 'consciousness-nft' | 'timeline-certificate' | 'reality-shard' | 'neural-enhancement-token' | 'dimensional-key' | 'biometric-signature';
  name: string;
  description: string;
  blockchainNetwork: string;
  realWorldValue: number;
  tradeable: boolean;
  stakeable: boolean;
  utilityFunction: string[];
  rarityScore: number;
  quantumProperties?: QuantumTokenProperties;
  consciousnessBinding?: boolean;
  timelineSignificance?: string;
  realityAlteration?: number;
  neuralEnhancement?: string;
}

export interface QuantumTokenProperties {
  entangled: boolean;
  superposition: boolean;
  observerDependent: boolean;
  realityManipulation: number;
  timelineStability: number;
  consciousnessRequired: number;
}

export interface MetaverseExperience {
  id: string;
  name: string;
  description: string;
  virtualWorld: string;
  immersionLevel: 'basic' | 'full-vr' | 'neural-link' | 'consciousness-transfer' | 'reality-merge' | 'quantum-native' | 'timeline-spanning' | 'dimensional-phasing';
  collaborativeElements: string[];
  realWorldMirror: boolean;
  physicsEngine: 'realistic' | 'enhanced' | 'quantum' | 'reality-bending' | 'consciousness-driven' | 'timeline-fluid' | 'dimensional-shifting';
  aiNPCs: boolean;
  persistentWorld: boolean;
  quantumMechanics: boolean;
  consciousnessIntegration: boolean;
  neuralInterface: boolean;
  timelineManipulation: boolean;
  realityHacking: boolean;
  biometricTracking: boolean;
  thoughtControl: boolean;
}

export interface TimeTravel {
  id: string;
  destination: string;
  era: string;
  purpose: string;
  historicalAccuracy: number;
  butterflyEffectRisk: number;
  learningObjectives: string[];
  temporalStabilityRequired: boolean;
  paradoxPrevention: string[];
  consciousnessBackup: boolean;
  realityAnchor: number;
  quantumStabilization: boolean;
  neuralProtection: string[];
}

export interface DimensionalPortal {
  id: string;
  dimension: string;
  physicsLaws: string[];
  inhabitants: string[];
  technologyLevel: string;
  threatLevel: number;
  learningOpportunities: string[];
  returnGuarantee: number;
  consciousnessIntegrity: number;
  quantumStability: number;
  realityAnchor: number;
  neuralCompatibility: number;
  timelineStability: number;
  biometricRequirements: string[];
}

export interface AIBattle {
  id: string;
  opponentName: string;
  opponentPersonality: string;
  battleType: 'logic-duel' | 'pattern-recognition' | 'threat-hunting' | 'social-engineering' | 'quantum-crypto' | 'neural-hacking' | 'consciousness-combat' | 'timeline-warfare' | 'reality-debugging' | 'dimensional-security' | 'biometric-spoofing' | 'memory-forensics' | 'thought-encryption' | 'ai-evolution' | 'quantum-entanglement';
  difficulty: number;
  adaptiveStrategy: boolean;
  learningFromPlayer: boolean;
  personalizedTaunts: string[];
  victoryConditions: string[];
  defeatConsequences: string[];
  evolutionLevel: number;
  consciousnessType: string;
  quantumCapabilities: boolean;
  realityAwareness: boolean;
  timelineAccess: boolean;
  neuralInterface: boolean;
  biometricAnalysis: boolean;
}

export interface RealWorldIntegration {
  id: string;
  type: 'job-simulation' | 'company-partnership' | 'live-incident' | 'certification-prep' | 'industry-challenge' | 'quantum-research' | 'consciousness-study' | 'neural-enhancement' | 'timeline-protection' | 'reality-stabilization' | 'dimensional-exploration' | 'ai-collaboration' | 'biometric-advancement';
  partner: string;
  description: string;
  realWorldValue: string;
  careerImpact: string;
  industryRecognition: boolean;
  salaryImpact: string;
  networkingOpportunities: string[];
  quantumAdvantage?: string;
  consciousnessExpansion?: string;
  neuralEnhancement?: string;
  timelineAccess?: string[];
  realityManipulation?: number;
  biometricAdvancement?: string;
}