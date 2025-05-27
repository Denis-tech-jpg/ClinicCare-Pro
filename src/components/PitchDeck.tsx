
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { TitleSlide } from "./pitch-slides/TitleSlide";
import { ProblemSlide } from "./pitch-slides/ProblemSlide";
import { SolutionSlide } from "./pitch-slides/SolutionSlide";
import { MarketSlide } from "./pitch-slides/MarketSlide";
import { ProductDemoSlide } from "./pitch-slides/ProductDemoSlide";
import { BusinessModelSlide } from "./pitch-slides/BusinessModelSlide";
import { CompetitionSlide } from "./pitch-slides/CompetitionSlide";
import { FinancialsSlide } from "./pitch-slides/FinancialsSlide";
import { TeamSlide } from "./pitch-slides/TeamSlide";
import { FundingSlide } from "./pitch-slides/FundingSlide";

export const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  const slides = [
    { component: TitleSlide, title: "ClinicCare Pro" },
    { component: ProblemSlide, title: "The Problem" },
    { component: SolutionSlide, title: "Our Solution" },
    { component: MarketSlide, title: "Market Opportunity" },
    { component: ProductDemoSlide, title: "Product Demo" },
    { component: BusinessModelSlide, title: "Business Model" },
    { component: CompetitionSlide, title: "Competitive Advantage" },
    { component: FinancialsSlide, title: "Financial Projections" },
    { component: TeamSlide, title: "Our Team" },
    { component: FundingSlide, title: "Funding Ask" }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className={`min-h-screen ${isPresentationMode ? 'bg-black' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      {/* Header */}
      {!isPresentationMode && (
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">ClinicCare Pro - Investor Pitch</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Slide {currentSlide + 1} of {slides.length}
              </span>
              <Button
                onClick={() => setIsPresentationMode(true)}
                className="flex items-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Present</span>
              </Button>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={`${isPresentationMode ? 'h-screen' : 'min-h-[calc(100vh-80px)]'} flex flex-col`}>
        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center p-4">
          <Card className={`w-full max-w-6xl ${isPresentationMode ? 'h-[90vh] bg-white' : 'min-h-[600px]'} shadow-2xl`}>
            <div className="h-full p-8 flex flex-col">
              <CurrentSlideComponent />
            </div>
          </Card>
        </div>

        {/* Navigation */}
        <div className={`${isPresentationMode ? 'absolute bottom-4 left-1/2 transform -translate-x-1/2' : ''} bg-white rounded-lg shadow-lg p-4 mx-4 mb-4`}>
          <div className="flex items-center justify-between space-x-4">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            {/* Slide Navigation Dots */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  title={slides[index].title}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {isPresentationMode && (
            <div className="mt-2 text-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPresentationMode(false)}
              >
                Exit Presentation
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
