import { Button } from "@/components/ui/button";
import { Heart, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="gradient-rainbow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">NexusRelief</h1>
            </div>
            <Link to="/auth">
              <Button variant="secondary" size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <section className="gradient-rainbow-subtle py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              AI-Guided Aid with Web3 Identity
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Bringing transparency and efficiency to disaster relief through AI-powered assessment, 
              secure digital identity, and blockchain-verified aid distribution.
            </p>
            <Link to="/auth">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Join NexusRelief <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Why NexusRelief?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-glass p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Instant Aid Delivery</h4>
                <p className="text-muted-foreground">
                  AI-powered assessment identifies needs in real-time, deploying aid tokens directly to victims.
                </p>
              </div>

              <div className="card-glass p-6">
                <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Complete Transparency</h4>
                <p className="text-muted-foreground">
                  Every donation tracked on blockchain. Track your contribution from wallet to vendor.
                </p>
              </div>

              <div className="card-glass p-6">
                <div className="w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-chart-2" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Digital Identity</h4>
                <p className="text-muted-foreground">
                  Self-sovereign Web3 identity for victims without physical documents.
                </p>
              </div>

              <div className="card-glass p-6">
                <div className="w-12 h-12 rounded-lg bg-chart-3/20 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-chart-3" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Direct Impact</h4>
                <p className="text-muted-foreground">
                  Bypass intermediaries. Your donation reaches those who need it most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15,847</div>
                <div className="text-muted-foreground">Victims Aided</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">$2.4M</div>
                <div className="text-muted-foreground">Funds Distributed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-chart-2 mb-2">100%</div>
                <div className="text-muted-foreground">Blockchain Verified</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-rainbow py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of donors, victims, and vendors using NexusRelief to create transparent, 
              efficient disaster relief.
            </p>
            <Link to="/auth">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 NexusRelief. Powered by AI, Web3, and compassion.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
