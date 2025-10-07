import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions()}
      // Adicione a customização de componentes aqui
      components={{
        // Define o título da Tabela de Conteúdo
        Toc: (props) => (
          // O Fumadocs permite customizar o componente Toc
          <DocsLayout.Toc {...props} title="Nesta Página" /> 
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}