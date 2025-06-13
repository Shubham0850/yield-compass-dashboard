
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, Shield, TrendingUp, Clock, Info } from "lucide-react";
import RiskMeter from "./RiskMeter";

interface YieldOpportunity {
  protocol: string;
  asset: string;
  apy: number;
  tvl: string;
  chain: string;
  riskScore: number;
  category: string;
  lockPeriod: string;
  description: string;
}

interface YieldCardProps {
  opportunity: YieldOpportunity;
}

const YieldCard = ({ opportunity }: YieldCardProps) => {
  const getRiskLevel = (score: number) => {
    if (score <= 30) return { level: "Low", color: "bg-green-500", textColor: "text-green-700" };
    if (score <= 60) return { level: "Medium", color: "bg-yellow-500", textColor: "text-yellow-700" };
    return { level: "High", color: "bg-red-500", textColor: "text-red-700" };
  };

  const risk = getRiskLevel(opportunity.riskScore);

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl text-slate-800">{opportunity.protocol}</CardTitle>
              <p className="text-slate-600">{opportunity.description}</p>
            </div>
          </div>
          <Badge variant="outline" className="bg-slate-100">
            {opportunity.chain}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
            <div className="text-2xl font-bold text-green-700">{opportunity.apy}%</div>
            <div className="text-sm text-green-600">APY</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
            <div className="text-lg font-semibold text-blue-700">{opportunity.tvl}</div>
            <div className="text-sm text-blue-600">TVL</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
            <div className="text-lg font-semibold text-purple-700">{opportunity.category}</div>
            <div className="text-sm text-purple-600">Type</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg">
            <div className="text-lg font-semibold text-amber-700">{opportunity.lockPeriod}</div>
            <div className="text-sm text-amber-600">Lock Period</div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="bg-slate-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-slate-600" />
              <span className="font-medium text-slate-800">Risk Assessment</span>
            </div>
            <Badge className={`${risk.color} text-white`}>
              {risk.level} Risk
            </Badge>
          </div>
          
          <RiskMeter score={opportunity.riskScore} />
          
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Protocol Risk:</span>
              <span className="font-medium">Low</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Smart Contract Risk:</span>
              <span className="font-medium">Low</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Liquidity Risk:</span>
              <span className="font-medium">Medium</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            View Strategy
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="flex-1">
            <Info className="w-4 h-4 mr-2" />
            More Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default YieldCard;
