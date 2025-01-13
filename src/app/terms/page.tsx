import { ScrollArea } from "@/components/ui/scroll-area";

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
      <ScrollArea className="h-[70vh] w-full rounded-md p-4">
        <div className="prose prose-sm">
          <h2 className="text-xl font-semibold mb-4">
            1. Aceptación de los Términos
          </h2>
          <p>
            Al acceder y utilizar esta plataforma, usted acepta cumplir y estar
            sujeto a estos Términos y Condiciones. Si no está de acuerdo con
            alguna parte de estos términos, no podrá utilizar nuestros
            servicios.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">
            2. Cambios en los Términos
          </h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier
            momento. Su uso continuado de la plataforma después de dichos
            cambios constituye su aceptación de los nuevos términos.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">3. Privacidad</h2>
          <p>
            Su uso de la plataforma está también sujeto a nuestra Política de
            Privacidad. Por favor, revísela para entender nuestras prácticas.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">
            4. Cuenta de Usuario
          </h2>
          <p>
            Usted es responsable de mantener la confidencialidad de su cuenta y
            contraseña. Notifíquenos inmediatamente si sospecha de cualquier uso
            no autorizado de su cuenta.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">
            5. Propiedad Intelectual
          </h2>
          <p>
            Todo el contenido presente en esta plataforma, incluyendo textos,
            gráficos, logos, iconos, imágenes, clips de audio, descargas
            digitales y compilaciones de datos, es propiedad de la plataforma o
            de sus proveedores de contenido y está protegido por las leyes
            internacionales de derechos de autor.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">
            6. Limitación de Responsabilidad
          </h2>
          <p>
            En ningún caso la plataforma, sus directores, empleados o agentes
            serán responsables de cualquier daño directo, indirecto, incidental,
            especial o consecuente que resulte del uso o la imposibilidad de
            usar esta plataforma.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">7. Ley Aplicable</h2>
          <p>
            Estos términos se regirán e interpretarán de acuerdo con las leyes
            del país en el que la plataforma tiene su sede principal, sin tener
            en cuenta sus disposiciones sobre conflictos de leyes.
          </p>
        </div>
      </ScrollArea>
    </div>
  );
}
