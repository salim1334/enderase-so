import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../config/api';

// Interface matching the backend schema
interface ProjectDetail {
    _id: string;
    projectName: string;
    clientType: string;
    techStack: string[];
    imageUrl: string;
    problem: string;
    solution: string;
    impact: string;
}

const ProjectCard: React.FC<{ project: ProjectDetail }> = ({ project }) => (
    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
        <img src={project.imageUrl} alt={project.projectName} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">{project.clientType}</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{project.projectName}</h3>
            
            <div className="mt-4 space-y-4">
                <div>
                     <h4 className="font-semibold text-gray-800">The Problem</h4>
                     <p className="text-gray-600 text-sm mt-1">{project.problem}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800">Our Solution</h4>
                     <p className="text-gray-600 text-sm mt-1">{project.solution}</p>
                </div>
                 <div className="bg-gray-50 p-3 rounded-md">
                     <h4 className="font-semibold text-gray-800">Business Impact</h4>
                     <p className="text-gray-600 text-sm mt-1">{project.impact}</p>
                </div>
            </div>
            
            <div className="mt-auto pt-6">
                <h4 className="font-bold text-gray-800 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                        <span key={tech} className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const SkeletonCard: React.FC = () => (
    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gray-200 w-full h-56 animate-pulse"></div>
        <div className="p-6">
            <div className="bg-gray-200 h-4 w-1/3 rounded animate-pulse mb-2"></div>
            <div className="bg-gray-200 h-6 w-3/4 rounded animate-pulse mb-6"></div>
            <div className="space-y-4">
                <div className="bg-gray-200 h-4 w-1/4 rounded animate-pulse"></div>
                <div className="bg-gray-200 h-10 w-full rounded animate-pulse"></div>
            </div>
            <div className="mt-4 space-y-4">
                <div className="bg-gray-200 h-4 w-1/4 rounded animate-pulse"></div>
                <div className="bg-gray-200 h-10 w-full rounded animate-pulse"></div>
            </div>
            <div className="mt-6">
                 <div className="bg-gray-200 h-4 w-1/5 rounded animate-pulse mb-2"></div>
                 <div className="flex flex-wrap gap-2">
                    <div className="bg-gray-200 h-5 w-16 rounded-full animate-pulse"></div>
                    <div className="bg-gray-200 h-5 w-20 rounded-full animate-pulse"></div>
                    <div className="bg-gray-200 h-5 w-12 rounded-full animate-pulse"></div>
                 </div>
            </div>
        </div>
    </div>
);


const PortfolioPage: React.FC = () => {
    const [projects, setProjects] = useState<ProjectDetail[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const response = await fetch(API_ENDPOINTS.PROJECTS);
                if (!response.ok) {
                    throw new Error('Failed to fetch project portfolio. Make sure the server is running.');
                }
                const data = await response.json();
                setProjects(data);
                setError(null);
            } catch (e) {
                setError(e instanceof Error ? e.message : 'An unknown error occurred');
                setProjects([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <section className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Our Project Portfolio</h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                        Enderase Solutions delivers complex, large-scale projects that combine hardware installation with advanced software engineering. Backed by the logistical power of Lamiya General Trading PLC, we ensure timely delivery of all components and licenses.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Project Capabilities</h2>
                        <p className="mt-4 text-lg text-gray-600">Transforming challenges into high-tech, automated, and secure digital workflows.</p>
                    </div>
                    
                    {error && (
                        <div className="text-center text-red-600 bg-red-100 p-4 rounded-md">
                            <p className="font-bold">Failed to load projects</p>
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {loading ? (
                            Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
                        ) : (
                            projects.map(project => <ProjectCard key={project._id} project={project} />)
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
