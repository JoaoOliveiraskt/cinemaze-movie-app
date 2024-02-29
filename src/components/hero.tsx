type HeroProps = {
    children: React.ReactNode
    className?: string
}   

export default function Hero({children, className}: HeroProps ) {
    return (
        <section className={`max-w-[81rem] mt-14 px-5 sm:px-2 flex flex-wrap flex-col ${className}`}>
            {children}
        </section>
    )   
}
