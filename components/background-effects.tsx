
// Background Effects Component
const BackgroundEffects = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl floating-animation"></div>
        <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl floating-animation"
            style={{ animationDelay: "2s" }}
        ></div>
    </div>
)

export default BackgroundEffects