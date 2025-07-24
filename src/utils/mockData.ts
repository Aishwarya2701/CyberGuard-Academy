import { 
  Mission, 
  ThreatAlert, 
  DailyChallenge, 
  MiniGame, 
  Role, 
  LeaderboardEntry, 
  WellnessPlan, 
  NewsEvent, 
  Achievement, 
  CyberRange,
  User 
} from '../types';

// Mock Missions Data
export const mockMissions: Mission[] = [
  {
    id: 'mission-1',
    title: 'The Midnight Breach',
    description: 'A sophisticated APT group has infiltrated a major corporation. As a security analyst, investigate the breach and contain the threat.',
    difficulty: 'beginner',
    xpReward: 300,
    estimatedTime: '15-20 minutes',
    category: 'incident-response',
    isCompleted: false,
    progress: 0,
    prerequisites: [],
    unlockLevel: 1,
    storyArc: 'Corporate Espionage',
    realWorldBasis: 'Based on the 2020 SolarWinds attack',
    learningObjectives: [
      'Identify signs of APT infiltration',
      'Understand lateral movement techniques',
      'Learn incident response procedures'
    ],
    tags: ['APT', 'Incident Response', 'Network Security'],
    difficulty_rating: 3,
    completion_time_avg: 18,
    scenarios: [
      {
        id: 'scenario-1-1',
        type: 'multiple-choice',
        title: 'Initial Detection',
        description: 'Your SIEM has triggered multiple alerts. Which should you investigate first?',
        question: 'Multiple security alerts have been triggered simultaneously. What is your first priority?',
        options: [
          'Check the most recent alert first',
          'Investigate the highest severity alert',
          'Look for patterns across all alerts',
          'Disable all affected systems immediately'
        ],
        correctAnswer: 2,
        explanation: 'Looking for patterns across alerts helps identify coordinated attacks and provides better context for the incident.',
        points: 100,
        timeLimit: 60,
        hints: ['Think about how advanced attackers operate', 'Consider the bigger picture'],
        storyContext: 'The SOC is buzzing with activity as multiple systems show signs of compromise.',
        consequences: {
          correct: 'You quickly identify a pattern suggesting a coordinated attack.',
          incorrect: 'You miss the coordinated nature of the attack, losing valuable time.'
        }
      },
      {
        id: 'scenario-1-2',
        type: 'typing',
        title: 'Log Analysis',
        description: 'Analyze the suspicious log entry and identify the attack technique.',
        question: 'What MITRE ATT&CK technique is being used in this log entry: "powershell.exe -enc SGVsbG8gV29ybGQ="',
        correctAnswer: 'T1059.001',
        explanation: 'This shows PowerShell with base64 encoded commands, which is technique T1059.001 - Command and Scripting Interpreter: PowerShell.',
        points: 150,
        timeLimit: 120,
        hints: ['The -enc parameter indicates encoded commands', 'Look up PowerShell techniques in MITRE ATT&CK']
      }
    ]
  },
  {
    id: 'mission-2',
    title: 'Phishing Storm',
    description: 'A massive phishing campaign is targeting your organization. Learn to identify and respond to sophisticated email threats.',
    difficulty: 'beginner',
    xpReward: 250,
    estimatedTime: '10-15 minutes',
    category: 'phishing',
    isCompleted: false,
    progress: 0,
    prerequisites: [],
    unlockLevel: 1,
    storyArc: 'Email Security',
    realWorldBasis: 'Inspired by the 2016 Democratic National Committee email phishing attack',
    learningObjectives: [
      'Recognize phishing indicators',
      'Understand email security headers',
      'Learn proper incident reporting'
    ],
    tags: ['Phishing', 'Email Security', 'Social Engineering'],
    difficulty_rating: 2,
    completion_time_avg: 12,
    scenarios: [
      {
        id: 'scenario-2-1',
        type: 'multiple-choice',
        title: 'Suspicious Email',
        description: 'You receive a suspicious email claiming to be from IT support.',
        question: 'Which of these email characteristics is the strongest indicator of phishing?',
        options: [
          'Generic greeting like "Dear User"',
          'Urgent language demanding immediate action',
          'Mismatched sender domain (display name vs actual email)',
          'Poor grammar and spelling'
        ],
        correctAnswer: 2,
        explanation: 'Domain spoofing is a technical indicator that\'s harder to fake and more reliable than social engineering tactics.',
        points: 100,
        timeLimit: 45,
        hints: ['Look at technical indicators rather than just content', 'Check the actual email address, not just the display name']
      }
    ]
  },
  {
    id: 'mission-3',
    title: 'Ransomware Rampage',
    description: 'Your organization has been hit by ransomware. Navigate the crisis, contain the damage, and restore operations.',
    difficulty: 'intermediate',
    xpReward: 500,
    estimatedTime: '25-30 minutes',
    category: 'malware',
    isCompleted: false,
    progress: 0,
    prerequisites: ['mission-1'],
    unlockLevel: 3,
    storyArc: 'Malware Defense',
    realWorldBasis: 'Based on the 2017 WannaCry ransomware attack',
    learningObjectives: [
      'Understand ransomware attack vectors',
      'Learn containment strategies',
      'Practice crisis communication'
    ],
    tags: ['Ransomware', 'Malware', 'Crisis Management'],
    difficulty_rating: 6,
    completion_time_avg: 28,
    scenarios: [
      {
        id: 'scenario-3-1',
        type: 'multiple-choice',
        title: 'Immediate Response',
        description: 'Ransomware has been detected on multiple systems.',
        question: 'What is your immediate priority when ransomware is detected?',
        options: [
          'Pay the ransom to minimize damage',
          'Isolate affected systems from the network',
          'Restart all affected computers',
          'Contact law enforcement immediately'
        ],
        correctAnswer: 1,
        explanation: 'Isolation prevents the ransomware from spreading to other systems and limits the scope of the attack.',
        points: 150,
        timeLimit: 30,
        hints: ['Think about containment first', 'Prevent further spread']
      }
    ]
  },
  {
    id: 'mission-4',
    title: 'Social Engineering Masterclass',
    description: 'Learn to recognize and defend against sophisticated social engineering attacks targeting human psychology.',
    difficulty: 'intermediate',
    xpReward: 400,
    estimatedTime: '20-25 minutes',
    category: 'social-engineering',
    isCompleted: false,
    progress: 0,
    prerequisites: ['mission-2'],
    unlockLevel: 4,
    storyArc: 'Human Factor Security',
    realWorldBasis: 'Based on Kevin Mitnick\'s social engineering techniques',
    learningObjectives: [
      'Understand psychological manipulation tactics',
      'Learn verification procedures',
      'Practice saying no to authority figures'
    ],
    tags: ['Social Engineering', 'Psychology', 'Human Security'],
    difficulty_rating: 5,
    completion_time_avg: 22,
    scenarios: [
      {
        id: 'scenario-4-1',
        type: 'multiple-choice',
        title: 'The Urgent Call',
        description: 'Someone claiming to be the CEO calls demanding immediate access to sensitive data.',
        question: 'How should you respond to an urgent request from someone claiming to be a senior executive?',
        options: [
          'Comply immediately to avoid getting in trouble',
          'Ask for their employee ID number',
          'Verify their identity through established channels',
          'Transfer them to your supervisor'
        ],
        correctAnswer: 2,
        explanation: 'Always verify identity through established, independent channels before providing sensitive information or access.',
        points: 120,
        timeLimit: 60,
        hints: ['Authority is often used in social engineering', 'Use independent verification methods']
      }
    ]
  },
  {
    id: 'mission-5',
    title: 'Password Fortress',
    description: 'Master the art of password security and learn about advanced authentication methods.',
    difficulty: 'beginner',
    xpReward: 200,
    estimatedTime: '10-15 minutes',
    category: 'password-security',
    isCompleted: false,
    progress: 0,
    prerequisites: [],
    unlockLevel: 2,
    storyArc: 'Authentication Security',
    realWorldBasis: 'Based on common password attack methods and breaches',
    learningObjectives: [
      'Create strong, unique passwords',
      'Understand multi-factor authentication',
      'Learn about password managers'
    ],
    tags: ['Passwords', 'Authentication', 'MFA'],
    difficulty_rating: 2,
    completion_time_avg: 13,
    scenarios: [
      {
        id: 'scenario-5-1',
        type: 'multiple-choice',
        title: 'Password Strength',
        description: 'Evaluate different password strategies for security.',
        question: 'Which password strategy provides the best security?',
        options: [
          'Using the same strong password everywhere',
          'Using unique passwords with a password manager',
          'Writing passwords down in a secure notebook',
          'Using memorable phrases with simple substitutions'
        ],
        correctAnswer: 1,
        explanation: 'Unique passwords managed by a password manager provide the best combination of security and usability.',
        points: 80,
        timeLimit: 45,
        hints: ['Think about password reuse risks', 'Consider both security and practicality']
      }
    ]
  },
  {
    id: 'mission-6',
    title: 'Data Guardian',
    description: 'Learn to protect sensitive data through encryption, access controls, and privacy best practices.',
    difficulty: 'intermediate',
    xpReward: 450,
    estimatedTime: '20-25 minutes',
    category: 'data-protection',
    isCompleted: false,
    progress: 0,
    prerequisites: ['mission-5'],
    unlockLevel: 5,
    storyArc: 'Data Security',
    realWorldBasis: 'Based on GDPR requirements and major data breaches',
    learningObjectives: [
      'Understand data classification',
      'Learn encryption best practices',
      'Practice access control principles'
    ],
    tags: ['Data Protection', 'Encryption', 'Privacy'],
    difficulty_rating: 5,
    completion_time_avg: 23,
    scenarios: [
      {
        id: 'scenario-6-1',
        type: 'multiple-choice',
        title: 'Data Classification',
        description: 'Classify different types of organizational data.',
        question: 'Which data classification level should be assigned to customer credit card information?',
        options: [
          'Public',
          'Internal',
          'Confidential',
          'Restricted'
        ],
        correctAnswer: 3,
        explanation: 'Credit card information is highly sensitive and requires the highest level of protection (Restricted).',
        points: 100,
        timeLimit: 30,
        hints: ['Consider regulatory requirements', 'Think about the impact of disclosure']
      }
    ]
  }
];

