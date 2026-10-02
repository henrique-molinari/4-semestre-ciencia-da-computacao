import type { ReactNode } from "react";

type PanelProps = {
    title: string
    children: ReactNode
}

export function Panel({ title, children}: PanelProps) {

    return(
        <section>
            <h2 className="mb-4 text-xl font-semibold">
                { title }
            </h2>
                {children}
        </section>  
    )
 }