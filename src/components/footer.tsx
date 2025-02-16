import { Separator } from "./ui/separator"

export const Footer = () => {
    return(
        <footer className="mt-5">
            <Separator className="my-4"/>
            <div className="my-5 text-center text-sm text-black">
                Criado por <a href="https://www.lmnunes.com.br" target="_blank" className="underline text-black">Lucas Martins Nunes</a>
            </div>
        </footer>
    )
}