// Mock Threat Alerts Data
export const mockThreatAlerts: ThreatAlert[] = [
  {
    id: 'alert-1',
    title: 'Zero-Day Exploit in Popular Email Client',
    description: 'A critical vulnerability has been discovered in a widely-used email application, allowing remote code execution.',
    severity: 'critical',
    category: 'Vulnerability',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    isActive: true,
    actionRequired: 'Update email client immediately and review email security policies',
    learnMoreUrl: '#'
  },
  {
    id: 'alert-2',
    title: 'Phishing Campaign Targeting Financial Sector',
    description: 'Sophisticated phishing emails impersonating major banks are circulating, targeting customer credentials.',
    severity: 'high',
    category: 'Phishing',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    isActive: true,
    actionRequired: 'Educate users about banking phishing tactics',
    learnMoreUrl: '#'
  },
  {
    id: 'alert-3',
    title: 'Ransomware Group Targets Healthcare',
    description: 'A new ransomware variant is specifically targeting healthcare organizations with tailored attack methods.',
    severity: 'high',
    category: 'Malware',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    isActive: false,
    actionRequired: 'Review backup procedures and network segmentation',
    learnMoreUrl: '#'
  }
];

// Mock Daily Challenges Data
export const mockDailyChallenges: DailyChallenge[] = [
  {
    id: 'daily-1',
    title: 'Spot the Phish',
    description: 'Identify 3 phishing emails from a batch of 10 messages',
    xpReward: 100,
    isCompleted: false,
    deadline: new Date(Date.now() + 18 * 60 * 60 * 1000), // 18 hours from now
    type: 'mini-game',
    difficulty: 'easy',
    data: { gameType: 'spot-the-phish', target: 3, total: 10 }
  },
  {
    id: 'daily-2',
    title: 'Password Strength Quiz',
    description: 'Answer 5 questions about password security best practices',
    xpReward: 75,
    isCompleted: true,
    deadline: new Date(Date.now() + 18 * 60 * 60 * 1000),
    type: 'quiz',
    difficulty: 'easy',
    data: { questions: 5, topic: 'password-security' }
  },
  {
    id: 'daily-3',
    title: 'Incident Response Simulation',
    description: 'Navigate through a simulated security incident',
    xpReward: 150,
    isCompleted: false,
    deadline: new Date(Date.now() + 18 * 60 * 60 * 1000),
    type: 'simulation',
    difficulty: 'medium',
    data: { scenario: 'data-breach', duration: 300 }
  }
];

