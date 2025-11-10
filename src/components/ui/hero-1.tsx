'use client'

interface AnnouncementBanner {
  text: string
  linkText: string
  linkHref: string
}

interface CallToAction {
  text: string
  href: string
  variant: 'primary' | 'secondary'
}

interface HeroLandingProps {
  // Hero content
  title: string
  description: string
  announcementBanner?: AnnouncementBanner
  callToActions?: CallToAction[]
  
  // Styling options
  titleSize?: 'small' | 'medium' | 'large'
  gradientColors?: {
    from: string
    to: string
  }
  
  // Additional customization
  className?: string
}

const defaultProps: Partial<HeroLandingProps> = {
  titleSize: "large",
  gradientColors: {
    from: "oklch(0.646 0.222 41.116)",
    to: "oklch(0.488 0.243 264.376)"
  },
  callToActions: [
    { text: "Get started", href: "#", variant: "primary" },
    { text: "Learn more", href: "#", variant: "secondary" }
  ]
}

export function HeroLanding(props: HeroLandingProps) {
  const {
    title,
    description,
    announcementBanner,
    callToActions,
    titleSize,
    gradientColors,
    className
  } = { ...defaultProps, ...props }

  const getTitleSizeClasses = () => {
    switch (titleSize) {
      case 'small':
        return 'text-2xl sm:text-3xl md:text-5xl'
      case 'medium':
        return 'text-2xl sm:text-4xl md:text-6xl'
      case 'large':
      default:
        return 'text-3xl sm:text-5xl md:text-7xl'
    }
  }

  const renderCallToAction = (cta: CallToAction, index: number) => {
    if (cta.variant === 'primary') {
      return (
        <a
          key={index}
          href={cta.href}
          className="group relative rounded-xl bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold text-white shadow-xl shadow-green-500/40 hover:shadow-2xl hover:shadow-green-500/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 transition-all transform hover:scale-105 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            {cta.text}
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          {/* Shine effect */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
        </a>
      )
    } else {
      return (
        <a
          key={index}
          href={cta.href}
          className="group text-base sm:text-lg font-semibold text-foreground hover:text-green-600 dark:hover:text-green-400 transition-all border-2 border-green-200/50 dark:border-green-800/50 hover:border-green-400 dark:hover:border-green-600 rounded-xl px-8 py-4 sm:px-10 sm:py-5 hover:bg-green-50/50 dark:hover:bg-green-950/20 backdrop-blur-sm"
        >
          <span className="flex items-center gap-2">
            {cta.text} 
            <span aria-hidden="true" className="inline-block group-hover:translate-x-1 transition-transform text-green-600 dark:text-green-400">→</span>
          </span>
        </a>
      )
    }
  }

  return (
    <div className={`min-h-screen w-full relative ${className || ''}`}>
      {/* Top gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${gradientColors?.from}, ${gradientColors?.to})`
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      
      {/* Bottom gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${gradientColors?.from}, ${gradientColors?.to})`
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="relative isolate px-4 sm:px-6 pt-20 sm:pt-24 min-h-screen flex flex-col justify-center">        
        {/* Animated background elements with green accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large green gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-300/10 to-teal-400/10 rounded-full blur-3xl"></div>
          
          {/* Additional green accent circles */}
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-green-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-emerald-400/10 rounded-full blur-2xl"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e08_1px,transparent_1px),linear-gradient(to_bottom,#22c55e08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          
          {/* Decorative green lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
        </div>

        <div className="mx-auto max-w-5xl pt-20 sm:pt-25 relative z-10">
          {/* Announcement banner */}
          {announcementBanner && (
            <div className="hidden sm:mb-8 sm:flex sm:justify-center animate-fade-in">
              <div className="relative rounded-full px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm/6 text-foreground ring-2 ring-green-200/50 dark:ring-green-800/50 hover:ring-green-400/60 dark:hover:ring-green-600/60 transition-all bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-green-950/40 dark:to-emerald-950/40 backdrop-blur-sm shadow-lg border border-green-200/30 dark:border-green-800/30">
                <span className="mr-2">{announcementBanner.text}</span>
                <a href={announcementBanner.linkHref} className="font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors inline-flex items-center gap-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {announcementBanner.linkText} <span aria-hidden="true" className="text-green-600 dark:text-green-400">→</span>
                </a>
              </div>
            </div>
          )}
          
          <div className="text-center space-y-8">
            {/* Main heading with enhanced styling */}
            <div className="space-y-6">
              <h1 className={`${getTitleSizeClasses()} font-bold tracking-tight text-balance text-foreground leading-tight`}>
                {title.includes('less work') ? (
                  <>
                    <span className="block">{title.split('less work')[0]}</span>
                    <span className="block">
                      <span className="relative inline-block">
                        <span className="text-green-600 dark:text-green-400 font-bold relative z-10">less work</span>
                        <span className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-green-300/40 via-green-400/50 to-emerald-300/40 dark:from-green-500/30 dark:via-green-600/40 dark:to-emerald-500/30 -skew-x-12 -z-0 rounded-sm"></span>
                      </span>
                    </span>
                    <span className="block">{title.split('less work')[1]}</span>
                  </>
                ) : (
                  title
                )}
              </h1>
              
              <p className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl font-medium text-pretty text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            </div>

            {/* Feature badges with green accents */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
              {["No Coding Required", "24/7 Support", "Official API", "Instant Setup"].map((feature, index) => (
                <div
                  key={feature}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-green-950/30 dark:to-emerald-950/30 backdrop-blur-sm border border-green-200/50 dark:border-green-800/30 shadow-sm hover:shadow-lg hover:border-green-400/50 dark:hover:border-green-600/50 hover:scale-105 transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Call to action buttons */}
            {callToActions && callToActions.length > 0 && (
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-x-4 sm:gap-x-6 gap-y-4">
                {callToActions.map((cta, index) => renderCallToAction(cta, index))}
              </div>
            )}
            
            {/* Trust indicators with green icons */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-green-200/30 dark:border-green-800/30">
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-sm">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 dark:group-hover:from-green-800 dark:group-hover:to-green-700 transition-all shadow-sm group-hover:shadow-md">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900/50 dark:to-emerald-800/50 flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-300 dark:group-hover:from-green-800 dark:group-hover:to-emerald-700 transition-all shadow-sm group-hover:shadow-md">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Official API</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-900/50 dark:to-teal-800/50 flex items-center justify-center group-hover:from-emerald-200 group-hover:to-teal-300 dark:group-hover:from-emerald-800 dark:group-hover:to-teal-700 transition-all shadow-sm group-hover:shadow-md">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span className="font-semibold text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">No Coding Required</span>
                </div>
              </div>
            </div>
            
            {/* Additional decorative elements */}
            <div className="mt-8 flex justify-center items-center gap-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-green-400/60"></div>
              <div className="h-px w-32 bg-gradient-to-r from-green-400/50 via-green-500/60 to-green-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-green-400/60"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-400/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Export types for consumers
export type { HeroLandingProps, AnnouncementBanner, CallToAction }

