export function formatCnpj(cnpj: string): string {
    return cnpj.replace(/[^\d]/g, '');
  }
  