// Mock Mini Games Data
export const mockMiniGames: MiniGame[] = [
  {
    id: 'game-1',
    name: 'Phishing Detector',
    description: 'Identify phishing emails from legitimate ones in this fast-paced challenge',
    type: 'spot-the-phish',
    difficulty: 'easy',
    xpReward: 150,
    bestScore: 850,
    isUnlocked: true,
    unlockLevel: 1,
    gameData: {
      timeLimit: 60,
      emailCount: 10,
      phishingCount: 4
    }
  },
  {
    id: 'game-2',
    name: 'Password Fortress',
    description: 'Create the strongest passwords and defend against various attack methods',
    type: 'secure-password',
    difficulty: 'easy',
    xpReward: 120,
    bestScore: 720,
    isUnlocked: true,
    unlockLevel: 1,
    gameData: {
      requirements: ['length', 'complexity', 'uniqueness'],
      attacks: ['dictionary', 'brute-force', 'rainbow-table']
    }
  },
  {
    id: 'game-3',
    name: 'Breach Investigation',
    description: 'Analyze security logs and identify the source of a data breach',
    type: 'decode-breach',
    difficulty: 'medium',
    xpReward: 200,
    bestScore: 0,
    isUnlocked: true,
    unlockLevel: 3,
    gameData: {
      logEntries: 50,
      timeLimit: 300,
      threatsToFind: 8
    }
  },
  {
    id: 'game-4',
    name: 'Social Engineering Defense',
    description: 'Resist various social engineering attacks and protect sensitive information',
    type: 'social-engineering-defense',
    difficulty: 'medium',
    xpReward: 180,
    bestScore: 0,
    isUnlocked: false,
    unlockLevel: 4,
    gameData: {
      scenarios: 12,
      timePerScenario: 45,
      difficultyProgression: true
    }
  },
  {
    id: 'game-5',
    name: 'Network Guardian',
    description: 'Monitor network traffic and block malicious activities in real-time',
    type: 'network-defense',
    difficulty: 'hard',
    xpReward: 250,
    bestScore: 0,
    isUnlocked: false,
    unlockLevel: 6,
    gameData: {
      networkSize: 'enterprise',
      attackTypes: ['ddos', 'intrusion', 'malware', 'exfiltration'],
      duration: 600
    }
  },
  {
    id: 'game-6',
    name: 'Crypto Puzzle Master',
    description: 'Solve cryptographic challenges and learn about encryption methods',
    type: 'crypto-puzzle',
    difficulty: 'hard',
    xpReward: 300,
    bestScore: 0,
    isUnlocked: false,
    unlockLevel: 8,
    gameData: {
      puzzleTypes: ['caesar', 'substitution', 'rsa', 'aes'],
      difficulty: 'progressive',
      hints: true
    }
  }
];

