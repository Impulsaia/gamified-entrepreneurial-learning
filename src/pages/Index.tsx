
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CheckCircle, TrendingUp, Users, BookOpen, Briefcase, Award } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-brand-500" />,
      title: "Business Model Canvas",
      description: "Aprende y aplica esta herramienta estratégica a través de ejercicios interactivos."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-500" />,
      title: "Metodología Lean Startup",
      description: "Domina el ciclo de construir-medir-aprender con simulaciones prácticas."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-500" />,
      title: "Desarrollo de Clientes",
      description: "Aprende a validar tus ideas de negocio con ejercicios de entrevistas simuladas."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-brand-500" />,
      title: "Finanzas Personales",
      description: "Aplica principios de inteligencia financiera basados en enseñanzas de Kiyosaki."
    },
    {
      icon: <Award className="h-8 w-8 text-brand-500" />,
      title: "Habilidades Blandas",
      description: "Desarrolla competencias de liderazgo, comunicación y gestión de equipos."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-brand-500" />,
      title: "Gamificación Completa",
      description: "Sistema de niveles, logros y recompensas para motivar tu aprendizaje."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-700 to-brand-500 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Aprende Emprendimiento Jugando
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  Domina las metodologías más importantes del emprendimiento moderno 
                  a través de un sistema gamificado diseñado para maximizar tu aprendizaje.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/signup">
                    <Button size="lg" className="w-full sm:w-auto bg-white text-brand-700 hover:bg-gray-100">
                      Empieza Gratis
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                      Ver Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full absolute top-0 left-0 animate-float" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full absolute top-10 left-10 animate-float" style={{ animationDelay: '1s' }}></div>
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW50cmVwcmVuZXVyfGVufDB8fDB8fHww" 
                    alt="Emprendedor" 
                    className="relative z-10 rounded-lg shadow-xl w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Metodologías que Aprenderás</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestra plataforma combina las mejores metodologías de emprendimiento en un sistema gamificado para acelerar tu aprendizaje.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">¿Cómo Funciona?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un proceso sencillo pero poderoso para transformar tu aprendizaje emprendedor
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Crea tu Avatar</h3>
                <p className="text-gray-600">Personaliza tu experiencia eligiendo tu clase de emprendedor y definiendo tus objetivos de aprendizaje.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Completa Misiones</h3>
                <p className="text-gray-600">Avanza a través de desafíos prácticos que te enseñan diferentes aspectos del emprendimiento.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Gana Recompensas</h3>
                <p className="text-gray-600">Obtén puntos, desbloquea logros y canjea tokens por mentorías y recursos premium.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Comienza Tu Viaje Emprendedor Hoy</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Únete a miles de emprendedores que están transformando su aprendizaje a través de nuestra plataforma gamificada.
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
                Regístrate Gratis
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
