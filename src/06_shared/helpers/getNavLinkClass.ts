export const getNavLinkClass = (baseClass: string, activeClass: string) => {
  return ({ isActive }: { isActive: boolean }) =>
    isActive ? `${baseClass} ${activeClass}` : baseClass;
};