// Mock Roles Data
export const mockRoles: Role[] = [
  {
    id: 'defender',
    name: 'Cyber Defender',
    description: 'Protect systems and networks from cyber threats. Master defensive strategies and incident response.',
    icon: 'Shield',
    color: 'from-blue-600 to-cyan-600',
    isUnlocked: true,
    unlockLevel: 1,
    specialAbilities: [
      'Threat Detection',
      'Incident Response',
      'Network Monitoring',
      'Security Hardening'
    ],
    missions: [
      mockMissions[0], // The Midnight Breach
      mockMissions[2], // Ransomware Rampage
      mockMissions[5]  // Data Guardian
    ]
  },
  {
    id: 'analyst',
    name: 'Security Analyst',
    description: 'Investigate security incidents and analyze threats. Develop expertise in forensics and threat intelligence.',
    icon: 'Eye',
    color: 'from-green-600 to-teal-600',
    isUnlocked: true,
    unlockLevel: 2,
    specialAbilities: [
      'Digital Forensics',
      'Threat Intelligence',
      'Log Analysis',
      'Malware Analysis'
    ],
    missions: [
      mockMissions[0], // The Midnight Breach
      mockMissions[1], // Phishing Storm
      mockMissions[2]  // Ransomware Rampage
    ]
  },
  {
    id: 'hacker',
    name: 'Ethical Hacker',
    description: 'Think like an attacker to find vulnerabilities. Learn penetration testing and red team tactics.',
    icon: 'Brain',
    color: 'from-red-600 to-pink-600',
    isUnlocked: false,
    unlockLevel: 5,
    specialAbilities: [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Social Engineering',
      'Exploit Development'
    ],
    missions: [
      mockMissions[1], // Phishing Storm
      mockMissions[3], // Social Engineering Masterclass
      mockMissions[4]  // Password Fortress
    ]
  },
  {
    id: 'insider',
    name: 'Insider Threat',
    description: 'Understand the psychology and methods of insider threats. Learn to detect and prevent internal risks.',
    icon: 'UserX',
    color: 'from-purple-600 to-indigo-600',
    isUnlocked: false,
    unlockLevel: 7,
    specialAbilities: [
      'Behavioral Analysis',
      'Access Control',
      'Data Loss Prevention',
      'Risk Assessment'
    ],
    missions: [
      mockMissions[3], // Social Engineering Masterclass
      mockMissions[5], // Data Guardian
      mockMissions[4]  // Password Fortress
    ]
  }
];

