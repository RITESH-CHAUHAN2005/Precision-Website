import { useEffect, useState } from "react";
import { TrendingUp, Target, Building, Zap, ArrowRight, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumb from "@/components/Breadcrumb";
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const BusinessPerformancePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const revenueData = [
    { year: "2008-10", revenue: 3, label: "₹3 Cr" },
    { year: "2011-15", revenue: 6, label: "₹6 Cr" },
    { year: "2016-20", revenue: 20, label: "₹20 Cr" },
    { year: "2021-22", revenue: 14.09, label: "₹14.09 Cr" },
    { year: "2022-23", revenue: 28, label: "₹28 Cr" },
    { year: "2023-24", revenue: 45, label: "₹45 Cr" },
    { year: "2024-25", revenue: 61.9, label: "₹61.9 Cr" },
  ];

  const clientContribution = [
    { name: "FLSmidth", value: 56, color: "#3b82f6" },
    { name: "Metso", value: 29, color: "#10b981" },
    { name: "Others", value: 15, color: "#f59e0b" },
  ];

  const milestones = [
    {
      year: "2007",
      title: "Company Founded",
      description: "Started operations with basic machining facility in Bawal, Haryana",
      icon: Building,
    },
    {
      year: "2010",
      title: "First Major Client",
      description: "Secured FLSmidth as anchor client, marking entry into heavy machinery sector",
      icon: Target,
    },
    {
      year: "2015",
      title: "Expansion Phase",
      description: "Opened Unit 2 with dedicated casting capabilities",
      icon: Building,
    },
    {
      year: "2018",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management",
      icon: Target,
    },
    {
      year: "2021",
      title: "Growth Acceleration",
      description: "Revenue crossed ₹14 Cr with addition of new CNC machines",
      icon: TrendingUp,
    },
    {
      year: "2023",
      title: "Unit 3 Launch",
      description: "Third manufacturing unit commissioned, doubling capacity",
      icon: Building,
    },
    {
      year: "2024",
      title: "Record Revenue",
      description: "Achieved ₹61.9 Cr turnover, 4x growth in 4 years",
      icon: TrendingUp,
    },
    {
      year: "2025",
      title: "Future Target",
      description: "Targeting 300 T/month capacity and ₹100 Cr revenue",
      icon: Target,
    },
  ];

  const infrastructureHighlights = [
    { label: "Manufacturing Units", value: "3", suffix: "Units" },
    { label: "Total Area", value: "50,000+", suffix: "Sq.ft" },
    { label: "CNC Machines", value: "25+", suffix: "Machines" },
    { label: "Monthly Capacity", value: "200", suffix: "Tonnes" },
  ];

  return (
    <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary to-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container-custom mx-auto relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Business Performance", href: "/business-performance" },
            ]}
          />
          <div className="text-center mt-8">
            <div
              className={`inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-6 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span className="font-montserrat font-medium text-sm">4x Growth in 4 Years</span>
            </div>
            <h1
              className={`font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Business <span className="text-accent">Performance</span>
            </h1>
            <p
              className={`font-montserrat text-lg text-white/80 max-w-3xl mx-auto transition-all duration-500 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              From ₹3 Cr to ₹62 Cr - A journey of consistent growth, strategic expansion, and customer trust
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8 bg-background relative -mt-8 z-20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "FY 2024-25 Revenue", value: "₹61.9 Cr", change: "+37%" },
              { label: "YoY Growth", value: "340%", change: "Since 2021" },
              { label: "Clients Served", value: "15+", change: "Global" },
              { label: "Capacity Target", value: "300 T/m", change: "2025-26" },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border shadow-lg text-center"
              >
                <p className="font-montserrat font-bold text-2xl md:text-3xl text-accent mb-1">{metric.value}</p>
                <p className="font-montserrat text-sm text-foreground">{metric.label}</p>
                <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-montserrat">
                  {metric.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Growth Chart */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">
              Financial Growth
            </p>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground">
              Revenue <span className="text-accent">Trajectory</span>
            </h2>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-xl">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="year" 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 12, fontFamily: 'Montserrat' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 12, fontFamily: 'Montserrat' }}
                    tickFormatter={(value) => `₹${value}Cr`}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontFamily: 'Montserrat',
                    }}
                    formatter={(value: number) => [`₹${value} Cr`, 'Revenue']}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--accent))"
                    strokeWidth={3}
                    fill="url(#revenueGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Client Contribution */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">
                Client Mix
              </p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-6">
                Revenue <span className="text-accent">Distribution</span>
              </h2>
              <p className="font-montserrat text-muted-foreground mb-8">
                Our revenue is anchored by strong partnerships with global industry leaders, 
                ensuring stability while we continue to diversify our client base.
              </p>
              
              <div className="space-y-4">
                {clientContribution.map((client, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: client.color }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-montserrat font-semibold text-foreground">{client.name}</span>
                        <span className="font-montserrat font-bold text-accent">{client.value}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ 
                            width: isVisible ? `${client.value}%` : '0%',
                            backgroundColor: client.color 
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={clientContribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {clientContribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`${value}%`, 'Contribution']}
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        fontFamily: 'Montserrat',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">
              Our Journey
            </p>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground">
              Growth <span className="text-accent">Milestones</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full hidden lg:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`bg-card rounded-xl p-6 border border-border shadow-lg inline-block ${
                      index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                    }`}>
                      <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-montserrat font-bold mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="font-montserrat font-bold text-xl text-foreground mb-2">{milestone.title}</h3>
                      <p className="font-montserrat text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <milestone.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-navy-dark">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-montserrat font-semibold text-sm uppercase tracking-wider mb-3">
              Infrastructure
            </p>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white">
              Capacity <span className="text-accent">Overview</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {infrastructureHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20"
              >
                <p className="font-montserrat font-bold text-4xl text-accent mb-2">{item.value}</p>
                <p className="font-montserrat text-white/80">{item.suffix}</p>
                <p className="font-montserrat text-sm text-white/60 mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Future Expansion */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-6">
                  <Zap className="w-5 h-5 text-accent-foreground" />
                  <span className="font-montserrat font-semibold text-sm text-accent-foreground">Future Plans</span>
                </div>
                <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-4">
                  Targeting 300 T/Month Capacity
                </h3>
                <p className="font-montserrat text-white/80 mb-6">
                  With our expansion plans underway, we're positioning ourselves to meet growing demand 
                  from our existing clients while onboarding new partners from diverse industries.
                </p>
                <ul className="space-y-3">
                  {[
                    "Additional CNC machining centers",
                    "Expanded casting capacity",
                    "New assembly line setup",
                    "Enhanced quality lab infrastructure",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/90">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="font-montserrat">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-block">
                  <p className="font-montserrat font-bold text-7xl md:text-8xl text-accent mb-2">₹100</p>
                  <p className="font-montserrat text-2xl text-white">Crore Target</p>
                  <p className="font-montserrat text-white/60">by FY 2026-27</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-6">
            Partner in Our Growth Story
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join the industry leaders who trust Precision Engineering for their critical manufacturing needs.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default BusinessPerformancePage;