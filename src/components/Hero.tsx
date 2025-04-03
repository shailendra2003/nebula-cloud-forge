
import React from 'react';
import { Button } from '@/components/ui/button';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-nebula-950 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.03]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-nebula-500/20 blur-3xl pointer-events-none" />
      </div>
      <div className="container relative pt-24 pb-32">
        <div className="flex flex-col items-center text-center space-y-8 opacity-0 animate-fade-up">
          <div className="inline-block px-4 py-2 rounded-full bg-nebula-500/10 border border-nebula-500/30 backdrop-blur-sm transition-all">
            <p className="text-sm font-medium text-nebula-300">Minimum Viable Product (MVP)</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-3xl">
            <span className="gradient-text">Nebula</span>
            <span className="block">Backend-as-a-Service</span>
          </h1>
          
          <p className="max-w-[700px] text-lg text-gray-300">
            A powerful Backend-as-a-Service (BaaS) solution built with Go, enabling developers to 
            focus on their front-end while Nebula handles the database operations.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-nebula-500 hover:bg-nebula-600 text-white px-8">
              Documentation
            </Button>
            <Button variant="outline" className="border-nebula-500/50 text-nebula-100 hover:text-white hover:border-nebula-400 px-8">
              GitHub
            </Button>
          </div>
        </div>

        <div className="mt-24 opacity-0 animate-fade-up delay-200">
          <div className="flex justify-center">
            <div className="relative h-[350px] sm:h-[400px] md:h-[500px] w-full max-w-5xl rounded-lg border border-white/10 bg-black/20 backdrop-blur overflow-hidden">
              <pre className="absolute text-xs sm:text-sm md:text-base text-gray-100 p-6 font-mono overflow-auto h-full w-full">
{`// Example: Create a new database and define a schema
TOKEN="your_jwt_token"

// Create database
curl -X POST \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"db_name": "my_app_db"}' \\
  http://localhost:8080/api/v1/databases

// Define schema
curl -X POST \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{ 
    "table_name": "tasks", 
    "columns": [ 
      {"name": "description", "type": "TEXT"}, 
      {"name": "priority", "type": "INTEGER"}, 
      {"name": "done", "type": "BOOLEAN"} 
    ] 
  }' \\
  http://localhost:8080/api/v1/databases/my_app_db/schema

// Create a record
curl -X POST \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{ "description": "Build an awesome app", "priority": 1, "done": false }' \\
  http://localhost:8080/api/v1/databases/my_app_db/tables/tasks/records`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
