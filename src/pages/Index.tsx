
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Search, Shield, TrendingUp, AlertCircle, ExternalLink, Bell } from "lucide-react";
import YieldCard from "../components/YieldCard";
import RiskMeter from "../components/RiskMeter";
import StrategyGuide from "../components/StrategyGuide";
import NotificationSettings from "../components/NotificationSettings";

const Index = () => {
  const [selectedAsset, setSelectedAsset] = useState("");
  const [selectedChain, setSelectedChain] = useState("");
  const [selectedRisk, setSelectedRisk] = useState("");
  const [duration, setDuration] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  const mockYieldOpportunities = [
    {
      protocol: "Aave V3",
      asset: "USDC",
      apy: 12.5,
      tvl: "$2.1B",
      chain: "Ethereum",
      riskScore: 25,
      category: "Lending",
      lockPeriod: "None",
      description: "Stable lending with variable rates"
    },
    {
      protocol: "Compound III",
      asset: "USDC", 
      apy: 11.8,
      tvl: "$890M",
      chain: "Ethereum",
      riskScore: 30,
      category: "Lending",
      lockPeriod: "None",
      description: "Efficient lending protocol"
    },
    {
      protocol: "Curve Finance",
      asset: "USDC-USDT",
      apy: 15.2,
      tvl: "$450M",
      chain: "Ethereum",
      riskScore: 45,
      category: "Liquidity Pool",
      lockPeriod: "None",
      description: "Stablecoin liquidity provision"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">D5 Scanner</h1>
                <p className="text-sm text-slate-600">DeFi Yield Optimization</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Search Section */}
        <Card className="mb-8 shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-slate-800 flex items-center">
              <Search className="w-5 h-5 mr-2 text-blue-600" />
              Find Yield Opportunities
            </CardTitle>
            <p className="text-slate-600">Discover optimized DeFi strategies tailored to your risk profile</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Asset</label>
                <Select value={selectedAsset} onValueChange={setSelectedAsset}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select asset" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="usdc">USDC</SelectItem>
                    <SelectItem value="eth">ETH</SelectItem>
                    <SelectItem value="btc">BTC</SelectItem>
                    <SelectItem value="dai">DAI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Chain</label>
                <Select value={selectedChain} onValueChange={setSelectedChain}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Any chain" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="arbitrum">Arbitrum</SelectItem>
                    <SelectItem value="optimism">Optimism</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Risk Profile</label>
                <Select value={selectedRisk} onValueChange={setSelectedRisk}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Risk level" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="low">Low Risk (0-10% APY)</SelectItem>
                    <SelectItem value="medium">Medium Risk (10-25% APY)</SelectItem>
                    <SelectItem value="high">High Risk ({'>'}25% APY)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Duration</label>
                <Input 
                  placeholder="30 days" 
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="bg-white"
                />
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={handleSearch}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {showResults && (
          <Tabs defaultValue="opportunities" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-white/90 backdrop-blur-sm">
              <TabsTrigger value="opportunities">Yield Opportunities</TabsTrigger>
              <TabsTrigger value="strategy">Strategy Guide</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="opportunities" className="space-y-6">
              <div className="grid gap-6">
                {mockYieldOpportunities.map((opportunity, index) => (
                  <YieldCard key={index} opportunity={opportunity} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="strategy">
              <StrategyGuide />
            </TabsContent>

            <TabsContent value="notifications">
              <NotificationSettings />
            </TabsContent>
          </Tabs>
        )}

        {/* Info Cards */}
        {!showResults && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <Shield className="w-12 h-12 mx-auto text-green-600 mb-2" />
                <CardTitle className="text-lg">Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Advanced risk scoring beyond TVL metrics, providing clear probability assessments for informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <TrendingUp className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                <CardTitle className="text-lg">Optimized Yields</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Discover the best yield opportunities across multiple protocols and chains with intelligent routing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <AlertCircle className="w-12 h-12 mx-auto text-amber-600 mb-2" />
                <CardTitle className="text-lg">Simple Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Step-by-step strategies that simplify complex DeFi mechanics into actionable insights.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