// Mock Leaderboard Data
export const mockLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    user: {
      id: '2',
      name: 'Sarah Connor',
      email: 'sarah@example.com',
      level: 12,
      xp: 450,
      totalXp: 11450,
      riskScore: 92,
      badges: [
        { id: 'master-defender', name: 'Master Defender', description: 'Completed all defender missions', icon: '🛡️', rarity: 'legendary', unlockedAt: new Date(), category: 'Achievement' }
      ],
      completedMissions: ['mission-1', 'mission-2', 'mission-3', 'mission-4', 'mission-5', 'mission-6'],
      completedGames: ['game-1', 'game-2', 'game-3'],
      currentStreak: 15,
      joinDate: new Date('2024-01-01'),
      avatar: '👩‍💻',
      preferences: {
        difficulty: 'advanced',
        notifications: true,
        soundEffects: true,
        theme: 'dark'
      }
    },
    score: 11450,
    change: 2
  },
  {
    rank: 2,
    user: {
      id: '3',
      name: 'Neo Anderson',
      email: 'neo@example.com',
      level: 11,
      xp: 200,
      totalXp: 10200,
      riskScore: 88,
      badges: [
        { id: 'matrix-master', name: 'Matrix Master', description: 'Mastered advanced hacking techniques', icon: '🕶️', rarity: 'epic', unlockedAt: new Date(), category: 'Mastery' }
      ],
      completedMissions: ['mission-1', 'mission-2', 'mission-3', 'mission-4'],
      completedGames: ['game-1', 'game-2'],
      currentStreak: 12,
      joinDate: new Date('2024-01-15'),
      avatar: '🕴️',
      preferences: {
        difficulty: 'expert',
        notifications: true,
        soundEffects: false,
        theme: 'dark'
      }
    },
    score: 10200,
    change: -1
  },
  {
    rank: 3,
    user: {
      id: '4',
      name: 'Trinity',
      email: 'trinity@example.com',
      level: 10,
      xp: 800,
      totalXp: 9800,
      riskScore: 85,
      badges: [
        { id: 'code-breaker', name: 'Code Breaker', description: 'Solved 50 crypto puzzles', icon: '🔓', rarity: 'rare', unlockedAt: new Date(), category: 'Puzzle' }
      ],
      completedMissions: ['mission-1', 'mission-2', 'mission-3'],
      completedGames: ['game-1'],
      currentStreak: 8,
      joinDate: new Date('2024-02-01'),
      avatar: '👩‍🔬',
      preferences: {
        difficulty: 'advanced',
        notifications: false,
        soundEffects: true,
        theme: 'dark'
      }
    },
    score: 9800,
    change: 1
  }
];

