import "../globals.css"

export function FirstComponent({ nombre }: { nombre: string }) {
    return (
        <div>
            <p>Este es mi primer componente y yo soy <span style={{ color: `hsl(var(--colors-brand-light))` }}>{nombre}  </span></p>
        </div >
    )
}