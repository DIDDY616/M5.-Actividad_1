import Header from "./header";
import SidebarMenu from "./sidebarmenu";
import InfoCard from "./infocard";
import PrimaryButton from "./primarybutton";
import Footer from "./footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <SidebarMenu />
              <div className="mt-6 flex justify-center">
                <PrimaryButton />
              </div>
            </div>
          </aside>
          <main className="flex-1 min-w-0">
            <InfoCard />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;