// Mock Wellness Plan Data
export const mockWellnessPlan: WellnessPlan = {
  riskScore: 45,
  recommendations: [
    {
      id: 'rec-1',
      title: 'Enable Two-Factor Authentication',
      description: 'Add an extra layer of security to your most important accounts',
      priority: 'high',
      category: 'Authentication',
      isCompleted: false,
      actionSteps: [
        'Download an authenticator app',
        'Enable 2FA on email accounts',
        'Enable 2FA on financial accounts',
        'Enable 2FA on work accounts'
      ],
      estimatedTime: '30 minutes'
    },
    {
      id: 'rec-2',
      title: 'Update Password Strategy',
      description: 'Implement a password manager and create unique passwords',
      priority: 'high',
      category: 'Passwords',
      isCompleted: true,
      actionSteps: [
        'Choose a password manager',
        'Import existing passwords',
        'Generate new unique passwords',
        'Update all accounts'
      ],
      estimatedTime: '2 hours'
    },
    {
      id: 'rec-3',
      title: 'Review Privacy Settings',
      description: 'Audit and update privacy settings on social media and online accounts',
      priority: 'medium',
      category: 'Privacy',
      isCompleted: false,
      actionSteps: [
        'Review social media privacy settings',
        'Check data sharing permissions',
        'Update location sharing preferences',
        'Review app permissions'
      ],
      estimatedTime: '45 minutes'
    }
  ],
  weeklyGoals: [
    {
      id: 'goal-1',
      title: 'Complete 3 Security Missions',
      description: 'Finish at least 3 cybersecurity training missions this week',
      progress: 2,
      target: 3,
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      type: 'weekly'
    },
    {
      id: 'goal-2',
      title: 'Maintain Daily Streak',
      description: 'Log in and complete at least one activity each day',
      progress: 4,
      target: 7,
      deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      type: 'weekly'
    }
  ],
  progress: 65,
  lastUpdated: new Date()
};

// Mock News Events Data
export const mockNewsEvents: NewsEvent[] = [
  {
    id: 'news-1',
    title: 'Major Healthcare Provider Suffers Ransomware Attack',
    description: 'A leading healthcare network has been hit by sophisticated ransomware, affecting patient records and critical systems across multiple facilities.',
    category: 'breach',
    severity: 'critical',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    source: 'CyberSecurity News',
    impact: 'Patient data compromised, medical services disrupted, potential HIPAA violations',
    relatedMissions: ['mission-2', 'mission-3'],
    actionItems: [
      'Review backup and recovery procedures',
      'Implement network segmentation',
      'Conduct ransomware response training',
      'Update incident response plans'
    ]
  },
  {
    id: 'news-2',
    title: 'New AI-Powered Deepfake Scams Target Executives',
    description: 'Cybercriminals are using advanced AI to create convincing deepfake videos and audio of company executives to authorize fraudulent transactions.',
    category: 'attack',
    severity: 'high',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    source: 'Threat Intelligence Report',
    impact: 'Financial fraud, reputation damage, trust erosion in digital communications',
    relatedMissions: ['mission-4'],
    actionItems: [
      'Implement voice verification procedures',
      'Train staff on deepfake detection',
      'Establish multi-channel verification for high-value transactions',
      'Deploy deepfake detection tools'
    ]
  },
  {
    id: 'news-3',
    title: 'Critical Zero-Day Vulnerability in Popular VPN Software',
    description: 'Security researchers have discovered a critical vulnerability in widely-used VPN software that could allow remote code execution.',
    category: 'vulnerability',
    severity: 'critical',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    source: 'Security Advisory',
    impact: 'Remote code execution, network compromise, data exfiltration risks',
    relatedMissions: ['mission-1', 'mission-6'],
    actionItems: [
      'Update VPN software immediately',
      'Review VPN access logs',
      'Implement additional network monitoring',
      'Consider alternative VPN solutions'
    ]
  },
  {
    id: 'news-4',
    title: 'New EU Cybersecurity Regulations Take Effect',
    description: 'The European Union has implemented new cybersecurity regulations requiring enhanced incident reporting and security measures for critical infrastructure.',
    category: 'regulation',
    severity: 'medium',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    source: 'Regulatory Update',
    impact: 'Compliance requirements, reporting obligations, potential fines for non-compliance',
    relatedMissions: ['mission-6'],
    actionItems: [
      'Review compliance requirements',
      'Update incident response procedures',
      'Implement required security controls',
      'Establish regulatory reporting processes'
    ]
  }
];

