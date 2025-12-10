import { Card } from "@/components/ui/card";
import profileImage from "@assets/steve-harvey-shrek-origin-v0-wxew6tqwohge1_1765364794559.webp";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/30 p-6">
      <Card className="max-w-2xl w-full p-12 md:p-16 text-center space-y-8">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
          data-testid="text-main-heading"
        >
          My First Cloud Deployment
        </h1>
        
        <div className="space-y-6">
          <div 
            className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full ring-4 ring-primary/20 shadow-xl overflow-hidden bg-muted flex items-center justify-center"
            data-testid="img-profile-container"
          >
            <img 
              src={profileImage} 
              alt="Profile photo"
              className="w-full h-full object-cover"
              data-testid="img-profile"
            />
          </div>
          
          <h2 
            className="text-2xl md:text-3xl font-medium text-foreground"
            data-testid="text-name"
          >
            Hello, my name is Luke Bumengeg
          </h2>
        </div>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          data-testid="text-description"
        >
          This is my first deployed website!
        </p>
      </Card>
    </div>
  );
}
