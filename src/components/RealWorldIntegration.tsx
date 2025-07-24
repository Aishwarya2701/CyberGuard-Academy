import React, { useState } from 'react';
import { Building, Briefcase, Globe, Award, TrendingUp, Users, DollarSign, Network } from 'lucide-react';

interface RealWorldIntegrationProps {
  onClose: () => void;
  userLevel: number;
}

export const RealWorldIntegration: React.FC<RealWorldIntegrationProps> = ({ onClose, userLevel }) => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);

  const opportunities = [
    {
      id: 'google-security',
      type: 'company-partnership',
      partner: 'Google Security Team',
      title: 'Live Incident Response Simulation',
      description: 'Join Google\'s security team in a real-time simulation of a nation-state attack on cloud infrastructure',
      requirements: ['Level 25+', 'Incident Response Certification', 'Security Clearance'],
      realWorldValue: 'Direct experience with enterprise-scale security operations',
      careerImpact: 'Potential job offer, industry recognition, professional network expansion',
      salaryImpact: '+$25,000 average salary increase',
      duration: '2 weeks intensive program',
      participants: 12,
      industryRecognition: true,
      unlocked: userLevel >= 25,
      icon: '🏢'
    },
    {
      id: 'fbi-cyber',
      type: 'live-incident',
      partner: 'FBI Cyber Division',
      title: 'Active Cybercrime Investigation',
      description: 'Assist federal agents in tracking down international cybercriminal organizations',
      requirements: ['Level 40+', 'US Citizenship', 'Background Check', 'Digital Forensics Expertise'],
      realWorldValue: 'Contribute to actual law enforcement operations',
      careerImpact: 'Federal employment opportunities, security clearance, law enforcement network',
      salaryImpact: '+$40,000 federal position potential',
      duration: '6 months collaboration',
      participants: 5,
      industryRecognition: true,
      unlocked: userLevel >= 40,
      icon: '🕵️'
    },
    {
      id: 'tesla-security',
      type: 'job-simulation',
      partner: 'Tesla Cybersecurity',
      title: 'Autonomous Vehicle Security Testing',
      description: 'Test and secure Tesla\'s self-driving car systems against cyber attacks',
      requirements: ['Level 30+', 'Automotive Security Knowledge', 'IoT Expertise'],
      realWorldValue: 'Shape the future of transportation security',
      careerImpact: 'Tesla employment consideration, automotive industry connections',
      salaryImpact: '+$35,000 in automotive cybersecurity roles',
      duration: '1 month intensive',
      participants: 8,
      industryRecognition: true,
      unlocked: userLevel >= 30,
      icon: '🚗'
    },
    {
      id: 'microsoft-ai',
      type: 'industry-challenge',
      partner: 'Microsoft AI Security',
      title: 'AI Safety Red Team',
      description: 'Attempt to break Microsoft\'s AI safety measures and improve AI security',
      requirements: ['Level 35+', 'AI/ML Knowledge', 'Adversarial AI Experience'],
      realWorldValue: 'Advance AI safety for humanity',
      careerImpact: 'AI security specialization, research opportunities, tech giant connections',
      salaryImpact: '+$50,000 in AI security roles',
      duration: '3 months research project',
      participants: 15,
      industryRecognition: true,
      unlocked: userLevel >= 35,
      icon: '🤖'
    },
    {
      id: 'pentagon-cyber',
      type: 'certification-prep',
      partner: 'US Cyber Command',
      title: 'Military Cyber Operations Training',
      description: 'Train alongside military cyber warriors in advanced persistent threat scenarios',
      requirements: ['Level 45+', 'Security Clearance Eligible', 'Advanced Threat Hunting'],
      realWorldValue: 'National security contribution',
      careerImpact: 'Military contractor opportunities, defense industry network, security clearance',
      salaryImpact: '+$60,000 in defense contracting',
      duration: '4 months classified training',
      participants: 6,
      industryRecognition: true,
      unlocked: userLevel >= 45,
      icon: '🛡️'
    },
    {
      id: 'startup-ciso',
      type: 'job-simulation',
      partner: 'TechCrunch Startups',
      title: 'Startup CISO Challenge',
      description: 'Serve as interim CISO for high-growth startups, building security from ground up',
      requirements: ['Level 20+', 'Leadership Skills', 'Business Acumen'],
      realWorldValue: 'Real startup security leadership experience',
      careerImpact: 'CISO track positioning, startup equity opportunities, executive network',
      salaryImpact: '+$30,000 + equity potential',
      duration: '6 months rotation',
      participants: 20,
      industryRecognition: true,
      unlocked: userLevel >= 20,
      icon: '🚀'
    }
  ];

  const getOpportunityColor = (type: string) => {
    switch (type) {
      case 'company-partnership': return 'from-blue-600 to-cyan-600';
      case 'live-incident': return 'from-red-600 to-orange-600';
      case 'job-simulation': return 'from-green-600 to-teal-600';
      case 'industry-challenge': return 'from-purple-600 to-pink-600';
      case 'certification-prep': return 'from-yellow-600 to-orange-600';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg border border-gray-700 max-w-7xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="w-8 h-8 text-cyan-400" />
              <div>
                <h2 className="text-3xl font-bold text-white">Real-World Integration Hub</h2>
                <p className="text-gray-400">Bridge the gap between learning and professional cybersecurity careers</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-4">
            <div className="bg-gray-700 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-cyan-400">{opportunities.filter(o => o.unlocked).length}</div>
              <div className="text-sm text-gray-400">Available</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-green-400">$45K</div>
              <div className="text-sm text-gray-400">Avg Salary Boost</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-purple-400">89%</div>
              <div className="text-sm text-gray-400">Job Placement Rate</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-yellow-400">156</div>
              <div className="text-sm text-gray-400">Industry Partners</div>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[70vh] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className={`relative bg-gradient-to-br ${getOpportunityColor(opportunity.type)} rounded-lg p-6 transition-all duration-300 cursor-pointer ${
                  opportunity.unlocked ? 'hover:scale-105 opacity-100' : 'opacity-50'
                }`}
                onClick={() => opportunity.unlocked && setSelectedOpportunity(opportunity)}
              >
                <div className="absolute top-4 right-4 text-2xl">
                  {opportunity.icon}
                </div>

                <div className="mb-4">
                  <div className="text-xs text-white/80 uppercase tracking-wide mb-1">
                    {opportunity.type.replace('-', ' ')}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{opportunity.title}</h3>
                  <div className="text-sm text-white/90 font-medium mb-2">{opportunity.partner}</div>
                  <p className="text-white/80 text-sm">{opportunity.description}</p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Duration:</span>
                    <span className="text-white">{opportunity.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Participants:</span>
                    <span className="text-white">{opportunity.participants} selected</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Salary Impact:</span>
                    <span className="text-green-300 font-semibold">{opportunity.salaryImpact}</span>
                  </div>
                </div>

                {opportunity.industryRecognition && (
                  <div className="flex items-center space-x-1 mb-3">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-yellow-400">Industry Recognized</span>
                  </div>
                )}

                {!opportunity.unlocked ? (
                  <div className="bg-black/30 rounded p-2 text-center">
                    <div className="text-sm text-white/70">Level {opportunity.requirements[0].split('+')[0].split(' ')[1]} Required</div>
                  </div>
                ) : (
                  <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded font-medium transition-colors">
                    Apply Now
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-lg p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-400" />
                Career Impact Statistics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Average Salary Increase:</span>
                  <span className="text-green-400 font-bold">+$42,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Job Placement Rate:</span>
                  <span className="text-green-400 font-bold">89%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Promotion Rate:</span>
                  <span className="text-green-400 font-bold">76%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Industry Recognition:</span>
                  <span className="text-green-400 font-bold">94%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Network className="w-6 h-6 mr-2 text-purple-400" />
                Industry Partners
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {['Google', 'Microsoft', 'Tesla', 'FBI', 'Pentagon', 'Amazon', 'Apple', 'Meta'].map((partner) => (
                  <div key={partner} className="bg-black/20 rounded p-2 text-center text-purple-200">
                    {partner}
                  </div>
                ))}
              </div>
              <div className="mt-3 text-center">
                <span className="text-purple-300 text-sm">+148 more partners</span>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-lg p-6 border border-yellow-500/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-yellow-400" />
              Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/20 rounded p-4">
                <div className="text-lg font-bold text-white">Sarah Chen</div>
                <div className="text-sm text-yellow-300">Google → CISO at Startup</div>
                <div className="text-xs text-gray-300 mt-1">"The real-world experience was invaluable. I went from junior analyst to CISO in 18 months."</div>
              </div>
              <div className="bg-black/20 rounded p-4">
                <div className="text-lg font-bold text-white">Marcus Rodriguez</div>
                <div className="text-sm text-yellow-300">FBI → Cybersecurity Consultant</div>
                <div className="text-xs text-gray-300 mt-1">"Working with federal agents opened doors I never knew existed."</div>
              </div>
              <div className="bg-black/20 rounded p-4">
                <div className="text-lg font-bold text-white">Alex Kim</div>
                <div className="text-sm text-yellow-300">Tesla → AI Security Lead</div>
                <div className="text-xs text-gray-300 mt-1">"The automotive security project led directly to my dream job."</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};