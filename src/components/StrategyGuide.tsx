
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ExternalLink, CheckCircle, AlertTriangle } from "lucide-react";

const StrategyGuide = () => {
  const steps = [
    {
      id: 1,
      title: "Asset Preparation",
      description: "Convert your assets to the required token",
      action: "Convert ETH to USDC on Uniswap",
      estimatedTime: "2-3 minutes",
      cost: "~$15 gas fees",
      status: "pending"
    },
    {
      id: 2,
      title: "Bridge Assets",
      description: "Move your assets to the target chain",
      action: "Use Jumper bridge to move USDC to Polygon",
      estimatedTime: "5-10 minutes",
      cost: "~$5 bridge fees",
      status: "pending"
    },
    {
      id: 3,
      title: "Protocol Interaction",
      description: "Deploy your assets to the yield protocol",
      action: "Deposit USDC into Aave V3 lending pool",
      estimatedTime: "1-2 minutes",
      cost: "~$2 gas fees",
      status: "pending"
    },
    {
      id: 4,
      title: "Monitor & Optimize",
      description: "Track performance and adjust as needed",
      action: "Set up notifications for rate changes",
      estimatedTime: "Ongoing",
      cost: "Free",
      status: "pending"
    }
  ];

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-slate-800">Strategy Implementation Guide</CardTitle>
        <p className="text-slate-600">
          Step-by-step instructions for deploying your capital into Aave V3 USDC lending
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Strategy Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700">12.5%</div>
              <div className="text-sm text-blue-600">Expected APY</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-700">~$22</div>
              <div className="text-sm text-green-600">Total Fees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-700">15 min</div>
              <div className="text-sm text-purple-600">Setup Time</div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-800">{step.title}</h3>
                    <Badge variant="outline" className="bg-white">
                      {step.estimatedTime}
                    </Badge>
                  </div>
                  
                  <p className="text-slate-600">{step.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-slate-700">{step.action}</span>
                      <ExternalLink className="w-4 h-4 text-slate-500" />
                    </div>
                    <span className="text-sm text-slate-600">{step.cost}</span>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Risk Warnings */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-amber-800 mb-2">Important Considerations</h4>
              <ul className="space-y-1 text-sm text-amber-700">
                <li>• Smart contract risk: Aave V3 has been audited but risks remain</li>
                <li>• Interest rates are variable and may change</li>
                <li>• Bridge risks apply when moving assets between chains</li>
                <li>• Gas fees may vary based on network congestion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
          Start Strategy Implementation
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default StrategyGuide;