// Mock Achievements Data
export const mockAchievements: Achievement[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first cybersecurity mission',
    icon: '🎯',
    category: 'completion',
    rarity: 'common',
    requirements: [
      {
        type: 'missions_completed',
        value: 1,
        description: 'Complete 1 mission'
      }
    ],
    rewards: {
      xp: 100,
      title: 'Cyber Rookie'
    },
    isSecret: false,
    unlockedBy: []
  },
  {
    id: 'mission-veteran',
    name: 'Mission Veteran',
    description: 'Complete 10 cybersecurity missions',
    icon: '🏆',
    category: 'completion',
    rarity: 'rare',
    requirements: [
      {
        type: 'missions_completed',
        value: 10,
        description: 'Complete 10 missions'
      }
    ],
    rewards: {
      xp: 500,
      title: 'Cyber Veteran',
      unlocks: ['advanced-missions']
    },
    isSecret: false,
    unlockedBy: []
  },
  {
    id: 'streak-master',
    name: 'Streak Master',
    description: 'Maintain a 30-day learning streak',
    icon: '🔥',
    category: 'streak',
    rarity: 'epic',
    requirements: [
      {
        type: 'daily_streak',
        value: 30,
        description: 'Maintain 30-day streak'
      }
    ],
    rewards: {
      xp: 1000,
      title: 'Dedication Master'
    },
    isSecret: false,
    unlockedBy: []
  },
  {
    id: 'phishing-expert',
    name: 'Phishing Expert',
    description: 'Achieve 95% accuracy in phishing detection games',
    icon: '🎣',
    category: 'mastery',
    rarity: 'epic',
    requirements: [
      {
        type: 'game_accuracy',
        value: 95,
        description: 'Achieve 95% accuracy in phishing games'
      }
    ],
    rewards: {
      xp: 750,
      title: 'Phishing Hunter'
    },
    isSecret: false,
    unlockedBy: []
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    description: 'Complete a mission in under 5 minutes',
    icon: '⚡',
    category: 'speed',
    rarity: 'rare',
    requirements: [
      {
        type: 'mission_time',
        value: 300,
        description: 'Complete mission in under 5 minutes'
      }
    ],
    rewards: {
      xp: 300,
      title: 'Speed Runner'
    },
    isSecret: false,
    unlockedBy: []
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    description: 'Complete activities between midnight and 6 AM',
    icon: '🦉',
    category: 'discovery',
    rarity: 'rare',
    requirements: [
      {
        type: 'time_of_day',
        value: 5,
        description: 'Complete 5 activities during night hours'
      }
    ],
    rewards: {
      xp: 400,
      title: 'Night Guardian'
    },
    isSecret: true,
    unlockedBy: []
  },
  {
    id: 'social-butterfly',
    name: 'Social Butterfly',
    description: 'Help 10 other users in the community',
    icon: '🦋',
    category: 'social',
    rarity: 'epic',
    requirements: [
      {
        type: 'help_others',
        value: 10,
        description: 'Help 10 community members'
      }
    ],
    rewards: {
      xp: 600,
      title: 'Community Helper'
    },
    isSecret: false,
    unlockedBy: []
  },
  {
    id: 'legendary-defender',
    name: 'Legendary Defender',
    description: 'Master all defensive cybersecurity techniques',
    icon: '🛡️',
    category: 'mastery',
    rarity: 'legendary',
    requirements: [
      {
        type: 'role_mastery',
        value: 1,
        description: 'Complete all Cyber Defender missions with perfect scores'
      }
    ],
    rewards: {
      xp: 2000,
      title: 'Cyber Guardian',
      unlocks: ['legendary-missions', 'mentor-mode']
    },
    isSecret: false,
    unlockedBy: []
  },
  {
    id: 'the-matrix',
    name: 'The Matrix',
    description: 'Discover the hidden truth about the simulation',
    icon: '💊',
    category: 'discovery',
    rarity: 'mythic',
    requirements: [
      {
        type: 'secret_sequence',
        value: 1,
        description: 'Complete the secret sequence of actions'
      }
    ],
    rewards: {
      xp: 5000,
      title: 'The One',
      unlocks: ['matrix-mode', 'reality-bending-powers']
    },
    isSecret: true,
    unlockedBy: []
  }
];

