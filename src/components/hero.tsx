type HeroProps = {
    children: React.ReactNode
}

export default function Hero({children}: HeroProps ) {
    return (
        <section className="w-full flex flex-wrap flex-col items-center">
            {children}
        </section>
    )   
}
