import React from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { X, Search, Star, Brain, Cpu, Database, Globe, MessageCircle, Code, FileText, Layers, Zap, Bot, Sparkles as SparklesIcon, Plus } from 'lucide-react';

// AI Models data
const aiModels = [
  // Favorites
  {
    id: 'operations-pro',
    name: 'Operations Pro',
    description: 'Advanced model for complex warehouse operations and inventory management',
    icon: Brain,
    badge: 'Premium',
    category: 'favorites'
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    description: 'Advanced reasoning model for complex problem solving',
    icon: Cpu,
    badge: 'Official',
    category: 'favorites'
  },
  {
    id: 'claude-4-sonnet',
    name: 'Claude 4 Sonnet',
    description: 'Balanced model with strong analytical capabilities',
    icon: SparklesIcon,
    badge: 'Official',
    category: 'favorites'
  },
  
  // Official Models
  {
    id: 'operations-standard',
    name: 'Operations Standard',
    description: 'Balanced performance for daily warehouse tasks',
    icon: Bot,
    badge: 'Standard',
    category: 'official'
  },
  {
    id: 'operations-fast',
    name: 'Operations Fast',
    description: 'Quick responses for simple queries and routine operations',
    icon: Zap,
    badge: 'Fast',
    category: 'official'
  },
  {
    id: 'claude-4-opus',
    name: 'Claude 4 Opus',
    description: 'Most capable model for complex reasoning and analysis',
    icon: Layers,
    badge: 'Official',
    category: 'official'
  },
  {
    id: 'deepseek-v3',
    name: 'DeepSeek V3',
    description: 'Powerful model for technical and analytical tasks',
    icon: Database,
    badge: 'Official',
    category: 'official'
  },
  {
    id: 'grok-3',
    name: 'Grok 3',
    description: 'Real-time information and conversational AI',
    icon: Globe,
    badge: 'Official',
    category: 'official'
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    description: 'Multimodal model with vision and text capabilities',
    icon: MessageCircle,
    badge: 'Official',
    category: 'official'
  },
  {
    id: 'gpt-4.1',
    name: 'GPT-4.1',
    description: 'Latest version with improved reasoning capabilities',
    icon: Code,
    badge: 'Official',
    category: 'official'
  },
];

interface ModelSelectionSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedModel: string;
  onSelectModel: (modelId: string) => void;
  onCreateBot?: () => void;
}

export function ModelSelectionSidebar({ 
  isOpen, 
  onClose, 
  selectedModel, 
  onSelectModel,
  onCreateBot
}: ModelSelectionSidebarProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredModels = aiModels.filter(model =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    model.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const favorites = filteredModels.filter(model => model.category === 'favorites');
  const official = filteredModels.filter(model => model.category === 'official');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm animate-fade-in">
      <div className="fixed right-0 top-0 h-full w-96 bg-background shadow-xl border-l border-border animate-slide-in">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Select Model</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground h-8 w-8 rounded-lg"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4 space-y-4">
          {/* Current Model */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Current Model</p>
            <Button
              variant="outline"
              className="w-full h-11 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 bg-primary text-primary-foreground"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="flex items-center justify-center w-8 h-8 bg-primary-foreground/20 rounded-lg">
                  <Brain className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-primary-foreground">Operations Pro</p>
                  <p className="text-xs text-primary-foreground/80">Premium AI Model</p>
                </div>
              </div>
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-lg"
            />
          </div>

          {/* Model Categories */}
          <div className="space-y-4">
            {/* Favorites */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-foreground">Favorites</h3>
              <div className="space-y-2">
                {filteredModels.filter(model => model.badge === 'Premium' || model.badge === 'Official').map((model) => (
                  <ModelCard
                    key={model.id}
                    model={model}
                    isSelected={selectedModel === model.id}
                    onSelect={() => onSelectModel(model.id)}
                  />
                ))}
              </div>
            </div>

            {/* Official Models */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-foreground">Official Models</h3>
              <div className="space-y-2">
                {filteredModels.filter(model => model.badge !== 'Premium').map((model) => (
                  <ModelCard
                    key={model.id}
                    model={model}
                    isSelected={selectedModel === model.id}
                    onSelect={() => onSelectModel(model.id)}
                  />
                ))}
              </div>
            </div>

            {filteredModels.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No models found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ModelCardProps {
  model: any;
  isSelected: boolean;
  onSelect: () => void;
}

function ModelCard({ model, isSelected, onSelect }: ModelCardProps) {
  const IconComponent = model.icon;
  
  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected ? 'border-primary shadow-sm bg-accent' : 'hover:bg-accent'
      }`}
      onClick={onSelect}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-muted rounded-lg flex-shrink-0">
            <IconComponent className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium text-sm text-foreground truncate">{model.name}</h4>
              <Badge 
                variant={model.badge === 'Premium' ? 'default' : 'outline'}
                className="text-xs flex-shrink-0"
              >
                {model.badge}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{model.description}</p>
          </div>
          {isSelected && (
            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
