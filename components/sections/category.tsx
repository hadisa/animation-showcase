import React, { useState, useEffect } from 'react';
import { ArrowRight, Layers, Sparkles, Play, Zap, Clock, Move } from 'lucide-react';

// Type definitions
interface Category {
  id: string;
  name: string;
  count: string;
  gradient: string;
  href: string;
  icon: React.ReactNode;
  description: string;
}

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface ResponsiveHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

interface ResponsiveTextProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
}

interface ResponsiveGridProps {
  cols: { default: number; sm: number; md: number; lg: number; xl: number };
  gap: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface BadgeProps {
  variant: 'default' | 'outline' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

// Component implementations
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children, className = '' }) => {
  return <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
};

const ResponsiveHeading: React.FC<ResponsiveHeadingProps> = ({ level, children, className = '' }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${className}`}>
      {children}
    </Tag>
  );
};

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ size, children, className = '' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl'
  };

  return <p className={`${sizeClasses[size]} text-muted-foreground ${className}`}>{children}</p>;
};

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ cols, gap, children, className = '' }) => {
  const gridCols = {
    default: `grid-cols-${cols.default}`,
    sm: `sm:grid-cols-${cols.sm}`,
    md: `md:grid-cols-${cols.md}`,
    lg: `lg:grid-cols-${cols.lg}`,
    xl: `xl:grid-cols-${cols.xl}`
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };

  return (
    <div className={`grid ${gridCols.default} ${gridCols.sm} ${gridCols.md} ${gridCols.lg} ${gridCols.xl} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

const Card: React.FC<CardProps> = ({ children, className = '', style }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

const Badge: React.FC<BadgeProps> = ({ variant, children, className = '' }) => {
  const variantClasses = {
    default: 'bg-primary text-primary-foreground',
    outline: 'border border-primary text-primary',
    secondary: 'bg-secondary text-secondary-foreground'
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

// Main component
const AnimationCategories: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories: Category[] = [
    {
      id: 'entrance',
      name: 'Entrance',
      count: '24',
      gradient: 'from-blue-500 to-cyan-500',
      href: '/dashboard?category=entrance',
      icon: <Sparkles className="w-5 h-5" />,
      description: 'Smooth animations for element introductions'
    },
    {
      id: 'hover',
      name: 'Hover Effects',
      count: '32',
      gradient: 'from-green-500 to-emerald-500',
      href: '/dashboard?category=hover',
      icon: <Move className="w-5 h-5" />,
      description: 'Interactive animations for user engagement'
    },
    {
      id: 'loading',
      name: 'Loading',
      count: '16',
      gradient: 'from-yellow-500 to-orange-500',
      href: '/dashboard?category=loading',
      icon: <Clock className="w-5 h-5" />,
      description: 'Indicators for content loading states'
    },
    {
      id: 'transitions',
      name: 'Transitions',
      count: '28',
      gradient: 'from-purple-500 to-pink-500',
      href: '/dashboard?category=transitions',
      icon: <Play className="w-5 h-5" />,
      description: 'Seamless transitions between states'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-82 bg-[#125958]  dark:from-blue-600/5 dark:to-cyan-600/5 transform -skew-y-3 -translate-y-24"></div>
      
      <ResponsiveContainer>
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 relative">
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge variant="outline" className="mb-4 sm:mb-6 inline-flex items-center">
              <Layers className="w-4 h-4 mr-2 text-primary" />
              Categories
            </Badge>
          </div>
          
          <div className={`transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <ResponsiveHeading level={2} className="mb-4 text-gray-100 sm:mb-6">
              Animation Categories
            </ResponsiveHeading>
          </div>
          
          <div className={`transition-all pt-6 duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <ResponsiveText size="lg" className="max-w-3xl mx-auto">
              Carefully organized collections of animations for every use case and design need
            </ResponsiveText>
          </div>
        </div>

        <ResponsiveGrid 
          cols={{ default: 1, sm: 2, md: 2, lg: 4, xl: 4 }} 
          gap="lg"
          className="relative"
        >
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <a href={category.href} className="block h-full group">
                <Card className="h-full overflow-hidden hover:scale-105 transition-transform duration-300 border-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 backdrop-blur-sm">
                  <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-center relative">
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    
                    {/* Animated icon container */}
                    <div className="relative z-10">
                      <div className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br ${category.gradient} rounded-2xl sm:rounded-3xl mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 text-white shadow-lg`}>
                        {category.icon}
                      </div>
                      
                      <h3 className="font-semibold text-lg sm:text-xl text-foreground mb-2 sm:mb-3 relative">
                        {category.name}
                        <span className="absolute -top-1 -right-6 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75 group-hover:animate-none"></span>
                      </h3>
                      
                      <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                        {category.count} animations
                      </p>
                      
                      <p className="text-xs text-muted-foreground mb-4 hidden sm:block">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-center text-sm text-primary group-hover:text-secondary transition-colors font-medium">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          ))}
        </ResponsiveGrid>

        {/* Decorative elements */}
        <div className="absolute left-10 top-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute right-10 top-1/3 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </ResponsiveContainer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default AnimationCategories;