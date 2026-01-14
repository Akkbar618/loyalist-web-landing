
import React from "react";

const TechStackSection: React.FC = () => {
  const technologies = [
    { name: "Kotlin", category: "Mobile" },
    { name: "Jetpack Compose", category: "Mobile" },
    { name: "Next.js", category: "Web" },
    { name: "React", category: "Web" },
    { name: "TypeScript", category: "Web" },
    { name: "Firebase", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "Firestore", category: "Database" },
    { name: "Supabase (PostgreSQL)", category: "Database" },
    { name: "REST API", category: "API" },
    { name: "GraphQL", category: "API" },
    { name: "WebSockets", category: "Real-time" },
  ];

  const categories = Array.from(new Set(technologies.map(t => t.category)));

  return (
    <section id="tech-stack" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Technology Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <div key={category} className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="space-y-3">
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech) => (
                    <div key={tech.name} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>{tech.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
