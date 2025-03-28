
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Award, 
  Activity, 
  TrendingUp, 
  User, 
  BarChart3,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Dashboard = () => {
  // Mock data for the dashboard
  const userProgress = {
    level: 3,
    xp: 2340,
    nextLevelXp: 3000,
    completedMissions: 12,
    totalMissions: 25,
    badges: [
      { id: 1, name: "Primer Canvas", icon: <BookOpen size={16} /> },
      { id: 2, name: "Lean Starter", icon: <TrendingUp size={16} /> },
      { id: 3, name: "5 Días Seguidos", icon: <Activity size={16} /> },
    ],
    dailyStreak: 5
  };

  const dailyMissions = [
    { id: 1, title: "Completa una sección de tu Canvas", xp: 100, completed: true },
    { id: 2, title: "Realiza una entrevista de validación", xp: 150, completed: false },
    { id: 3, title: "Lee un artículo sobre Lean Startup", xp: 50, completed: false },
  ];

  const projects = [
    { id: 1, name: "Mi Startup Tech", progress: 60, lastUpdated: "Hace 2 días" },
    { id: 2, name: "Proyecto de Ecommerce", progress: 25, lastUpdated: "Hace 1 semana" },
  ];

  const upcomingEvents = [
    { id: 1, title: "Webinar: Validación de Ideas", date: "15 Nov, 18:00", type: "webinar" },
    { id: 2, title: "Desafío Canvas en 24h", date: "20 Nov, 09:00", type: "challenge" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Left Sidebar - User Profile */}
          <div className="w-full md:w-1/4">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center">
                    <User size={32} className="text-brand-600" />
                  </div>
                  <div>
                    <CardTitle>Juan Perez</CardTitle>
                    <CardDescription>Nivel {userProgress.level} Emprendedor</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>XP: {userProgress.xp}/{userProgress.nextLevelXp}</span>
                    <span>{Math.round((userProgress.xp / userProgress.nextLevelXp) * 100)}%</span>
                  </div>
                  <Progress value={(userProgress.xp / userProgress.nextLevelXp) * 100} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="text-2xl font-bold text-brand-600">{userProgress.completedMissions}</div>
                    <div className="text-xs text-gray-500">Misiones Completadas</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="text-2xl font-bold text-brand-600">{userProgress.dailyStreak}</div>
                    <div className="text-xs text-gray-500">Días Consecutivos</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Logros Desbloqueados</h4>
                  <div className="flex flex-wrap gap-2">
                    {userProgress.badges.map(badge => (
                      <Badge key={badge.id} variant="outline" className="flex items-center gap-1">
                        {badge.icon}
                        {badge.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Ver Perfil Completo</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 space-y-6">
            {/* Daily Missions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5 text-brand-500" />
                  Misiones Diarias
                </CardTitle>
                <CardDescription>
                  Completa estas misiones para ganar XP y avanzar en tu aprendizaje
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dailyMissions.map(mission => (
                    <div 
                      key={mission.id} 
                      className={`p-4 border rounded-lg flex items-center justify-between ${
                        mission.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-brand-300 transition-colors'
                      }`}
                    >
                      <div className="flex items-center">
                        {mission.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-3"></div>
                        )}
                        <span className={mission.completed ? 'text-gray-500 line-through' : ''}>
                          {mission.title}
                        </span>
                      </div>
                      <Badge variant={mission.completed ? "secondary" : "default"}>
                        {mission.xp} XP
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Ver Todas las Misiones</Button>
              </CardFooter>
            </Card>

            {/* Projects and Events Tabs */}
            <Tabs defaultValue="projects">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="projects">Mis Proyectos</TabsTrigger>
                <TabsTrigger value="events">Próximos Eventos</TabsTrigger>
              </TabsList>
              
              <TabsContent value="projects">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-brand-500" />
                      Tus Proyectos
                    </CardTitle>
                    <CardDescription>
                      Gestiona y actualiza tus proyectos de emprendimiento
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projects.map(project => (
                        <div key={project.id} className="border rounded-lg p-4 hover:border-brand-300 transition-colors">
                          <div className="flex justify-between mb-2">
                            <h4 className="font-medium">{project.name}</h4>
                            <span className="text-sm text-gray-500">{project.lastUpdated}</span>
                          </div>
                          <div className="mb-2">
                            <div className="flex justify-between mb-1 text-sm">
                              <span>Progreso</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>
                          <div className="flex justify-end">
                            <Link to={`/projects/${project.id}`}>
                              <Button variant="outline" size="sm">Continuar</Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Ver Todos</Button>
                    <Link to="/canvas/new">
                      <Button>Nuevo Proyecto</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="events">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-brand-500" />
                      Eventos y Desafíos
                    </CardTitle>
                    <CardDescription>
                      Participa en eventos en vivo y desafíos para mejorar tus habilidades
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map(event => (
                        <div key={event.id} className="border rounded-lg p-4 hover:border-brand-300 transition-colors">
                          <div className="flex justify-between mb-2">
                            <h4 className="font-medium">{event.title}</h4>
                            <Badge variant={event.type === 'webinar' ? 'outline' : 'secondary'}>
                              {event.type === 'webinar' ? 'Webinar' : 'Desafío'}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-500 mb-3">
                            {event.date}
                          </div>
                          <div className="flex justify-end">
                            <Button variant="outline" size="sm">Agendar</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Ver Todos los Eventos</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
