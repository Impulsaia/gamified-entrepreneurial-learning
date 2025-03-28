
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Canvas section type
interface CanvasSection {
  id: string;
  title: string;
  description: string;
  content: string;
  bg: string;
}

const Canvas = () => {
  const { toast } = useToast();
  const [projectName, setProjectName] = useState('Mi Proyecto Emprendedor');
  
  // Initial canvas sections data
  const [sections, setSections] = useState<CanvasSection[]>([
    {
      id: 'key-partners',
      title: 'Socios Clave',
      description: '¿Quiénes son tus socios y proveedores clave?',
      content: '',
      bg: 'bg-blue-50'
    },
    {
      id: 'key-activities',
      title: 'Actividades Clave',
      description: '¿Qué actividades requiere tu propuesta de valor?',
      content: '',
      bg: 'bg-blue-50'
    },
    {
      id: 'key-resources',
      title: 'Recursos Clave',
      description: '¿Qué recursos necesita tu propuesta de valor?',
      content: '',
      bg: 'bg-blue-50'
    },
    {
      id: 'value-propositions',
      title: 'Propuesta de Valor',
      description: '¿Qué valor entregas a tus clientes?',
      content: '',
      bg: 'bg-indigo-50'
    },
    {
      id: 'customer-relationships',
      title: 'Relaciones con Clientes',
      description: '¿Qué tipo de relación esperas establecer?',
      content: '',
      bg: 'bg-green-50'
    },
    {
      id: 'channels',
      title: 'Canales',
      description: '¿Cómo llegas a tus clientes?',
      content: '',
      bg: 'bg-green-50'
    },
    {
      id: 'customer-segments',
      title: 'Segmentos de Clientes',
      description: '¿Para quién estás creando valor?',
      content: '',
      bg: 'bg-green-50'
    },
    {
      id: 'cost-structure',
      title: 'Estructura de Costos',
      description: '¿Cuáles son los costos más importantes?',
      content: '',
      bg: 'bg-orange-50'
    },
    {
      id: 'revenue-streams',
      title: 'Fuentes de Ingresos',
      description: '¿Por qué valor están dispuestos a pagar tus clientes?',
      content: '',
      bg: 'bg-orange-50'
    }
  ]);

  // Handle content change for each section
  const handleSectionChange = (id: string, content: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, content } : section
    ));
  };

  // Save the canvas
  const handleSaveCanvas = () => {
    // Here you would typically save to a database
    console.log('Saving canvas:', { projectName, sections });
    toast({
      title: "Canvas guardado",
      description: "Tu Business Model Canvas ha sido guardado correctamente.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle>Business Model Canvas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="w-full md:w-1/2">
                <Label htmlFor="project-name">Nombre del Proyecto</Label>
                <Input 
                  id="project-name" 
                  value={projectName} 
                  onChange={(e) => setProjectName(e.target.value)} 
                  className="mt-1"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => window.print()}>
                  Exportar PDF
                </Button>
                <Button onClick={handleSaveCanvas}>
                  Guardar Canvas
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Canvas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {/* Key Partners */}
          <div className={`col-span-1 row-span-2 ${sections[0].bg} p-4 rounded-lg border`}>
            <h3 className="font-bold mb-2">{sections[0].title}</h3>
            <p className="text-sm text-gray-600 mb-3">{sections[0].description}</p>
            <Textarea 
              placeholder="Escribe aquí..."
              value={sections[0].content}
              onChange={(e) => handleSectionChange(sections[0].id, e.target.value)}
              className="min-h-[200px] bg-white/80"
            />
          </div>

          {/* Key Activities */}
          <div className={`col-span-1 ${sections[1].bg} p-4 rounded-lg border`}>
            <h3 className="font-bold mb-2">{sections[1].title}</h3>
            <p className="text-sm text-gray-600 mb-3">{sections[1].description}</p>
            <Textarea 
              placeholder="Escribe aquí..."
              value={sections[1].content}
              onChange={(e) => handleSectionChange(sections[1].id, e.target.value)}
              className="min-h-[100px] bg-white/80"
            />
          </div>

          {/* Value Propositions */}
          <div className={`col-span-1 row-span-2 ${sections[3].bg} p-4 rounded-lg border`}>
            <h3 className="font-bold mb-2">{sections[3].title}</h3>
            <p className="text-sm text-gray-600 mb-3">{sections[3].description}</p>
            <Textarea 
              placeholder="Escribe aquí..."
              value={sections[3].content}
              onChange={(e) => handleSectionChange(sections[3].id, e.target.value)}
              className="min-h-[200px] bg-white/80"
            />
          </div>

          {/* Customer Relationships */}
          <div className={`col-span-1 ${sections[4].bg} p-4 rounded-lg border`}>
            <h3 className="font-bold mb-2">{sections[4].title}</h3>
            <p className="text-sm text-gray-600 mb-3">{sections[4].description}</p>
            <Textarea 
              placeholder="Escribe aquí..."
              value={sections[4].content}
              onChange={(e) => handleSectionChange(sections[4].id, e.target.value)}
              className="min-h-[100px] bg-white/80"
            />
          </div>

          {/* Customer Segments */}
          <div className={`col-span-1 row-span-2 ${sections[6].bg} p-4 rounded-lg border`}>
            <h3 className="font-bold mb-2">{sections[6].title}</h3>
            <p className="text-sm text-gray-600 mb-3">{sections[6].description}</p>
            <Textarea 
              placeholder="Escribe aquí..."
              value={sections[6].content}
              onChange={(e) => handleSectionChange(sections[6].id, e.target.value)}
              className="min-h-[200px] bg-white/80"
            />
          </div>

          {/* Key Resources */}
          <div className={`col-span-1 ${sections[2].bg} p-4 rounded-lg border`}>
            <h3 className="font-bold mb-2">{sections[2].title}</h3>
            <p className="text-sm text-gray-600 mb-3">{sections[2].description}</p>
            <Textarea 
              placeholder="Escribe aquí..."
              value={sections[2].content}
              onChange={(e) => handleSectionChange(sections[2].id, e.target.value)}
              className="min-h-[100px] bg-white/80"
            />
          </div>

          {/* Channels */}
          <div className={`col-span-1 ${sections[5].bg} p-4 rounded-lg border`}>
            <h3 className="font-bold mb-2">{sections[5].title}</h3>
            <p className="text-sm text-gray-600 mb-3">{sections[5].description}</p>
            <Textarea 
              placeholder="Escribe aquí..."
              value={sections[5].content}
              onChange={(e) => handleSectionChange(sections[5].id, e.target.value)}
              className="min-h-[100px] bg-white/80"
            />
          </div>

          {/* Cost Structure */}
          <div className={`col-span-1 md:col-span-2 lg:col-span-2 ${sections[7].bg} p-4 rounded-lg border`}>
            <h3 className="font-bold mb-2">{sections[7].title}</h3>
            <p className="text-sm text-gray-600 mb-3">{sections[7].description}</p>
            <Textarea 
              placeholder="Escribe aquí..."
              value={sections[7].content}
              onChange={(e) => handleSectionChange(sections[7].id, e.target.value)}
              className="min-h-[100px] bg-white/80"
            />
          </div>

          {/* Revenue Streams */}
          <div className={`col-span-1 md:col-span-2 lg:col-span-3 ${sections[8].bg} p-4 rounded-lg border`}>
            <h3 className="font-bold mb-2">{sections[8].title}</h3>
            <p className="text-sm text-gray-600 mb-3">{sections[8].description}</p>
            <Textarea 
              placeholder="Escribe aquí..."
              value={sections[8].content}
              onChange={(e) => handleSectionChange(sections[8].id, e.target.value)}
              className="min-h-[100px] bg-white/80"
            />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Consejos para Completar tu Canvas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">Propuesta de Valor</h4>
                <p className="text-sm">Identifica el problema que resuelves y cómo tu solución es única. Piensa en el "dolor" de tus clientes y cómo lo alivias.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold text-green-700 mb-2">Segmentos de Clientes</h4>
                <p className="text-sm">Sé específico sobre quién es tu cliente ideal. Entre más detallado, mejor podrás dirigir tus esfuerzos.</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold text-purple-700 mb-2">Relaciones y Canales</h4>
                <p className="text-sm">Piensa en cómo adquirirás, retendrás y harás crecer tu base de clientes. ¿Cómo llegarás a ellos?</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-bold text-orange-700 mb-2">Finanzas</h4>
                <p className="text-sm">La estructura de costos y las fuentes de ingresos deben reflejar cómo tu modelo crea, entrega y captura valor.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Canvas;
