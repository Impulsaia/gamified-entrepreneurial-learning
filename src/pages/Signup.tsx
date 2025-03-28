
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook, Github } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Signup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.password) {
      toast({
        title: "Error de validación",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error de validación",
        description: "Las contraseñas no coinciden.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically handle the registration process
    console.log('Registration data:', formData);
    toast({
      title: "Registro exitoso",
      description: "Tu cuenta ha sido creada. Serás redirigido al dashboard.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Crear una cuenta</CardTitle>
              <CardDescription className="text-center">
                Elige cómo quieres registrarte en EmprendePlay
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="social">Redes Sociales</TabsTrigger>
                </TabsList>
                
                <TabsContent value="email">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input 
                        id="name" 
                        placeholder="Tu nombre" 
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="tu@email.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Contraseña</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                      <Input 
                        id="confirmPassword" 
                        type="password" 
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    <Button type="submit" className="w-full">Registrarse</Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="social">
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full flex items-center justify-center">
                      <Facebook size={16} className="mr-2" />
                      Registrarse con Facebook
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center">
                      <Github size={16} className="mr-2" />
                      Registrarse con GitHub
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4">
                      Al registrarte, aceptas nuestros
                      <Link to="/terms" className="text-brand-600 hover:underline mx-1">
                        Términos de Servicio
                      </Link>
                      y
                      <Link to="/privacy" className="text-brand-600 hover:underline ml-1">
                        Política de Privacidad
                      </Link>
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <p className="text-sm text-gray-500">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login" className="text-brand-600 hover:underline">
                  Iniciar Sesión
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;
