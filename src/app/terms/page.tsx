export default function TermsAndConditionsPage() {
  const terms = [
    {
      title: "1. Aceptación de los Términos",
      content:
        "Al acceder y utilizar esta plataforma, usted acepta cumplir y estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.",
    },
    {
      title: "2. Cambios en los Términos",
      content:
        "Nos reservamos el derecho de modificar estos términos en cualquier momento. Su uso continuado de la plataforma después de dichos cambios constituye su aceptación de los nuevos términos.",
    },
    {
      title: "3. Privacidad",
      content:
        "Su uso de la plataforma está también sujeto a nuestra Política de Privacidad. Por favor, revísela para entender nuestras prácticas.",
    },
    {
      title: "4. Cuenta de Usuario",
      content:
        "Usted es responsable de mantener la confidencialidad de su cuenta y contraseña. Notifíquenos inmediatamente si sospecha de cualquier uso no autorizado de su cuenta.",
    },
    {
      title: "5. Propiedad Intelectual",
      content:
        "Todo el contenido presente en esta plataforma, incluyendo textos, gráficos, logos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de la plataforma o de sus proveedores de contenido y está protegido por las leyes internacionales de derechos de autor.",
    },
    {
      title: "6. Limitación de Responsabilidad",
      content:
        "En ningún caso la plataforma, sus directores, empleados o agentes serán responsables de cualquier daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de usar esta plataforma.",
    },
    {
      title: "7. Ley Aplicable",
      content:
        "Estos términos se regirán e interpretarán de acuerdo con las leyes del país en el que la plataforma tiene su sede principal, sin tener en cuenta sus disposiciones sobre conflictos de leyes.",
    },
  ];

  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4 pt-4">
      <h2 className="text-xl font-semibold mb-5">Términos y Condiciones</h2>
      <div className="prose prose-sm">
        {terms.map((term, index) => (
          <div className="py-1" key={index}>
            <h2 className="text-sm font-medium mb-1">{term.title}</h2>
            <p className="pb-3 text-sm">{term.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
