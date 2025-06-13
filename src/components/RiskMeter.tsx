
import { Progress } from "@/components/ui/progress";

interface RiskMeterProps {
  score: number;
}

const RiskMeter = ({ score }: RiskMeterProps) => {
  const getRiskColor = (score: number) => {
    if (score <= 30) return "bg-green-500";
    if (score <= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getRiskDescription = (score: number) => {
    if (score <= 30) return "Low probability of loss (0-5%)";
    if (score <= 60) return "Moderate probability of loss (5-15%)";
    return "Higher probability of loss (15%+)";
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700">Risk Score: {score}/100</span>
        <span className="text-xs text-slate-600">{getRiskDescription(score)}</span>
      </div>
      
      <div className="relative">
        <Progress value={score} className="h-3" />
        <div 
          className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ${getRiskColor(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-slate-500">
        <span>Safe</span>
        <span>Moderate</span>
        <span>High Risk</span>
      </div>
    </div>
  );
};

export default RiskMeter;
