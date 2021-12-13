function Ghostbusters() {
    return `Who you gonna call?`;
}
function Tagline() {
    return <h1>We're ready to believe you.</h1>;
}
function Janine() {
    return (
        <div>
            <h2>I've quit better jobs than this.</h2>
            <h2>Ghostbusters, whaddya mean?</h2>
        </div>
    );
}
function MassHysteria() {
    return (
        <div>
            <ul>
                <li>Fire and brimstone coming down from the skies! Rivers and seas boiling!</li>
                <li>Forty years of darkness! Earthquakes! Volcanoes!</li>
                <li>The dead rising from the grave!</li>
            </ul>
            <p>Human sacrifice! Dogs and cats, living together! Mass hysteria!</p>
        </div>
    );
}
function GhostbustersLogo() {
    return <img src="https://cdn.pixabay.com/photo/2016/07/13/18/41/ghostbusters-1515155_1280.jpg" alt="Ghostbuster's Logo" />;
}
function ToolsTalent() {
    const w = `We`;
    return (
        <div>
            <h1>{w} had the tools.</h1>
            <h3>{w} had the talent.</h3>
        </div>
    );
}


ReactDOM.render(
    // <Ghostbusters/>,
    // <Tagline/>,
    // <Janine/>,
    // <MassHysteria/>,
    // <GhostbustersLogo/>,
    // <ToolsTalent/>,
    <GhostbustersAll/>,
    document.getElementById(`root`)
);

function GhostbustersAll() {
    return (
        <div>
            <Ghostbusters />
            <Tagline />
            <Janine />
            <MassHysteria />
            <GhostbustersLogo />
            <ToolsTalent />
        </div>
    );
}