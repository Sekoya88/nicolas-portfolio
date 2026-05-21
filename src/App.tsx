import { lazy, Suspense } from "react";
import "./App.css";

const AvatarHero = lazy(() => import("./components/AvatarHero"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import { LocaleProvider } from "./context/LocaleContext";

const App = () => {
  return (
    <LocaleProvider>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <AvatarHero />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </LocaleProvider>
  );
};

export default App;
