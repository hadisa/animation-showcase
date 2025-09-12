import React from 'react';
import { ScrollAnimation } from './scroll-animation';
import { Badge } from '@/components/ui/badge';

const ScrollPart = () => {
    return (
        <ScrollAnimation delay={200} type="fadeLeft">
            <div className="space-y-8">
                <div className="flex items-center mb-8">
                    {/* <Lightbulb className="h-12 w-12 text-primary mr-4 animate-pulse" /> */}
                    <h3 className="text-3xl font-bold text-foreground">
                        Visionary Developer
                    </h3>
                </div>

                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    "Over the years, I’ve had the privilege of working on a
                    diverse range of projects, from modern web applications to
                    complex backend systems..."
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    My work bridges the gap between cutting-edge research and
                    practical applications, delivering solutions that are not just
                    innovative, but transformative and revolutionary.
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                    {[
                        "Quantum Computing",
                        "AI/ML",
                        "MOBILE APPs",
                        "WEB APPS",
                        "Neural Interfaces",
                        "Cloud Architecture",
                        "Spatial Computing",
                    ].map((tech, index) => (
                        <Badge
                            key={tech}
                            variant="outline"
                            className="border-primary text-primary px-4 py-2 text-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {tech}
                        </Badge>
                    ))}


                </div>
            </div>
        </ScrollAnimation>
    );
}

export default ScrollPart;
