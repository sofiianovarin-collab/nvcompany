import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ApproachPage } from "./content/pages/ApproachPage";
import { ContactPage } from "./content/pages/ContactPage";
import { FirmPage } from "./content/pages/FirmPage";
import { HomePage } from "./content/pages/HomePage";
import { InsightsPage } from "./content/pages/InsightsPage";
import { MarketMakingPage } from "./content/pages/MarketMakingPage";
import { NotFoundPage } from "./content/pages/NotFoundPage";
import { WhoWeServePage } from "./content/pages/WhoWeServePage";
import { InquiryProvider } from "./inquiry/InquiryContext";
import { MotionProvider } from "./motion/MotionContext";

export function App() {
  return (
    <BrowserRouter>
      <MotionProvider>
      <InquiryProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/market-making" element={<MarketMakingPage />} />
            <Route path="/who-we-serve" element={<WhoWeServePage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/firm" element={<FirmPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </InquiryProvider>
      </MotionProvider>
    </BrowserRouter>
  );
}
