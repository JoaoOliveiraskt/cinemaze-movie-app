import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function PageNotFound() {


return (
    <>
        <Header />
        <div className="tracking-wide h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-bold text-4xl text-center">Ops! Página não encontrada</h1>
            <Link to="/">
                <Button>Retorne para o início</Button>
            </Link>
        </div>
        <Footer />
    </>
);
}
