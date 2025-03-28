
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { UserCircle2, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-brand-700">
          EmprendePlay
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/features" className="text-gray-600 hover:text-brand-600">
          Características
        </Link>
        <Link to="/pricing" className="text-gray-600 hover:text-brand-600">
          Precios
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-brand-600">
          Acerca de
        </Link>
        <div className="flex items-center space-x-2">
          <Link to="/login">
            <Button variant="outline">Iniciar Sesión</Button>
          </Link>
          <Link to="/signup">
            <Button>Registrarse</Button>
          </Link>
        </div>
      </div>
      
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-6">
              <Link to="/features" className="text-lg font-medium">
                Características
              </Link>
              <Link to="/pricing" className="text-lg font-medium">
                Precios
              </Link>
              <Link to="/about" className="text-lg font-medium">
                Acerca de
              </Link>
              <Link to="/login">
                <Button variant="outline" className="w-full mt-2">Iniciar Sesión</Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full">Registrarse</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