// Mock Cyber Ranges Data
export const mockCyberRanges: CyberRange[] = [
  {
    id: 'range-1',
    name: 'Corporate Network Defense',
    description: 'Defend a simulated corporate network against various cyber attacks in real-time',
    type: 'network',
    difficulty: 'intermediate',
    estimatedTime: '45-60 minutes',
    objectives: [
      'Monitor network traffic for anomalies',
      'Identify and block malicious IP addresses',
      'Implement firewall rules to prevent data exfiltration',
      'Coordinate incident response with team members'
    ],
    tools: [
      'Wireshark',
      'pfSense Firewall',
      'Splunk SIEM',
      'Nmap',
      'Metasploit (Blue Team)',
      'YARA Rules'
    ],
    environment: {
      os: 'Ubuntu 20.04 LTS',
      network: '10.0.0.0/16 with DMZ and internal segments',
      applications: ['Web Server', 'Database Server', 'Email Server', 'File Server']
    },
    isActive: true,
    maxParticipants: 6,
    currentParticipants: 3
  },
  {
    id: 'range-2',
    name: 'Web Application Penetration Testing',
    description: 'Test the security of a vulnerable web application using ethical hacking techniques',
    type: 'web-app',
    difficulty: 'advanced',
    estimatedTime: '60-90 minutes',
    objectives: [
      'Identify SQL injection vulnerabilities',
      'Exploit cross-site scripting (XSS) flaws',
      'Perform authentication bypass attacks',
      'Document findings and recommend fixes'
    ],
    tools: [
      'Burp Suite Professional',
      'OWASP ZAP',
      'SQLmap',
      'Nikto',
      'Gobuster',
      'Custom Payloads'
    ],
    environment: {
      os: 'Kali Linux 2023.1',
      network: 'Isolated lab environment',
      applications: ['DVWA', 'WebGoat', 'Mutillidae II', 'Custom Vulnerable App']
    },
    isActive: true,
    maxParticipants: 4,
    currentParticipants: 2
  },
  {
    id: 'range-3',
    name: 'Digital Forensics Investigation',
    description: 'Investigate a simulated cyber crime scene and gather digital evidence',
    type: 'forensics',
    difficulty: 'expert',
    estimatedTime: '90-120 minutes',
    objectives: [
      'Acquire and preserve digital evidence',
      'Analyze file system artifacts',
      'Recover deleted files and communications',
      'Build a timeline of events',
      'Prepare forensic report'
    ],
    tools: [
      'Autopsy',
      'Volatility Framework',
      'FTK Imager',
      'Sleuth Kit',
      'Wireshark',
      'RegRipper'
    ],
    environment: {
      os: 'Windows 10 + SIFT Workstation',
      network: 'Forensic lab network',
      applications: ['Evidence Files', 'Memory Dumps', 'Network Captures', 'Mobile Images']
    },
    isActive: false,
    maxParticipants: 2,
    currentParticipants: 0
  },
  {
    id: 'range-4',
    name: 'Malware Analysis Lab',
    description: 'Safely analyze malware samples to understand their behavior and impact',
    type: 'malware',
    difficulty: 'expert',
    estimatedTime: '75-90 minutes',
    objectives: [
      'Set up isolated analysis environment',
      'Perform static malware analysis',
      'Execute dynamic behavior analysis',
      'Identify indicators of compromise (IOCs)',
      'Create detection signatures'
    ],
    tools: [
      'IDA Pro',
      'Ghidra',
      'Process Monitor',
      'Process Hacker',
      'Cuckoo Sandbox',
      'YARA'
    ],
    environment: {
      os: 'Windows 10 VM + REMnux',
      network: 'Air-gapped analysis network',
      applications: ['Malware Samples', 'Analysis Tools', 'Sandbox Environment']
    },
    isActive: true,
    maxParticipants: 3,
    currentParticipants: 1
  },
  {
    id: 'range-5',
    name: 'Social Engineering Simulation',
    description: 'Practice defending against social engineering attacks in realistic scenarios',
    type: 'social-eng',
    difficulty: 'beginner',
    estimatedTime: '30-45 minutes',
    objectives: [
      'Identify social engineering tactics',
      'Practice verification procedures',
      'Respond appropriately to suspicious requests',
      'Report potential security incidents'
    ],
    tools: [
      'Simulated Phone System',
      'Email Client',
      'Company Directory',
      'Incident Reporting System',
      'Security Policies Database'
    ],
    environment: {
      os: 'Web-based simulation',
      network: 'Simulated corporate environment',
      applications: ['Role-playing Scenarios', 'Communication Tools', 'Policy References']
    },
    isActive: true,
    maxParticipants: 8,
    currentParticipants: 5
  }
];