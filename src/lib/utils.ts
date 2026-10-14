export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getProjectGradientClass(gradientId: string): string {
  const num = gradientId.replace('gradient-', '');
  return `project-gradient-${num}`;
}
