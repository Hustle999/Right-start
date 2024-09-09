import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import ErrorPage from "@/components/pages/404";

export default function Error() {
  return (
    <div>
      <Header />
      <ErrorPage />
      <Footer />
    </div>
  );
}
