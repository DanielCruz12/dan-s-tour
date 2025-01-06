import { Search } from "lucide-react";

/* interface NoSearchResultsProps {
  searchTerm: string;
  filters: string[];
  onReset: () => void;
} */

export function NoSearchResults() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="bg-muted rounded-full p-3 mb-4">
        <Search className="w-6 h-6 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-semibold mb-2">
        No se encontraron resultados
      </h2>
      <p className="text-muted-foreground mb-4 max-w-md">
        No pudimos encontrar resultados {/* para {searchTerm} */}
        {/*         {filters.length > 0 && ` con los filtros: ${filters.join(", ")}`}.
         */}{" "}
      </p>
     {/*  <p className="text-sm text-muted-foreground mb-4">
        Intenta ajustar tu búsqueda o los filtros para encontrar lo que buscas.
      </p>
      <Button
        onClick={() => {}}
        variant="outline"
        className="flex items-center gap-2"
      >
        <RefreshCw className="w-4 h-4" />
        Reiniciar búsqueda y filtros
      </Button> */}
    </div>
  );
}
