import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { name: string; href: string }[];
}

export default function SectionHeader({ title, subtitle, breadcrumbs }: SectionHeaderProps) {
  return (
    <div className="relative bg-primary text-white py-10 md:py-12 border-b-4 border-accent shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex mb-3 text-xxs font-bold tracking-widest text-white/70 uppercase" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-accent transition duration-150">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={crumb.href} className="inline-flex items-center">
                  <span className="mx-2 text-white/30">/</span>
                  <Link
                    href={crumb.href}
                    className={`hover:text-accent transition duration-150 ${
                      idx === breadcrumbs.length - 1 ? 'text-accent font-extrabold' : ''
                    }`}
                  >
                    {crumb.name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-4xl">
          <h1 className="text-2.5xl md:text-3.5xl font-bold tracking-tight font-serif text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-sm md:text-base text-white/90 font-medium max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
